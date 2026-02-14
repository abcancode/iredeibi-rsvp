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
      {/* Keep your working layout, just make it scale cleanly on all screens */}
      <div className="flex flex-col items-center text-center -mt-6 sm:-mt-8 md:-mt-10">
        {/* Logo: bigger + responsive scaling */}
        <img
          src={logo}
          alt="Logo"
          className="
    w-auto mx-auto object-contain
    h-[clamp(320px,42vh,520px)]
    -mb-2 pt-1
  "
        />

        {/* Title: scales smoothly */}
        <div className="font-display text-[clamp(16px,1.9vh,19px)] tracking-[0.14em] uppercase text-ink/85">
          The Royal Ascension
        </div>

        {/* Subtitle: scales smoothly */}
        <div className="mt-5 sm:mt-6 font-body text-[clamp(13px,1.7vh,15px)] text-ink/70">
          Welcome to the Den.
        </div>

        {/* CTA: premium spacing */}
        <div className="mt-8 sm:mt-10 w-full">
          <PrimaryButton onClick={() => nav("/info")}>Enter Here</PrimaryButton>
        </div>

        {/* Helper text */}
        <div className="mt-5 sm:mt-6 text-[12px] font-body text-ink/55">
          Tap to proceed
        </div>
      </div>
    </Frame>
  );
}
