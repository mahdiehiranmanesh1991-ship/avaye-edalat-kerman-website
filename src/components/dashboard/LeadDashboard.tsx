"use client";

import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";
import type { Lead, LeadStatus } from "@/types";
import {
  leadStatuses,
  caseTypes,
  loadLeads,
  saveLeads,
  newId,
  scoreTier,
} from "@/lib/leads";

/** رمز ساده‌ی سمت‌کلاینت — صرفاً جهت بازدارندگی. برای امنیت واقعی باید بک‌اند + احراز هویت اضافه شود. */
const PASSCODE = "avaye1405";
const SESSION_KEY = "avaye_dash_unlocked";

const emptyLead = (): Lead => ({
  id: newId(),
  name: "",
  phone: "",
  caseType: caseTypes[0],
  documents: "",
  notes: "",
  score: 50,
  followUp: "",
  status: "new",
  createdAt: Date.now(),
});

export default function LeadDashboard() {
  const [unlocked, setUnlocked] = useState(false);
  const [pass, setPass] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [ready, setReady] = useState(false);
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<Lead | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "1") setUnlocked(true);
    setLeads(loadLeads());
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) saveLeads(leads);
  }, [leads, ready]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    leadStatuses.forEach((s) => (c[s.key] = 0));
    leads.forEach((l) => (c[l.status] = (c[l.status] ?? 0) + 1));
    return c;
  }, [leads]);

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return leads;
    return leads.filter((l) => l.name.includes(q) || l.phone.includes(q) || l.caseType.includes(q));
  }, [leads, query]);

  function unlock() {
    if (pass === PASSCODE) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setUnlocked(true);
    } else {
      alert("رمز نادرست است.");
    }
  }

  function upsert(lead: Lead) {
    setLeads((prev) => {
      const exists = prev.some((l) => l.id === lead.id);
      return exists ? prev.map((l) => (l.id === lead.id ? lead : l)) : [lead, ...prev];
    });
    setEditing(null);
  }

  function remove(id: string) {
    if (confirm("این سرنخ حذف شود؟")) setLeads((prev) => prev.filter((l) => l.id !== id));
  }

  function changeStatus(id: string, status: LeadStatus) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(leads, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `avaye-leads-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function importJson(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result)) as Lead[];
        if (Array.isArray(data)) setLeads(data);
      } catch {
        alert("فایل نامعتبر است.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  if (!ready) return null;

  if (!unlocked) {
    return (
      <div className="dash-lock">
        <div className="dash-lock__card">
          <h1>پنل مدیریت سرنخ‌ها</h1>
          <p>برای ورود، رمز عبور داخلی را وارد کنید.</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && unlock()}
            placeholder="رمز عبور"
            autoFocus
          />
          <button className="btn btn--gold btn--block" onClick={unlock}>ورود</button>
          <p className="dash-lock__hint">این قفل صرفاً سمت‌کلاینت است و جایگزین امنیت واقعی نیست.</p>
        </div>
      </div>
    );
  }

  const todayStr = new Date().toISOString().slice(0, 10);

  return (
    <main className="dash">
      <div className="dash__toolbar">
        <div>
          <h1 className="dash__title">مدیریت سرنخ‌ها</h1>
          <p className="dash__sub">مجموع {leads.length.toLocaleString("fa-IR")} سرنخ</p>
        </div>
        <div className="dash__tools">
          <input className="dash__search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="جست‌وجو: نام، شماره، نوع پرونده…" />
          <button className="btn btn--gold" onClick={() => setEditing(emptyLead())}>+ افزودن سرنخ</button>
          <button className="btn btn--ghost-dark" onClick={exportJson}>خروجی</button>
          <button className="btn btn--ghost-dark" onClick={() => fileRef.current?.click()}>ورودی</button>
          <input ref={fileRef} type="file" accept="application/json" onChange={importJson} style={{ display: "none" }} />
        </div>
      </div>

      <div className="dash__summary">
        {leadStatuses.map((s) => (
          <div className="dash__stat" key={s.key} style={{ borderColor: s.color }}>
            <span className="dash__stat-dot" style={{ background: s.color }} />
            <span className="dash__stat-label">{s.label}</span>
            <span className="dash__stat-num">{(counts[s.key] ?? 0).toLocaleString("fa-IR")}</span>
          </div>
        ))}
      </div>

      <div className="dash__board">
        {leadStatuses.map((col) => {
          const items = filtered.filter((l) => l.status === col.key);
          return (
            <section className="dash-col" key={col.key}>
              <header className="dash-col__head" style={{ borderColor: col.color }}>
                <span>{col.label}</span>
                <span className="dash-col__count">{items.length.toLocaleString("fa-IR")}</span>
              </header>
              <div className="dash-col__body">
                {items.length === 0 ? <p className="dash-col__empty">موردی نیست</p> : null}
                {items.map((l) => {
                  const tier = scoreTier(l.score);
                  const overdue = l.followUp && l.followUp < todayStr;
                  return (
                    <article className="lead-card" key={l.id}>
                      <div className="lead-card__top">
                        <strong>{l.name || "بدون نام"}</strong>
                        <span className="lead-card__score" style={{ background: tier.color }} title={`امتیاز: ${l.score}`}>{l.score}</span>
                      </div>
                      {l.phone ? <a className="lead-card__phone" href={`https://wa.me/${l.phone.replace(/[^0-9]/g, "").replace(/^0/, "98")}`} target="_blank" rel="noopener noreferrer">{l.phone}</a> : null}
                      <span className="lead-card__case">{l.caseType}</span>
                      {l.documents ? <p className="lead-card__meta">مدارک: {l.documents}</p> : null}
                      {l.notes ? <p className="lead-card__notes">{l.notes}</p> : null}
                      {l.followUp ? <p className={`lead-card__follow${overdue ? " is-overdue" : ""}`}>پیگیری: {l.followUp}{overdue ? " (گذشته)" : ""}</p> : null}
                      <div className="lead-card__actions">
                        <select value={l.status} onChange={(e) => changeStatus(l.id, e.target.value as LeadStatus)}>
                          {leadStatuses.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
                        </select>
                        <button onClick={() => setEditing(l)} aria-label="ویرایش">✎</button>
                        <button onClick={() => remove(l.id)} aria-label="حذف">🗑</button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {editing ? <LeadModal lead={editing} onSave={upsert} onClose={() => setEditing(null)} /> : null}
    </main>
  );
}

function LeadModal({ lead, onSave, onClose }: { lead: Lead; onSave: (l: Lead) => void; onClose: () => void }) {
  const [draft, setDraft] = useState<Lead>(lead);
  const set = <K extends keyof Lead>(k: K, v: Lead[K]) => setDraft((d) => ({ ...d, [k]: v }));

  function save() {
    if (!draft.name.trim()) return alert("نام الزامی است.");
    onSave(draft);
  }

  return (
    <div className="dash-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="dash-modal__card" onClick={(e) => e.stopPropagation()}>
        <h2>{lead.name ? "ویرایش سرنخ" : "افزودن سرنخ"}</h2>
        <div className="dash-modal__grid">
          <label>نام و نام خانوادگی<input value={draft.name} onChange={(e) => set("name", e.target.value)} /></label>
          <label>شماره تماس<input value={draft.phone} onChange={(e) => set("phone", e.target.value)} inputMode="tel" /></label>
          <label>نوع پرونده
            <select value={draft.caseType} onChange={(e) => set("caseType", e.target.value)}>
              {caseTypes.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label>وضعیت
            <select value={draft.status} onChange={(e) => set("status", e.target.value as LeadStatus)}>
              {leadStatuses.map((s) => <option key={s.key} value={s.key}>{s.label}</option>)}
            </select>
          </label>
          <label>امتیاز سرنخ: <b>{draft.score}</b>
            <input type="range" min={0} max={100} step={5} value={draft.score} onChange={(e) => set("score", Number(e.target.value))} />
          </label>
          <label>تاریخ پیگیری<input type="date" value={draft.followUp} onChange={(e) => set("followUp", e.target.value)} /></label>
          <label className="dash-modal__full">مدارک<input value={draft.documents} onChange={(e) => set("documents", e.target.value)} placeholder="مثلاً: سند مالکیت، مبایعه‌نامه" /></label>
          <label className="dash-modal__full">یادداشت‌ها<textarea rows={3} value={draft.notes} onChange={(e) => set("notes", e.target.value)} /></label>
        </div>
        <div className="dash-modal__actions">
          <button className="btn btn--ghost-dark" onClick={onClose}>انصراف</button>
          <button className="btn btn--gold" onClick={save}>ذخیره</button>
        </div>
      </div>
    </div>
  );
}
