import { LandingHero } from "../components/landing-hero";
import { SectionHead } from "../components/layout";
import { solutions, strengths } from "../data";

export function HomePage() {
  return (
    <main>
      <LandingHero />
      <Intro />
      <Solutions />
      <Strength />
      <Process />
    </main>
  );
}


function Intro() {
  return (
    <section className="bg-background px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div data-reveal="left" className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-haein-950/10">
        <img className="aspect-[4/3] h-full w-full object-cover" src="/main/introduce.jpg" alt="해인생태연구소 현장 조사" />
      </div>
      <div data-reveal="right" className="flex flex-col justify-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">About HAEIN</p>
        <h2 className="text-balance text-3xl font-black leading-tight text-primary md:text-5xl">개발 현장과 생태계 사이의 균형을 설계합니다.</h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">해양환경, 해양물리, 수중소음, 전자기장 예측, 생태 분야 조사·예측 기술을 바탕으로 사업 영향 분석과 저감방안을 제시합니다.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {["해양·생태 조사", "환경 영향 예측", "저감방안 수립"].map((item) => (
            <span key={item} className="rounded-2xl border border-border bg-secondary px-4 py-4 text-sm font-black text-primary transition hover:-translate-y-1 hover:bg-card hover:shadow-md">{item}</span>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section className="bg-secondary/60 px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
      <SectionHead eyebrow="Solutions" title="현장 중심 솔루션" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {solutions.map(([label, title, src], index) => (
          <article key={title} data-reveal={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"} style={{ transitionDelay: `${index * 90}ms` }} className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-border bg-card text-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-haein-950/15 md:min-h-[360px]">
            <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={src} alt={label} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-sm font-semibold text-white/75">{label}</p>
              <h3 className="mt-2 text-2xl font-black leading-snug">{title}</h3>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}


function Strength() {
  return (
    <section className="bg-primary px-4 py-20 text-primary-foreground md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
      <div className="max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">Strength</p>
        <h2 className="text-balance text-3xl font-black leading-tight md:text-5xl">조사, 예측, HSE 관리를 함께 수행하는 해양풍력 특화 전문조직</h2>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {strengths.map(([label, title, src], index) => (
          <article key={label} data-reveal="zoom" style={{ transitionDelay: `${index * 120}ms` }} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-black/20">
            <img className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" src={src} alt={title} />
            <div className="p-7">
              <p className="text-sm font-black text-accent">{label}</p>
              <h3 className="mt-3 text-2xl font-black leading-snug">{title}</h3>
            </div>
          </article>
        ))}
      </div>
      <ul className="mt-6 grid gap-3 md:grid-cols-3">
        {[["2021", "법인 설립"], ["50+", "주요 분야 전문 인력"], ["3", "부산, 서울, 통영 거점"]].map(([num, label]) => (
          <li key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <strong className="block text-3xl font-black text-accent">{num}</strong>
            <span className="mt-2 block text-white/75">{label}</span>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-background px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
      <SectionHead eyebrow="Process" title="공항 조류 영향 검토 흐름" />
      <div className="grid gap-4 lg:grid-cols-3">
        {["조류 서식지 분석 및 정밀조사", "항공기 조류 충돌 위험 평가", "운영 영향 최소화 방안과 관리계획 제시"].map((item, index) => (
          <article key={item} className="rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-sm font-black text-primary-foreground">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
            <h3 className="mt-5 text-xl font-black leading-snug text-primary">{item}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">현장 조사 결과와 모델링 데이터를 연결해 실행 가능한 관리 방안을 정리합니다.</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
