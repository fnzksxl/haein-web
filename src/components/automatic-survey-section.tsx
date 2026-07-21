import { Camera, Clock3, Map, Radio, Waves } from "lucide-react"

const MODES = [
  {
    label: "Remote observation",
    icon: Radio,
    image: "/business/drone-observation.jpg",
    imageAlt: "해안에서 항공 드론을 원격 조종해 관측하는 조사자",
    title: "원격 관측(드론)",
    description:
      "조사자가 현장에서 항공 드론과 수중 드론을 직접 조종해 사람이 접근하기 어려운 구간의 상태를 실시간으로 확인하고 기록합니다.",
    features: [
      [
        Map,
        "항공 드론",
        "서식지와 지형을 상공에서 촬영해 공간 정보를 확보합니다.",
      ],
      [Waves, "수중 드론", "수중 구조물과 생태 현황을 영상으로 관찰합니다."],
      [
        Radio,
        "현장 원격 운용",
        "조사 목적과 현장 조건에 맞춰 이동 경로와 촬영 지점을 조정합니다.",
      ],
    ],
  },
  {
    label: "Automatic observation",
    icon: Camera,
    image: "",
    imageAlt: "",
    title: "자동 관측",
    description:
      "현장에 고정형 카메라와 기록 장비를 설치해 사람이 상주하기 어려운 지역의 영상을 일정 기간 자동으로 축적합니다.",
    features: [
      [
        Camera,
        "고정형 카메라",
        "대상 지역의 출현과 행동을 지속적으로 기록합니다.",
      ],
      [
        Clock3,
        "장기·반복 관측",
        "동일 지점의 시간대별·기간별 변화를 확인합니다.",
      ],
    ],
  },
] as const

export function AutomaticSurveySection() {
  return (
    <section
      id="remote"
      className="scroll-mt-20 border-y border-slate-200 bg-gradient-to-b from-slate-50 via-sky-50/60 to-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            06 · 원격·자동 관측
          </span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-primary sm:text-4xl">
            사람이 닿기 어려운 현장을<br></br>더 가까이, 더 오래 관측합니다
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            실시간 판단이 필요한 현장에는 원격 조종 드론을, 장기간 변화 기록이
            필요한 지점에는 자동 관측 장비를 적용해 접근의 한계를 줄이고 필요한
            조사 자료를 확보합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {MODES.map((mode, index) => (
            <article
              key={mode.title}
              className="overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-primary">
                {mode.image ? (
                  <>
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={mode.image}
                      alt={mode.imageAlt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-haein-950/70 via-transparent to-transparent" />
                  </>
                ) : (
                  <>
                    <div className="absolute inset-x-12 top-1/2 border-t border-dashed border-haein-300/50" />
                    <div className="absolute left-10 top-10 h-28 w-28 rounded-full border border-white/10" />
                    <div className="absolute right-8 top-6 h-36 w-36 rounded-full border border-white/10" />
                    <span className="relative grid h-20 w-20 place-items-center rounded-full border border-white/20 bg-white/10 text-haein-300 shadow-2xl shadow-black/20 backdrop-blur-sm">
                      <mode.icon className="h-9 w-9" />
                    </span>
                  </>
                )}
                <span className="absolute bottom-5 left-6 text-xs font-black uppercase tracking-[0.2em] text-sky-100/70">
                  {String(index + 1).padStart(2, "0")} · {mode.label}
                </span>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-black text-foreground">
                  {mode.title}
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {mode.description}
                </p>
                <ul className="mt-7 grid gap-4">
                  {mode.features.map(([Icon, title, description]) => (
                    <li
                      key={title}
                      className="flex gap-4 border-t border-border pt-4"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h4 className="font-bold text-foreground">{title}</h4>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
