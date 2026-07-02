export const nav = [
  {
    to: "/",
    label: "홈",
    children: [
      ["회사 소개", "/"],
      ["솔루션", "/"],
      ["강점", "/"],
    ],
  },
  {
    to: "/history",
    label: "회사소개",
    children: [
      ["회사 연혁", "/history"],
      ["사업분야", "/business"],
      ["인증·등록", "/credentials"],
    ],
  },
  {
    to: "/achievements",
    label: "수행이력",
    children: [
      ["공항 개발", "/achievements?category=공항 개발 및 건설 분야"],
      ["해상풍력", "/achievements?category=해상풍력 분야"],
      ["항만", "/achievements?category=항만 분야"],
    ],
  },
  {
    to: "/equipment",
    label: "장비",
    children: [
      ["육상 생태계", "/equipment"],
      ["해양 생태계", "/equipment"],
      ["환경 측정", "/equipment"],
      ["해양화학", "/equipment"],
    ],
  },
  {
    to: "/contact",
    label: "Contact Us",
    children: [
      ["찾아오시는 길", "/contact/location"],
      ["프로젝트 문의", "/contact/project"],
    ],
  },
] as const
export const business = [
  [
    "01",
    "신재생에너지",
    "해상풍력 입지 조사, 해양포유류 모니터링, 수중소음과 전자기장 영향 검토를 수행합니다.",
    "/business/renewable-energy-banner.jpg",
    "renewable-energy",
  ],
  [
    "02",
    "공항 개발",
    "조류 서식지 분석, 조류충돌 위험 평가, 야생동물 관리계획으로 공항 운영 리스크를 낮춥니다.",
    "/business/airport-banner.jpg",
    "airport",
  ],
  [
    "03",
    "해양환경",
    "해양생태, 해양물리, 해양수질, 퇴적물 조사를 통합해 현장 데이터를 해석합니다.",
    "/main/sea-research.jpg",
    "marine-environment",
  ],
  [
    "04",
    "해양화학",
    "시료 채취, 전처리, 수질·퇴적물 화학 분석을 기반으로 현장 데이터를 정량화합니다.",
    "/business/sea-chemical-banner.jpg",
    "marine-chemistry",
  ],
  [
    "05",
    "육상생태계",
    "조류, 포유류, 식생 등 육상 생태계 현황과 사업 영향을 평가합니다.",
    "/business/land-ecosystem-banner.jpg",
    "land-ecosystem",
  ],
  [
    "06",
    "환경 측정",
    "전자기장, 수중소음, 위치·거리 측정 등 현장 계측 장비로 조사 신뢰도를 높입니다.",
    "/business/measure-environment-banner.jpg",
    "environment-measurement",
  ],
] as const

export const businessDetails = [
  {
    slug: "renewable-energy",
    title: "신재생에너지 분야",
    subtitle: "해상풍력 환경영향평가와 운영 영향 평가",
    image: "/business/renewable-energy-banner.jpg",
    gallery: [
      "/brochure/extracted/page-07/image-01.png",
      "/brochure/extracted/page-07/image-04.png",
      "/brochure/extracted/page-07/image-06.jpg",
      "/brochure/extracted/page-07/image-10.png",
    ],
    summary:
      "해상풍력발전 환경영향평가에서 조류, 해양포유류, 해양환경, 생태계 영향을 통합 분석합니다.",
    services: [
      "바닷새 모니터링",
      "해양포유류 모니터링",
      "수중소음·전자기장 모니터링",
      "모델링 및 예측 평가",
      "저감방안 수립",
    ],
    process: [
      "기초자료 검토",
      "현장 모니터링",
      "모델링 및 영향 예측",
      "저감방안 수립",
      "보고서 작성",
    ],
    achievement: "해상풍력 분야",
    equipment: "해양 생태계",
  },
  {
    slug: "airport",
    title: "공항 개발 분야",
    subtitle: "생태계를 고려한 공항 개발 솔루션",
    image: "/business/airport-banner.jpg",
    gallery: [
      "/brochure/extracted/page-08/image-01.jpg",
      "/brochure/extracted/page-08/image-02.jpg",
      "/brochure/extracted/page-08/image-04.jpg",
      "/brochure/extracted/page-08/image-05.jpg",
    ],
    summary:
      "공항 건설과 운영으로 인한 생태 영향을 예측하고 조류 충돌 가능성과 관리구역을 도출합니다.",
    services: [
      "조류 정밀조사",
      "공간분포 특성분석",
      "항공기 조류 충돌 위험 평가",
      "관리계획 제시",
    ],
    process: [
      "조류 서식지 분석",
      "공간 이용 현황 조사",
      "충돌 가능성 평가",
      "관리계획 제시",
    ],
    achievement: "공항 개발 및 건설 분야",
    equipment: "육상 생태계",
  },
  {
    slug: "marine-environment",
    title: "해양환경 분야",
    subtitle: "해양생물과 해양환경 조사",
    image: "/main/sea-research.jpg",
    gallery: [
      "/brochure/extracted/page-09/image-01.jpg",
      "/brochure/extracted/page-09/image-03.png",
      "/brochure/extracted/page-09/image-06.png",
      "/brochure/extracted/page-09/image-10.png",
    ],
    summary: "해양동물, 바닷새, 해양생물, 해양수질과 퇴적물 조사를 수행합니다.",
    services: [
      "부유생물 조사",
      "저서생물 조사",
      "어류 및 어란 조사",
      "조간대 생물 조사",
      "대형생물 조사",
    ],
    process: [
      "조사지점 설정",
      "분류군별 현장조사",
      "시료 분석",
      "영향 평가",
      "저감방안 제시",
    ],
    achievement: "항만 분야",
    equipment: "해양 생태계",
  },
  {
    slug: "marine-chemistry",
    title: "해양화학 분야",
    subtitle: "해양수질·퇴적물 분석과 실험 기반 해석",
    image: "/business/sea-chemical-banner.jpg",
    gallery: [
      "/brochure/extracted/page-10/image-01.jpg",
      "/brochure/extracted/page-10/image-02.jpg",
      "/brochure/extracted/page-10/image-10.jpg",
      "/brochure/extracted/page-10/image-11.jpg",
    ],
    summary:
      "해양수질과 퇴적물 시료를 채취·전처리·분석해 정량 데이터를 제공합니다.",
    services: [
      "해양수질 분석",
      "해양퇴적물 분석",
      "시료 전처리",
      "화학 성분 분석",
      "분석 결과 해석",
    ],
    process: [
      "시료 채취",
      "전처리 및 보관",
      "실험실 분석",
      "품질 검토",
      "결과 보고",
    ],
    achievement: "항만 분야",
    equipment: "해양화학 및 퇴적물",
  },
  {
    slug: "land-ecosystem",
    title: "육상생태계 조사 분야",
    subtitle: "식물상·동물상·육수생태계 현지조사",
    image: "/business/land-ecosystem-banner.jpg",
    gallery: [
      "/brochure/extracted/page-10/image-03.png",
      "/brochure/extracted/page-10/image-04.png",
      "/brochure/extracted/page-10/image-07.png",
      "/brochure/extracted/page-10/image-13.png",
    ],
    summary:
      "식물상, 포유류, 조류, 양서·파충류, 곤충류와 육수생태계를 조사합니다.",
    services: [
      "식물상 및 식생 조사",
      "육상동물상 조사",
      "육수생태계 조사",
      "법정보호종 확인",
      "저감방안 수립",
    ],
    process: [
      "문헌 및 서식지 검토",
      "현지조사",
      "주요종 확인",
      "영향예측",
      "관리방안 제시",
    ],
    achievement: "공항 개발 및 건설 분야",
    equipment: "육상 생태계",
  },
  {
    slug: "environment-measurement",
    title: "환경 측정 분야",
    subtitle: "수중소음, 전자기장, 현장 계측 기반 조사",
    image: "/business/measure-environment-banner.jpg",
    gallery: [
      "/brochure/extracted/page-07/image-07.jpg",
      "/brochure/extracted/page-07/image-08.jpg",
      "/brochure/extracted/page-07/image-09.png",
      "/brochure/extracted/page-07/image-11.png",
    ],
    summary:
      "사업 특성에 맞춰 수중소음, 전자기장, 위치·거리 등 현장 계측 데이터를 수집하고 분석합니다.",
    services: [
      "수중소음 측정",
      "전자기장 측정",
      "GPS 기반 위치 추적",
      "현장 계측 데이터 관리",
    ],
    process: [
      "측정 계획 수립",
      "장비 설치 및 보정",
      "현장 계측",
      "데이터 분석",
      "결과 해석",
    ],
    achievement: "해상풍력 분야",
    equipment: "환경 측정",
  },
] as const

export const solutions = [
  ["Renewable Energy", "해상풍력 환경 컨설팅", "/main/windfarm-thumnail.png"],
  ["Airport", "공항 개발 조류충돌 위험 평가", "/main/airport-thumnail.jpg"],
  [
    "Marine Environment",
    "해양생태 조사와 예측 모델링",
    "/main/sea-research.jpg",
  ],
  [
    "Marine Chemistry",
    "해양화학 분석과 퇴적물 평가",
    "/main/chemical-thumnail.jpg",
  ],
  ["Land Ecosystem", "육상생태계 정밀 모니터링", "/main/land-ecosystem.jpg"],
  [
    "Environmental Measure",
    "환경 측정 장비 기반 현장조사",
    "/main/measure-environment.jpg",
  ],
] as const

export const strengths = [
  ["ONLY ONE", "해상풍력 특성화 전문 조사 역량", "/main/strength1.png"],
  ["EXPERTISE", "주요 분야 전문인력과 자격 보유", "/main/strength2.png"],
  ["HSE", "현장 HSE 인증과 안전관리", "/main/strength3.png"],
] as const

export const credentials = [
  [
    "사업자 등록",
    "사업자등록증",
    "법인 기본 증빙 자료입니다.",
    "등록 완료",
    "/credentials/사업자등록증.png",
  ],
  [
    "연구 역량",
    "기업부설연구소 인정서",
    "연구개발 조직 운영 역량을 증명합니다.",
    "인정 완료",
    "/credentials/기업부설연구소_인정서.png",
  ],
  [
    "환경영향평가",
    "제2종 환경영향평가업 등록증",
    "환경영향평가 분야 수행 자격을 보유하고 있습니다.",
    "등록 완료",
    "/credentials/2종_환경영향평가업_등록증.png",
  ],
  [
    "해역이용",
    "해역이용영향평가대행자 등록증",
    "해역이용 영향 검토와 평가 대행 자격을 보유하고 있습니다.",
    "등록 완료",
    "/credentials/해역이용영향평가대행자_등록증.png",
  ],
  [
    "엔지니어링",
    "엔지니어링 사업자 등록증",
    "전문 엔지니어링 서비스 수행 기반을 갖추고 있습니다.",
    "등록 완료",
    "/credentials/엔지니어링_사업자_등록증.png",
  ],
  [
    "측정대행",
    "측정대행업등록증",
    "환경 측정과 분석 업무 수행 자격을 보유하고 있습니다.",
    "등록 완료",
    "/credentials/측정대행업등록증.png",
  ],
] as const

export const companyHistory = [
  {
    year: "2024",
    items: [
      "해상풍력 해양포유류 완화작업 계약 체결",
      "환경영향평가 조류·수중소음 분야 계약 체결",
      "기업부설연구소 인정 등록",
      "해양환경 측정 분석 역량 인증",
    ],
  },
  {
    year: "2023",
    items: [
      "풍력산업협회 회원사 등록",
      "환경영향평가 협약 체결",
      "ESG 연구소 운영",
      "부산 평가사무소 확장 이전",
    ],
  },
  {
    year: "2022",
    items: [
      "해역이용영향평가 대행자 등록",
      "중소기업 인증",
      "공항·항만 분야 환경조사 수행",
    ],
  },
  {
    year: "2021",
    items: [
      "법인 설립",
      "해양생태와 육상생태 조사 체계 구축",
      "주요 전문인력 합류",
    ],
  },
] as const

export const categoryCopy: Record<string, string> = {
  "육상 생태계": "카메라, 망원경, 드론 등 현장 관찰 장비",
  "해양 생태계": "시료 채취, 수중 관찰, 생물 분석 장비",
  "환경 측정": "GPS, 거리측정, 무인감시장비, 전자기장 측정 장비",
  "해양화학 및 퇴적물": "수질 분석, 시료 전처리, 화학 성분 분석 장비",
}
