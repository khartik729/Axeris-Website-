"use client";

import { useReveal } from "./useReveal";

export default function Trust() {
  const ref = useReveal();

  return (
    <section ref={ref} id="why-axeris" className="py-[100px] px-10 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="reveal mb-12">
          <span className="inline-block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[#4f46e5] mb-4">
            Why Axeris
          </span>
          <h2 className="text-[2.8rem] leading-[1.15] text-[#0a0a0a] tracking-[-1px] font-normal mb-5" style={{ fontFamily: "var(--font-display)" }}>
            We don&apos;t push cheap drugs. We stop unsafe ones.
          </h2>
          <p className="text-[1.05rem] text-[#737373] max-w-[600px] leading-[1.7]">
            Axeris is the independent clinical and financial intelligence layer that payers have never had. Aligned with patients and payers — not rebates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🛡️", title: "Not a PBM", desc: "We don't make money on rebates or spread pricing. We're fully aligned with payer and patient value." },
            { icon: "✋", title: "Not a denial tool", desc: "We flag for human review. Evidence-first, cost-second. Conservative thresholds. Clinically validated only." },
            { icon: "⚡", title: "Proactive, not retrospective", desc: "Unlike MTM programs that review after the fact, we catch problems before the claim clears." },
            { icon: "⚖️", title: "True equivalence required", desc: "Equal potency, bioavailability, formulation, titration, and clinical effectiveness. FDA Orange Book backed." },
          ].map((card) => (
            <div key={card.title} className="reveal p-8 bg-[#f8f8f8] rounded-[20px] border border-[#e4e4e4]">
              <div className="w-14 h-14 bg-white rounded-[14px] flex items-center justify-center text-[1.5rem] mb-5 border border-[#e4e4e4]">
                {card.icon}
              </div>
              <h4 className="text-[1rem] font-semibold text-[#0a0a0a] mb-2.5">{card.title}</h4>
              <p className="text-[0.88rem] text-[#737373] leading-[1.6]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
