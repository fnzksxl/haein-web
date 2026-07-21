import { Binoculars, Map, BarChart3, ClipboardList, ChevronRight } from "lucide-react"

const FLOW = [
  { icon: Binoculars, title: "조류 정밀조사", items: ["조류 이동경로", "조류서식지 현황", "공간 이용현황"] },
  { icon: Map, title: "공간분포 특성분석", items: ["종별 시공간적 분포특성 분석", "종별 이동특성 분석"] },
  {
    icon: BarChart3,
    title: "모델링 및 예측평가",
    items: ["조류 충돌 모델링 수행", "충돌가능성·심각성 평가", "시기별 주요 관리 대상종 도출"],
  },
  {
    icon: ClipboardList,
    title: "관리계획 제시",
    items: ["시기별 주요 관리구역·조류종 제시", "안전한 항공인프라 구축 방안 제시"],
  },
]

const LEVELS = ["매우낮음", "낮음", "보통", "높음", "매우높음"]

// risk score → color band
function riskClass(strike: number, damage: number) {
  const score = strike + damage
  if (score <= 3) return "bg-[oklch(0.86_0.13_150)]" // green - 낮은위험
  if (score <= 5) return "bg-[oklch(0.88_0.15_95)]" // yellow - 중간위험
  return "bg-[oklch(0.72_0.16_25)]" // red - 고위험
}

const OUTCOMES = [
  "조류 서식지 분석",
  "항공기–조류 충돌 위험 평가",
  "공항 운영과 서식지 영향 최소화 방안",
  "조류 서식지 보전과 개발의 균형 유지",
]

export function AirportSection() {
  return (
    <section
      id="airport"
      className="scroll-mt-20 border-y border-blue-100/70 bg-gradient-to-b from-white via-sky-50/70 to-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">02 · 공항 개발</span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-primary sm:text-4xl">
            생태계를 고려한 공항 개발 솔루션
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            환경영향모델링을 통해 공항 건설로 인한 생태적 영향을 사전에 예측하고, 조류 서식지
            보호를 위한 보전 방안과 충돌 저감 시설 등 다양한 환경적 완화 솔루션을 설계합니다.
          </p>
        </div>

        {/* Process flow */}
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {FLOW.map((step, i) => (
            <div key={step.title} className="relative flex flex-col rounded-2xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <step.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">
                <span className="text-accent">{String(i + 1).padStart(2, "0")}.</span> {step.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              {i < FLOW.length - 1 && (
                <ChevronRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-accent lg:block" />
              )}
            </div>
          ))}
        </div>

        {/* Risk matrix */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="h-full rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-bold text-primary">충돌 위험 평가 매트릭스</h3>
              <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-bold text-haein-700">
                평가 지표 예시
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              해인생태연구소가 프로젝트 검토에 활용하는 지표 중 하나를 예시로 구성했습니다.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Probability of strikes (충돌 가능성) × Probability of damage (충돌 심각성)
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse text-center text-xs sm:text-sm">
                <thead>
                  <tr>
                    <th className="border border-border bg-primary p-2 text-primary-foreground">
                      심각성 \ 가능성
                    </th>
                    {LEVELS.map((l) => (
                      <th key={l} className="border border-border bg-primary/90 p-2 font-semibold text-primary-foreground">
                        {l}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {LEVELS.map((rowLabel, r) => (
                    <tr key={rowLabel}>
                      <th className="border border-border bg-secondary p-2 font-semibold text-foreground">
                        {rowLabel}
                      </th>
                      {LEVELS.map((_, c) => (
                        <td
                          key={c}
                          className={`${riskClass(c, r)} border border-border/40 p-3 font-medium text-primary`}
                        >
                          {c + r <= 3 ? (r === 1 && c === 1 ? "낮은위험" : "") : c + r === 4 ? (r === 2 && c === 2 ? "중간위험" : "") : r === 3 && c === 3 ? "고위험" : ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-sm bg-[oklch(0.86_0.13_150)]" /> 낮은위험
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-sm bg-[oklch(0.88_0.15_95)]" /> 중간위험
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-sm bg-[oklch(0.72_0.16_25)]" /> 고위험
              </span>
            </div>
          </div>

          <div className="flex h-full flex-col rounded-2xl border border-sky-100 bg-sky-50/70 p-7">
            <h3 className="text-lg font-bold text-primary">개발과 보전의 균형</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              조사에서 관리까지 이어지는 통합 프로세스로 자연생태계와 공존하는 안전한 항공 인프라를
              구축합니다.
            </p>
            <ol className="mt-6 grid flex-1 content-between gap-5">
              {OUTCOMES.map((o, i) => (
                <li key={o} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-[15px] font-semibold leading-6 text-foreground">{o}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
