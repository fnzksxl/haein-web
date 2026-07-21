import { useEffect, useMemo, useState } from "react"
import { useLocation } from "react-router-dom"
import { PageHero } from "../components/layout"
import { categoryCopy } from "../data"
import type {
  AchievementMap,
  DisplayEquipment,
  EquipmentMap,
  Project,
} from "../types"

export function AchievementsPage({
  achievements,
}: {
  achievements: AchievementMap
}) {
  const location = useLocation()
  const categories = useMemo(() => Object.keys(achievements), [achievements])
  const requestedCategory =
    new URLSearchParams(location.search).get("category") || categories[0] || ""
  const [activeCategory, setActiveCategory] = useState(requestedCategory)
  const currentCategory =
    categories.indexOf(activeCategory) >= 0
      ? activeCategory
      : categories[0] || ""
  const projects = achievements[currentCategory] || []
  const total = Object.keys(achievements).reduce(
    (sum, key) => sum + achievements[key].length,
    0,
  )

  useEffect(() => {
    if (categories.indexOf(requestedCategory) >= 0)
      setActiveCategory(requestedCategory)
  }, [categories, requestedCategory])

  return (
    <main>
      <PageHero
        eyebrow=""
        title=""
        body="공항 개발, 해상풍력, 항만 분야의 실제 수행 이력을 분야별로 확인할 수 있습니다."
        intro={{ section: "Achievements", title: "분야별 수행 이력" }}
        image="/business/achievements-hero.png"
      />
      <Achievements
        achievements={achievements}
        activeCategory={currentCategory}
        categories={categories}
        projects={projects}
        setCategory={setActiveCategory}
        total={total}
      />
    </main>
  )
}

export function EquipmentPage({ equipments }: { equipments: EquipmentMap }) {
  const location = useLocation()
  const requestedCategory =
    new URLSearchParams(location.search).get("category") || ""
  const categories = useMemo(() => Object.keys(equipments), [equipments])
  const [activeCategory, setActiveCategory] = useState(
    requestedCategory || categories[0] || "",
  )
  const currentCategory =
    categories.indexOf(activeCategory) >= 0
      ? activeCategory
      : categories[0] || ""
  const groups = equipments[currentCategory] || {}
  const groupNames = Object.keys(groups)
  const [activeGroup, setActiveGroup] = useState("")
  const currentGroup = groupNames.indexOf(activeGroup) >= 0 ? activeGroup : ""
  const items: DisplayEquipment[] = Object.entries(groups).flatMap(
    ([group, list]) =>
      currentGroup && currentGroup !== group
        ? []
        : list.map((item) => ({ ...item, group })),
  )

  useEffect(() => {
    if (requestedCategory) setActiveCategory(requestedCategory)
  }, [requestedCategory])

  return (
    <main>
      <PageHero
        eyebrow=""
        title=""
        body="현장 조사와 실험 분석에 사용하는 주요 장비를 분야별로 정리했습니다."
        intro={{ section: "Equipment", title: "분야별 보유 장비" }}
        image="/equipments/hero.png"
      />
      <Equipment
        activeCategory={currentCategory}
        activeGroup={currentGroup}
        categories={categories}
        groups={groupNames}
        items={items}
        setCategory={(category) => {
          setActiveCategory(category)
          setActiveGroup("")
        }}
        setGroup={setActiveGroup}
      />
    </main>
  )
}

function Achievements({
  achievements,
  activeCategory,
  categories,
  projects,
  setCategory,
  total,
}: {
  achievements: AchievementMap
  activeCategory: string
  categories: string[]
  projects: Project[]
  setCategory: (category: string) => void
  total: number
}) {
  const [query, setQuery] = useState("")
  const filteredProjects = projects.filter((project) =>
    `${project.year} ${project.title} ${project.explain}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  )
  const categoryIndex = Math.max(0, categories.indexOf(activeCategory))
  const tones = [
    {
      border: "border-l-blue-500",
      dot: "bg-blue-500",
      text: "text-blue-600",
    },
    {
      border: "border-l-emerald-500",
      dot: "bg-emerald-500",
      text: "text-emerald-600",
    },
    {
      border: "border-l-amber-500",
      dot: "bg-amber-500",
      text: "text-amber-600",
    },
  ]

  useEffect(() => setQuery(""), [activeCategory])

  return (
    <section className="min-h-screen bg-slate-50 px-5 pb-20 pt-10 md:px-24 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-4">
          <Stat active number={total || 0} label="전체 프로젝트" />
          {categories.map((category) => (
            <Stat
              key={category}
              active={category === activeCategory}
              number={(achievements[category] || []).length}
              label={category}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <label className="relative block">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                ⌕
              </span>
              <span className="sr-only">수행이력 검색</span>
              <input
                className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm font-bold text-haein-950 outline-none transition placeholder:text-slate-400 focus:border-haein-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="프로젝트 검색"
              />
            </label>

            <div className="mt-6 grid gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`flex min-w-0 items-center gap-3 rounded-xl px-4 py-3 text-left font-black transition ${category === activeCategory ? "bg-haein-700 text-white shadow-md shadow-haein-700/20" : "text-slate-600 hover:bg-sky-50 hover:text-haein-700"}`}
                  type="button"
                  onClick={() => setCategory(category)}
                  title={category}
                >
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${category === activeCategory ? "bg-white" : tones[index % tones.length].dot}`}
                  />
                  <span className="min-w-0 flex-1 leading-5">{category}</span>
                  <span className="shrink-0 rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500 group-hover:text-haein-700">
                    {(achievements[category] || []).length}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div>
            <div className="flex flex-col gap-3 border-b-2 border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-haein-500">
                  Selected Field
                </p>
                <h2 className="mt-2 text-2xl font-black text-haein-950">
                  {activeCategory}
                </h2>
              </div>
              <span className="font-bold text-slate-500">
                {filteredProjects.length}건의 프로젝트
              </span>
            </div>

            <div className="mt-5 grid gap-4">
              {filteredProjects.map((project) => (
                <article
                  key={`${project.year}-${project.title}`}
                  className={`grid gap-5 rounded-2xl border border-l-4 border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg md:grid-cols-[110px_1fr_90px] md:items-center ${tones[categoryIndex % tones.length].border}`}
                >
                  <span
                    className={`inline-flex w-fit rounded-lg bg-slate-50 px-3 py-2 text-xs font-black ${tones[categoryIndex % tones.length].text}`}
                  >
                    {activeCategory.replace(" 분야", "")}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-haein-950">
                      {project.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {project.explain}
                    </p>
                  </div>
                  <time className="font-black text-slate-400 md:text-right">
                    {project.year}
                  </time>
                </article>
              ))}
              {filteredProjects.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center font-bold text-slate-500">
                  검색 결과가 없습니다.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function Stat({
  number,
  label,
  active = false,
}: {
  number: number
  label: string
  active?: boolean
}) {
  return (
    <article
      className={`shine-card overflow-hidden rounded-lg border p-7 shadow-sm transition hover:-translate-y-1 ${active ? "border-haein-700 bg-haein-700 text-white" : "border-slate-200 bg-white"}`}
    >
      <strong
        className={`block text-4xl font-black ${active ? "text-white" : "text-haein-700"}`}
      >
        {number}
      </strong>
      <span
        className={`mt-2 block text-sm font-bold ${active ? "text-sky-100" : "text-slate-600"}`}
      >
        {label}
      </span>
    </article>
  )
}

function Equipment({
  activeCategory,
  activeGroup,
  categories,
  groups,
  items,
  setCategory,
  setGroup,
}: {
  activeCategory: string
  activeGroup: string
  categories: string[]
  groups: string[]
  items: DisplayEquipment[]
  setCategory: (category: string) => void
  setGroup: (group: string) => void
}) {
  const pageSize = 8
  const [page, setPage] = useState(1)
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize))
  const pagedItems = items.slice((page - 1) * pageSize, page * pageSize)

  useEffect(() => setPage(1), [activeCategory, activeGroup, items.length])

  return (
    <section className="bg-slate-50 px-5 pb-20 pt-10 md:px-24 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-lg border border-sky-100 bg-white p-5 shadow-sm">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-haein-500">
              Equipment Category
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-lg px-4 py-4 text-left font-black transition ${category === activeCategory ? "bg-haein-700 text-white shadow-md shadow-haein-700/20" : "bg-sky-50 text-haein-950 hover:bg-sky-100"}`}
                  type="button"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 border-t border-sky-100 pt-6">
            <p className="text-sm font-black uppercase text-haein-500">
              {activeCategory}
            </p>
            <p className="mt-2 leading-7 text-slate-500">
              {categoryCopy[activeCategory] ||
                "현장 조사와 분석에 사용하는 장비입니다."}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                className={`rounded-full px-4 py-2 text-sm font-black ${!activeGroup ? "bg-haein-700 text-white" : "bg-sky-50 text-haein-500 hover:bg-sky-100"}`}
                type="button"
                onClick={() => setGroup("")}
              >
                전체
              </button>
              {groups.map((group) => (
                <button
                  key={group}
                  className={`rounded-full px-4 py-2 text-sm font-black ${group === activeGroup ? "bg-haein-700 text-white" : "bg-sky-50 text-haein-500 hover:bg-sky-100"}`}
                  type="button"
                  onClick={() => setGroup(group)}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pagedItems.map((item) => (
            <article
              key={`${item.group}-${item.name}-${item.thumnailSrc}`}
              className="group overflow-hidden rounded-sm border border-slate-400 bg-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-haein-950/10"
            >
              <img
                className="aspect-[4/3] w-full bg-slate-100 object-cover transition duration-500 group-hover:scale-105"
                src={item.thumnailSrc}
                alt={item.name}
              />
              <div className="p-4">
                <span className="inline-flex bg-sky-100 px-2 py-1 text-[11px] font-black text-haein-700">
                  {item.group}
                </span>
                <h3 className="mt-2 min-h-12 text-base font-black leading-snug text-black">
                  {item.name || "장비"}
                </h3>
                <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-sm">
                  <span className="text-slate-500">보유 수량</span>
                  <strong className="text-lg font-black text-haein-700">
                    {item.quantity ? `${item.quantity}대` : "-"}
                  </strong>
                </div>
              </div>
            </article>
          ))}
        </div>
        {pageCount > 1 ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              className="rounded-lg border border-sky-100 bg-white px-4 py-2 text-sm font-black text-haein-700 disabled:cursor-not-allowed disabled:opacity-40"
              type="button"
              disabled={page === 1}
              onClick={() => setPage((value) => Math.max(1, value - 1))}
            >
              이전
            </button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map(
              (number) => (
                <button
                  key={number}
                  className={`h-10 w-10 rounded-lg text-sm font-black ${number === page ? "bg-haein-700 text-white" : "border border-sky-100 bg-white text-haein-700"}`}
                  type="button"
                  onClick={() => setPage(number)}
                >
                  {number}
                </button>
              ),
            )}
            <button
              className="rounded-lg border border-sky-100 bg-white px-4 py-2 text-sm font-black text-haein-700 disabled:cursor-not-allowed disabled:opacity-40"
              type="button"
              disabled={page === pageCount}
              onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
            >
              다음
            </button>
          </div>
        ) : null}
      </div>
    </section>
  )
}
