const projects = [
  {
    id: 1,
    title: "한화 클레버스 차세대 그룹웨어",
    type: "구축",
    year: 2025,
    image: "project01.png",
    date: "2024.10 - 2026.01",
    duration: "1년 3개월",
    contribution: "100%",
    tech: ["Vue3", "TypeScript", "SCSS", "Git", "Figma"],
    thumbnail: "assets/images/project01.png",
    siteUrl: "",
    visibility: "private",
    gallery: [
      "assets/images/project01_01.png",
      "assets/images/project01_02.png",
      "assets/images/project01_03.png",
      "assets/images/project01_04.png",
      "assets/images/project01_05.png",
      "assets/images/project01_06.png",
      "assets/images/project01_07.png",
      "assets/images/project01_08.png",
      "assets/images/project01_09.png",
    ],
    oneLiner:
      "한화 그룹 내부 임직원의 권한별 화면 분기와 복잡한 업무 플로우를 반영한 차세대 그룹웨어 프로젝트입니다.",
    roleSummary:
      "화면 UI 구현 · 공통 컴포넌트 설계 · 상태 관리 구조 연동 · API 응답 기반 화면 처리",
    detail: {
      background:
        "한화 그룹 내부 임직원을 위한 차세대 그룹웨어 구축 프로젝트로, 기존 레거시 시스템을 대체하고 업무 효율성과 사용성을 개선하는 것이 주요 목표였습니다.",
      role:
        "주요 업무 화면 UI 구현과 공통 컴포넌트 구조 설계를 담당했습니다. 기획, 디자인, 백엔드와 협업하며 화면 단위 기능을 구현했고, 권한과 상태에 따라 달라지는 분기 UI를 정리해 일관된 화면 흐름으로 연결했습니다.",
      techDetail:
        "Vue3 · Nuxt 기반 환경에서 컴포넌트 단위로 화면을 분리하고, vuex, store 상태 관리 구조와 REST API 연동 데이터를 화면에 반영하는 형태로 개발했습니다. 반복 영역은 공통 컴포넌트로 정리하고, SCSS는 공통 변수와 모듈 구조를 활용해 유지보수 가능하게 설계했습니다.",
      experience:
        "대규모 조직형 시스템 특성상 업무 플로우와 권한 분기가 복잡해 기획 문서만으로는 해석이 어려운 경우가 많았습니다. 기획자 및 백엔드와 직접 커뮤니케이션하며 예외 흐름을 정리했고, 이를 UI 구조와 상태 변화 흐름에 반영하면서 실무형 화면 설계 경험을 쌓았습니다.",
      result:
        "UI의 공통화와 스타일 구조 정리로 이후 추가 화면 대응과 유지보수 효율을 높였습니다.",
    }
  },

  {
    id: 2,
    title: "한화 DWP",
    type: "구축",
    year: 2024,
    image: "project02.png",
    date: "2023.08 - 2024.08",
    duration: "1년",
    contribution: "100%",
    tech: ["Vue3", "TypeScript", "SCSS", "Git", "Figma"],
    thumbnail: "assets/images/project02.png",
    siteUrl: "",
    visibility: "private",
    gallery: [
      "assets/images/project02_01.png",
      "assets/images/project02_02.png",
      "assets/images/project02_03.png",
      "assets/images/project02_04.png",
      "assets/images/project02_05.png",
      "assets/images/project02_06.png",
    ],
    oneLiner:
      "데이터 밀도가 높은 업무 화면을 정보 우선순위 중심으로 재구성하고, AI 데이터 활용도를 높이기 위한 DWP 구축 프로젝트입니다.",
    roleSummary:
      "화면 UI 구현 · 공통 패턴 정리 · 데이터 기반 화면 레이아웃 구성",
    detail: {
      background:
        "한화 그룹 내 다양한 내부 데이터를 통합해 업무 효율과 AI 데이터 활용도를 높이기 위한 DWP(Digital Work Platform) 구축 프로젝트입니다.",
      role:
        "데이터 중심 화면의 UI 구현과 공통 컴포넌트 구조 설계를 담당했습니다. 정보량이 많은 대시보드/리스트형 화면을 업무 흐름에 맞게 정리하고, 반복되는 패턴을 공통화하는 방향으로 작업했습니다.",
      techDetail:
        "Vue 기반 화면 구조에서 컴포넌트 단위로 UI를 분리하고, REST API 응답 데이터에 따라 상태와 화면 구성을 다르게 처리했습니다. SCSS 모듈화를 통해 섹션 단위 스타일을 관리하고, 추후 화면 확장 시 재사용 가능한 구조를 고려했습니다.",
      experience:
        "데이터 중심 프로젝트 특성상 단순히 예쁘게 만드는 것보다 정보 우선순위와 가독성이 훨씬 중요했습니다. 기획 의도를 UI 구조로 재해석하면서, 실무 화면에서 중요한 밀도 조절과 시각적 계층화 경험을 쌓았습니다.",
      result:
        "내부 사용 기준에 맞는 안정적인 데이터형 화면 구성을 구축했습니다.",
    }
  },

  {
    id: 3,
    title: "사내 홈페이지",
    type: "리뉴얼",
    year: 2023,
    image: "project03.png",
    date: "2023.03 - 2023.07",
    duration: "4개월",
    contribution: "100%",
    tech: ["Vue", "JavaScript", "SCSS", "Git", "Figma"],
    thumbnail: "assets/images/project03.png",
    siteUrl: "https://adnstyle.com",
    visibility: "public",
    oneLiner:
      "사내 정보 접근성을 높이기 위해 레이아웃과 콘텐츠 흐름을 재정비한 사내 홈페이지 리뉴얼 프로젝트입니다.",
    roleSummary:
      "퍼블리싱 · 일부 프론트 기능 구현",
    detail: {
      background:
        "사내 구성원을 위한 내부 홈페이지를 리뉴얼하여 정보 접근성과 사용자 경험을 개선한 프로젝트입니다.",
      role:
        "퍼블리싱 전반과 일부 프론트엔드 기능 구현을 진행했습니다. 부서별 요구사항을 반영하면서도 전체 UI 일관성이 유지되도록 화면 구조를 정리했습니다.",
      techDetail:
        "Vue 컴포넌트 구조를 활용해 반복되는 레이아웃과 UI 요소를 효율적으로 관리했고, 인터랙션이 필요한 구간에는 JavaScript 로직을 연계해 화면 동작을 구현했습니다.",
      experience:
        "부서별 요구사항이 달라 화면 우선순위와 표현 방식이 달라질 수 있었기 때문에, 전체 톤을 해치지 않으면서도 각 메뉴의 목적이 드러나도록 조율하는 과정이 중요했습니다.",
      result:
        "기존 대비 정리된 구조와 가독성 높은 화면 흐름으로 내부 사용 경험을 개선했고, 운영 측면에서도 수정이 쉬운 구조를 확보했습니다."
    }
  },

  {
    id: 4,
    title: "한화생명 업무공유시스템",
    type: "구축",
    year: 2022,
    image: "project04.png",
    date: "2022.02 - 2023.02",
    duration: "1년 1개월",
    contribution: "100%",
    tech: ["Vue", "JavaScript", "SCSS", "Git", "Figma"],
    thumbnail: "assets/images/project04.png",
    siteUrl: "",
    visibility: "private",
    gallery: [
      "assets/images/project04_01.png",
      "assets/images/project04_02.png",
      "assets/images/project04_03.png",
      "assets/images/project04_04.png",
      "assets/images/project04_05.png",
      "assets/images/project04_06.png",
      "assets/images/project04_07.png",
      "assets/images/project04_08.png",
    ],
    oneLiner:
      "업무 자료 공유와 협업 흐름에 맞춰 공통 레이아웃과 주요 화면을 구조화한 내부 시스템 구축 프로젝트입니다.",
    roleSummary:
      "주요 화면 UI 구현 · 공통 레이아웃 설계 · 화면 단위 구조 분리",
    detail: {
      background:
        "업무 자료 공유와 협업을 위한 내부 시스템 구축 프로젝트입니다.",
      role:
        "주요 화면 UI와 공통 레이아웃을 구현했습니다. 반복되는 영역은 재사용 가능한 단위로 나누고, 기능별 화면 구조를 안정적으로 연결하는 데 집중했습니다.",
      techDetail:
        "Nuxt 기반 구조를 활용해 페이지 단위 구성을 잡고, 공통 레이아웃과 섹션별 컴포넌트 분리를 적용했습니다. SCSS는 화면 규모가 커져도 관리가 가능하도록 공통 스타일 중심으로 정리했습니다.",
      experience:
        "권한별 화면 분기와 업무 흐름을 이해하는 데 시간이 필요했지만, 기능 목적과 사용자 흐름을 함께 파악하며 화면 구조를 정리하는 경험을 쌓았습니다.",
      result:
        "안정적인 화면 구성과 공통 구조 정리를 통해 내부 사용자 환경을 개선했고, 이후 운영 단계에서도 확장 가능한 UI 기반을 마련했습니다."
    }
  },

  {
    id: 5,
    title: "헬스밸런스 이커머스 통합 구축",
    type: "구축",
    year: 2021,
    image: "project05.png",
    date: "2021.09 - 2022.01",
    duration: "5개월",
    contribution: "70%",
    tech: ["HTML","JavaScript", "SCSS", "Gulp", "Git"],
    thumbnail: "assets/images/project05.png",
    siteUrl: "",
    visibility: "private",
    gallery: [
      "assets/images/project05_01.png",
      "assets/images/project05_02.png",
      "assets/images/project05_03.png",
      "assets/images/project05_04.png",
      "assets/images/project05_05.png",
      "assets/images/project05_06.png",
    ],
    oneLiner:
      "복수 브랜드 운영 환경에 맞춰 공통 구조와 브랜드별 UI 톤을 함께 맞춘 이커머스 통합 구축 프로젝트입니다.",
    roleSummary:
      "주요 화면 퍼블리싱 · 공통 마크업 구조 정리 · 브랜드별 UI 대응",
    detail: {
      background:
        "여러 이커머스 브랜드를 통합 운영하기 위한 쇼핑몰 구축 프로젝트입니다.",
      role:
        "주요 화면 퍼블리싱을 담당하며 브랜드별 디자인 차이를 유지하면서도 공통 구조를 정리하는 작업을 진행했습니다.",
      techDetail:
        "HTML 기반 구조에서 Gulp와 SCSS를 활용해 작업 효율을 높였고, 공통 클래스와 컴포넌트성 마크업을 기준으로 반복 영역을 관리했습니다.",
      experience:
        "브랜드별 성격이 다른 화면을 동일 운영 구조 안에서 맞춰야 했기 때문에, 디자인 차이를 살리면서도 유지보수 가능한 마크업 규칙을 잡는 경험이 중요했습니다.",
      result:
        "일정 내 안정적으로 쇼핑몰 오픈을 완료했고, 운영 확장을 고려한 퍼블리싱 구조를 구축했습니다."
    }
  },

  {
    id: 6,
    title: "고용·노동 DW 및 공동이용시스템",
    type: "구축",
    year: 2021,
    image: "project06.png",
    date: "2021.06 - 2021.08",
    duration: "3개월",
    contribution: "100%",
    tech: ["HTML", "JavaScript", "CSS", "SVN", "Zeplin"],
    thumbnail: "assets/images/project06.png",
    siteUrl: "https://eis.work24.go.kr/elds/edwss/main/main.do",
    visibility: "public",
    gallery: [
      "assets/images/project06.png",
    ],
    oneLiner:
      "공공 프로젝트 기준에 맞춰 접근성과 표준을 고려한 통계·공동이용 시스템 화면을 구축했습니다.",
    roleSummary:
      "퍼블리싱 · 웹접근성 대응 · 공공 표준 구조 반영",
    detail: {
      background:
        "고용 행정 데이터를 활용한 통계 및 공동이용 시스템 구축 프로젝트입니다.",
      role:
        "퍼블리싱을 전담하며 공공기관 서비스 기준에 맞는 화면 구조를 구현했습니다.",
      techDetail:
        "HTML, CSS, JavaScript 기반으로 개발했고, 접근성 관련 요구사항과 표준 마크업 기준을 반영해 정보 전달이 명확한 구조를 만드는 데 집중했습니다.",
      experience:
        "공공 프로젝트 특성상 단순 구현보다 표준 준수와 접근성 대응이 중요했습니다. 화면 의미 구조와 사용성 기준을 더 꼼꼼히 보게 된 계기였습니다.",
      result:
        "요구사항에 맞는 시스템 화면을 안정적으로 구축했으며, 접근성을 고려한 퍼블리싱 경험을 실무에 쌓을 수 있었습니다."
    }
  },

  {
    id: 7,
    title: "교원구몬 구몬학습",
    type: "리뉴얼",
    year: 2021,
    image: "project07.png",
    date: "2021.02 - 2021.05",
    duration: "3개월",
    contribution: "60%",
    tech: ["HTML","JavaScript", "SCSS", "gulp", "Git", "Zeplin"],
    thumbnail: "assets/images/project07.png",
    siteUrl: "https://www.kumon.co.kr/",
    visibility: "public",
    gallery: [
      "assets/images/project07.png",
    ],
    oneLiner:
      "반응형 구조와 인터랙션 디테일을 중심으로 학습 서비스 홈페이지를 리뉴얼했습니다.",
    roleSummary:
      "퍼블리싱 · 기능 구현 · 반응형 및 인터랙션 대응",
    detail: {
      background:
        "기존 학습 서비스 홈페이지를 리뉴얼하는 프로젝트입니다.",
      role:
        "퍼블리싱과 기능 구현을 담당했으며, 다양한 해상도에서 자연스럽게 동작하는 반응형 UI를 구현했습니다.",
      techDetail:
        "HTML, JavaScript, SCSS 기반으로 작업했고, 섹션별 인터랙션과 반응형 레이아웃을 고려해 구조를 설계했습니다.",
      experience:
        "다양한 해상도 대응과 UI 디테일 조정, 스크롤 반응형 인터랙션 구현 과정에서 사용자 흐름에 맞는 표현 방식을 고민했습니다.",
      result:
        "기존 대비 정리된 UI와 반응형 완성도를 높인 형태로 리뉴얼을 완료했습니다.",
    }
  },

  {
    id: 8,
    title: "한화시스템 Defense",
    type: "구축",
    year: 2020,
    image: "project08.png",
    date: "2020.11 - 2021.01",
    duration: "3개월",
    contribution: "70%",
    tech: ["HTML", "JavaScript", "SCSS", "Git", "Zeplin"],
    thumbnail: "assets/images/project08.png",
    siteUrl: "https://www.hanwhasystems.com/kr/business/defense/space.do",
    visibility: "public",
    gallery: [
      "assets/images/project08.png",
    ],
    oneLiner:
      "요구사항 중심의 안정적인 퍼블리싱 대응으로 방산 계열 시스템 화면을 구축했습니다.",
    roleSummary:
      "퍼블리싱 · 화면 구현 · 운영 목적 중심 UI 대응",
    detail: {
      background:
        "방산 관련 내부 시스템 구축 프로젝트입니다.",
      role:
        "퍼블리싱을 담당하며 요구사항에 맞는 화면 구조를 안정적으로 구현했습니다.",
      result:
        "프로젝트 일정에 맞춰 안정적으로 구축을 완료했고, 목적 중심의 화면 구현 경험을 쌓았습니다."
    }
  },

  {
    id: 9,
    title: "신협 태블릿브랜치",
    type: "구축",
    year: 2020,
    image: "project09.png",
    date: "2020.07 - 2020.10",
    duration: "4개월",
    contribution: "50%",
    tech: ["HTML", "JavaScript", "CSS", "Git", "Zeplin"],
    thumbnail: "assets/images/project09.png",
    siteUrl: "",
    visibility: "private",
    gallery: [
      "assets/images/project09.png",
    ],
    oneLiner:
      "현장 업무 환경에 맞춰 터치 중심의 태블릿 UI를 구성한 금융 업무 시스템 프로젝트입니다.",
    roleSummary:
      "퍼블리싱 · 태블릿 최적화 UI · 터치 인터랙션 대응",
    detail: {
      background:
        "태블릿 환경에서 사용되는 금융 업무 시스템 구축 프로젝트입니다.",
      role:
        "퍼블리싱을 담당하며 태블릿 해상도와 현장 사용 흐름에 맞는 UI 구성을 진행했습니다.",
      techDetail:
        "태블릿 전용 레이아웃과 터치 기반 인터랙션을 고려한 화면 구조를 설계하고, 현장 가독성과 조작성을 중심으로 UI를 구현했습니다.",
      experience:
        "데스크톱과 다른 사용 맥락에서 버튼 크기, 정보 밀도, 터치 흐름을 고려해야 했기 때문에 디바이스 환경에 맞춘 퍼블리싱 경험을 쌓을 수 있었습니다.",
      result:
        "현장 업무 환경에 맞는 태블릿 UI로 시스템을 안정적으로 오픈했습니다."
    }
  },

  {
    id: 10,
    title: "일주학술문화재단",
    type: "리뉴얼",
    year: 2020,
    image: "project10.png",
    date: "2020.04 - 2020.06",
    duration: "3개월",
    contribution: "50%",
    tech: ["HTML", "JavaScript", "CSS", "Git", "Zeplin"],
    thumbnail: "assets/images/project10.png",
    siteUrl: "https://www.iljufoundation.org/homepage/index.do",
    visibility: "public",
    gallery: [
      "assets/images/project10.png",
    ],
    oneLiner:
      "정보 전달 중심의 재단 홈페이지를 웹표준과 반응형 구조에 맞춰 리뉴얼했습니다.",
    roleSummary:
      "퍼블리싱 · 반응형 대응 · 브라우저 호환성 정리",
    detail: {
      background:
        "재단 소개와 정보 제공을 위한 홈페이지 리뉴얼 프로젝트입니다.",
      role:
        "퍼블리싱을 담당하며 다양한 브라우저와 해상도에서 안정적으로 동작하는 화면을 구현했습니다.",
      techDetail:
        "기본적인 웹표준과 반응형 구조를 중심으로 개발했고, 정보 전달이 명확한 콘텐츠형 레이아웃에 집중했습니다.",
      experience:
        "브라우저 호환성과 반응형 이슈를 해결하며, 콘텐츠 성격에 맞는 화면 밸런스를 맞추는 경험을 쌓았습니다.",
      result:
        "정보 접근성이 개선된 형태로 리뉴얼을 완료했고, 운영 안정성을 고려한 화면 구조를 정리했습니다."
    }
  }
]

export default projects