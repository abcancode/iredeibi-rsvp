import React from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../components/Frame";
import PrimaryButton from "../components/PrimaryButton";
import logo from "../assets/logo/logo.png";

export default function Info() {
  const nav = useNavigate();

  return (
    <Frame>
      {/* Move whole layout upward */}
      <div className="flex flex-col items-center text-center -mt-24 sm:-mt-20 md:-mt-16">
        {/* Larger logo + tighter stacking */}
        <img
          src={logo}
          alt="Logo"
          className="
            w-auto mx-auto object-contain
            h-[260px] sm:h-[280px] md:h-[300px]
            -mb-16
          "
        />

        {/* Title */}
        <div className="font-display text-[46px] sm:text-[52px] leading-[0.9] text-gold">
          Irede &amp; Ibi
        </div>

        {/* ✅ Meta block: wider + smarter scaling */}
        <div className="mt-2 font-body text-ink/80 w-full max-w-[min(48ch,100%)] px-0.5">
          <div className="font-semibold text-[clamp(14px,1.65vh,16px)]">
            40th birthday celebration
          </div>

          {/* ✅ This line scales and stays straight where possible */}
          <div className="mt-1 text-[clamp(12.5px,1.55vh,15.5px)] leading-5 sm:leading-6 sm:whitespace-nowrap">
            August 16th – August 22nd <span className="opacity-70">|</span>{" "}
            Nairobi &amp; Diani, Kenya
          </div>
        </div>

        {/* Write-up: optimized scaling to keep balance */}
        <div className="mt-4 font-body text-[clamp(13px,1.6vh,16px)] leading-7 text-ink/70 max-w-[min(36ch,100%)]">
          save the date for a joint milestone celebration rooted in culture,
          style, and adventure — set against the beauty of Kenya.
        </div>

        {/* More info */}
        <div className="mt-4 font-body text-[clamp(12px,1.4vh,14px)] text-ink/60">
          more information to follow
        </div>

        {/* CTA */}
        <div className="mt-10 w-full">
          <PrimaryButton onClick={() => nav("/rsvp")}>
            Join the Pride
          </PrimaryButton>

          <div className="mt-3 text-[12.5px] font-body text-ink/60">
            Please RSVP by <span className="font-semibold">March 30th</span>.
          </div>
        </div>
      </div>
    </Frame>
  );
}
