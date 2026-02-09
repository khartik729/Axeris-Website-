"use client";

import { useReveal } from "./useReveal";

export default function Team() {
  const ref = useReveal();

  return (
    <section ref={ref} id="team" className="py-[100px] px-10 bg-[#f8f8f8]">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-[0.78rem] font-semibold uppercase tracking-[1.5px] text-[#4f46e5] mb-4">
            The Team
          </span>
          <h2 className="text-[2.8rem] leading-[1.15] text-[#0a0a0a] tracking-[-1px] font-normal" style={{ fontFamily: "var(--font-display)" }}>
            Built by people who understand both sides
          </h2>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              initials: "JH",
              bg: "#4f46e5",
              role: "Engineering",
              school: "Johns Hopkins University",
              field: "Electrical & Computer Engineering",
            },
            {
              initials: "HU",
              bg: "#10b981",
              role: "Life Sciences & Policy",
              school: "Harvard University",
              field: "Biology & Government",
            },
            {
              initials: "OS",
              bg: "#f59e0b",
              role: "Operations & Strategy",
              school: "Top-10 University Track",
              field: "Strategy & Operations",
            },
          ].map((member) => (
            <div key={member.role} className="reveal bg-white rounded-[20px] border border-[#e4e4e4] p-8 text-center hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-[1.4rem] font-bold"
                style={{ background: member.bg }}
              >
                {member.initials}
              </div>
              <h4 className="text-[1.05rem] font-semibold text-[#0a0a0a] mb-1">{member.role}</h4>
              <p className="text-[0.88rem] text-[#4f46e5] font-medium mb-1">{member.school}</p>
              <p className="text-[0.82rem] text-[#737373]">{member.field}</p>
            </div>
          ))}
        </div>

        {/* Advisor */}
        <div className="reveal max-w-[700px] mx-auto">
          <div className="bg-white rounded-[20px] border border-[#e4e4e4] p-8 flex items-center gap-6">
            <div
              className="w-16 h-16 min-w-[64px] rounded-full flex items-center justify-center text-white text-[1.2rem] font-bold"
              style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)" }}
            >
              ZG
            </div>
            <div>
              <h4 className="text-[1rem] font-semibold text-[#0a0a0a] mb-0.5">Ziad Ghanem — Advisor</h4>
              <p className="text-[0.88rem] text-[#4f46e5] font-medium mb-1">CEO of TerrAscend, Former President at Parallel</p>
              <p className="text-[0.82rem] text-[#737373] leading-[1.6]">
                20+ years healthcare and pharmacy leadership at Walgreens Boots Alliance. Doctor of Pharmacy, University of Houston.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
