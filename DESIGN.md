# HAEIN Website Design

## Goal

해인생태연구소의 브로셔, 수행이력 JSON, 장비 데이터, 기존 React 웹사이트의 정적 자산을 바탕으로 만든 기업 마케팅형 웹사이트다. `source/company-promotional-page/app/globals.css`의 semantic token 체계를 기준으로 밝고 정돈된 기업 소개 페이지 톤을 유지한다.

## Stack

- Vite
- React
- TypeScript / TSX
- Tailwind CSS
- React Router

## Routes

- `/`: 히어로, 회사 소개, 솔루션, 강점, 프로세스
- `/business`: 6개 주사업분야
- `/business/:slug`: 브로셔 7-10페이지 기반 분야별 상세 설명, 주요 업무, 프로세스, 관련 자료
- `/history`: 회사 연혁
- `/credentials`: 사업자 등록, 기업부설연구소, 환경영향평가업, 해역이용, 엔지니어링, 측정·분석 인증 자료실
- `/achievements`: 프로젝트 수행이력 JSON 기반 분야별 목록
- `/equipment`: 장비 JSON 기반 `대분류 -> 장비군` 2단계 필터
- `/contact`: Contact Us 기본 진입. 찾아오시는 길 페이지로 연결
- `/contact/location`: 찾아오시는 길. 부산 평가사무소 지도와 거점 정보
- `/contact/project`: 프로젝트 문의. 상담 흐름과 문의 CTA

## Visual Theme

- Use semantic Tailwind tokens first: `background`, `foreground`, `card`, `primary`, `secondary`, `muted`, `accent`, `border`, `ring`, `ocean`.
- Primary: `oklch(0.38 0.09 260)` for headings, dark callout panels, and icon blocks.
- Accent/Ocean: `oklch(0.68 0.12 232)` for section labels, bullets, active markers, and progress indicators.
- Surface: `background`/`card` white with pale `secondary` section bands and quiet `border`.
- Shape: section cards use `rounded-2xl`; compact buttons and small controls use `rounded-lg`.
- Layout: business section modules use `max-w-7xl`, `px-4 md:px-8`, `py-20 md:py-28`, and `max-w-2xl` heading blocks.
- Imagery: actual company/reference assets in `public/main`, `public/business`, `public/equipments`
- Motion: subtle hover lift, image scale, card shine, and IntersectionObserver-based scroll reveal. `prefers-reduced-motion` is respected.

## Key Sections

- `Header`: full-width fixed header with desktop mega menu. Hovering the parent header reveals all submenu columns, and the panel stays open while the cursor remains inside the header or submenu.
- `Hero`: `/main.png` background with white company logo and primary CTA.
- `Intro`: `/main/introduce.jpg` image plus company positioning copy.
- `Solutions`: six image cards using existing reference site assets.
- `Business`: overview cards plus `src/components/*-section.tsx` modules for 신재생에너지, 공항 개발, 해양환경, 육상생태계, 해양화학.
- `BusinessDetail`: shared detail template using extracted brochure images, service lists, process steps, related achievements/equipment links, and project inquiry CTA.
- `Strength`: three visual strength cards using `/main/strength1.png`, `/main/strength2.png`, `/main/strength3.png`.
- `Credentials`: certification/registration evidence cards. Actual PDF links are deferred until documents are provided.
- `Achievements`: left category rail, stats, selected project list.
- `Equipment`: first category tabs, then second-level equipment group tabs, then equipment cards.
- `Contact`: visual contact hero, Google Maps embed for 부산 평가사무소, location/office cards, project inquiry guide, mail CTA.
- `Footer`: dark brand footer with logo, links, office list, CTA.

## Deferred

- Individual project detail pages are not implemented yet.
- Contact form submission is not wired to a real backend.
- Equipment modal/detail view can be added when item-level descriptions are finalized.
