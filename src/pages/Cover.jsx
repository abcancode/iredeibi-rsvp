// src/pages/Cover.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../components/Frame";
import PrimaryButton from "../components/PrimaryButton";
import logo from "../assets/logo/logo.png";

export default function Cover() {
  const nav = useNavigate();

  return (
    <Frame>
      {/* RELATIVE so we can pin the button exactly */}
      <div className="relative h-full w-full flex flex-col items-center text-center min-w-0 overflow-hidden">
        {/* BIG LOGO (transparent padding -> compensate with negative margin) */}
        <img
          src={logo}
          alt="Logo"
          className="
            w-auto object-contain
            h-[clamp(340px,46svh,520px)]
            -mb-[clamp(110px,16svh,190px)]
            max-[413px]:h-[clamp(300px,44svh,460px)]
            max-[413px]:-mb-[clamp(95px,15svh,170px)]
          "
        />

        {/* Subtitle sits directly under the *visible* crest */}
        <div
          className="
    font-display italic font-bold
    text-[clamp(16px,2.2svh,20px)]
    text-ink/80
    leading-none
  "
        >
          the royal ascension
        </div>

        {/* Title (cap large-screen size so it never breaks the frame) */}
        <div
          className="
    mt-[clamp(12px,2.2svh,20px)]
    font-display
    text-gold
    leading-[0.9]
    tracking-[-0.01em]
    whitespace-nowrap
    text-[clamp(52px,5vw,72px)]
    max-[413px]:text-[clamp(50px,10vw,82px)]
  "
        >
          Irede &amp; IbI
        </div>

        {/* BUTTON AREA pinned to match reference image */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            top-[74%] -translate-y-1/2
            w-full flex flex-col items-center
            pointer-events-auto
          "
        >
          <div className="w-[min(340px,82%)]">
            <PrimaryButton onClick={() => nav("/info")} className="h-[44px]">
              welcome to the Den
            </PrimaryButton>
          </div>

          <div className="mt-2 italic font-body text-[12px] text-ink/55">
            tap to proceed
          </div>
        </div>
      </div>
    </Frame>
  );
}
