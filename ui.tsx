import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border bg-white p-6 shadow-sm">{children}</div>;
}

export function Button({ children, href, type = "button", className = "" }: { children: React.ReactNode; href?: string; type?: "button" | "submit"; className?: string; }) {
  const base = "inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-white hover:opacity-90";
  if (href) return <a className={`${base} ${className}`} href={href}>{children}</a>;
  return <button type={type} className={`${base} ${className}`}>{children}</button>;
}

export function Input({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string; }) {
  return (
    <label className="block">
      <div className="text-sm text-slate-600">{label}</div>
      <input name={name} type={type} placeholder={placeholder} className="mt-1 w-full rounded-xl border px-3 py-2" />
    </label>
  );
}

export function Badge({ status }: { status: "VALID" | "EXPIRING_SOON" | "EXPIRED" }) {
  const map: Record<string, string> = {
    VALID: "bg-green-50 text-green-700 border-green-200",
    EXPIRING_SOON: "bg-yellow-50 text-yellow-800 border-yellow-200",
    EXPIRED: "bg-red-50 text-red-700 border-red-200",
  };
  const label: Record<string, string> = {
    VALID: "Valid",
    EXPIRING_SOON: "Expiring soon",
    EXPIRED: "Expired",
  };
  return <span className={`text-xs px-2 py-1 rounded-full border ${map[status]}`}>{label[status]}</span>;
}
