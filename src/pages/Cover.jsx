import React from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../components/Frame";
import PrimaryButton from "../components/PrimaryButton";
import logo from "../assets/logo/logo.png";

export default function Cover() {
  const nav = useNavigate();

  return (
    <Frame>
      <div className="flex flex-col items-center text-center -mt-6">
        {/* Logo: big + controlled spacing */}
        <img
          src={logo}
          alt="Logo"
          className="h-[200px] md:h-[240px] w-auto mx-auto mb-2 pt-1 scale-[1.05]"
        />

        {/* Title: tight to logo */}
        <div className="font-display text-[18px] tracking-[0.12em] uppercase text-ink/85">
          The Royal Ascension
        </div>

        {/* Subtitle: intentional spacing */}
        <div className="mt-5 font-body text-[14px] text-ink/70">
          Welcome to the Den.
        </div>

        {/* CTA: premium spacing */}
        <div className="mt-8 w-full">
          <PrimaryButton onClick={() => nav("/info")}>
            Enter the Den
          </PrimaryButton>
        </div>

        {/* Helper text: small + close */}
        <div className="mt-5 text-[12px] font-body text-ink/55">
          Tap to proceed
        </div>
      </div>
    </Frame>
  );
}
