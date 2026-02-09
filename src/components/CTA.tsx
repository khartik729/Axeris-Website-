"use client";

import Link from "next/link";
import { useReveal } from "./useReveal";

export default function CTA() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="py-[100px] px-10 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)" }}
    >
      {/* Cross pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative z-[2] reveal">
        <span className="inline-block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[#4f46e5] mb-6">
          Get Started
        </span>
        <h2 className="text-[2.5rem] sm:text-[3rem] text-white font-normal mb-7 tracking-[-0.5px]" style={{ fontFamily: "var(--font-display)" }}>
          Catch the waste.<br />Protect the patient.
        </h2>
        <p className="text-white/60 text-[1.05rem] max-w-[500px] mx-auto mb-9 leading-[1.7]">
          Performance-based pricing. If we don&apos;t save money, you don&apos;t pay. Zero risk, aligned incentives, measurable ROI.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Link
            href="#"
            className="bg-white text-[#0a0a0a] py-3.5 px-8 rounded-full text-[0.95rem] font-semibold no-underline inline-flex items-center gap-2 hover:bg-[#f0f0f0] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all"
          >
            Request A Demo
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
          <span className="text-[0.82rem] text-white/30">No commitment required</span>
        </div>
      </div>
    </section>
  );
}
