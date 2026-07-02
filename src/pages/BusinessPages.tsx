import { NavLink, useParams } from "react-router-dom"
import { PageHero } from "../components/layout"
import { businessDetails } from "../data"
import { OffshoreWindSection } from "../components/offshore-wind-section"
import { AirportSection } from "../components/airport-section"
import { MarineSurveySection } from "../components/marine-survey-section"
import { TerrestrialLabSection } from "../components/terrestrial-lab-section"

export function BusinessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Business"
        title="조사와 예측을 연결하는 통합 사업"
        body="개발 현장의 특성에 맞춘 여섯 가지 전문 영역에서 조사·분석·모델링·완화 방안을 통합 제공합니다."
      />
      <Business />
    </main>
  )
}

export function BusinessDetailPage() {
  const { slug } = useParams()
  const pages = {
    "renewable-energy": {
      title: "해상풍력 환경영향평가",
      subtitle: "해상풍력 개발 영향 예측과 저감방안",
      image: "/business/renewable-energy-banner.jpg",
      summary:
        "해상풍력 개발이 바닷새, 해양포유류, 해양환경에 미치는 복합 영향을 분석하고 완화 방안을 제시합니다.",
      services: [
        "바닷새 모니터링",
        "해양포유류 모니터링",
        "수중소음·전자기장 측정",
        "모델링 및 예측평가",
      ],
      process: [
        "현장 조사 설계",
        "장비 기반 모니터링",
        "영향 예측 모델링",
        "저감방안 제시",
      ],
      achievement: "해상풍력 분야",
      equipment: "해양 생태계",
    },
    airport: {
      title: "공항 개발 생태 컨설팅",
      subtitle: "생태계를 고려한 공항 개발 솔루션",
      image: "/business/airport-banner.jpg",
      summary:
        "환경영향모델링을 통해 공항 건설로 인한 생태적 영향을 사전에 예측하고, 조류 서식지 보호와 충돌 저감 방안을 설계합니다.",
      services: [
        "조류 정밀조사",
        "공간분포 특성분석",
        "모델링 및 예측평가",
        "관리계획 제시",
      ],
      process: [
        "조류 이동경로 조사",
        "서식지 및 공간 이용 분석",
        "충돌 가능성 평가",
        "관리구역·저감시설 제안",
      ],
      achievement: "공항 개발 및 건설 분야",
      equipment: "육상 생태계",
    },
    "marine-environment": {
      title: "해양환경 정밀조사",
      subtitle: "해양생물·수질·퇴적물 조사",
      image: "/main/sea-research.jpg",
      summary:
        "플랑크톤, 바닷새, 포유류, 어란·자치어, 조간대·저서생물까지 해양 생태계 전반을 조사합니다.",
      services: [
        "부유생물 조사",
        "바닷새·포유류 조사",
        "어류 및 어란 조사",
        "저서·조간대 조사",
      ],
      process: [
        "조사지점 설정",
        "현장 시료 채취",
        "분류군별 분석",
        "복원·저감방안 제시",
      ],
      achievement: "항만 분야",
      equipment: "해양 생태계",
    },
    "land-ecosystem": {
      title: "육상생태계 및 보호종 조사",
      subtitle: "식생·동물상·육수생태계 현지조사",
      image: "/business/land-ecosystem-banner.jpg",
      summary:
        "식물상, 동물상, 육수생태계와 법정보호종 출현 여부를 확인하고 개발 영향 최소화 방안을 도출합니다.",
      services: [
        "식물상·식생 조사",
        "육상동물상 조사",
        "육수생태계 조사",
        "법정보호종 검토",
      ],
      process: [
        "문헌 및 서식지 검토",
        "현장 생태조사",
        "보호종 확인",
        "보전·저감계획 수립",
      ],
      achievement: "공항 개발 및 건설 분야",
      equipment: "육상 생태계",
    },
    "environment-measurement": {
      title: "무인 모니터링 및 환경 측정",
      subtitle: "드론·자동관측 기반 조사",
      image: "/business/measure-environment-banner.jpg",
      summary:
        "드론과 자동 관측 장비를 활용해 접근이 어려운 지역의 생태 현황을 효율적으로 모니터링합니다.",
      services: ["드론 조사", "자동관측", "환경 계측", "공간 데이터 관리"],
      process: [
        "조사 범위 설정",
        "장비 설치 및 운용",
        "반복 관측",
        "공간 분석 자료화",
      ],
      achievement: "해상풍력 분야",
      equipment: "환경 측정",
    },
    "marine-chemistry": {
      title: "해양화학 분석",
      subtitle: "이화학 정밀 분석실 운영",
      image: "/business/sea-chemical-banner.jpg",
      summary:
        "자체 분석실을 통해 해양수질·퇴적저질의 이화학 분석을 수행하여 신뢰도 높은 데이터를 제공합니다.",
      services: ["시료 채취", "시료 전처리", "화학 성분 분석", "결과 해석"],
      process: [
        "수질·퇴적물 시료 채취",
        "전처리 및 품질관리",
        "실험실 분석",
        "평가 기준 검토",
      ],
      achievement: "항만 분야",
      equipment: "해양화학 및 퇴적물",
    },
  } as const
  const detail =
    pages[(slug || "renewable-energy") as keyof typeof pages] ||
    pages["renewable-energy"]
  const gallery = [
    detail.image,
    "/main/sea-research.jpg",
    "/main/land-ecosystem.jpg",
    "/main/measure-environment.jpg",
  ]

  return (
    <main>
      <section className="relative min-h-[560px] overflow-hidden bg-haein-700 px-5 pb-16 pt-32 text-white md:px-24">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          src={detail.image}
          alt={detail.title}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,26,51,.96),rgba(7,26,51,.58),rgba(7,26,51,.88))]" />
        <div className="scan-layer absolute inset-y-0 left-0 w-1/2 opacity-70" />
        <div className="relative max-w-5xl">
          <p className="animate-rise mb-4 text-sm font-black uppercase text-haein-500">
            Business Detail
          </p>
          <h1 className="animate-rise delay-100 text-4xl font-black leading-tight md:text-6xl">
            {detail.title}
          </h1>
          <p className="animate-rise delay-200 mt-5 text-2xl font-black text-sky-100">
            {detail.subtitle}
          </p>
          <p className="animate-rise delay-300 mt-6 max-w-3xl text-lg leading-8 text-sky-100">
            {detail.summary}
          </p>
        </div>
      </section>
      <section className="bg-sky-50 px-5 py-20 md:px-10 md:py-24">
        <div className="grid gap-5 lg:grid-cols-4">
          {detail.services.map((service, index) => (
            <article
              key={service}
              data-reveal={index % 2 === 0 ? "left" : "right"}
              className="shine-card relative rounded-lg border border-sky-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-haein-700 text-lg font-black text-white">
                {index + 1}
              </div>
              <h2 className="text-xl font-black text-haein-950">
                <span className="text-haein-500">0{index + 1}.</span> {service}
              </h2>
              <ul className="mt-5 grid gap-3">
                {(detail.process[index]
                  ? [detail.process[index]]
                  : detail.process
                ).map((item) => (
                  <li key={item} className="flex gap-3 text-slate-500">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-haein-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-start">
          {slug === "airport" ? (
            <div className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black text-haein-950">
                충돌 위험 평가 매트릭스
              </h2>
              <p className="mt-2 text-slate-500">
                Probability of strikes (충돌 가능성) × Probability of damage
                (충돌 심각성)
              </p>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-center text-sm">
                  <thead>
                    <tr>
                      <th className="border border-sky-100 bg-haein-700 p-3 text-white">
                        심각성 \ 가능성
                      </th>
                      {["매우낮음", "낮음", "보통", "높음", "매우높음"].map(
                        (level) => (
                          <th
                            key={level}
                            className="border border-sky-100 bg-haein-700 p-3 text-white"
                          >
                            {level}
                          </th>
                        ),
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {["매우낮음", "낮음", "보통", "높음", "매우높음"].map(
                      (row, r) => (
                        <tr key={row}>
                          <th className="border border-sky-100 bg-sky-50 p-3 text-haein-950">
                            {row}
                          </th>
                          {[0, 1, 2, 3, 4].map((_, c) => {
                            const score = r + c
                            const cls =
                              score <= 3
                                ? "bg-emerald-300"
                                : score <= 5
                                  ? "bg-yellow-300"
                                  : "bg-red-400"
                            const label =
                              score === 2
                                ? "낮은위험"
                                : score === 4
                                  ? "중간위험"
                                  : score === 6
                                    ? "고위험"
                                    : ""
                            return (
                              <td
                                key={c}
                                className={`border border-sky-100 p-4 font-black text-haein-950 ${cls}`}
                              >
                                {label}
                              </td>
                            )
                          })}
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
              <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <i className="h-3 w-3 rounded-full bg-emerald-300" />
                  낮은위험
                </span>
                <span className="inline-flex items-center gap-2">
                  <i className="h-3 w-3 rounded-full bg-yellow-300" />
                  중간위험
                </span>
                <span className="inline-flex items-center gap-2">
                  <i className="h-3 w-3 rounded-full bg-red-400" />
                  고위험
                </span>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-black uppercase text-haein-500">
                Related Data
              </p>
              <h2 className="mt-2 text-2xl font-black text-haein-950">
                조사·분석 산출물
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {detail.services.map((service, index) => (
                  <div key={service} className="rounded-lg bg-sky-50 p-4">
                    <span className="text-sm font-black text-haein-500">
                      0{index + 1}
                    </span>
                    <p className="mt-2 font-black text-haein-950">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="rounded-lg bg-haein-700 p-8 text-white shadow-xl shadow-haein-950/10">
            <h2 className="text-2xl font-black">개발과 보전의 균형</h2>
            <p className="mt-4 leading-7 text-sky-100">
              조사에서 관리까지 이어지는 통합 프로세스로 자연생태계와 공존하는
              개발 전략을 설계합니다.
            </p>
            <ol className="mt-7 grid gap-4">
              {detail.process.map((step, index) => (
                <li key={step} className="flex items-center gap-4 font-black">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-haein-300 text-sm text-haein-950">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <NavLink
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-4 font-black text-haein-950 transition hover:bg-haein-300"
                to={`/achievements?category=${encodeURIComponent(detail.achievement)}`}
              >
                관련 수행이력 보기
              </NavLink>
              <NavLink
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/20 px-4 font-black text-white transition hover:bg-white/10"
                to={`/equipment?category=${encodeURIComponent(detail.equipment)}`}
              >
                관련 장비 보기
              </NavLink>
            </div>
          </div>
        </div>
      </section>{" "}
    </main>
  )
}

function Business() {
  const values = [
    [
      "현장 기반 정밀조사",
      "선박·드론·수중 하이드로폰 등 다양한 장비로 현장 중심의 데이터를 수집합니다.",
    ],
    [
      "과학적 모델링·예측",
      "밀도·이동·충돌 모델링으로 개발이 생태계에 미치는 영향을 사전에 예측하고 평가합니다.",
    ],
    [
      "실질적 저감 방안",
      "예측 결과를 바탕으로 완화작업과 관리계획을 수립하여 생태계 보전을 위한 해법을 제시합니다.",
    ],
  ] as const
  const stats = [
    ["6", "핵심 사업분야"],
    ["15+", "환경영향평가 경험"],
    ["100+", "생태 조사·모니터링 수행"],
    ["24", "정밀 음향·수질 모니터링"],
  ] as const
  const cards = [
    [
      "01",
      "신재생에너지",
      "해상풍력 환경영향평가",
      "해상풍력 개발이 바닷새·해양포유류·해양환경에 미치는 복합 영향을 분석하고 완화 방안을 제시합니다.",
      "#offshore",
    ],
    [
      "02",
      "공항 개발 솔루션",
      "생태계를 고려한 설계",
      "환경영향모델링을 통해 조류 충돌 위험을 평가하고, 안전한 항공 인프라 관리계획을 수립합니다.",
      "#airport",
    ],
    [
      "03",
      "해양환경 조사",
      "해양생물·수질 정밀조사",
      "플랑크톤, 바닷새, 포유류, 어란·자치어, 조간대·저서생물까지 해양 생태계 전반을 조사합니다.",
      "#marine",
    ],
    [
      "04",
      "육상생태계 조사",
      "식생·동물상·육수생태계",
      "식물상, 육상동물상, 육수생태계 현지조사로 법정보호종 출현을 확인하고 저감방안을 제시합니다.",
      "#terrestrial",
    ],
    [
      "05",
      "무인 모니터링",
      "드론·자동관측 기반 조사",
      "드론과 자동 관측 장비를 활용해 접근이 어려운 지역의 생태 현황을 효율적으로 모니터링합니다.",
      "#remote",
    ],
    [
      "06",
      "해양화학 분석",
      "이화학 정밀 분석실 운영",
      "자체 분석실을 통해 해양수질·퇴적저질의 이화학 분석을 수행하여 신뢰도 높은 데이터를 제공합니다.",
      "#chemistry",
    ],
  ] as const
  const details = [
    [
      "offshore",
      "01 · 신재생에너지",
      "해상풍력 환경영향평가",
      "해상풍력 개발이 바닷새, 해양포유류, 해양환경에 미치는 복합 영향을 분석하고 완화 방안을 제시합니다.",
      "/business/renewable-energy-banner.jpg",
      [
        "바닷새 모니터링",
        "해양포유류 모니터링",
        "수중소음·전자기장 측정",
        "모델링 및 예측평가",
      ],
    ],
    [
      "airport",
      "02 · 공항 개발",
      "생태계를 고려한 공항 개발 솔루션",
      "환경영향모델링을 통해 공항 건설로 인한 생태적 영향을 사전에 예측하고, 조류 서식지 보호와 충돌 저감 방안을 설계합니다.",
      "/business/airport-banner.jpg",
      [
        "조류 정밀조사",
        "공간분포 특성분석",
        "모델링 및 예측평가",
        "관리계획 제시",
      ],
    ],
    [
      "marine",
      "03 · 해양환경",
      "해양환경 정밀조사",
      "플랑크톤, 바닷새, 포유류, 어란·자치어, 조간대·저서생물까지 해양 생태계 전반을 조사합니다.",
      "/main/sea-research.jpg",
      [
        "부유생물 조사",
        "바닷새·포유류 조사",
        "어류 및 어란 조사",
        "저서·조간대 조사",
      ],
    ],
    [
      "terrestrial",
      "04 · 육상생태계",
      "육상생태계 및 보호종 조사",
      "식물상, 동물상, 육수생태계와 법정보호종 출현 여부를 확인하고 개발 영향 최소화 방안을 도출합니다.",
      "/business/land-ecosystem-banner.jpg",
      [
        "식물상·식생 조사",
        "육상동물상 조사",
        "육수생태계 조사",
        "법정보호종 검토",
      ],
    ],
    [
      "remote",
      "05 · 무인 모니터링",
      "드론·자동관측 기반 조사",
      "드론과 자동관측 장비를 활용해 접근이 어려운 지역의 생태 현황을 효율적으로 모니터링합니다.",
      "/business/measure-environment-banner.jpg",
      ["드론 조사", "자동관측", "환경 계측", "공간 데이터 관리"],
    ],
    [
      "chemistry",
      "06 · 해양화학",
      "이화학 정밀 분석 운영",
      "자체 분석실을 통해 해양수질·퇴적저질의 화학 분석을 수행하여 신뢰도 높은 데이터를 제공합니다.",
      "/business/sea-chemical-banner.jpg",
      ["시료 채취", "시료 전처리", "화학 성분 분석", "결과 해석"],
    ],
  ] as const

  return (
    <>
      <section className="bg-white px-5 pb-20 pt-32 md:px-24 md:pb-24 md:pt-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal="left">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-haein-500">
              About Us
            </p>
            <h1 className="mt-4 max-w-xl text-3xl font-black leading-tight text-haein-950 md:text-5xl">
              생태계를 이해하고, 공존의 방법을 설계합니다
            </h1>
            <p className="mt-6 max-w-2xl leading-8 text-slate-500">
              해인생태연구소는 해양동물과 해양생물, 해양환경, 그리고 육상 생태계
              전반에 대한 정밀조사와 분석을 수행합니다. 개발과 자연이 조화를
              이루는 지속가능한 솔루션을 제공합니다.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-sky-100 pt-8">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <dt className="text-4xl font-black text-haein-500">
                    {value}
                    <span className="ml-1 text-lg text-haein-500">
                      {value === "6" ? "대" : value === "24" ? "시간" : ""}
                    </span>
                  </dt>
                  <dd className="mt-1 text-sm text-slate-500">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div data-reveal="right" className="grid gap-4">
            {values.map(([title, body], index) => (
              <article
                key={title}
                className="rounded-lg border border-sky-100 bg-white p-6 shadow-sm"
              >
                <div className="flex gap-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-50 font-black text-haein-500">
                    0{index + 1}
                  </span>
                  <div>
                    <h2 className="font-black text-haein-950">{title}</h2>
                    <p className="mt-2 leading-7 text-slate-500">{body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-50 px-5 py-20 md:px-24 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-haein-500">
              Business Areas
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-haein-950 md:text-5xl">
              주요 사업분야
            </h2>
            <p className="mt-5 leading-8 text-slate-500">
              개발 현장의 특성에 맞춘 여섯 가지 전문 영역에서
              조사·분석·모델링·완화 방안을 통합 제공합니다.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cards.map(([num, title, subtitle, body, href], index) => (
              <a
                key={title}
                href={href}
                data-reveal={index % 2 === 0 ? "left" : "right"}
                className="shine-card group rounded-lg border border-sky-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-haein-300 hover:shadow-xl hover:shadow-haein-950/10"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-xl bg-haein-700 font-black text-white">
                    {num}
                  </span>
                  <span className="text-sm font-black text-slate-300">
                    {num}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-black text-haein-950">
                  {title}
                </h3>
                <p className="mt-1 text-sm font-black text-haein-500">
                  {subtitle}
                </p>
                <p className="mt-4 leading-7 text-slate-500">{body}</p>
                <span className="mt-6 inline-flex text-sm font-black text-haein-500">
                  자세히 보기 ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <OffshoreWindSection />
      <AirportSection />
      <MarineSurveySection />
      <TerrestrialLabSection />
    </>
  )
}
