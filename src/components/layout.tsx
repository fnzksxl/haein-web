import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { nav } from "../data";

export function RevealObserver() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [location.hash]);

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname, location.search]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const solid = scrolled || menuOpen || megaOpen;
  const whiteHeader = scrolled;
  const menuItems = nav.filter((item) => item.to !== "/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-20 transition-colors duration-700 ${whiteHeader ? "text-haein-950" : "text-white"}`} onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setMegaOpen(false)} onMouseLeave={() => setMegaOpen(false)}>
      <div className={`flex h-[72px] w-full items-center justify-between px-5 transition-colors duration-700 md:grid md:grid-cols-[1.1fr_2.4fr] md:px-0 ${whiteHeader ? "border-b border-sky-100 bg-white shadow-lg shadow-haein-950/5" : solid ? "border-b border-white/10 bg-haein-950/90 shadow-2xl shadow-haein-950/20 backdrop-blur" : "bg-transparent"}`}>
        <NavLink to="/" className="relative ml-5 flex h-12 w-44 items-center md:ml-10" aria-label="HAEIN home">
          <img className={`absolute left-0 h-11 w-auto transition-opacity duration-700 md:h-12 ${whiteHeader ? "opacity-0" : "opacity-100"}`} src="/logo-white.png" alt="HAEIN Ecological Research Institute" />
          <img className={`absolute left-0 h-11 w-auto transition-opacity duration-700 md:h-12 ${whiteHeader ? "opacity-100" : "opacity-0"}`} src="/logo.png" alt="" aria-hidden="true" />
        </NavLink>
        <button className="grid h-11 w-11 gap-1.5 rounded-lg bg-white/15 p-2.5 md:hidden" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span className="h-0.5 bg-white" />
          <span className="h-0.5 bg-white" />
          <span className="h-0.5 bg-white" />
        </button>
        <nav id="site-nav" className={`${menuOpen ? "grid" : "hidden"} absolute left-4 right-4 top-[84px] gap-1 rounded-lg border border-white/10 bg-haein-950 p-3 text-sm font-black md:static md:grid md:grid-cols-4 md:items-center md:gap-8 md:border-0 md:bg-transparent md:px-8 md:py-0`} onFocus={() => setMegaOpen(true)} onMouseEnter={() => setMegaOpen(true)}>
          {menuItems.map((item) => (
            <div key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `flex items-center justify-between rounded-md px-4 py-3 transition md:justify-center md:px-0 md:py-2 ${whiteHeader ? (isActive ? "text-haein-700" : "text-haein-950/75 hover:text-haein-700") : isActive ? "bg-white/10 text-haein-300 md:bg-transparent" : "text-white/85 hover:bg-white/10 hover:text-white md:hover:bg-transparent"}`}
                onClick={() => {
                  setMenuOpen(false);
                  setMegaOpen(false);
                }}
              >
                <span>{item.label}</span>
              </NavLink>
              <div className="grid gap-1 border-l border-white/10 pl-3 md:hidden">
                {item.children.map(([label, to]) => (
                  <NavLink key={`${item.to}-${label}`} to={to} className="rounded-md px-3 py-2 text-sm text-white/75 hover:bg-haein-700 hover:text-white" onClick={() => setMenuOpen(false)}>
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
      <div className={`${megaOpen ? "md:block" : "md:hidden"} mega-menu-panel hidden w-full`}>
        <div className="grid grid-cols-[1.1fr_2.4fr] overflow-hidden rounded-b-3xl border border-t-0 border-sky-100 bg-white text-haein-950 shadow-2xl shadow-haein-950/20 transition">
          <div className="bg-sky-50 p-8">
            <p className="text-sm font-black uppercase text-haein-700">HAEIN Navigation</p>
            <h2 className="mt-3 text-3xl font-black leading-tight">해양·생태 컨설팅 정보를 빠르게 탐색하세요.</h2>
            <p className="mt-4 leading-7 text-slate-500">사업분야, 수행이력, 장비, 연혁을 한 번에 확인할 수 있습니다.</p>
          </div>
          <div className="grid grid-cols-4 gap-8 px-8 py-8 text-center">
            {menuItems.map((item) => (
              <div key={item.to} className="min-w-0">
                <div className="grid justify-items-center gap-2">
                  {item.children.map(([label, to]) => (
                    <NavLink key={`${item.to}-${label}`} className="rounded-md px-3 py-2 text-sm leading-5 text-slate-500 hover:bg-sky-50 hover:text-haein-700" to={to} onClick={() => setMegaOpen(false)}>
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
  );
}

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden bg-haein-950 px-5 py-20 pt-28 text-white md:min-h-[600px] md:px-24">
      <div className="scan-layer absolute inset-y-0 left-0 w-1/2 opacity-70" />
      <div className="relative">
        <p className="animate-rise mb-4 text-sm font-black uppercase text-haein-300">{eyebrow}</p>
        <h1 className="animate-rise delay-100 max-w-5xl text-4xl font-black leading-tight md:text-6xl">{title}</h1>
        {body ? <p className="animate-rise delay-200 mt-6 max-w-3xl text-lg leading-8 text-sky-100">{body}</p> : null}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div data-reveal="left" className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <p className="text-sm font-black uppercase text-haein-300">{eyebrow}</p>
      <h2 className="max-w-4xl text-3xl font-black leading-tight tracking-normal md:text-5xl">{title}</h2>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-haein-950 px-5 py-12 text-sky-100 md:px-24">
      <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr_.9fr]">
        <div>
          <img className="h-9 w-auto" src="/logo-white.png" alt="HAEIN" />
          <p className="mt-5 max-w-md leading-7 text-sky-200">해인생태연구소는 현장 조사와 과학적 예측을 기반으로 지속 가능한 개발을 지원합니다.</p>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-haein-300">Quick Links</h2>
          <div className="mt-4 grid gap-2">
            {nav.slice(0, 5).map((item) => (
              <NavLink key={item.to} className="text-sm text-sky-100 hover:text-haein-300" to={item.to}>{item.label}</NavLink>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-black uppercase text-haein-300">Offices</h2>
          <p className="mt-4 leading-7">부산광역시 수영구 광남로 44</p>
          <p className="leading-7">서울 · 통영 사무소</p>
          <p className="mt-4 text-sm text-sky-300">© HAEIN Ecological Research Institute</p>
        </div>
      </div>
    </footer>
  );
}
