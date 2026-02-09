"use client";

import Link from "next/link";
import { useReveal } from "./useReveal";

const problems = [
  { title: "Clinically Inappropriate Prescribing", desc: "Drug doesn't match diagnosis, dose outside guidelines, dangerous combinations, duplicate therapy, and unsafe substitutions in titration-dependent patients.", emoji: "🩺", gradient: "linear-gradient(135deg, #1e293b, #334155)" },
  { title: "Wasteful Drug Spending", desc: "Expensive brands where equivalent generics exist, second-line drugs used too early, repeated prescriptions without reassessment, and early refills.", emoji: "💸", gradient: "linear-gradient(135deg, #312e81, #4338ca)" },
  { title: "Fraud, Abuse & Corruption", desc: "Prescribers writing far more controlled substances than peers, doctor shopping, pharmacy collusion, and fake diagnoses to unlock high-cost drugs.", emoji: "🔍", gradient: "linear-gradient(135deg, #064e3b, #065f46)" },
  { title: "Prior Authorization Burden", desc: "39 prior auth requests per physician per week. Axeris reduces unnecessary PAs by catching problems earlier with better precision.", emoji: "📋", gradient: "linear-gradient(135deg, #78350f, #92400e)" },
];

export default function Products() {
  const ref = useReveal();

  return (
    <section ref={ref} id="problem" className="py-[100px] px-10 bg-[#f8f8f8]">
      <div className="max-w-[1280px] mx-auto">
        <span className="reveal inline-block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[#4f46e5] mb-4">
          Problems We Solve
        </span>
        <h2 className="reveal text-[2.8rem] leading-[1.15] text-[#0a0a0a] tracking-[-1px] font-normal mb-14" style={{ fontFamily: "var(--font-display)" }}>
          What slips through today costs lives and billions.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p) => (
            <Link
              key={p.title}
              href="#"
              className="reveal group bg-white rounded-[20px] overflow-hidden border border-[#e4e4e4] no-underline text-inherit flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:border-transparent transition-all duration-300"
            >
              <div
                className="w-full h-[180px] flex items-center justify-center"
                style={{ background: p.gradient }}
              >
                <span className="text-[2.5rem] opacity-60">{p.emoji}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-[1.05rem] font-semibold text-[#0a0a0a] mb-2">{p.title}</h4>
                <p className="text-[0.85rem] text-[#737373] leading-[1.6] flex-1">{p.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-[0.82rem] font-semibold text-[#4f46e5] mt-4 group-hover:gap-2.5 transition-all">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
