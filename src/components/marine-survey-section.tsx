const CATEGORIES = [
  {
    title: "동·식물 플랑크톤",
    desc: "채수 조사를 통한 동/식물 플랑크톤의 종 조성과 밀도 분석",
    img: "https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=800&auto=format&fit=crop",
    tags: ["채수 조사", "종 조성 분석"],
  },
  {
    title: "바닷새 / 포유류 조사",
    desc: "선박기반 목시조사로 고래류·기각류 등 해양포유류와 바닷새 관찰",
    img: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?q=80&w=800&auto=format&fit=crop",
    tags: ["목시조사", "개체 식별"],
  },
  {
    title: "어란 및 자치어",
    desc: "네트 채집을 통한 어란·자치어 분포 및 산란장 특성 조사",
    img: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?q=80&w=800&auto=format&fit=crop",
    tags: ["네트 채집", "산란장 조사"],
  },
  {
    title: "조간대 생물",
    desc: "조간대 방형구 조사로 부착생물·해조류 등 생물상 파악",
    img: "https://images.unsplash.com/photo-1780403323161-a112e08d79f2?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["방형구 조사", "생물상 파악"],
  },
  {
    title: "저서 조사",
    desc: "저질 채취를 통한 저서동물 군집 구조 및 서식 환경 분석",
    img: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=800&auto=format&fit=crop",
    tags: ["저질 채취", "군집 분석"],
  },
]

export function MarineSurveySection() {
  return (
    <section
      id="marine"
      className="scroll-mt-20 border-y border-cyan-100/70 bg-gradient-to-b from-cyan-50/80 via-white to-sky-50/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            03 · 해양환경
          </span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-primary sm:text-4xl">
            해양환경 조사
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            해양동물(해양포유류·바닷새·해양파충류),
            해양생물(해산어류·저서동물·플랑크톤·어란·자치어), 해양환경(수질·저질
            이화학분석)에 대한 종합 조사를 수행합니다. 해상풍력단지,
            항만·공항·어항 개발, 보호구역 및 보호종에 대한 정밀 모니터링과
            복원을 주요 조사 지역으로 합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={c.img || "/placeholder.svg"}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
