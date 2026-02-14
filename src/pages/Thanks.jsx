import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Frame from "../components/Frame";
import PrimaryButton from "../components/PrimaryButton";
import logo from "../assets/logo/logo.png";

export default function Thanks() {
  const nav = useNavigate();
  const { state } = useLocation();

  const name = state?.fullName?.split(" ")?.[0] || "Guest";

  return (
    <Frame>
      <div className="flex flex-col items-center text-center">
        <img src={logo} alt="Logo" className="h-14 w-auto mb-6" />

        <div className="font-display text-[26px] text-ink">
          Thank You, {name}.
        </div>

        <div className="mt-4 font-body text-[14px] leading-6 text-ink/70 max-w-[34ch]">
          Your RSVP has been received. We’ll share further details as the
          journey unfolds.
        </div>

        <div className="mt-10 w-full">
          <PrimaryButton onClick={() => nav("/info")}>
            Return to The Den
          </PrimaryButton>
        </div>
      </div>
    </Frame>
  );
}
