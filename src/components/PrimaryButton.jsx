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
        // Base
        "group relative w-full h-[56px] rounded-full overflow-hidden",
        "font-display text-[16px] uppercase tracking-[0.08em]",
        "transition-all duration-300 ease-out",
        // Micro-lift + press
        "hover:-translate-y-[1px] active:translate-y-0",
        // Focus
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        className,
      ].join(" ")}
      style={{
        color: "#121418",
        background:
          "linear-gradient(135deg, #C8A74A 0%, #E5C96F 50%, #C8A74A 100%)",
        border: "2px solid rgba(18,20,24,0.35)",
        boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.35)
  `,
      }}
    >
      {/* Inner double-ring (luxury stationery feel) */}
      <span
        className="pointer-events-none absolute inset-[6px] rounded-full opacity-70 group-hover:opacity-90 transition duration-300"
        style={{
          border: "1px solid rgba(18,20,24,0.25)",
        }}
      />

      {/* Soft royal glow (very subtle) */}
      <span
        className="pointer-events-none absolute -inset-6 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(229,201,111,0.45), transparent 60%)",
        }}
      />

      {/* Moving sheen highlight */}
      <span
        className="
          pointer-events-none absolute inset-0
          -translate-x-[120%] group-hover:translate-x-[120%]
          transition-transform duration-[900ms] ease-out
        "
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.28) 45%, transparent 70%)",
        }}
      />

      {/* Label */}
      <span className="relative z-10 font-bold">{children}</span>
    </button>
  );
}
