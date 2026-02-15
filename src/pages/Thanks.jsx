// src/pages/Thanks.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Frame from "../components/Frame";
import PrimaryButton from "../components/PrimaryButton";
import logo from "../assets/logo/logo.png";

export default function Thanks() {
  const nav = useNavigate();
  const { state } = useLocation();

  const name = state?.fullName?.trim()?.split(/\s+/)?.[0] || "Guest";

  return (
    <Frame>
      <div className="h-full w-full overflow-hidden">
        <div className="h-full w-full flex flex-col items-center text-center overflow-y-auto no-scrollbar">
          {/* top breathing space */}
          <div className="h-[clamp(10px,2.4svh,22px)] max-[375px]:h-[8px]" />

          {/* CREST (same visual language as other pages) */}
          <img
            src={logo}
            alt="Logo"
            className="
              w-auto object-contain
              h-[clamp(150px,22svh,230px)]
              -mb-[clamp(58px,10svh,95px)]
              max-[413px]:h-[clamp(140px,20svh,210px)]
              max-[413px]:-mb-[clamp(52px,9svh,86px)]
              max-[375px]:h-[clamp(130px,19svh,195px)]
              max-[375px]:-mb-[clamp(48px,8svh,78px)]
            "
          />

          {/* Title */}
          <div
            className="
            mt-[clamp(10px,2svh,14px)]
              font-display
              text-gold
              leading-[0.95]
              text-[clamp(44px,7.5vw,64px)]
            "
          >
            Thank You,
          </div>

          {/* Name */}
          <div className="mt-1 font-display text-ink text-[clamp(22px,3.2vw,28px)]">
            {name}.
          </div>

          {/* Message */}
          <div
            className="
              mt-[clamp(14px,2.8svh,20px)]
              font-body
              text-[clamp(13px,1.8svh,16px)]
              leading-[1.7]
              text-ink/70
              max-w-[min(38ch,100%)]
              px-4
            "
          >
            Your RSVP has been received.
            <br />
            We’ll share further details as the journey unfolds.
          </div>

          {/* spacer */}
          <div className="flex-1 min-h-[clamp(18px,5svh,70px)] max-[375px]:min-h-[18px]" />

          {/* CTA */}
          <div className="w-full px-3 flex flex-col items-center pb-[clamp(18px,4svh,34px)]">
            <div className="w-[min(360px,86%)]">
              <PrimaryButton onClick={() => nav("/info")} className="h-[46px]">
                Return to The Den
              </PrimaryButton>
            </div>

            <div className="mt-3 italic font-body text-[clamp(12px,1.55svh,14px)] text-ink/60">
              tap to continue
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}
