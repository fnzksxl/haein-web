import { ArrowRight, Bird, FlaskConical, Waves } from "lucide-react";
import { NavLink } from "react-router-dom";

const highlights = [
  { icon: Waves, label: "해양환경영향평가" },
  { icon: Bird, label: "조류·해양포유류 모니터링" },
  { icon: FlaskConical, label: "해양화학 정밀분석" },
];

export function LandingHero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-primary">
      <img
        src="/images/landing-hero.png"
        alt="새벽 바다와 해상풍력 발전기"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-haein-950/95 via-haein-950/68 to-haein-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-haein-950/80 via-haein-950/15 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-haein-950/25 px-4 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-haein-300" />
            HAEIN Ecological Research Institute
          </span>

          <h1 className="mt-6 text-pretty text-4xl font-black leading-tight text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
            바다와 자연,
            <br />
            그리고 <span className="text-haein-300">지속가능한 개발</span>의
            <br />
            균형을 연구합니다
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base font-medium leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-lg">
            해인생태연구소는 해상풍력·공항·항만 개발의 환경영향을 과학적으로 예측하고, 해양과 육상 생태계를 정밀하게 조사하여 자연과 인간이 공존하는 해법을 제시합니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <NavLink className="inline-flex min-h-12 items-center justify-center rounded-lg bg-haein-300 px-5 font-black text-haein-950 transition hover:-translate-y-1 hover:bg-white" to="/business">
              사업분야 살펴보기
              <ArrowRight className="ml-2 h-4 w-4" />
            </NavLink>
            <NavLink className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/45 bg-haein-950/20 px-5 font-black text-white transition hover:bg-white/10" to="/history">
              연구소 소개
            </NavLink>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-haein-950/25 text-haein-300 backdrop-blur-sm">
                  <item.icon className="h-5 w-5" />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
