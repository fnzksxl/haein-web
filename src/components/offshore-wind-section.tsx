import { useRef } from "react"
import {
  BarChart3,
  Bird,
  Clock3,
  Radio,
  ShieldCheck,
  Waves,
  X,
} from "lucide-react"

const STEPS = [
  {
    icon: Bird,
    title: "바닷새 모니터링",
    items: [
      "선박기반 바닷새 조사",
      "위치추적기(GPS) 부착 이동경로 조사",
      "바닷새 번식지 조사",
    ],
  },
  {
    icon: Waves,
    title: "해양포유류 모니터링",
    items: [
      "선박기반 목시조사",
      "견인·설치식 수중하이드로폰 음향조사",
      "해양포유류 밀도 모델링",
    ],
  },
  {
    icon: Radio,
    title: "수중소음·전자기장 모니터링",
    items: ["수중소음 측정 및 모니터링", "전자기장 측정 모니터링"],
  },
  {
    icon: BarChart3,
    title: "모델링 및 예측 평가",
    items: [
      "바닷새 밀도·조류충돌 모델링",
      "주요 서식지·행동권·핵심서식지 분석",
      "해양포유류 밀도 모델링",
    ],
  },
  {
    icon: ShieldCheck,
    title: "해양포유류 완화작업",
    items: [
      "완화작업 범위 모니터링",
      "ADD 운용을 통한 해양포유류 회피",
      "PAM 운용을 통한 모니터링",
    ],
  },
]

export function OffshoreWindSection() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  return (
    <section
      id="offshore"
      className="scroll-mt-20 border-y border-sky-100/70 bg-gradient-to-b from-sky-50/80 via-white to-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
              01 · 신재생에너지
            </span>
            <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-primary sm:text-4xl">
              해상풍력 환경영향평가
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              재생에너지 분야, 특히 해상풍력발전 단지의 환경영향평가에서 폭넓은
              전문성과 경험을 자랑합니다. 조류(바닷새), 해양포유류, 해양환경,
              생태계를 중점적으로 연구하며, 바닷새의 이동경로와 해양포유류의
              행동 특성에 관한 심층 연구를 통해 개발로 인한 영향을 예측하고 완화
              방법을 제시합니다.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <img
                src="/business/offshore-wind-farm.png"
                alt="해상풍력 발전 단지 전경"
                className="h-56 w-full object-cover"
              />
            </div>
          </div>

          <ol className="relative space-y-4 border-l-2 border-dashed border-border pl-6 md:pl-8">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[35px] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-black text-primary-foreground md:-left-[43px]">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {step.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="relative mt-10 overflow-hidden rounded-3xl border border-sky-100 bg-white p-7 text-haein-950 shadow-xl shadow-haein-950/10 md:p-9">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-haein-700/10" />
          <div className="pointer-events-none absolute -right-4 -top-8 h-36 w-36 rounded-full border border-haein-700/10" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <img
                className="block h-12 w-auto"
                src="/ravian_logo.svg"
                alt="RAVIAN"
              />
              <span className="mt-4 inline-flex text-xs font-black uppercase tracking-[0.2em] text-haein-500">
                AI Avian Monitoring System · Coming soon
              </span>
              <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">
                해상풍력단지 무인 조류 모니터링 시스템
              </h3>
              <p className="mt-3 leading-7 text-slate-500">
                해상풍력단지의 조류를 상시 관측하고 기록하는 시스템의 웹페이지를
                준비 중 입니다.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-haein-700 px-5 font-black text-white transition hover:-translate-y-1 hover:bg-haein-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-haein-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              onClick={() => dialogRef.current?.showModal()}
            >
              <Clock3 className="h-4 w-4" />
              오픈 안내
            </button>
          </div>
        </aside>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="specialized-site-title"
        aria-describedby="specialized-site-description"
        className="w-[min(92vw,480px)] rounded-3xl bg-white p-0 text-foreground shadow-2xl backdrop:bg-haein-950/75 backdrop:backdrop-blur-sm"
        onClick={(event) =>
          event.target === event.currentTarget && dialogRef.current?.close()
        }
      >
        <div className="relative p-7 md:p-8">
          <button
            type="button"
            aria-label="안내 창 닫기"
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full text-slate-400 transition hover:bg-sky-50 hover:text-haein-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-haein-500"
            onClick={() => dialogRef.current?.close()}
          >
            <X className="h-5 w-5" />
          </button>
          <img className="h-14 w-auto" src="/ravian_logo.svg" alt="RAVIAN" />
          <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-haein-500">
            Coming soon
          </p>
          <h2
            id="specialized-site-title"
            className="mt-2 pr-8 text-2xl font-black leading-tight text-haein-950"
          >
            RAVIAN 홈페이지를 준비하고 있습니다
          </h2>
          <p
            id="specialized-site-description"
            className="mt-4 leading-7 text-slate-500"
          >
            해상풍력단지 무인 조류 모니터링 시스템 RAVIAN의 기능과 운영 정보를
            담은 별도 홈페이지가 곧 공개됩니다.
          </p>
          <form method="dialog" className="mt-7">
            <button
              type="submit"
              className="min-h-12 w-full rounded-lg bg-haein-700 px-5 font-black text-white transition hover:bg-haein-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-haein-500 focus-visible:ring-offset-2"
            >
              확인
            </button>
          </form>
        </div>
      </dialog>
    </section>
  )
}
