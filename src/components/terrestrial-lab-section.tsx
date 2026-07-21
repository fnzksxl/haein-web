import {
  Trees,
  PawPrint,
  Droplets,
  FlaskConical,
  Microscope,
} from "lucide-react"

const TERRESTRIAL = [
  {
    icon: Trees,
    title: "식물상 및 식생",
    desc: "대표 분류군의 현지조사를 통한 식물상·식생 구조 파악 및 법정보호종 확인",
  },
  {
    icon: PawPrint,
    title: "육상동물상",
    desc: "포유류·조류·양서파충류·곤충류 등 육상동물의 서식 현황 및 출현종 조사",
  },
  {
    icon: Droplets,
    title: "육수생태계",
    desc: "어류·저서성 동물·부착조류 등 담수 생태계의 대표 분류군 현지조사",
  },
]

export function TerrestrialLabSection() {
  return (
    <section
      id="terrestrial"
      className="scroll-mt-20 border-y border-emerald-100/70 bg-gradient-to-b from-emerald-50/70 via-white to-sky-50/50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
            04 · 육상생태계
          </span>
          <h2 className="mt-3 text-balance text-3xl font-black leading-tight text-primary sm:text-4xl">
            육상생태계 조사
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            식물, 동물, 수생태계 등 생태계 전반의 대표 분류군 현지조사를
            수행하며, 법정보호종 (멸종위기 야생생물·천연기념물 등)과 학술적
            가치가 높은 종의 출현 여부를 확인하여 사업 시행으로 인한 영향 예측과
            저감방안을 수립·제시합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TERRESTRIAL.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <t.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Marine chemistry lab */}
        <div className="mt-16 grid gap-8 rounded-3xl border border-border bg-card p-6 md:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              <Microscope className="h-4 w-4" /> 05 · 해양화학 분석
            </span>
            <h3 className="mt-3 text-balance text-2xl font-black leading-tight text-primary sm:text-3xl">
              자체 분석실 기반의 정밀 이화학 분석
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              해양수질과 해양저질의 이화학 분석을 수행하는 전용 분석실을
              운영합니다. 현장 시료의 신속한 처리와 정밀 분석을 통해 신뢰도 높은
              데이터를 제공하며, 조사 전 과정을 일관된 품질로 관리합니다.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                "해양수질 분석",
                "해양저질 분석",
                "이화학 정밀 측정",
                "품질관리(QA/QC)",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <FlaskConical className="h-4 w-4 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="public\brochure\extracted\page-10\image-01.jpg"
              alt="해양화학 분석실 내부"
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src="public\brochure\extracted\page-10\image-02.jpg"
              alt="정밀 분석 장비"
              className="h-48 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
