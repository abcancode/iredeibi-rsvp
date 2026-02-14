// src/components/Frame.jsx
import React from "react";
import bg from "../assets/bg/background.png";

// ✅ Exact ornate border path extracted from your AI/PDF template
const ORNATE_PATH =
  "M 1079.699219 802.015625 L 1079.699219 1730 C 1079.699219 1775.574219 1055.128906 1816.839844 1015.277344 1838.703125 L 1015.277344 1840.355469 C 1015.277344 1909.660156 964.238281 1968.324219 896.007812 1978.1875 C 870.863281 2020.109375 825.386719 2046 776.496094 2046 L 393.523438 2046 C 344.632812 2046 299.160156 2020.109375 274.007812 1978.1875 C 205.773438 1968.324219 154.738281 1909.664062 154.738281 1840.355469 L 154.738281 1838.714844 C 114.878906 1816.851562 90.300781 1775.578125 90.300781 1730 L 90.300781 802.015625 C 90.300781 756.433594 114.878906 715.160156 154.738281 693.296875 L 154.738281 691.65625 C 154.738281 622.335938 205.773438 563.675781 274.007812 553.824219 C 299.164062 511.898438 344.640625 486 393.523438 486 L 776.496094 486 C 825.378906 486 870.855469 511.898438 896.007812 553.824219 C 964.238281 563.675781 1015.273438 622.335938 1015.273438 691.65625 L 1015.273438 693.304688 C 1055.121094 715.175781 1079.699219 756.445312 1079.699219 802.015625";

const VB = {
  minX: 90.300781,
  minY: 486,
  width: 989.398438,
  height: 1560,
  cx: 585,
  cy: 1266,
};

export default function Frame({ children }) {
  const s = 0.972;
  const insetTransform = `translate(${VB.cx} ${VB.cy}) scale(${s}) translate(${-VB.cx} ${-VB.cy})`;

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="min-h-screen w-full bg-black/25 px-4 py-10 flex items-center justify-center">
        <div className="relative w-full max-w-[460px] md:max-w-[520px]">
          <svg
            className="w-full h-auto block drop-shadow-[0_20px_55px_rgba(0,0,0,0.55)]"
            viewBox={`${VB.minX} ${VB.minY} ${VB.width} ${VB.height}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            <defs>
              <path id="ornate" d={ORNATE_PATH} />
            </defs>

            <use href="#ornate" fill="#EEE9DD" />

            <use
              href="#ornate"
              fill="none"
              stroke="rgba(18,20,24,0.35)"
              strokeWidth="14"
            />

            <use
              href="#ornate"
              fill="none"
              stroke="rgba(18,20,24,0.70)"
              strokeWidth="3"
            />

            <g transform={insetTransform}>
              <use
                href="#ornate"
                fill="none"
                stroke="rgba(18,20,24,0.45)"
                strokeWidth="3"
              />
            </g>
          </svg>

          {/* ✅ KEY CHANGE:
              Fill the card area and let pages manage their own scroll.
              NO vertical centering here. */}
          <div className="absolute inset-0 flex">
            <div className="w-full h-full min-h-0 px-8 md:px-10 py-10 md:py-12">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
