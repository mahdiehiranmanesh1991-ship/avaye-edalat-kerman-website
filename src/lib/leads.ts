import type { LeadStatus, Lead } from "@/types";

export const STORAGE_KEY = "avaye_leads_v1";

export interface StatusMeta {
  key: LeadStatus;
  label: string;
  color: string;
}

export const leadStatuses: StatusMeta[] = [
  { key: "new", label: "سرنخ جدید", color: "#2563eb" },
  { key: "review", label: "در حال بررسی", color: "#A16207" },
  { key: "scheduled", label: "جلسه تنظیم‌شده", color: "#7c3aed" },
  { key: "retained", label: "وکالت پذیرفته‌شده", color: "#1c7a47" },
  { key: "closed", label: "بسته‌شده", color: "#64748B" },
];

export const caseTypes = [
  "دعاوی ملکی و اراضی",
  "اراضی وقفی و امور ثبتی",
  "دعاوی حقوقی",
  "دعاوی کیفری",
  "حقوق خانواده",
  "امور تجاری و شرکت‌ها",
  "قراردادها",
  "چک و اسناد تجاری",
  "سایر موارد",
];

export function statusLabel(key: LeadStatus): string {
  return leadStatuses.find((s) => s.key === key)?.label ?? key;
}

export function scoreTier(score: number): { label: string; color: string } {
  if (score >= 70) return { label: "بالا", color: "#1c7a47" };
  if (score >= 40) return { label: "متوسط", color: "#A16207" };
  return { label: "پایین", color: "#64748B" };
}

export function loadLeads(): Lead[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Lead[]) : [];
  } catch {
    return [];
  }
}

export function saveLeads(leads: Lead[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

export function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
