// src/pages/Info.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../components/Frame";
import PrimaryButton from "../components/PrimaryButton";
import logo from "../assets/logo/logo.png";

export default function Info() {
  const nav = useNavigate();

  return (
    <Frame>
      <div className="flex h-full w-full flex-col items-center text-center min-w-0">
        {/* Pull content upward */}
        <div className="w-full flex flex-col items-center text-center -mt-24 sm:-mt-20 md:-mt-16">
          {/* ✅ Big logo (same as before) */}
          {/* Logo — slightly reduced but still strong */}
          <img
            src={logo}
            alt="Logo"
            className="
    w-auto mx-auto object-contain
    h-[220px] sm:h-[240px] md:h-[260px]
    -mb-10
  "
          />

          {/* VERY tight to logo bottom */}
          <div className="-mt-4 font-display text-[clamp(12px,1.6vh,14px)] tracking-[0.18em] uppercase text-ink/70">
            The Royal Ascension
          </div>

          {/* Title stays visually isolated + bold */}
          <div className="mt-8 font-display text-[clamp(46px,6.5vh,84px)] leading-[0.9] text-gold">
            Irede &amp; Ibi
          </div>

          {/* ✅ Re-added meta block (above save-the-date) */}
          <div className="mt-4 font-body text-ink/80 w-full max-w-[min(48ch,100%)] px-1">
            <div className="mt-1 text-[clamp(12.5px,1.55vh,15.5px)] leading-5 sm:leading-6 sm:whitespace-nowrap">
              August 16th – August 22nd <span className="opacity-70">|</span>{" "}
              Nairobi &amp; Diani, Kenya
            </div>
          </div>

          {/* Body copy */}
          <div className="mt-6 font-body text-[clamp(13px,1.7vh,16px)] leading-7 text-ink/70 max-w-[min(34ch,100%)] px-2">
            save the date for a joint milestone celebration rooted in culture,
            style, and adventure — set against the beauty of Kenya.
          </div>

          {/* More info */}
          <div className="mt-6 font-body text-[clamp(12px,1.5vh,14px)] text-ink/60">
            more information to follow
          </div>

          {/* CTA (unchanged) */}
          <div className="mt-6 sm:mt-9 md:mt-10 w-full px-2">
            <PrimaryButton onClick={() => nav("/rsvp")}>
              Join the Pride
            </PrimaryButton>

            <div className="mt-3 text-[12.5px] font-body text-ink/60">
              Please RSVP by <span className="font-semibold">March 30th</span>.
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}
