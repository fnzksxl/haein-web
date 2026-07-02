import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { PageHero, SectionHead } from "../components/layout";
import { categoryCopy } from "../data";
import type { AchievementMap, DisplayEquipment, EquipmentMap, Project } from "../types";

export function AchievementsPage({ achievements }: { achievements: AchievementMap }) {
  const location = useLocation();
  const categories = useMemo(() => Object.keys(achievements), [achievements]);
  const requestedCategory = new URLSearchParams(location.search).get("category") || categories[0] || "";
  const [activeCategory, setActiveCategory] = useState(requestedCategory);
  const currentCategory = categories.indexOf(activeCategory) >= 0 ? activeCategory : categories[0] || "";
  const projects = achievements[currentCategory] || [];
  const total = Object.keys(achievements).reduce((sum, key) => sum + achievements[key].length, 0);

  useEffect(() => {
    if (categories.indexOf(requestedCategory) >= 0) setActiveCategory(requestedCategory);
  }, [categories, requestedCategory]);

  return (
    <main>
      <PageHero eyebrow="Achievements" title="주요 수행 프로젝트" body="공항 개발, 해상풍력, 항만 분야의 실제 수행 이력을 분야별로 확인할 수 있습니다." />
      <Achievements achievements={achievements} activeCategory={currentCategory} categories={categories} projects={projects} setCategory={setActiveCategory} total={total} />
    </main>
  );
}

export function EquipmentPage({ equipments }: { equipments: EquipmentMap }) {
  const location = useLocation();
  const requestedCategory = new URLSearchParams(location.search).get("category") || "";
  const categories = useMemo(() => Object.keys(equipments), [equipments]);
  const [activeCategory, setActiveCategory] = useState(requestedCategory || categories[0] || "");
  const currentCategory = categories.indexOf(activeCategory) >= 0 ? activeCategory : categories[0] || "";
  const groups = equipments[currentCategory] || {};
  const groupNames = Object.keys(groups);
  const [activeGroup, setActiveGroup] = useState("");
  const currentGroup = groupNames.indexOf(activeGroup) >= 0 ? activeGroup : "";
  const items: DisplayEquipment[] = Object.entries(groups).flatMap(([group, list]) => (currentGroup && currentGroup !== group ? [] : list.map((item) => ({ ...item, group }))));

  useEffect(() => {
    if (requestedCategory) setActiveCategory(requestedCategory);
  }, [requestedCategory]);

  return (
    <main>
      <PageHero eyebrow="Equipment" title="조사·분석 장비" body="현장 조사와 실험 분석에 사용하는 주요 장비를 분야별로 정리했습니다." />
      <Equipment activeCategory={currentCategory} activeGroup={currentGroup} categories={categories} groups={groupNames} items={items} setCategory={(category) => { setActiveCategory(category); setActiveGroup(""); }} setGroup={setActiveGroup} />
    </main>
  );
}

function Achievements({ achievements, activeCategory, categories, projects, setCategory, total }: { achievements: AchievementMap; activeCategory: string; categories: string[]; projects: Project[]; setCategory: (category: string) => void; total: number }) {
  return (
    <section className="bg-slate-50 px-5 py-20 md:px-24 md:py-24">
      <SectionHead eyebrow="Achievements" title="분야별 수행 이력" />
      <div className="grid gap-5 md:grid-cols-4">
        <Stat active number={total || 0} label="전체 프로젝트" />
        {categories.map((category) => <Stat key={category} active={category === activeCategory} number={(achievements[category] || []).length} label={category} />)}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-lg border border-sky-100 bg-white p-3 shadow-sm">
          {categories.map((category) => (
            <button key={category} className={`flex w-full items-center justify-between rounded-lg px-4 py-4 text-left font-black ${category === activeCategory ? "bg-haein-700 text-white" : "text-haein-950 hover:bg-sky-50"}`} type="button" onClick={() => setCategory(category)}>
              <span>{category}</span>
              <span className={category === activeCategory ? "text-haein-500" : "text-haein-500"}>{(achievements[category] || []).length}</span>
            </button>
          ))}
        </aside>
        <div className="overflow-hidden rounded-lg border border-sky-100 bg-white shadow-sm">
          <div className="border-b border-sky-100 bg-gradient-to-r from-haein-950 to-haein-950 p-6 text-white">
            <p className="text-sm font-black uppercase text-haein-500">Selected Field</p>
            <h3 className="mt-2 text-3xl font-black">{activeCategory}</h3>
            <p className="mt-2 text-sky-100">총 {projects.length}건의 수행 이력을 확인할 수 있습니다.</p>
          </div>
          <div className="divide-y divide-sky-100">
            {projects.map((project) => (
              <article key={`${project.year}-${project.title}`} className="shine-card grid gap-4 overflow-hidden p-5 transition hover:bg-sky-50/70 md:grid-cols-[120px_1fr] md:p-6">
                <time className="inline-flex h-10 w-fit items-center rounded-lg bg-sky-50 px-3 font-black text-haein-500">{project.year}</time>
                <div>
                  <h3 className="font-black text-haein-950">{project.title}</h3>
                  <p className="mt-2 leading-7 text-slate-500">{project.explain}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, active = false }: { number: number; label: string; active?: boolean }) {
  return (
    <article className={`shine-card overflow-hidden rounded-lg border p-6 shadow-sm transition hover:-translate-y-1 ${active ? "border-haein-500 bg-haein-700 text-white" : "border-sky-100 bg-white"}`}>
      <strong className={`block text-4xl font-black ${active ? "text-haein-500" : "text-haein-500"}`}>{number}</strong>
      <span className={`mt-3 block font-black ${active ? "text-sky-100" : "text-slate-500"}`}>{label}</span>
    </article>
  );
}

function Equipment({ activeCategory, activeGroup, categories, groups, items, setCategory, setGroup }: { activeCategory: string; activeGroup: string; categories: string[]; groups: string[]; items: DisplayEquipment[]; setCategory: (category: string) => void; setGroup: (group: string) => void }) {
  return (
    <section className="bg-slate-50 px-5 py-20 md:px-24 md:py-24">
      <SectionHead eyebrow="Equipment" title="분야별 보유 장비" />
      <div className="grid gap-4 rounded-lg border border-sky-100 bg-white p-4 shadow-sm lg:grid-cols-[260px_1fr]">
        <aside className="grid gap-2">
          {categories.map((category) => (
            <button key={category} className={`rounded-lg px-4 py-3 text-left font-black transition ${category === activeCategory ? "bg-haein-700 text-white" : "bg-sky-50 text-haein-950 hover:bg-sky-50"}`} type="button" onClick={() => setCategory(category)}>
              {category}
            </button>
          ))}
        </aside>
        <div>
          <p className="text-sm font-black uppercase text-haein-500">{activeCategory}</p>
          <p className="mt-2 leading-7 text-slate-500">{categoryCopy[activeCategory] || "현장 조사와 분석에 사용하는 장비입니다."}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button className={`rounded-full px-4 py-2 text-sm font-black ${!activeGroup ? "bg-haein-700 text-white" : "bg-sky-50 text-haein-500"}`} type="button" onClick={() => setGroup("")}>전체</button>
            {groups.map((group) => (
              <button key={group} className={`rounded-full px-4 py-2 text-sm font-black ${group === activeGroup ? "bg-haein-700 text-white" : "bg-sky-50 text-haein-500"}`} type="button" onClick={() => setGroup(group)}>{group}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={`${item.group}-${item.name}-${item.thumnailSrc}`} className="shine-card group overflow-hidden rounded-lg border border-sky-100 bg-white transition hover:-translate-y-2 hover:shadow-xl hover:shadow-haein-950/10">
            <img className="aspect-[4/3] w-full bg-sky-50 object-cover transition duration-500 group-hover:scale-105" src={item.thumnailSrc} alt={item.name} />
            <div className="p-5">
              <h3 className="min-h-12 font-black text-haein-950">{item.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{item.group}</p>
              {item.quantity ? <p className="mt-2 text-sm font-black text-haein-500">보유 {item.quantity}대</p> : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
