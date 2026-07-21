import { ArrowRight, Bird, FlaskConical, Waves } from "lucide-react"
import { NavLink } from "react-router-dom"

const highlights = [
  { icon: Waves, label: "환경영향 조사·평가" },
  { icon: Bird, label: "조류·해양포유류 모니터링" },
  { icon: FlaskConical, label: "해양수질·퇴적물 분석" },
]

export function LandingHero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-primary">
      <img
        src="/images/landing-hero.png"
        alt="새벽빛이 비치는 바다와 해상풍력 발전기"
        className="animate-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-haein-950/95 via-haein-950/68 to-haein-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-haein-950/82 via-haein-950/15 to-transparent" />
      <div className="scan-layer pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-60" />
      <div className="animate-float-soft pointer-events-none absolute right-[10%] top-[18%] h-40 w-40 rounded-full border border-white/15 bg-white/5 blur-sm" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-2xl">
          <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/45 bg-haein-950/25 px-4 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur-sm">
            <span className="animate-pulse-glow h-1.5 w-1.5 rounded-full bg-haein-300" />
            Marine · Ecology · Environmental Consulting
          </span>

          <h1 className="animate-rise delay-100 mt-6 text-pretty text-4xl font-black leading-tight text-white drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
            현장을 정밀하게 조사하고
            <br />
            <span className="text-haein-300">개발의 영향</span>을
            <br />
            과학적으로 예측합니다
          </h1>

          <p className="animate-rise delay-200 mt-6 max-w-xl text-pretty text-base font-medium leading-relaxed text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-lg">
            해상풍력·공항·항만 개발에 필요한 해양·육상 생태 조사부터 환경영향
            분석과 모델링, 저감방안 수립까지 프로젝트 전 과정을 연결합니다.
          </p>

          <div className="animate-rise delay-300 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <NavLink
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-haein-300 px-5 font-black text-haein-950 transition hover:-translate-y-1 hover:bg-white"
              to="/business"
            >
              분야별 솔루션 확인하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </NavLink>
            <NavLink
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/45 bg-haein-950/20 px-5 font-black text-white transition hover:bg-white/10"
              to="/history"
            >
              회사 연혁 살펴보기
            </NavLink>
          </div>

          <ul className="animate-rise delay-400 mt-12 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-sm font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-haein-950/25 text-haein-300 backdrop-blur-sm">
                  <item.icon className="h-5 w-5" />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="animate-float-soft absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 sm:flex">
        <span className="text-xs font-bold tracking-[0.3em]">SCROLL</span>
        <span className="h-10 w-px bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  )
}
