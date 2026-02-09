"use client";

import { useReveal } from "./useReveal";

export default function Press() {
  const ref = useReveal();

  return (
    <div ref={ref} className="bg-[#f8f8f8] py-[60px] px-10 border-y border-[#e4e4e4]">
      <div className="max-w-[1280px] mx-auto text-center reveal">
        <p className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#737373] mb-8">
          The Prescription Problem
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          {[
            { value: "$528B", label: "Annual U.S. Drug Spend" },
            { value: "$100B", label: "Wasted Annually" },
            { value: "6B+", label: "Prescriptions Per Year" },
            { value: "39/wk", label: "Prior Auths Per Doctor" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span
                className="block text-[2rem] font-normal text-[#0a0a0a] tracking-[-0.5px] mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </span>
              <span className="text-[0.78rem] text-[#737373] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
