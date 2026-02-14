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
    partialDetails: "",
  });
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Please enter your full name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!isValidEmail(form.email)) e.email = "Please enter a valid email.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (choice === "partial" && !form.partialDetails.trim()) {
      e.partialDetails = "Please specify location(s) and dates.";
    }
    return e;
  }, [form, choice]);

  const canSubmit = Object.keys(errors).length === 0 && !submitting;

  const onSubmit = async (e) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      partialDetails: true,
    });
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
      {/* ✅ Stable 3-row layout: Header (tight) + Scroll Body + Footer (pinned) */}
      <div className="h-full min-h-0 w-full min-w-0 flex flex-col justify-start overflow-hidden pt-1 sm:pt-2">
        {/* HEADER */}
        <div className="shrink-0 min-w-0 flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Logo"
            className="
            w-auto mx-auto object-contain
            h-[260px] sm:h-[280px] md:h-[300px]
            -mt-10 sm:-mt-8 md:-mt-6
            -mb-16
          "
          />

          <div className="font-display text-[clamp(13px,1.5vh,16px)] tracking-[0.14em] uppercase text-ink/85">
            RSVP
          </div>

          <div className="mt-0.5 px-0.5 text-[11px] sm:text-[12px] font-body text-ink/65 leading-5 whitespace-nowrap">
            Kindly confirm your place among the Pride.
          </div>
        </div>

        {/* BODY (scrolls; scrollbar hidden) */}
        <div className="mt-2 flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden no-scrollbar">
          <form onSubmit={onSubmit} className="space-y-2.5">
            <div className="space-y-2.5">
              <InputRow
                label="Full Name"
                placeholder="Your full name"
                value={form.fullName}
                onChange={(v) => setForm((s) => ({ ...s, fullName: v }))}
                onBlur={() => setTouched((t) => ({ ...t, fullName: true }))}
                error={touched.fullName ? errors.fullName : ""}
              />

              <InputRow
                label="Email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                error={touched.email ? errors.email : ""}
                type="email"
              />

              <InputRow
                label="Phone"
                placeholder="+234..."
                value={form.phone}
                onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
                onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                error={touched.phone ? errors.phone : ""}
                type="tel"
              />

              <div className="pt-0.5 space-y-2.5">
                <PillOption
                  checked={choice === "yes"}
                  onSelect={() => setChoice("yes")}
                  label="Count me among the Pride"
                />

                <PillOption
                  checked={choice === "partial"}
                  onSelect={() => setChoice("partial")}
                  label="I will join the Pride for a portion of the journey"
                />

                {choice === "partial" && (
                  <div className="space-y-1.5 text-left min-w-0">
                    <label className="text-[11px] font-body font-semibold text-ink/75">
                      If attending partially, kindly specify location(s) and
                      dates
                    </label>

                    <textarea
                      value={form.partialDetails}
                      onChange={(e) =>
                        setForm((s) => ({
                          ...s,
                          partialDetails: e.target.value,
                        }))
                      }
                      onBlur={() =>
                        setTouched((t) => ({ ...t, partialDetails: true }))
                      }
                      rows={2}
                      className="
                      w-full resize-none rounded-2xl
                      border border-line bg-white/35
                      px-4 py-2 text-[13px]
                      outline-none
                      focus:bg-white/50
                      focus:border-black/30
                      transition
                    "
                      placeholder="e.g., Nairobi (Aug 16–18), Diani (Aug 20–22)"
                    />

                    {touched.partialDetails && errors.partialDetails && (
                      <div className="text-[12px] text-red-700">
                        {errors.partialDetails}
                      </div>
                    )}
                  </div>
                )}

                <PillOption
                  checked={choice === "no"}
                  onSelect={() => setChoice("no")}
                  label="Regretfully, I am unable to attend"
                />
              </div>
            </div>

            {/* little breathing room so last pill doesn't touch the footer */}
            <div className="h-3" />
          </form>
        </div>

        {/* FOOTER (pinned at bottom, no huge gap) */}
        <div className="shrink-0 mt-auto pt-2 pb-2 sm:pb-3 md:pb-5 lg:pb-6">
          <PrimaryButton type="submit" className="h-[54px]" onClick={onSubmit}>
            <span className="block text-center leading-[1.05] font-bold">
              {submitting ? "Submitting..." : "Submit RSVP"}
            </span>
          </PrimaryButton>

          <button
            type="button"
            onClick={() => nav("/info")}
            className="mt-2 w-full text-[12px] font-body font-semibold text-ink/70 hover:text-ink transition"
          >
            Back
          </button>
        </div>
      </div>
    </Frame>
  );
}

/* ----------------------------- */

function InputRow({
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  type = "text",
}) {
  return (
    <div className="space-y-1 text-left min-w-0">
      <label className="text-[11px] font-body font-semibold text-ink/75">
        {label}
      </label>

      {/* ✅ Slightly shorter input height to prevent clipping on small screens */}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="
          w-full h-[38px] rounded-full
          border border-line bg-white/30
          px-4 text-[13px]
          outline-none
          focus:bg-white/45
          focus:border-black/30
          transition
        "
        placeholder={placeholder}
      />

      {error ? <div className="text-[12px] text-red-700">{error}</div> : null}
    </div>
  );
}

function PillOption({ checked, onSelect, label }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={[
        "w-full rounded-full px-4 py-2.5",
        "border transition text-left min-w-0",
        checked
          ? "border-black/40 bg-white/45"
          : "border-line bg-white/25 hover:bg-white/35",
      ].join(" ")}
      style={{
        boxShadow: checked ? "inset 0 0 0 2px rgba(18,20,24,0.10)" : "none",
      }}
      aria-pressed={checked}
    >
      <span className="flex items-center gap-3 min-w-0">
        <span
          className={[
            "h-4 w-4 rounded-full border shrink-0",
            checked ? "border-ink bg-ink" : "border-black/35 bg-transparent",
          ].join(" ")}
        />
        <span className="font-body text-[12.5px] text-ink leading-[1.25] break-words min-w-0">
          {label}
        </span>
      </span>
    </button>
  );
}
