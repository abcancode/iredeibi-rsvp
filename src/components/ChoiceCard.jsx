import React from "react";

export default function ChoiceCard({ checked, label, onChange }) {
  return (
    <label className="flex items-start gap-3 rounded-2xl border border-line bg-white/35 px-4 py-4 cursor-pointer hover:bg-white/45 transition">
      <input
        type="radio"
        className="mt-1 h-4 w-4 accent-[#121418]"
        checked={checked}
        onChange={onChange}
      />
      <span className="font-body text-[14px] leading-5 text-ink">{label}</span>
    </label>
  );
}
