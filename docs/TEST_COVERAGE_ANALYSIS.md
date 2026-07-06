# Test Coverage Analysis & Recommendations

_Analysis date: 2026-07-06 · Branch: `claude/test-coverage-analysis-erdev9`_

## 1. Current state

**There is currently no automated testing in this repository at all.**

| Signal | Finding |
| --- | --- |
| Test runner | None installed (no Jest / Vitest / Playwright in `package.json`) |
| `test` script | Absent from `package.json` (`scripts` has only `dev`, `build`, `start`, `lint`) |
| Test files | Zero (`*.test.*`, `*.spec.*`, `__tests__/` — none found) |
| CI test gate | None — `.github/` only contains deploy workflow |
| Effective coverage | **0%** |

The only automated guardrails today are the **TypeScript compiler** (`tsc` via `next build`) and **ESLint** (`next lint`). These catch type errors and lint violations but verify **no runtime behavior**.

The codebase is ~1,740 lines across 38 source files: a Next.js App Router marketing site plus a client-side lead-management dashboard. Most files are presentational React components, but a meaningful slice contains **pure logic and stateful behavior that is currently unverified**.

---

## 2. Where the risk actually is

Not all code is equally worth testing. A marketing component that renders static Persian copy has low regression risk; a phone-number validator or a localStorage persistence layer has high risk. Priorities below are ordered by **(logic density × blast radius)**.

### Priority 1 — Pure logic in `src/lib/` (highest ROI, easiest to test)

These are pure/near-pure functions with clear inputs and outputs. They need no DOM and no React — ideal for fast unit tests.

- **`src/lib/leads.ts`**
  - `scoreTier(score)` — bucket boundaries at 40 and 70. Classic off-by-one territory (is 70 "high"? is 40 "medium"?). **Untested branching logic.**
  - `statusLabel(key)` — lookup with a fallback to the raw key for unknown values.
  - `loadLeads()` / `saveLeads()` — localStorage round-trip with a `try/catch` that silently returns `[]` on malformed JSON. The SSR guard (`typeof window === "undefined"`) and the corrupt-data path are both untested.
  - `newId()` — has a `crypto.randomUUID` branch **and** a `Date.now()+Math.random` fallback branch; the fallback is never exercised.

- **`src/lib/site.ts`**
  - `whatsappLink(message?)` — builds a `wa.me` URL and `encodeURIComponent`-encodes the message. Encoding of Persian text / special chars and the no-message branch are untested.

- **`src/lib/asset.ts`**
  - `asset(path)` — base-path prefixing with three behaviors: pass through absolute `http(s)` URLs, prefix with `/`, and honor a leading slash. Directly ties to the GitHub Pages sub-path deploy; a regression here breaks **every image on the production site**.

- **`src/lib/articles.ts` / `src/lib/lawyers.ts`**
  - `getArticle(slug)` / `getLawyer(slug)` — found and not-found paths.
  - **Data-integrity checks** worth having: every slug is unique, every `lawyer.avatar` path is well-formed, no empty required fields. These guard the `generateStaticParams` pipeline.

### Priority 2 — `ConsultationForm.tsx` (complex client logic, high user value)

This is the site's primary conversion path and its most logic-heavy component:

- **`isValidPhone(v)`** — normalizes Persian digits (`۰-۹`) to ASCII, strips non-digits, then bounds-checks length 8–13. Multiple edge cases (Persian numerals, spaces/dashes, too short, too long) — **completely untested and easy to break.**
- **`validateStep(s)`** — per-step required-field logic (steps 0, 1, 3).
- **`submit()`** — jumps back to the first invalid step; the ordering logic here is subtle.
- **`summary`** — the `.filter(Boolean)` assembly that drops empty optional fields from the WhatsApp message.
- Step navigation clamping (`Math.min`/`Math.max`) and the success/restart flow.

`isValidPhone`, `validateStep`, and the summary builder should ideally be **extracted into `src/lib/` as pure functions** so they can be unit-tested without rendering — this is both a testability and a design improvement.

### Priority 3 — `LeadDashboard.tsx` (stateful CRUD + persistence)

- `counts` and `filtered` memos — status tallying and the name/phone/caseType search filter.
- `upsert` — insert-vs-update branch keyed on `id`.
- `changeStatus`, `remove` (guarded by `confirm`), and the phone→WhatsApp normalization (`replace(/^0/, "98")`).
- `exportJson` / `importJson` — serialization round-trip and the `Array.isArray` guard on malformed import.
- The client-side passcode gate (`unlock`) and `sessionStorage` unlock persistence. _(Note: this is deliberately not real security, per the in-code comment — but its behavior should still be pinned so it doesn't silently break.)_

### Priority 4 — Rendering / integration (lower logic density)

- Dynamic routes `articles/[slug]` and `lawyers/[slug]`: verify `generateStaticParams` returns every slug and that unknown slugs call `notFound()`.
- `generateMetadata` returns the "not found" title for bad slugs.
- Smoke tests that key sections (`Hero`, `Contact`, `Team`, `Faq`) render without throwing.

---

## 3. Recommended tooling

For a Next.js 15 / React 19 / TypeScript project doing static export:

1. **Vitest** as the runner — fast, ESM-native, minimal config, first-class TS. Preferable to Jest here given the ESM/Next 15 setup.
2. **@testing-library/react** + **@testing-library/user-event** + **jsdom** for component/interaction tests.
3. **Playwright** (later) for a couple of end-to-end happy-path flows against the exported static build — the 4-step consultation form and the dashboard CRUD cycle.
4. Wire coverage via `vitest --coverage` (v8 provider) and add a **`test` script** plus a **CI job** so tests gate merges alongside `lint` and `build`.

Suggested `package.json` scripts:

```jsonc
"scripts": {
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "vitest run --coverage"
}
```

---

## 4. Suggested phased plan

**Phase 1 — Foundation + pure logic (highest ROI).** Add Vitest, a `test` script, and unit tests for everything in `src/lib/` (Priority 1). Fast, deterministic, no DOM. This alone moves the most-critical logic from 0% to well-covered.

**Phase 2 — Extract & test form logic.** Pull `isValidPhone` / step validation / summary building out of `ConsultationForm.tsx` into `src/lib/`, unit-test them, then add a Testing Library test for the multi-step navigation flow.

**Phase 3 — Dashboard behavior.** Component tests for `LeadDashboard` covering search filtering, status counts, upsert, and the JSON import/export round-trip (with a mocked localStorage).

**Phase 4 — Integration/E2E + CI gate.** Add Playwright happy-path tests and a GitHub Actions `test` job so coverage can't regress.

**Suggested first-milestone target:** ~80%+ statement coverage on `src/lib/` and the extracted form logic. Presentational components are lower priority — smoke tests are enough there.

---

## 5. Quick wins to start with

If picking just three things to write first, in order:

1. `scoreTier` boundary tests (40 / 70 edges) — `src/lib/leads.ts`
2. `isValidPhone` tests incl. Persian-digit normalization — `ConsultationForm.tsx`
3. `asset()` base-path tests (absolute URL / leading-slash / no-slash) — `src/lib/asset.ts`

These three cover the highest-risk, most breakable logic in the codebase and can be written in under an hour once Vitest is in place.
