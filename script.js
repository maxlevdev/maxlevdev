(() => {
  "use strict";
  const translations = {
    ko: {
      "nav-work":"프로젝트","nav-focus":"관심 분야","nav-approach":"작업 방식","nav-about":"소개",
      "hero-eyebrow":"STUDENT DEVELOPER · AEROSPACE & SYSTEMS","hero-line-one":"복잡한 시스템을","hero-line-two":"이해하고, 구현합니다.",
      "hero-lead":"항공우주공학에 대한 관심을 소프트웨어로 확장하고 있습니다. CPU의 실행 모델부터 비행·궤도 시뮬레이션까지, 궁금한 원리를 직접 만들고 검증하는 과정을 좋아합니다.",
      "hero-cta-work":"프로젝트 살펴보기","hero-cta-github":"GitHub 프로필","hero-footnote":"현재 진행 중인 프로젝트와 기술 탐구를 기록합니다.",
      "visual-label":"탐구 방향","visual-value":"SOFTWARE → SYSTEMS → AEROSPACE","strip-label":"ENGINEERING MINDSET",
      "strip-copy":"좋은 구현은 코드를 작성하는 데서 끝나지 않습니다. 시스템을 모델링하고, 동작을 관찰하고, 예외 상황까지 확인하는 과정이 중요하다고 생각합니다.",
      "work-title":"만들고 있는 것들","work-description":"완성된 결과와 진행 중인 탐구를 구분해 기록합니다. 각 프로젝트는 실제 구현과 검증을 통해 발전시키고 있습니다.",
      "status-development":"개발 중","status-lab":"기술 실험","status-research":"연구 탐구","question-label":"ENGINEERING QUESTION","focus-label":"CURRENT FOCUS",
      "project-zenith-summary":"CPU 구조와 실행 모델을 탐구하는 C++ 기반 에뮬레이터 프로젝트입니다. 명령 실행 흐름, CPU 상태, 프로그램 로딩과 프로세스 생명주기를 연결해 설계하고 있습니다.",
      "project-zenith-question":"CPU 상태와 프로그램 실행 과정을 어떤 구조로 표현하고 검증할 수 있을까?","project-zenith-focus":"상태 모델 · 실행 흐름 · 로더 설계",
      "project-aero-summary":"항공기·로켓의 구성, 추진, 스테이징, 비행 데이터와 궤도 개념을 하나의 브라우저 기반 작업 공간으로 연결하려는 시뮬레이션 프로젝트입니다.",
      "project-aero-question":"서로 다른 비행·궤도 모듈이 하나의 일관된 시뮬레이션 상태를 공유하려면?","project-aero-focus":"모듈 구조 · 차량 구성 · 텔레메트리",
      "project-server-summary":"epoll 기반 비동기 TCP 서버 실험입니다. non-blocking I/O, 클라이언트 상태 관리, 클라이언트별 송신 큐를 중심으로 연결과 메시지 처리를 구현하고 있습니다.",
      "project-server-question":"여러 연결을 막힘없이 처리하면서 메시지 순서와 연결 상태를 어떻게 관리할까?","project-server-focus":"이벤트 루프 · 연결 수명주기 · 송신 큐",
      "project-cmapss-summary":"NASA C-MAPSS 터보팬 엔진 시뮬레이션 데이터(FD001–FD004)를 바탕으로 열화 패턴과 잔여수명 예측 문제를 탐구한 데이터 분석 활동입니다.",
      "project-cmapss-question":"운전 조건과 센서 변화는 엔진의 열화와 잔여수명에 어떤 단서를 줄까?","project-cmapss-focus":"데이터 조건 · 열화 신호 · RUL 문제",
      "work-footnote":"프로젝트의 개발 상태를 기준으로 소개합니다. 공개 가능한 코드와 데모는 정리되는 대로 GitHub에 연결할 예정입니다.",
      "focus-title":"관심을 두고 있는 분야","focus-description":"서로 다른 분야를 연결해 복잡한 시스템을 이해하는 데 관심이 있습니다.",
      "focus-a-title":"Aerospace Engineering","focus-a-copy":"비행 역학, 추진 시스템, 로켓 동역학, 궤도 역학처럼 실제 물리 법칙이 움직임을 결정하는 분야.",
      "focus-s-title":"Systems Programming","focus-s-copy":"메모리, 프로세스, 동시성, 네트워크 I/O 등 소프트웨어가 실제 시스템에서 동작하는 원리.",
      "focus-m-title":"Modeling & Simulation","focus-m-copy":"현상을 변수와 상태로 표현하고, 시뮬레이션과 데이터로 가설을 확인하는 공학적 접근.",
      "approach-title":"질문에서 검증까지","approach-description":"새로운 주제를 배울 때도, 프로젝트를 구현할 때도 같은 흐름을 지키려고 합니다.",
      "process-1-title":"질문 정의","process-1-copy":"무엇을 설명하거나 해결해야 하는지 구체적인 문제로 바꿉니다.",
      "process-2-title":"모델링","process-2-copy":"상태, 입력, 제약 조건과 구성 요소 사이의 관계를 정리합니다.",
      "process-3-title":"구현과 관찰","process-3-copy":"작은 단위로 구현하고 실제 동작을 실험해 예상과 비교합니다.",
      "process-4-title":"검증과 개선","process-4-copy":"경계 조건과 실패 상황을 확인하고 설계의 근거를 다듬습니다.",
      "about-title-first":"호기심을","about-title-second":"작동하는 모델로.","about-lead":"저는 시스템의 내부 원리를 이해하고, 그것을 직접 동작하는 형태로 구현하는 일을 좋아합니다.",
      "about-body":"항공우주공학을 향한 관심에서 출발해 C/C++ 시스템 프로그래밍, 네트워크, 시뮬레이션을 함께 탐구하고 있습니다. 특정 기술을 많이 안다고 보이기보다, 모르는 문제를 구조화하고 작은 실험으로 확인하며 꾸준히 깊이를 더하는 개발자가 되고 싶습니다.",
      "value-1":"원리를 먼저 이해하기","value-2":"근거를 갖고 설계하기","value-3":"동작과 결과로 검증하기",
      "contact-title-line-one":"다음 질문은","contact-title-line-two":"무엇일까요?","contact-copy":"프로젝트의 진행 과정과 공개 가능한 코드는 GitHub에 정리하고 있습니다.",
      "contact-cta":"GitHub에서 더 보기","footer-copy":"호기심에서 시작해, 구현과 검증으로 나아갑니다."
    },
    en: {
      "nav-work":"Work","nav-focus":"Focus","nav-approach":"Approach","nav-about":"About",
      "hero-eyebrow":"STUDENT DEVELOPER · AEROSPACE & SYSTEMS","hero-line-one":"Understanding","hero-line-two":"complex systems.",
      "hero-lead":"I extend my interest in aerospace engineering through software. From CPU execution models to flight and orbital simulation, I enjoy turning questions into working experiments and checking how they behave.",
      "hero-cta-work":"Explore selected work","hero-cta-github":"GitHub profile","hero-footnote":"A record of projects in progress and technical explorations.",
      "visual-label":"DIRECTION OF EXPLORATION","visual-value":"SOFTWARE → SYSTEMS → AEROSPACE","strip-label":"ENGINEERING MINDSET",
      "strip-copy":"A good implementation is more than writing code. I value modeling a system, observing its behavior, and checking how it responds to edge cases.",
      "work-title":"Things in progress","work-description":"I distinguish active development from research and technical experiments. Each project is refined through implementation and verification.",
      "status-development":"IN DEVELOPMENT","status-lab":"ENGINEERING LAB","status-research":"RESEARCH EXPLORATION","question-label":"ENGINEERING QUESTION","focus-label":"CURRENT FOCUS",
      "project-zenith-summary":"A C++ emulator project exploring CPU architecture and execution models. I am designing how instruction flow, machine state, program loading, and process lifecycle fit together.",
      "project-zenith-question":"How can CPU state and program execution be represented and verified clearly?","project-zenith-focus":"State model · Execution flow · Loader design",
      "project-aero-summary":"An aerospace simulation workspace intended to connect vehicle configuration, propulsion, staging, flight data, and orbital concepts in the browser.",
      "project-aero-question":"How can flight and orbital modules share one consistent simulation state?","project-aero-focus":"Module architecture · Vehicle setup · Telemetry",
      "project-server-summary":"An epoll-based asynchronous TCP server experiment. The implementation focuses on non-blocking I/O, client state, and per-client outbound queues.",
      "project-server-question":"How can multiple connections be handled without blocking while preserving message and connection state?","project-server-focus":"Event loop · Client lifecycle · Send queues",
      "project-cmapss-summary":"A data-analysis exploration of degradation patterns and remaining-useful-life prediction using NASA C-MAPSS turbofan simulation data (FD001–FD004).",
      "project-cmapss-question":"What can operating conditions and sensor changes reveal about engine degradation and remaining useful life?","project-cmapss-focus":"Dataset conditions · Degradation signals · RUL",
      "work-footnote":"Project stages are stated explicitly. Public code and demos will be linked on GitHub as they are ready to share.",
      "focus-title":"Areas I keep exploring","focus-description":"I am interested in connecting different fields to understand complex systems.",
      "focus-a-title":"Aerospace Engineering","focus-a-copy":"Fields where physical laws shape motion: flight dynamics, propulsion systems, rocket dynamics, and orbital mechanics.",
      "focus-s-title":"Systems Programming","focus-s-copy":"How software behaves on real machines: memory, processes, concurrency, and network I/O.",
      "focus-m-title":"Modeling & Simulation","focus-m-copy":"Representing real phenomena with variables and state, then testing hypotheses through simulation and data.",
      "approach-title":"From questions to verification","approach-description":"I try to follow the same process when learning a new topic or building a project.",
      "process-1-title":"Frame the question","process-1-copy":"Turn a broad curiosity into a concrete problem that can be explained or solved.",
      "process-2-title":"Model the system","process-2-copy":"Identify states, inputs, constraints, and relationships between components.",
      "process-3-title":"Implement and observe","process-3-copy":"Build a small working version, experiment with it, and compare behavior with expectations.",
      "process-4-title":"Verify and refine","process-4-copy":"Test boundary and failure cases, then improve the reasoning behind the design.",
      "about-title-first":"Curiosity into","about-title-second":"working models.","about-lead":"I enjoy understanding how systems work internally and turning that understanding into something that runs.",
      "about-body":"My interest in aerospace engineering has led me to explore C/C++ systems programming, networking, and simulation alongside it. Rather than claiming expertise in every technology, I want to become an engineer who can structure unfamiliar problems, test ideas through small experiments, and steadily build deeper understanding.",
      "value-1":"Understand the principles first","value-2":"Design with clear reasoning","value-3":"Verify through behavior and results",
      "contact-title-line-one":"What is the","contact-title-line-two":"next question?","contact-copy":"I use GitHub to organize project progress and share code when it is ready for review.",
      "contact-cta":"Explore on GitHub","footer-copy":"Driven by curiosity. Improved through implementation and verification."
    }
  };

  const languageButton = document.getElementById("languageToggle");
  let language = "ko";

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.querySelectorAll("[data-copy]").forEach((element) => {
      const value = translations[language][element.dataset.copy];
      if (typeof value === "string") element.textContent = value;
    });
    languageButton.textContent = language === "ko" ? "EN" : "KO";
    languageButton.setAttribute("aria-label", language === "ko" ? "Switch to English" : "한국어로 전환");
  }

  languageButton.addEventListener("click", () => setLanguage(language === "ko" ? "en" : "ko"));

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("js-ready");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    revealItems.forEach((item) => observer.observe(item));
    document.querySelectorAll(".hero .reveal").forEach((item, index) => {
      window.setTimeout(() => item.classList.add("is-visible"), 120 + index * 140);
    });
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
  setLanguage(language);
})();
