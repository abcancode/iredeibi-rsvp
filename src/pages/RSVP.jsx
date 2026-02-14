// src/pages/RSVP.jsx
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../components/Frame";
import PrimaryButton from "../components/PrimaryButton";
import logo from "../assets/logo/logo.png";

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email.trim());

export default function RSVP() {
  const nav = useNavigate();

  const [choice, setChoice] = useState("yes"); // yes | partial | no
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!isValidEmail(form.email)) e.email = "Invalid email";
    if (!form.phone.trim()) e.phone = "Required";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0 && !submitting;

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched({ fullName: true, email: true, phone: true });
    if (!canSubmit) return;

    try {
      setSubmitting(true);
      await new Promise((r) => setTimeout(r, 600));
      nav("/thanks", { state: { fullName: form.fullName, choice } });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Frame>
      <div className="h-full w-full overflow-hidden">
        {/* Layout: scrollable content + sticky submit/footer */}
        <form
          onSubmit={onSubmit}
          className="
            h-full w-full
            flex flex-col
            overflow-hidden
          "
        >
          {/* Scroll area */}
          <div
            className="
              flex-1
              overflow-y-auto no-scrollbar
              flex flex-col items-center text-center
              pb-[96px] /* reserve space so sticky footer doesn't cover content */
              max-[414px]:scale-[0.97] origin-top
            "
          >
            {/* top breathing space (lift on small screens) */}
            <div className="h-[clamp(8px,2svh,18px)] max-[414px]:h-[2px]" />

            {/* CREST */}
            <img
              src={logo}
              alt="Logo"
              className="
                w-auto object-contain
                h-[clamp(140px,20svh,210px)]
                -mb-[clamp(55px,9svh,90px)]
                max-[414px]:-mb-[42px]
                max-[413px]:h-[clamp(130px,19svh,190px)]
                max-[375px]:h-[clamp(120px,18svh,175px)]
                max-[375px]:-mb-[clamp(46px,8svh,74px)]
              "
            />

            {/* RSVP title */}
            <div
              className="
    mt-[clamp(6px,1.2svh,10px)]
    font-display
    text-gold
    leading-none
    tracking-[0.02em]
    text-[clamp(56px,9.6vw,86px)]
  "
            >
              RSVP
            </div>

            {/* subtitle */}
            <div className="mt-[6px] max-[414px]:mt-[2px] font-body text-[clamp(12px,1.7svh,14px)] text-ink/70">
              kindly confirm your place among the Pride.
            </div>

            {/* Inputs */}
            <div className="mt-[clamp(14px,2.6svh,20px)] w-full px-3 flex flex-col items-center gap-2.5">
              <PillInput
                placeholder="your full name"
                value={form.fullName}
                onChange={(v) => setForm((s) => ({ ...s, fullName: v }))}
                onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
              />
              {touched.fullName && errors.fullName && (
                <div className="w-[min(360px,86%)] -mt-1 text-left text-[12px] text-red-700">
                  {errors.fullName}
                </div>
              )}

              <PillInput
                type="email"
                placeholder="email"
                value={form.email}
                onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              />
              {touched.email && errors.email && (
                <div className="w-[min(360px,86%)] -mt-1 text-left text-[12px] text-red-700">
                  {errors.email}
                </div>
              )}

              <PillInput
                type="tel"
                placeholder="phone"
                value={form.phone}
                onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
              />
              {touched.phone && errors.phone && (
                <div className="w-[min(360px,86%)] -mt-1 text-left text-[12px] text-red-700">
                  {errors.phone}
                </div>
              )}
            </div>

            {/* Choice pills (single-select) */}
            <div className="mt-[clamp(14px,2.8svh,22px)] w-full px-3 flex flex-col items-center gap-2.5">
              <ChoicePill
                active={choice === "yes"}
                onClick={() => setChoice("yes")}
                label="count me among the Pride"
              />
              <ChoicePill
                active={choice === "partial"}
                onClick={() => setChoice("partial")}
                label="I will join the Pride for a portion of the journey"
              />
              <ChoicePill
                active={choice === "no"}
                onClick={() => setChoice("no")}
                label="Regretfully, I am unable to attend"
              />
            </div>

            {/* tiny spacer (keep tight on small screens) */}
            <div className="h-[clamp(14px,2.6svh,20px)] max-[414px]:h-[4px]" />
          </div>

          {/* Sticky footer */}
          <div
            className="
    sticky bottom-0 left-0 right-0
    flex flex-col items-center
    pb-[clamp(14px,3.5svh,22px)]
    pt-3
  "
          >
            <div className="w-full px-3 flex flex-col items-center">
              <div className="w-[min(360px,86%)]">
                <PrimaryButton
                  type="submit"
                  className="h-[46px] text-[18px] font-display"
                >
                  {submitting ? "submitting..." : "submit RSVP"}
                </PrimaryButton>
              </div>

              <button
                type="button"
                onClick={() => nav("/info")}
                className="mt-3 italic font-body text-[13px] text-ink/70 hover:text-ink transition"
              >
                back
              </button>
            </div>
          </div>
        </form>
      </div>
    </Frame>
  );
}

/* ----------------------------- */

function PillInput({ value, onChange, onBlur, placeholder, type = "text" }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
      placeholder={placeholder}
      className="
        w-[min(360px,86%)]
        h-[38px]
        rounded-full
        border border-line
        bg-white/18
        px-5
        text-center
        text-[13px]
        text-ink/80
        placeholder:text-ink/35
        outline-none
        focus:bg-white/30
        focus:border-black/25
        transition
      "
    />
  );
}

function ChoicePill({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        relative group
        w-[min(420px,92%)]
        rounded-full
        px-5 py-2.5
        border
        transition-all duration-300
        text-center
        font-body
        text-[13px]
        overflow-hidden
      "
      style={
        active
          ? {
              background: "linear-gradient(180deg, #1A0707 0%, #0F0303 100%)",
              border: "1px solid rgba(0,0,0,0.7)",
              boxShadow:
                "0 10px 20px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)",
            }
          : { borderColor: "rgba(18,20,24,0.35)" }
      }
      aria-pressed={active}
    >
      <span
        className="relative z-10 transition-colors duration-300 group-hover:text-[#D9BD63]"
        style={{ color: active ? "#D9BD63" : "rgba(18,20,24,0.75)" }}
      >
        {label}
      </span>

      {/* Hover dark background overlay (only when NOT active) */}
      {!active && (
        <span
          className="
            pointer-events-none absolute inset-0
            opacity-0 group-hover:opacity-100
            transition duration-300
            rounded-full
          "
          style={{
            background: "linear-gradient(180deg, #1A0707 0%, #0F0303 100%)",
          }}
        />
      )}
    </button>
  );
}
