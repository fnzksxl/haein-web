import { Bird, Waves, Radio, BarChart3, ShieldCheck } from "lucide-react"

const STEPS = [
  {
    icon: Bird,
    title: "바닷새 모니터링",
    items: ["선박기반 바닷새 조사", "위치추적기(GPS) 부착 이동경로 조사", "바닷새 번식지 조사"],
  },
  {
    icon: Waves,
    title: "해양포유류 모니터링",
    items: ["선박기반 목시조사", "견인·설치식 수중하이드로폰 음향조사", "해양포유류 밀도 모델링"],
  },
  {
    icon: Radio,
    title: "수중소음·전자기장 모니터링",
    items: ["수중소음 측정 및 모니터링", "전자기장 측정 모니터링"],
  },
  {
    icon: BarChart3,
    title: "모델링 및 예측 평가",
    items: ["바닷새 밀도·조류충돌 모델링", "주요 서식지·행동권·핵심서식지 분석", "해양포유류 밀도 모델링"],
  },
  {
    icon: ShieldCheck,
    title: "해양포유류 완화작업",
    items: ["완화작업 범위 모니터링", "ADD 운용을 통한 해양포유류 회피", "PAM 운용을 통한 모니터링"],
  },
]

export function OffshoreWindSection() {
  return (
    <section id="offshore" className="scroll-mt-20 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-8 md:py-28 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">01 · 신재생에너지</span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-primary sm:text-4xl">
            해상풍력 환경영향평가
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            재생에너지 분야, 특히 해상풍력발전 단지의 환경영향평가에서 폭넓은 전문성과 경험을
            자랑합니다. 조류(바닷새), 해양포유류, 해양환경, 생태계를 중점적으로 연구하며, 바닷새의
            이동경로와 해양포유류의 행동 특성에 관한 심층 연구를 통해 개발로 인한 영향을 예측하고
            완화 방법을 제시합니다.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <img
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1000&auto=format&fit=crop"
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
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                </div>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
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
    </section>
  )
}
