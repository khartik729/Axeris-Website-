"use client";

import { useReveal } from "./useReveal";

export default function Metrics() {
  const ref = useReveal();

  return (
    <section ref={ref} id="how-it-works" className="py-[100px] px-10 bg-white">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[#4f46e5] mb-4">
            How The AI Works
          </span>
          <h2 className="text-[2.8rem] leading-[1.15] text-[#0a0a0a] tracking-[-1px] font-normal" style={{ fontFamily: "var(--font-display)" }}>
            Three engines working together
          </h2>
        </div>

        {/* Three Engines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "📐",
              iconBg: "#eef2ff",
              title: "Rules & Guideline Engine",
              desc: "Clinical guidelines, FDA drug labels, dose/duration standards, interaction databases, plan policies, titration safety checks, and polypharmacy risk scoring. Every flag includes the rule violated, explanation, and source link.",
            },
            {
              icon: "🧠",
              iconBg: "#ecfdf5",
              title: "ML & Anomaly Detection",
              desc: "Learns normal prescribing patterns, identifies high-performer patterns, detects unusual refill intervals, flags known abuse patterns, and identifies polypharmacy clusters. Assigns risk scores and flags outliers.",
            },
            {
              icon: "🧬",
              iconBg: "#fef3c7",
              title: "Patient-Specific Reasoning",
              desc: "Combines EHR + claims to consider diagnoses, lab results, genetics, prior drug failures, allergies, adherence behavior, and active medication count. Prevents false positives and ensures safe alternatives.",
            },
          ].map((b) => (
            <div key={b.title} className="reveal p-8 rounded-[20px] border border-[#e4e4e4] hover:border-transparent hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[1.3rem] mb-5" style={{ background: b.iconBg }}>
                {b.icon}
              </div>
              <h4 className="text-[1rem] font-semibold text-[#0a0a0a] mb-2.5">{b.title}</h4>
              <p className="text-[0.88rem] text-[#737373] leading-[1.6]">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Data Sources */}
        <div className="mt-16 reveal">
          <h3 className="text-center text-[1.4rem] text-[#0a0a0a] mb-8 font-normal" style={{ fontFamily: "var(--font-display)" }}>
            What we analyze
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["EHR Data", "Claims History", "Lab Results", "Medication History", "Genetic Data", "Formulary Design", "Organ Function", "Titration Requirements", "Drug Interactions", "Adherence Patterns"].map((item) => (
              <span key={item} className="py-2 px-4 bg-[#f8f8f8] border border-[#e4e4e4] rounded-full text-[0.82rem] font-medium text-[#404040] hover:border-[#4f46e5] hover:bg-white transition-all cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
