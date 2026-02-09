"use client";

import Link from "next/link";
import { useReveal } from "./useReveal";

export default function ValueProp() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-[100px] px-10 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <span className="inline-block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[#4f46e5] mb-4">
              The Solution
            </span>
            <h2 className="text-[2.8rem] leading-[1.15] text-[#0a0a0a] tracking-[-1px] font-normal mb-5" style={{ fontFamily: "var(--font-display)" }}>
              An independent clinical layer between prescribing and payment.
            </h2>
            <p className="text-[1.05rem] text-[#737373] max-w-[600px] leading-[1.7] mb-7">
              Axeris checks every prescription against the patient&apos;s full clinical picture before the claim is paid. If it&apos;s appropriate, it flows through. If it&apos;s unsafe or wasteful, it&apos;s flagged with a clear explanation for human review.
            </p>

            <ul className="flex flex-col gap-4 mb-9 list-none">
              {[
                "Doctor writes e-prescription, claim hits insurer environment as usual.",
                "Axeris runs checks against EHR data, claims history, labs, and medication profiles.",
                "Green flag: appropriate — let it pass. Yellow: safer or cheaper equivalent exists. Red: high risk, flagged for review.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-[#404040] leading-[1.5]">
                  <span className="w-[22px] h-[22px] min-w-[22px] bg-[#ecfdf5] rounded-full flex items-center justify-center text-[#10b981] text-[0.7rem] mt-0.5">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link href="#" className="bg-[#0a0a0a] text-white py-3.5 px-8 rounded-full text-[0.95rem] font-semibold no-underline inline-flex items-center gap-2 hover:bg-[#404040] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all">
              See How It Works
            </Link>
          </div>

          {/* Right: Flag System Visual */}
          <div className="reveal bg-[#f8f8f8] rounded-[28px] p-12 border border-[#e4e4e4]">
            <div className="grid gap-4">
              {/* Green Flag */}
              <div className="bg-white border border-[#e4e4e4] rounded-xl p-5 hover:border-[#10b981] hover:shadow-[0_0_0_3px_rgba(16,185,129,0.08)] transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                  <h5 className="text-[0.9rem] font-semibold text-[#0a0a0a]">Green — Appropriate</h5>
                </div>
                <p className="text-[0.82rem] text-[#737373] leading-[1.6]">Matches diagnosis, safe dose, no interactions. Claim flows through automatically.</p>
              </div>
              {/* Yellow Flag */}
              <div className="bg-white border border-[#e4e4e4] rounded-xl p-5 hover:border-[#f59e0b] hover:shadow-[0_0_0_3px_rgba(245,158,11,0.08)] transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <h5 className="text-[0.9rem] font-semibold text-[#0a0a0a]">Yellow — Equivalent Exists</h5>
                </div>
                <p className="text-[0.82rem] text-[#737373] leading-[1.6]">Likely okay, but a safer or cheaper equivalent exists with validated therapeutic equivalence.</p>
              </div>
              {/* Red Flag */}
              <div className="bg-white border border-[#e4e4e4] rounded-xl p-5 hover:border-[#ef4444] hover:shadow-[0_0_0_3px_rgba(239,68,68,0.08)] transition-all">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <h5 className="text-[0.9rem] font-semibold text-[#0a0a0a]">Red — High Risk</h5>
                </div>
                <p className="text-[0.82rem] text-[#737373] leading-[1.6]">Inconsistent, clinically inappropriate, or clearly wasteful. Flagged with evidence for human review.</p>
              </div>
              {/* Stats row */}
              <div className="flex gap-4 mt-2">
                {[{ label: "Data Points", value: "50+" }, { label: "Accuracy", value: "99.4%" }].map((m) => (
                  <div key={m.label} className="flex-1 bg-white border border-[#e4e4e4] rounded-xl p-5 hover:border-[#4f46e5] hover:shadow-[0_0_0_3px_rgba(79,70,229,0.08)] transition-all">
                    <h5 className="text-[0.8rem] font-semibold text-[#737373] uppercase tracking-[0.5px] mb-1.5">{m.label}</h5>
                    <span className="text-[1.6rem] font-bold text-[#0a0a0a]">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
