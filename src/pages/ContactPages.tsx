import { PageHero, SectionHead } from "../components/layout";

export function LocationPage() {
  return (
    <main>
      <PageHero eyebrow="Contact Us" title="찾아오시는 길" body="부산 평가사무소를 중심으로 서울, 통영 거점에서 전국 프로젝트 현장에 대응합니다." />
      <section className="grid gap-8 bg-sky-50 px-5 py-20 md:px-24 md:py-24 lg:grid-cols-[.9fr_1.1fr]">
        <div data-reveal="left" className="overflow-hidden rounded-lg border border-sky-100 bg-white shadow-sm">
          <iframe className="h-[460px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%88%98%EC%98%81%EA%B5%AC%20%EA%B4%91%EB%82%A8%EB%A1%9C%2044&t=&z=16&ie=UTF8&iwloc=&output=embed" title="부산 평가사무소 지도" />
          <div className="flex flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black text-haein-500">BUSAN OFFICE</p>
              <p className="mt-1 font-black text-haein-950">부산광역시 수영구 광남로 44</p>
            </div>
            <a className="inline-flex min-h-11 items-center justify-center rounded-lg bg-haein-700 px-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-haein-300" href="https://maps.google.com/?q=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%88%98%EC%98%81%EA%B5%AC%20%EA%B4%91%EB%82%A8%EB%A1%9C%2044" rel="noreferrer" target="_blank">
              지도 보기
            </a>
          </div>
        </div>
        <div data-reveal="right">
          <SectionHead eyebrow="Location" title="찾아오시는 길" />
          <div className="grid gap-4">
            {[
              ["부산 평가사무소", "부산광역시 수영구 광남로 44", "본사 업무, 평가, 경영지원"],
              ["서울 사무소", "서울특별시 동대문구 소재", "수도권 프로젝트 대응"],
              ["통영 사무소", "경상남도 통영시 소재", "남해권 현장 조사 대응"],
            ].map(([title, address, note], index) => (
              <article key={title} data-reveal={index % 2 === 0 ? "left" : "right"} className="shine-card overflow-hidden rounded-lg border border-sky-100 bg-white p-6 shadow-sm" style={{ transitionDelay: `${index * 90}ms` }}>
                <p className="text-sm font-black text-haein-500">OFFICE 0{index + 1}</p>
                <h2 className="mt-2 text-xl font-black text-haein-950">{title}</h2>
                <p className="mt-3 leading-7 text-slate-500">{address}</p>
                <p className="mt-2 text-sm font-black text-haein-500">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function ProjectInquiryPage() {
  return (
    <main>
      <PageHero eyebrow="Contact Us" title="프로젝트 문의" body="사업 위치, 조사 분야, 일정, 필요한 인허가 단계를 공유해주시면 적합한 조사·분석 범위를 정리합니다." />
      <section className="grid gap-8 px-5 py-20 md:px-24 md:py-24 lg:grid-cols-[1fr_.9fr]">
        <div data-reveal="left">
          <SectionHead eyebrow="Project Inquiry" title="프로젝트 문의" />
          <div className="grid gap-4">
            {[
              ["01", "프로젝트 범위 공유", "사업 위치, 조사 분야, 일정, 필요한 인허가 단계를 알려주세요."],
              ["02", "조사·분석 범위 검토", "해양생태, 육상생태, 조류, 수중소음, 해양화학 등 필요한 업무를 정리합니다."],
              ["03", "작업 방식 제안", "현장 조사 일정과 보고 산출물 기준에 맞춰 수행 계획을 제안합니다."],
            ].map(([num, title, body]) => (
              <article key={num} className="border-l-4 border-haein-500 bg-sky-50 p-6">
                <span className="text-sm font-black text-haein-500">{num}</span>
                <h2 className="mt-2 text-xl font-black text-haein-950">{title}</h2>
                <p className="mt-3 leading-7 text-slate-500">{body}</p>
              </article>
            ))}
          </div>
        </div>
        <div data-reveal="right" className="rounded-lg border border-sky-100 bg-white p-7 text-haein-950 shadow-xl shadow-haein-950/10">
          <p className="text-sm font-black uppercase text-haein-500">Send a Brief</p>
          <h2 className="mt-3 text-3xl font-black">상담에 필요한 정보를 남겨주세요.</h2>
          <form className="mt-8 grid gap-4">
            {["회사명 / 담당자", "연락처 / 이메일", "프로젝트 위치"].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-black text-haein-950">
                {label}
                <input className="min-h-12 rounded-lg border border-sky-100 bg-sky-50 px-4 text-haein-950 outline-none transition placeholder:text-slate-500 focus:border-haein-500 focus:bg-white" placeholder={label} />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-black text-haein-950">
              문의 내용
              <textarea className="min-h-32 rounded-lg border border-sky-100 bg-sky-50 px-4 py-3 text-haein-950 outline-none transition placeholder:text-slate-500 focus:border-haein-500 focus:bg-white" placeholder="조사 분야, 일정, 필요한 산출물을 적어주세요." />
            </label>
            <a className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-haein-700 px-5 font-black text-white transition hover:-translate-y-1 hover:bg-haein-300" href="mailto:contact@haein.example?subject=HAEIN%20Project%20Inquiry">
              상담 메일 보내기
            </a>
          </form>
        </div>
      </section>
    </main>
  );
}
