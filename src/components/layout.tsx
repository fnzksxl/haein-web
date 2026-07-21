import { useEffect, useState } from "react"
import { ArrowDown, ArrowUp } from "lucide-react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { nav } from "../data"

export function RevealObserver() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    requestAnimationFrame(() =>
      document
        .querySelector(location.hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" }),
    )
  }, [location.hash])

  useEffect(() => {
    if (location.hash) return
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [location.pathname, location.search])

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    )

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [location.pathname])

  return null
}

export function BackToTop() {
  const [scroll, setScroll] = useState({ up: false, down: false })
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight
      setScroll({
        up: window.scrollY > 360,
        down: window.scrollY < maxScroll - 24,
      })
    }
    requestAnimationFrame(onScroll)
    window.addEventListener("scroll", onScroll)
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [location.pathname, location.search])

  return (
    <div className="fixed bottom-6 right-6 z-30 grid gap-2">
      <button
        type="button"
        aria-label="페이지 최상단으로 이동"
        className={`grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-haein-950/85 text-white shadow-xl shadow-haein-950/25 backdrop-blur transition hover:-translate-y-1 hover:bg-haein-700 ${scroll.up ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <ArrowUp aria-hidden="true" size={22} strokeWidth={2.4} />
      </button>
      <button
        type="button"
        aria-label="페이지 최하단으로 이동"
        className={`grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-haein-950/85 text-white shadow-xl shadow-haein-950/25 backdrop-blur transition hover:translate-y-1 hover:bg-haein-700 ${scroll.down ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"}`}
        onClick={() =>
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <ArrowDown aria-hidden="true" size={22} strokeWidth={2.4} />
      </button>
    </div>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const solid = scrolled || menuOpen || megaOpen
  const whiteHeader = scrolled || menuOpen || megaOpen
  const menuItems = nav.filter((item) => item.to !== "/")
  const isCurrentPath = (to: string) => {
    const path = to.split("?")[0]
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    )
  }
  const isMenuActive = (item: (typeof menuItems)[number]) =>
    isCurrentPath(item.to) || item.children.some(([, to]) => isCurrentPath(to))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMegaOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 transition-colors duration-700 ${whiteHeader ? "text-haein-950" : "text-white"}`}
      onBlur={(event) =>
        !event.currentTarget.contains(event.relatedTarget) && setMegaOpen(false)
      }
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div
        className={`flex h-[72px] w-full items-center justify-between px-5 transition-colors duration-700 md:grid md:grid-cols-[1.1fr_2.4fr] md:px-0 ${whiteHeader ? "border-b border-sky-100 bg-white shadow-lg shadow-haein-950/5" : solid ? "border-b border-white/10 bg-haein-950/90 shadow-2xl shadow-haein-950/20 backdrop-blur" : "bg-transparent"}`}
      >
        <NavLink
          to="/"
          className="relative ml-5 flex h-12 w-44 items-center md:ml-10"
          aria-label="HAEIN home"
        >
          <img
            className={`absolute left-0 h-11 w-auto transition-opacity duration-700 md:h-12 ${whiteHeader ? "opacity-0" : "opacity-100"}`}
            src="/logo-white.png"
            alt="HAEIN Ecological Research Institute"
          />
          <img
            className={`absolute left-0 h-11 w-auto transition-opacity duration-700 md:h-12 ${whiteHeader ? "opacity-100" : "opacity-0"}`}
            src="/logo.png"
            alt=""
            aria-hidden="true"
          />
        </NavLink>
        <button
          className="grid h-11 w-11 gap-1.5 rounded-lg bg-white/15 p-2.5 md:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 bg-white" />
          <span className="h-0.5 bg-white" />
          <span className="h-0.5 bg-white" />
        </button>
        <nav
          id="site-nav"
          className={`${menuOpen ? "grid" : "hidden"} absolute left-4 right-4 top-[84px] gap-1 rounded-lg border border-white/10 bg-haein-950 p-3 text-sm font-black md:static md:grid md:grid-cols-4 md:items-center md:gap-8 md:border-0 md:bg-transparent md:px-8 md:py-0`}
          onFocus={() => setMegaOpen(true)}
          onMouseEnter={() => setMegaOpen(true)}
        >
          {menuItems.map((item) => {
            const itemActive = isMenuActive(item)
            return (
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  className={() =>
                    `flex items-center justify-between rounded-md px-4 py-3 transition md:justify-center md:px-0 md:py-2 ${whiteHeader ? (itemActive ? "text-haein-700" : "text-haein-950/75 hover:text-haein-700") : itemActive ? "bg-white/10 text-haein-300 md:bg-transparent" : "text-white/85 hover:bg-white/10 hover:text-white md:hover:bg-transparent"}`
                  }
                  onClick={() => {
                    setMenuOpen(false)
                    setMegaOpen(false)
                  }}
                >
                  <span>{item.label}</span>
                </NavLink>
                <div className="grid gap-1 border-l border-white/10 pl-3 md:hidden">
                  {item.children.map(([label, to]) => (
                    <NavLink
                      key={`${item.to}-${label}`}
                      to={to}
                      className="rounded-md px-3 py-2 text-sm text-white/75 hover:bg-haein-700 hover:text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )
          })}
        </nav>
      </div>
      <div
        className={`${megaOpen ? "md:block" : "md:hidden"} mega-menu-panel hidden w-full`}
      >
        <div className="grid grid-cols-[1.1fr_2.4fr] overflow-hidden rounded-b-3xl border border-t-0 border-sky-100 bg-white text-haein-950 shadow-2xl shadow-haein-950/20 transition">
          <div className="bg-white" />
          <div className="grid grid-cols-4 gap-8 px-8 py-8 text-center">
            {menuItems.map((item) => (
              <div
                key={item.to}
                className="min-w-0 border-l border-sky-100 first:border-l-0"
              >
                <div className="grid justify-items-center">
                  {item.children.map(([label, to]) => (
                    <NavLink
                      key={`${item.to}-${label}`}
                      className="w-full border-b border-sky-50 px-3 py-3 text-sm leading-5 text-slate-500 transition last:border-b-0 hover:bg-sky-50 hover:text-haein-700"
                      to={to}
                      onClick={() => setMegaOpen(false)}
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export function PageHero({
  eyebrow,
  title,
  body,
  intro,
  image,
}: {
  eyebrow: string
  title: string
  body?: string
  intro?: { section: string; title: string }
  image?: string
}) {
  return (
    <section className="relative flex min-h-[460px] items-center overflow-hidden bg-haein-950 px-5 py-16 pt-24 text-white md:min-h-[520px] md:px-24 lg:min-h-[560px]">
      {image ? (
        <img
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={image}
          alt=""
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-haein-950/95 via-haein-950/70 to-haein-950/10" />
      <div className="scan-layer absolute inset-y-0 left-0 w-1/2 opacity-70" />
      <div className="relative w-full pb-24">
        <p className="animate-rise mb-4 text-sm font-black uppercase text-haein-300">
          {eyebrow}
        </p>
        <h1 className="animate-rise delay-100 max-w-5xl text-3xl font-black leading-tight md:text-5xl">
          {title}
        </h1>
      </div>
      {intro ? (
        <div className="absolute inset-x-5 bottom-4 md:inset-x-24">
          <PageIntro
            section={intro.section}
            title={intro.title}
            description={body}
            tone="dark"
          />
        </div>
      ) : null}
    </section>
  )
}

export function SectionHead({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div
      data-reveal="left"
      className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
    >
      <p className="text-sm font-black uppercase text-haein-300">{eyebrow}</p>
      <h2 className="max-w-4xl text-3xl font-black leading-tight tracking-normal md:text-5xl">
        {title}
      </h2>
    </div>
  )
}

export function PageIntro({
  section,
  title,
  description,
  tone = "light",
}: {
  section: string
  title: string
  description?: string
  tone?: "light" | "dark"
}) {
  const navigate = useNavigate()
  const location = useLocation()
  const parent = nav
    .filter((item) => item.to !== "/")
    .find(
      (item) =>
        item.children.some(
          ([, to]) => to.split("?")[0] === location.pathname,
        ) || item.to === location.pathname,
    )
  const options = (parent?.children || []).map(([label, to]) => {
    const equipmentCategory =
      label === "해양화학" ? "해양화학 및 퇴적물" : label
    return {
      label,
      to:
        parent?.to === "/equipment"
          ? `/equipment?category=${encodeURIComponent(equipmentCategory)}`
          : to,
    }
  })
  const current =
    options.find(
      (option) => option.to === `${location.pathname}${location.search}`,
    )?.to ||
    (location.pathname === "/equipment"
      ? options.find((option) => option.to.startsWith("/equipment?"))?.to
      : options.find((option) => option.to === location.pathname)?.to) ||
    ""

  return (
    <div
      className={`mx-auto w-full max-w-7xl ${tone === "dark" ? "mb-0" : "mb-8"}`}
    >
      <div
        className={`flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide ${tone === "dark" ? "text-sky-100/75" : "text-slate-500"}`}
      >
        <span>HOME</span>
        <span
          className={tone === "dark" ? "text-sky-100/35" : "text-slate-300"}
        >
          /
        </span>
        <select
          className={`max-w-full rounded-md px-2 py-1 text-xs font-black uppercase tracking-wide outline-none transition ${tone === "dark" ? "border border-white/15 bg-white/10 text-white hover:border-haein-300 focus:border-haein-300" : "border border-sky-100 bg-white text-haein-700 hover:border-haein-300 focus:border-haein-500"}`}
          value={current}
          onChange={(event) => navigate(event.target.value)}
          aria-label="서브 페이지 이동"
        >
          <option className="text-haein-950" value="" disabled>
            {section}
          </option>
          {options.map((option) => (
            <option
              className="text-haein-950"
              key={`${option.label}-${option.to}`}
              value={option.to}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <h1
        className={`mt-2 text-2xl font-black leading-tight md:text-3xl ${tone === "dark" ? "text-white" : "text-haein-950"}`}
      >
        {title}
      </h1>
      {description ? (
        <p
          className={`mt-3 max-w-3xl text-sm font-medium leading-7 md:text-base ${tone === "dark" ? "text-sky-100" : "text-slate-500"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function Footer() {
  const menuItems = nav.filter((item) => item.to !== "/")

  return (
    <footer className="border-t border-white/10 bg-[#2b2b2b] px-5 py-14 text-neutral-300 md:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <NavLink
              to="/"
              className="relative flex h-12 w-44 items-center"
              aria-label="HAEIN home"
            >
              <img className="h-12 w-auto" src="/logo-white.png" alt="HAEIN" />
            </NavLink>
            <p className="mt-5 max-w-xl text-lg font-black leading-8 text-white">
              현장을 정밀하게 조사하고, 개발의 영향을 과학적으로 예측합니다.
            </p>
            <p className="mt-3 max-w-xl leading-7 text-neutral-400">
              해상풍력·공항·항만 개발에 필요한 해양·육상 생태 조사부터 환경영향
              분석과 모델링, <br></br>저감방안 수립까지 전 과정을 연결합니다.
            </p>
          </div>
          <aside className="rounded-2xl border border-sky-100 bg-white p-5">
            <div className="flex items-center justify-between gap-4">
              <img
                className="h-10 w-auto"
                src="/ravian_logo.svg"
                alt="RAVIAN"
              />
              <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-haein-700">
                Coming soon
              </span>
            </div>
            <p className="mt-4 text-sm font-bold leading-6 text-haein-950">
              해상풍력단지 무인 조류 모니터링 시스템
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              기능과 운영 정보를 담은 웹페이지를 준비 중 입니다.
            </p>
          </aside>
        </div>
        <div className="grid gap-8 py-10 md:grid-cols-4">
          {menuItems.map((item) => (
            <div key={item.to}>
              <h2 className="text-sm font-black text-white">{item.label}</h2>
              <div className="mt-4 grid gap-2">
                {item.children.map(([label, to]) => (
                  <NavLink
                    key={`${item.to}-${label}`}
                    className="text-sm text-neutral-400 transition hover:text-haein-300"
                    to={to}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
          <p>부산광역시 수영구 광남로 44, 남성빌딩 2층/4층 · 서울 · 통영</p>
          <p>Tel. 051-628-3600 · haein@haeineco.kr</p>
          <p>© HAEIN Ecological Research Institute</p>
        </div>
      </div>
    </footer>
  )
}
