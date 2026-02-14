// src/components/PrimaryButton.jsx
import React from "react";

export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        "group relative w-full rounded-full overflow-hidden",
        "font-body text-[15px] tracking-[0.02em]",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-[1px] active:translate-y-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        className,
      ].join(" ")}
      style={{
        color: "rgba(18,20,24,0.85)",
        background:
          "linear-gradient(180deg, #E9D48A 0%, #D9BD63 48%, #CFAE4E 52%, #D9BD63 100%)",

        border: "2px solid rgba(18,20,24,0.35)",
        boxShadow:
          "0 10px 24px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.35)",
      }}
    >
      {/* inner ring like the template */}
      <span
        className="pointer-events-none absolute inset-[6px] rounded-full opacity-75"
        style={{ border: "1px solid rgba(18,20,24,0.22)" }}
      />

      {/* ⭐ Lightning shimmer effect */}
      <span
        className="
          pointer-events-none absolute inset-0
          -translate-x-[120%]
          group-hover:translate-x-[120%]
          transition-transform duration-[900ms] ease-out
        "
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 75%)",
        }}
      />

      {/* Button text */}
      <span
        className="
          relative z-10
          font-body
          font-[300]
          tracking-[0.08em]
        "
      >
        {children}
      </span>
    </button>
  );
}
