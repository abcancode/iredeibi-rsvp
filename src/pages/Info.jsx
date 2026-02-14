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
      {/* allow scrolling ONLY when small screens overflow */}
      <div className="h-full w-full overflow-hidden">
        <div
          className="
            h-full w-full
            flex flex-col items-center text-center min-w-0
            overflow-y-auto no-scrollbar
            px-0
          "
        >
          {/* Top breathing room */}
          <div className="h-[clamp(8px,2svh,20px)] max-[375px]:h-[4px]" />

          {/* CREST */}
          <img
            src={logo}
            alt="Logo"
            className="
              w-auto object-contain
              h-[clamp(160px,24svh,240px)]
              -mb-[clamp(70px,12svh,110px)]
              max-[413px]:h-[clamp(150px,22svh,210px)]
              max-[413px]:-mb-[clamp(60px,11svh,95px)]
              max-[375px]:h-[clamp(140px,20svh,190px)]
              max-[375px]:-mb-[clamp(52px,10svh,82px)]
            "
          />

          {/* the royal ascension */}
          <div
            className="
              mt-[clamp(22px,3.8svh,32px)]
              max-[375px]:mt-[clamp(14px,2.8svh,22px)]
              font-display italic font-bold
              text-[clamp(16px,2.1svh,20px)]
              text-ink/80
              leading-none
            "
          >
            the royal ascension
          </div>

          {/* 40th birthday celebration */}
          <div className="mt-[6px] font-body text-[clamp(12px,1.6svh,14px)] text-ink/70">
            40th birthday celebration
          </div>

          {/* Title */}
          <div
            className="
              mt-[clamp(18px,3.2svh,26px)]
              max-[375px]:mt-[clamp(12px,2.4svh,18px)]
              font-display
              text-gold
              leading-[0.9]
              tracking-[-0.01em]
              whitespace-nowrap
              text-[clamp(52px,5.2vw,78px)]
              max-[413px]:text-[clamp(50px,10vw,82px)]
            "
          >
            Irede &amp; IbI
          </div>

          {/* Dates */}
          <div
            className="
              mt-[clamp(14px,2.6svh,20px)]
              max-[375px]:mt-[clamp(10px,2.1svh,14px)]
              font-display italic font-semibold
              text-[clamp(14px,1.9svh,18px)]
              text-ink/80
            "
          >
            August 16th - August 22nd
          </div>

          {/* Body copy */}
          <div
            className="
              mt-[clamp(16px,3svh,22px)]
              max-[375px]:mt-[clamp(12px,2.2svh,16px)]
              font-body
              text-[clamp(13px,1.75svh,16px)]
              leading-[1.65]
              text-ink/70
              max-w-[min(36ch,100%)]
              px-3
            "
          >
            save the date for a joint milestone
            <br />
            celebration rooted in culture, style,
            <br />
            and adventure — set against the
            <br />
            beauty of <span className="italic font-semibold">Kenya.</span>
          </div>

          {/* more info */}
          <div className="mt-[clamp(16px,3svh,22px)] max-[375px]:mt-[clamp(10px,2.2svh,14px)] font-body text-[clamp(12px,1.55svh,14px)] text-ink/60">
            more information to follow
          </div>

          {/* Space before CTA (reduced further on small screens) */}
          <div className="flex-1 min-h-[clamp(18px,5svh,64px)] max-[413px]:min-h-[12px] max-[375px]:min-h-[6px]" />

          {/* CTA */}
          <div className="w-full flex flex-col items-center pb-[clamp(18px,4svh,34px)] max-[375px]:pb-[14px]">
            <div className="w-[min(340px,82%)]">
              <PrimaryButton onClick={() => nav("/rsvp")} className="h-[44px]">
                the Pride awaits!
              </PrimaryButton>
            </div>

            <div className="mt-3 max-[375px]:mt-2 italic font-body text-[clamp(12px,1.55svh,14px)] text-ink/60">
              please RSVP by March 30th
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}
