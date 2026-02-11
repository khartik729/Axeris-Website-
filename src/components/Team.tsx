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
              name: "Kareem Malhis",
              initials: "KM",
              bg: "#4f46e5",
              role: "Engineering",
              school: "Johns Hopkins University",
              field: "Electrical & Computer Engineering",
              linkedin: "https://www.linkedin.com/in/kareem-malhis/",
            },
            {
              name: "Adan Eftekhari",
              initials: "AE",
              bg: "#10b981",
              role: "Life Sciences & Policy",
              school: "Harvard University",
              field: "Biology & Econ",
              linkedin: "https://www.linkedin.com/in/adan-eftekhari/",
            },
            {
              name: "Khartik Uppalapati",
              initials: "KU",
              bg: "#f59e0b",
              role: "Operations & Strategy",
              school: "",
              field: "Strategy & Operations",
              linkedin: "https://www.linkedin.com/in/khartik-uppalapati/",
            },
          ].map((member) => (
            <div key={member.role} className="reveal bg-white rounded-[20px] border border-[#e4e4e4] p-8 text-center hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-[1.4rem] font-bold"
                style={{ background: member.bg }}
              >
                {member.initials}
              </div>
              <h4 className="text-[1.05rem] font-semibold text-[#0a0a0a] mb-1">{member.name}</h4>
              {member.school && <p className="text-[0.88rem] text-[#737373] mb-1">{member.school}</p>}
              <p className="text-[0.82rem] text-[#737373] mb-3">{member.field}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0077b5] hover:bg-[#006399] transition-colors duration-200"
                aria-label={`${member.name}'s LinkedIn profile`}
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
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
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-0.5">
                <h4 className="text-[1rem] font-semibold text-[#0a0a0a]">Ziad Ghanem, PharmD — Advisor</h4>
                <a
                  href="https://www.linkedin.com/in/ziad-ghanem-b28129181/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0077b5] hover:bg-[#006399] transition-colors duration-200"
                  aria-label="Ziad Ghanem's LinkedIn profile"
                >
                  <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
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
