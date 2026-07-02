import { PageHero, SectionHead } from "../components/layout";
import { companyHistory, credentials } from "../data";

export function HistoryPage() {
  return (
    <main>
      <PageHero eyebrow="History" title="해인생태연구소의 성장 연혁" body="법인 설립 이후 해상풍력, 공항, 항만 환경 컨설팅 전문성을 확장해 온 주요 이력입니다." />
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 px-5 py-20 md:px-24 md:py-24">
        <div className="history-flow-bg pointer-events-none absolute inset-0 opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 top-20 h-20 -skew-y-3 bg-gradient-to-r from-transparent via-haein-300/10 to-transparent blur-2xl animate-float-soft" />
        <div className="relative z-10">
          <SectionHead eyebrow="Company History" title="회사 연혁" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="absolute bottom-6 left-4 top-3 w-px bg-gradient-to-b from-haein-300 via-sky-200 to-haein-950 md:left-1/2 md:-translate-x-1/2" />
          {companyHistory.map((entry, index) => (
            <article key={entry.year} data-reveal={index % 2 === 0 ? "left" : "right"} className="relative grid gap-5 pb-10 pl-10 last:pb-0 md:grid-cols-[1fr_96px_1fr] md:items-start md:pl-0">
              <div className="absolute left-[7px] top-3 z-10 grid h-5 w-5 place-items-center rounded-full border-4 border-white bg-haein-300 shadow-lg shadow-haein-300/30 md:hidden" />
              <div className="relative z-10 hidden justify-center md:col-start-2 md:row-start-1 md:flex">
                <div className="grid h-16 w-16 place-items-center rounded-full border-8 border-white bg-haein-700 text-sm font-black text-white shadow-xl shadow-haein-950/20 animate-pulse-glow">{entry.year.slice(2)}</div>
              </div>
              <div className={`shine-card group rounded-lg border border-sky-100 bg-white/95 p-6 shadow-sm shadow-haein-950/5 transition duration-300 hover:-translate-y-2 hover:border-haein-300 hover:shadow-2xl hover:shadow-haein-950/10 md:row-start-1 md:p-8 ${index % 2 === 0 ? "md:col-start-1" : "md:col-start-3"}`}>
                <div className="mb-5 flex flex-col gap-2 border-b border-sky-100 pb-5 md:flex-row md:items-end md:justify-between">
                  <strong className="text-5xl font-black leading-none text-haein-500 transition group-hover:text-haein-950">{entry.year}</strong>
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-haein-500">{entry.items.length} milestones</span>
                </div>
                <ul className="grid gap-3">
                  {entry.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-slate-500">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-haein-300 shadow-sm shadow-haein-300/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function CredentialsPage() {
  return (
    <main>
      <PageHero eyebrow="Credentials" title="전문성을 증명하는 인증과 등록 현황" body="사업 수행 자격, 연구개발 조직, 측정·분석 역량을 확인할 수 있는 주요 증빙 자료입니다." />
      <section className="bg-sky-50 px-5 pb-20 pt-32 md:px-24 md:pb-24 md:pt-36">
        <SectionHead eyebrow="Proof of Expertise" title="인증·등록 자료" />
        <article data-reveal="up" className="mb-8 overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-xl shadow-haein-950/10">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-center p-7 md:p-10">
              <p className="text-sm font-black uppercase tracking-wide text-haein-500">HSE Management</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-haein-950">안전 교육과 현장 대응 역량</h2>
              <p className="mt-4 leading-7 text-slate-500">국내 최고 수준의 교육기관과 함께 안전 교육을 이수하며, 해양 현장의 HSE 기준을 체계적으로 관리합니다.</p>
              <span className="mt-6 inline-flex w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-black text-haein-500">HSE 관리 영역</span>
            </div>
            <div className="bg-white px-4 py-8 md:px-6 md:py-10">
              <img className="h-full min-h-[280px] w-full object-contain" src="/credentials/hse-management.png" alt="HSE 관리 안전 교육 현장" />
            </div>
          </div>
        </article>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {credentials.map(([group, title, desc, status, src], index) => (
            <article key={title} data-reveal={index % 2 === 0 ? "left" : "right"} className="shine-card overflow-hidden rounded-lg border border-sky-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-haein-950/10">
              <img className="aspect-[5/3] w-full bg-white object-contain p-3" src={src} alt={title} />
              <div className="border-t border-sky-100 p-4">
                <p className="text-xs font-black uppercase text-haein-500">{group}</p>
                <h2 className="mt-1 text-base font-black text-haein-950">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
                <span className="mt-3 inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-black text-haein-500">{status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
