"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-[140px] sm:pt-[160px] pb-[80px] sm:pb-[100px] px-10 relative overflow-hidden bg-white">
      {/* Background radials */}
      <div className="absolute top-[-200px] right-[-200px] w-[800px] h-[800px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(79,70,229,0.04) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-300px] left-[-200px] w-[600px] h-[600px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)" }} />

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="relative z-[2]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f8f8f8] border border-[#e4e4e4] py-1.5 pl-2 pr-4 rounded-full text-[0.8rem] font-medium text-[#404040] mb-7" style={{ animation: "fadeInUp 0.6s ease both" }}>
            <span className="w-2 h-2 bg-[#10b981] rounded-full" style={{ animation: "pulse 2s infinite" }} />
            Evidence-first. Cost-second.
          </div>

          <h1
            className="text-[2.8rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.08] text-[#0a0a0a] mb-6 tracking-[-1.5px] font-normal"
            style={{ fontFamily: "var(--font-display)", animation: "fadeInUp 0.6s ease 0.1s both" }}
          >
            AI Prescription <em className="italic text-[#4f46e5]">Intelligence</em>
          </h1>

          <p className="text-[1.05rem] sm:text-[1.15rem] text-[#737373] max-w-[520px] leading-[1.7] mb-9" style={{ animation: "fadeInUp 0.6s ease 0.2s both" }}>
            AI that catches unsafe and wasteful prescriptions before they&apos;re paid. The independent clinical layer payers have never had.
          </p>

          <div className="flex gap-3.5 flex-wrap" style={{ animation: "fadeInUp 0.6s ease 0.3s both" }}>
            <Link href="https://proto2-mocha.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-[#0a0a0a] text-white py-3.5 px-8 rounded-full text-[0.95rem] font-semibold no-underline inline-flex items-center gap-2 hover:bg-[#404040] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all">
              Try Live Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="#problem" className="bg-transparent text-[#404040] py-3.5 px-8 rounded-full text-[0.95rem] font-semibold no-underline inline-flex items-center gap-2 border border-[#e4e4e4] hover:border-[#d1d1d1] hover:text-[#0a0a0a] hover:-translate-y-0.5 transition-all">
              Learn More
            </Link>
          </div>

          {/* Trust line */}
          <div className="flex items-center gap-3 mt-10" style={{ animation: "fadeInUp 0.6s ease 0.4s both" }}>
            <div className="flex">
              {[{ bg: "#6366f1", text: "JH" }, { bg: "#10b981", text: "HU" }, { bg: "#f59e0b", text: "ZG" }].map((a, i) => (
                <span key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[0.7rem] font-semibold text-white" style={{ background: a.bg, marginLeft: i === 0 ? 0 : -8 }}>
                  {a.text}
                </span>
              ))}
            </div>
            <span className="text-[0.85rem] text-[#737373]">
              <strong className="text-[#0a0a0a] font-semibold">Patient-first intelligence.</strong> Payer-grade precision.
            </span>
          </div>
        </div>

        {/* Right: Dark Card */}
        <div className="relative" style={{ animation: "fadeInUp 0.8s ease 0.3s both" }}>
          <div
            className="rounded-[28px] p-8 sm:p-10 relative overflow-hidden min-h-[400px] sm:min-h-[440px] flex flex-col justify-center"
            style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)" }}
          >
            {/* Cross pattern overlay */}
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

            <div className="relative z-[2]">
              <span className="inline-block bg-white/10 text-white/70 py-1.5 px-3.5 rounded-full text-[0.75rem] font-medium tracking-[0.5px] uppercase mb-6 border border-white/[0.08]">
                Before The Claim Clears
              </span>
              <h3 className="text-white text-[1.6rem] sm:text-[1.8rem] font-normal mb-4 leading-[1.3]" style={{ fontFamily: "var(--font-display)" }}>
                Every prescription checked against the full clinical picture
              </h3>
              <p className="text-white/60 text-[0.9rem] max-w-[320px] leading-[1.6]">
                EHR data, claims history, lab results, and medication profiles — analyzed in real time.
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/[0.06] border border-white/[0.08] rounded-xl p-4 sm:p-5">
                  <div className="text-[1.4rem] sm:text-[1.6rem] font-bold text-white mb-1">$100B</div>
                  <div className="text-[0.7rem] sm:text-[0.75rem] text-white/50 uppercase tracking-[0.5px]">Annual Waste</div>
                </div>
                <div className="bg-white/[0.06] border border-white/[0.08] rounded-xl p-4 sm:p-5">
                  <div className="text-[1.4rem] sm:text-[1.6rem] font-bold text-white mb-1">6B+</div>
                  <div className="text-[0.7rem] sm:text-[0.75rem] text-white/50 uppercase tracking-[0.5px]">Rx Per Year</div>
                </div>
              </div>
            </div>

            {/* Floating cards - hidden on small screens */}
            <div className="hidden sm:flex absolute top-6 right-6 z-[3] bg-white rounded-xl py-3.5 px-4.5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] items-center gap-2.5 text-[0.82rem] font-medium" style={{ animation: "float 3s ease-in-out infinite" }}>
              <div className="w-8 h-8 rounded-lg bg-[#ecfdf5] text-[#10b981] flex items-center justify-center text-[1rem]">✓</div>
              Claim approved — safe
            </div>
            <div className="hidden sm:flex absolute bottom-6 left-6 z-[3] bg-white rounded-xl py-3.5 px-4.5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] items-center gap-2.5 text-[0.82rem] font-medium" style={{ animation: "float 3s ease-in-out infinite 1.5s" }}>
              <div className="w-8 h-8 rounded-lg bg-[#fef2f2] text-[#ef4444] flex items-center justify-center text-[1rem]">⚠</div>
              Unsafe dose flagged
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
