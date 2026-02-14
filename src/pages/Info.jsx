import React from "react";
import { useNavigate } from "react-router-dom";
import Frame from "../components/Frame";
import PrimaryButton from "../components/PrimaryButton";
import logo from "../assets/logo/logo.png";

export default function Info() {
  const nav = useNavigate();

  return (
    <Frame>
      <div className="flex flex-col items-center text-center w-full -mt-10">
        {/* Logo: match Cover size + optical breathing room */}
        <img
          src={logo}
          alt="Logo"
          className="h-[200px] md:h-[240px] w-auto mx-auto -mb-10 max-w-full object-contain"
        />

        {/* Title */}
        <div className="font-display text-[42px] sm:text-[46px] leading-[0.95] text-gold -mt-6">
          Irede &amp; Ibi
        </div>

        {/* Event meta */}
        <div className="mt-4 font-body text-[14px] text-ink/80 w-full max-w-[36ch]">
          <div className="font-semibold">40th birthday celebration</div>
          <div className="mt-1">
            August 16th – August 22nd <span className="opacity-70">|</span>{" "}
            Nairobi &amp; Diani, Kenya
          </div>
        </div>

        {/* Write-up */}
        <div className="mt-6 font-body text-[14px] leading-6 text-ink/70 w-full max-w-[34ch]">
          save the date for a joint milestone celebration rooted in culture,
          style, and adventure — set against the beauty of Kenya.
        </div>

        <div className="mt-6 font-body text-[13px] text-ink/60">
          more information to follow
        </div>

        {/* CTA */}
        <div className="mt-8 w-full">
          <PrimaryButton
            onClick={() => nav("/rsvp")}
            className="h-auto min-h-[56px] py-4 px-6"
          >
            <span className="block text-center leading-[1.15] whitespace-normal break-words">
              The Pride Awaits!
            </span>
          </PrimaryButton>

          <div className="mt-3 text-[12px] font-body text-ink/60">
            Please RSVP by <span className="font-semibold">[date]</span>.
          </div>
        </div>
      </div>
    </Frame>
  );
}
