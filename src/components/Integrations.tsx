"use client";

import { useReveal } from "./useReveal";

export default function Integrations() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-[100px] px-10 bg-[#f8f8f8]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="reveal">
            <span className="inline-block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[#4f46e5] mb-4">
              Who We Serve
            </span>
            <h2 className="text-[2.8rem] leading-[1.15] text-[#0a0a0a] tracking-[-1px] font-normal mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Built for payers who want independent verification
            </h2>
            <p className="text-[1.05rem] text-[#737373] max-w-[600px] leading-[1.7] mb-8">
              Axeris integrates into your existing claims workflow. Zero risk — we take a percentage of verified savings. If we don&apos;t save money, you don&apos;t pay.
            </p>

            <div className="flex flex-col gap-5 mb-7">
              {[
                { icon: "🏢", title: "Self-Funded Employers", desc: "65% of commercially insured Americans. Directly bear the cost. No independent tool doing this today." },
                { icon: "🏥", title: "Health Insurers", desc: "Thin margins, regulatory pressure. Need transparent, evidence-backed utilization decisions." },
                { icon: "⚕️", title: "Health Systems & Provider Groups", desc: "Reduce inappropriate prescribing, protect patients, and minimize liability." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3.5 p-4.5 bg-white rounded-xl border border-[#e4e4e4] hover:border-[#4f46e5] hover:shadow-[0_0_0_3px_rgba(79,70,229,0.06)] transition-all">
                  <div className="w-9 h-9 min-w-[36px] bg-[#f8f8f8] rounded-lg flex items-center justify-center text-[1rem]">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="text-[0.9rem] font-semibold text-[#0a0a0a] mb-0.5">{item.title}</h5>
                    <p className="text-[0.82rem] text-[#737373]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Deployment badges */}
            <div className="flex gap-5 flex-wrap">
              {[
                { icon: "👁️", label: "Shadow Mode" },
                { icon: "💡", label: "Advisory Mode" },
                { icon: "⚙️", label: "Policy Mode" },
              ].map((b) => (
                <span key={b.label} className="flex items-center gap-2 py-2 px-4 bg-white border border-[#e4e4e4] rounded-full text-[0.78rem] font-semibold text-[#404040]">
                  <span className="text-[0.7rem]">{b.icon}</span>
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Hub Visual */}
          <div className="reveal bg-white border border-[#e4e4e4] rounded-[28px] p-12">
            <div className="flex flex-col items-center gap-8">
              {/* Center hub */}
              <div className="relative">
                <div className="w-[100px] h-[100px] rounded-[24px] flex items-center justify-center text-white font-bold text-[1.2rem]" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)" }}>
                  Ax
                </div>
                <div className="absolute inset-[-8px] border-2 border-dashed border-[#e4e4e4] rounded-[30px]" style={{ animation: "spin 20s linear infinite" }} />
              </div>

              {/* Connection nodes */}
              <div className="grid grid-cols-3 gap-3 w-full">
                {["EHR", "Claims", "Labs", "Formulary", "Genetics", "Rx History"].map((node) => (
                  <div key={node} className="bg-[#f8f8f8] border border-[#e4e4e4] rounded-xl p-3.5 text-center text-[0.75rem] font-medium text-[#404040] hover:border-[#4f46e5] hover:bg-white transition-all cursor-default">
                    {node}
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
