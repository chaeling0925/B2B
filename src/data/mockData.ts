import { ServiceItem, ClientProject, Creator } from '../types/marketplace';

export const HERO_BANNER_IMAGE = '/src/assets/images/hero_ai_creative_platform_1790724501938.jpg';

export const MOCK_CREATORS: Record<string, Creator> = {
  synth: {
    id: 'creator-synth',
    name: '신스 스튜디오 (Synth Studio)',
    agencyName: 'SYNTH AI Cinema Lab',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    grade: 'Prime AI Master',
    aiSpecialty: 'Runway Gen-3 / Sora 시네마틱 영상 & TVC CF',
    primaryTools: ['Runway Gen-3', 'Kling 1.5 Pro', 'Midjourney v7', 'Topaz Video AI 8K'],
    responseTime: '평균 10분 이내',
    careerYears: 7,
    completedProjects: 840,
    taxInvoiceAvailable: true,
    ndaAvailable: true,
    satisfactionRate: 99.7,
    introduction: '글로벌 브랜드 및 패션·테크 기업을 위한 하이엔드 AI 상업 영상 프로덕션입니다. 프롬프트 디렉팅부터 스토리보드, 사운드 디자인, 4K/8K 업스케일링까지 원스톱으로 지원합니다.'
  },
  vogue: {
    id: 'creator-vogue',
    name: '뉴럴 보그 (Neural Vogue AI)',
    agencyName: 'Neural Vogue Creative',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    grade: 'Prime AI Master',
    aiSpecialty: 'Flux Pro & 커스텀 LoRA 패션 룩북 & 제품 화보',
    primaryTools: ['Flux.1 [dev/pro]', 'Midjourney v7', 'ComfyUI Custom Node', 'Magnific AI'],
    responseTime: '평균 8분 이내',
    careerYears: 9,
    completedProjects: 1260,
    taxInvoiceAvailable: true,
    ndaAvailable: true,
    satisfactionRate: 99.4,
    introduction: '실제 모델 섭외 및 스튜디오 대관 비용의 10% 예산으로 보그(Vogue)급 상업 화보와 룩북을 제작합니다. 브랜드 전용 LoRA 모델 학습으로 일관된 모델 페이스와 무드를 유지합니다.'
  },
  aether: {
    id: 'creator-aether',
    name: '에테르 아카이브 (Aether Archive)',
    agencyName: 'Aether Concept Works',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
    grade: 'Top Prompt Director',
    aiSpecialty: '게임·엔터테인먼트 시네마틱 콘셉트 아트 & 세계관',
    primaryTools: ['Midjourney v7 Niji', 'ComfyUI ControlNet', 'Photoshop GenFill', 'Blender 3D'],
    responseTime: '평균 15분 이내',
    careerYears: 8,
    completedProjects: 920,
    taxInvoiceAvailable: true,
    ndaAvailable: true,
    satisfactionRate: 99.1,
    introduction: 'AAA급 게임 개발사 및 영화 제작사를 위한 비주얼 세계관 구축, 캐릭터 키비주얼, 매트페인팅 아트 디렉팅 전문 크리에이터 그룹입니다.'
  },
  algo: {
    id: 'creator-algo',
    name: '알고 브랜드 랩 (Algo Brand Lab)',
    agencyName: 'ALGO Generative Systems',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
    grade: 'Prime AI Master',
    aiSpecialty: '생성형 알고리즘 브랜드 아이덴티티 & 다이내믹 로고',
    primaryTools: ['Custom Python ComfyUI', 'Vectorizer AI', 'TouchDesigner', 'Midjourney Pro'],
    responseTime: '평균 12분 이내',
    careerYears: 11,
    completedProjects: 1540,
    taxInvoiceAvailable: true,
    ndaAvailable: true,
    satisfactionRate: 99.5,
    introduction: '정적인 고정 로고를 넘어, 브랜드 데이터와 상호작용하는 생성형 비주얼 아이덴티티 및 벡터(SVG/AI) 가이드라인을 설계합니다.'
  },
  sonic: {
    id: 'creator-sonic',
    name: '소닉 뉴런 (Sonic Neuron)',
    agencyName: 'Sonic Neuron Audio Studio',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    grade: 'Enterprise Verified',
    aiSpecialty: 'AI 브랜드 오디오 로고 & 맞춤형 BGM 사운드트랙',
    primaryTools: ['Suno v4 Pro', 'Udio AI', 'ElevenLabs Voice', 'iZotope Ozone'],
    responseTime: '평균 20분 이내',
    careerYears: 6,
    completedProjects: 630,
    taxInvoiceAvailable: true,
    ndaAvailable: true,
    satisfactionRate: 98.8,
    introduction: '브랜드 영상과 디지털 캠페인을 위한 독점 AI 음악 및 오디오 브랜딩 전문. 저작권 분쟁 없는 100% 오리지널 사운드트랙을 납품합니다.'
  },
  metaicon: {
    id: 'creator-metaicon',
    name: '메타 아이콘 (MetaIcon AI)',
    agencyName: 'MetaIcon Virtual Studio',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    grade: 'Prime AI Master',
    aiSpecialty: '브랜드 전속 버추얼 앰버서더 개발 & 3D 페르소나',
    primaryTools: ['InstantID', 'ComfyUI IP-Adapter', 'Runway Act-One', 'LivePortrait'],
    responseTime: '평균 15분 이내',
    careerYears: 7,
    completedProjects: 710,
    taxInvoiceAvailable: true,
    ndaAvailable: true,
    satisfactionRate: 99.2,
    introduction: '기업 고유의 브랜드 철학을 담은 독점 가상 인플루언서 및 앰버서더를 개발합니다. SNS 포스팅, 브랜드 광고 및 라이브 영상용 소스까지 제공합니다.'
  }
};

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 'serv-synth-video',
    title: '[Runway Gen-3 & Sora] 브랜드 상업용 AI 시네마틱 광고 영상 & TVC급 숏폼 CF',
    subtitle: '스토리보드 기획부터 4K 초고해상도 업스케일, 사운드 디자인까지 풀 파이프라인 제공',
    category: 'ai_video',
    categoryLabel: 'AI 영상 & 광고 CF',
    isPrime: true,
    badge: '대기업 광고 선호 1위',
    aiTools: ['Runway Gen-3 Alpha', 'Kling 1.5 Pro', 'Midjourney v7', 'Topaz Video AI 8K'],
    creator: MOCK_CREATORS.synth,
    heroImage: '/src/assets/images/service_ai_cinematic_video_1790724514481.jpg',
    galleryImages: [
      '/src/assets/images/service_ai_cinematic_video_1790724514481.jpg',
      '/src/assets/images/hero_ai_creative_platform_1790724501938.jpg',
      '/src/assets/images/service_ai_concept_art_1790724536460.jpg'
    ],
    startingPrice: 550000,
    rating: 4.98,
    reviewCount: 428,
    bookmarkCount: 3120,
    turnaroundTime: '초안 48시간 이내',
    resolution: '4K / 8K Cinema Grade',
    commercialLicense: true,
    summaryReview: '촬영 세트장이나 고가 장비 대여 없이도 해외 로케이션급 시네마틱 럭셔리 광고를 단 4일 만에 완성했습니다. 브랜드 프레젠테이션 반응이 폭발적이었습니다.',
    packages: {
      standard: {
        id: 'standard',
        name: 'STANDARD',
        price: 550000,
        priceFormatted: '550,000원',
        summary: 'AI 영상 단일 컷: 목적에 맞는 단일 컷 제작 (원안 이미지 전달 필요, 최대길이: 10s)',
        deliveryDays: 1,
        revisionCount: 2,
        conceptsCount: 1,
        features: [
          'AI 영상 단일 컷 제작',
          '원안 이미지 기반 생성 (최대 10s)',
          '러닝타임 최대 60초 포맷',
          '작업 소요 1일 이내 완료',
          '무상 수정 2회 지원',
          '상업적 저작권 100% 양도'
        ],
        includedItems: [
          { name: '4K ProRes / MP4 마스터본', included: true },
          { name: '상업적 이용 및 저작권 양도증서', included: true },
          { name: '원안 이미지 매칭 생성', included: true },
          { name: '스토리텔링 숏폼 편집', included: false },
          { name: '기획부터 이미지보드 총괄 제작', included: false }
        ]
      },
      deluxe: {
        id: 'deluxe',
        name: 'DELUXE',
        price: 1100000,
        priceFormatted: '1,100,000원',
        summary: 'AI 숏폼 영상: 스토리텔링이 가능한 형태의 영상 제작 (A.I. 컷 제작 + 어도비 기반 종편 포함, 최대길이: 60s)',
        deliveryDays: 1,
        revisionCount: 2,
        conceptsCount: 1,
        features: [
          'AI 숏폼 영상 스토리텔링 제작',
          'A.I. 컷 제작 + 어도비 기반 종편 포함',
          '최대길이 60s 지원',
          '작업 소요 1일 이내 완료',
          '무상 수정 2회 지원',
          'BGM 및 사운드 싱크 믹싱'
        ],
        includedItems: [
          { name: '4K ProRes / MP4 마스터본', included: true },
          { name: '상업적 이용 및 저작권 양도증서', included: true },
          { name: '어도비 기반 종편 및 트랜지션', included: true },
          { name: '스토리텔링 컷 구성', included: true },
          { name: '기획부터 이미지보드 총괄 제작', included: false }
        ]
      },
      premium: {
        id: 'premium',
        name: 'PREMIUM',
        price: 2200000,
        priceFormatted: '2,200,000원',
        summary: '종합 AI 광고 제작: 기획부터 이미지보드, 최종 영상까지 총괄 제작 프로젝트 (1분 이내)',
        deliveryDays: 1,
        revisionCount: 2,
        conceptsCount: 1,
        features: [
          '기획부터 이미지보드, 최종 영상까지 총괄 제작',
          '종합 AI 상업 광고 프로젝트 (1분 이내)',
          '4K/8K 최고급 컬러 그레이딩 & VFX 합성',
          '작업 소요 1일 이내 완료',
          '무상 수정 2회 지원',
          '전담 AI 디렉터 총괄 매니징'
        ],
        includedItems: [
          { name: '4K ProRes / MP4 마스터본', included: true },
          { name: '상업적 이용 및 저작권 양도증서', included: true },
          { name: '프롬프트 & 워크플로우 명세서', included: true },
          { name: '이미지보드 및 시나리오 기획서', included: true },
          { name: 'SNS 채널별 종횡비 리사이징', included: true }
        ]
      }
    },
    workProcess: [
      { step: 1, title: '브랜드 브리프 & 톤앤매너 인터뷰', description: '제품 USP, 타깃 소비자, 희망 레퍼런스 스타일 및 무드보드 설정' },
      { step: 2, title: '프롬프트 설계 & 시드 테스트', description: 'AI 모델(Runway/Sora/Midjourney) 기반 키프레임 시안 3~5종 도출' },
      { step: 3, title: '시네마틱 모션 생성 & 인페인팅', description: '자연스러운 카메라 무빙, 인체 디테일 보정 및 모션 블러 최적화' },
      { step: 4, title: '사운드 믹싱 & 4K 마스터링 납품', description: '상업적 저작권 증서, 프롬프트 시드 명세서 및 고화질 원본 전달' }
    ],
    faqs: [
      { question: '제작된 AI 영상의 저작권과 상업적 이용은 안전한가요?', answer: '네, 상업용 라이선스가 보증되는 엔터프라이즈 생성 파이프라인만을 사용하며 최종 영상의 모든 저작재산권은 귀사에 100% 양도됩니다.' },
      { question: '기존 실제 제품 사진이나 모델 이미지를 영상에 합성할 수 있나요?', answer: '네, 실물 제품 3D CAD나 고해상도 사진을 ControlNet과 IP-Adapter로 일관성 있게 투영하여 일관된 제품 샷을 완성합니다.' },
      { question: '납기 일정이 긴급할 경우 급행 처리가 가능한가요?', answer: '네, 사전 협의를 통해 24시간~48시간 이내 긴급 숏폼 CF 납품이 가능합니다.' }
    ]
  },
  {
    id: 'serv-vogue-fashion',
    title: '[Flux Pro & 커스텀 LoRA] 패션·뷰티 브랜드 하이엔드 AI 모델 룩북 & 상업 화보',
    subtitle: '실제 스튜디오 대관 대비 90% 비용 절감. 동일 모델 얼굴 유지 및 초고해상도 패브릭 질감',
    category: 'ai_image',
    categoryLabel: 'AI 이미지 & 룩북',
    isPrime: true,
    badge: '패션·뷰티 부문 1위',
    aiTools: ['Flux.1 [dev/pro]', 'Midjourney v7', 'ComfyUI Custom', 'Magnific AI 8K'],
    creator: MOCK_CREATORS.vogue,
    heroImage: '/src/assets/images/service_ai_fashion_lookbook_1790724526063.jpg',
    galleryImages: [
      '/src/assets/images/service_ai_fashion_lookbook_1790724526063.jpg',
      '/src/assets/images/hero_ai_creative_platform_1790724501938.jpg',
      '/src/assets/images/service_ai_generative_branding_1790724547076.jpg'
    ],
    startingPrice: 350000,
    rating: 4.96,
    reviewCount: 610,
    bookmarkCount: 4210,
    turnaroundTime: '초안 24시간 이내',
    resolution: '8K Ultra High-Res (300DPI)',
    commercialLicense: true,
    summaryReview: '신규 런칭 코스메틱 브랜드의 룩북과 메인 상세페이지 키비주얼을 의뢰했습니다. 모델 피부 결, 빛의 반사, 옷감 질감이 실제 사진보다 더 고급스러워 감탄했습니다.',
    packages: {
      standard: {
        id: 'standard',
        name: 'STANDARD',
        price: 350000,
        priceFormatted: '350,000원',
        summary: 'AI 모델 스튜디오 화보 컷 (고해상도 5컷)',
        deliveryDays: 2,
        revisionCount: 2,
        conceptsCount: 3,
        features: [
          '8K 고해상도 AI 모델 룩북 5컷',
          '피부 결 및 디테일 정밀 인페인팅',
          '300DPI 인쇄 및 웹 최적화 납품',
          '상업적 이용 및 저작권 완전 양도'
        ],
        includedItems: [
          { name: '8K 고해상도 JPG/PNG/TIFF', included: true },
          { name: '상업적 라이선스 무제한 양도', included: true },
          { name: '브랜드 전용 LoRA 모델 파일 제공', included: false },
          { name: '실물 제품 핏 합성(Virtual Try-On)', included: false }
        ]
      },
      deluxe: {
        id: 'deluxe',
        name: 'DELUXE',
        price: 850000,
        priceFormatted: '850,000원',
        summary: '시즌 룩북 풀 컬렉션 (12컷 + 브랜드 전용 모델 LoRA)',
        deliveryDays: 4,
        revisionCount: '무제한',
        conceptsCount: 5,
        features: [
          '시즌 룩북 고해상도 12컷',
          '브랜드 고유 페이스 LoRA 모델 학습 & 보관',
          '배경 무드별(스트리트, 럭셔리 라운지, 자연광) 베리에이션',
          '상세페이지용 디테일 컷 6종 추가 무료'
        ],
        includedItems: [
          { name: '8K 고해상도 JPG/PNG/TIFF', included: true },
          { name: '상업적 라이선스 무제한 양도', included: true },
          { name: '브랜드 전용 LoRA 모델 파일 제공', included: true },
          { name: '실물 제품 핏 합성(Virtual Try-On)', included: true }
        ]
      },
      premium: {
        id: 'premium',
        name: 'PREMIUM',
        price: 1900000,
        priceFormatted: '1,900,000원',
        summary: '엔터프라이즈 글로벌 캠페인 올인원 룩북 (25컷 + 모션)',
        deliveryDays: 7,
        revisionCount: '무제한',
        conceptsCount: 8,
        features: [
          '화보 25컷 + 숏폼 무빙 포스터 3편',
          '다국적 모델 라인업(아시안, 유러피안 등) 구축',
          '패키지 및 옥외광고(OOH)용 초고화질 리터칭',
          '브랜드 무드북 및 프롬프트 라이브러리 일체 양도'
        ],
        includedItems: [
          { name: '8K 고해상도 JPG/PNG/TIFF', included: true },
          { name: '상업적 라이선스 무제한 양도', included: true },
          { name: '브랜드 전용 LoRA 모델 파일 제공', included: true },
          { name: '실물 제품 핏 합성(Virtual Try-On)', included: true }
        ]
      }
    },
    workProcess: [
      { step: 1, title: '컨셉 보드 및 타깃 무드 도출', description: '브랜드 제품 사양 및 원하는 모델 체형, 연령대, 피부 톤 협의' },
      { step: 2, title: 'LoRA 모델 학습 & 테스트 렌더', description: '브랜드 독점 페이스 가중치 고정 및 샘플 컷 승인' },
      { step: 3, title: '스타일링 & 고해상도 렌더링', description: '조명 연출, 메이크업 디테일 보정 및 Magnific 8K 업스케일' },
      { step: 4, title: '최종 납품 & 세금계산서 발행', description: '웹/인쇄용 규격별 파일 전달 및 LoRA 가중치 파일 제공' }
    ],
    faqs: [
      { question: '추후 다른 의상 룩북을 찍을 때 동일한 모델 얼굴로 계속 제작 가능한가요?', answer: '네! DELUXE 이상 패키지에서는 귀사 전용 LoRA 가중치 모델을 영구 보관해드리므로 다음 시즌에도 100% 동일한 모델 페이스로 추가 화보 제작이 가능합니다.' },
      { question: '인쇄용 대형 포스터나 옥외광고 해상도 출력이 가능한가요?', answer: '네, 8K 300DPI TIFF 규격으로 납품되므로 백화점 팝업스토어 및 옥외 전광판 인쇄에 완벽히 대응합니다.' }
    ]
  },
  {
    id: 'serv-aether-art',
    title: '[시네마틱 키비주얼] 게임·영화·엔터 세계관 구축용 AI 매트페인팅 & 콘셉트 아트',
    subtitle: 'SF, 판타지, 사이버펑크 초대형 스케일 세계관. 프리프로덕션 콘티부터 메인 포스터까지',
    category: 'ai_art',
    categoryLabel: 'AI 콘셉트 아트 & 비주얼',
    isPrime: true,
    badge: '엔터사 제휴 다수',
    aiTools: ['Midjourney v7 Niji', 'ComfyUI ControlNet', 'Photoshop GenFill', 'Blender 3D'],
    creator: MOCK_CREATORS.aether,
    heroImage: '/src/assets/images/service_ai_concept_art_1790724536460.jpg',
    galleryImages: [
      '/src/assets/images/service_ai_concept_art_1790724536460.jpg',
      '/src/assets/images/service_ai_cinematic_video_1790724514481.jpg',
      '/src/assets/images/hero_ai_creative_platform_1790724501938.jpg'
    ],
    startingPrice: 450000,
    rating: 4.95,
    reviewCount: 382,
    bookmarkCount: 2890,
    turnaroundTime: '초안 48시간 이내',
    resolution: '8K Matte Painting Grade',
    commercialLicense: true,
    summaryReview: '웹툰 원작 드라마의 세계관 설정 이미지와 포스터 키비주얼을 의뢰했습니다. 상상 이상으로 웅장하고 디테일한 비주얼이 도출되어 투자 유치 발표에서 큰 호응을 얻었습니다.',
    packages: {
      standard: {
        id: 'standard',
        name: 'STANDARD',
        price: 450000,
        priceFormatted: '450,000원',
        summary: '단일 환경 또는 캐릭터 키비주얼 아트 (2컷)',
        deliveryDays: 3,
        revisionCount: 2,
        conceptsCount: 3,
        features: [
          '8K 시네마틱 매트페인팅 아트 2컷',
          '레이어 분리 PSD 파일 제공',
          '빛/대기 효과 리터칭',
          '상업적 독점 이용 권리'
        ],
        includedItems: [
          { name: '8K 해상도 마스터 파일', included: true },
          { name: '포토샵 레이어 분리 PSD', included: true },
          { name: '상업적 저작권 완전 양도', included: true },
          { name: '3D 블렌더 카메라 셋업 파일', included: false }
        ]
      },
      deluxe: {
        id: 'deluxe',
        name: 'DELUXE',
        price: 1100000,
        priceFormatted: '1,100,000원',
        summary: '세계관 빌딩 팩 (환경 3종 + 캐릭터 3종 + 타이틀 키비주얼)',
        deliveryDays: 6,
        revisionCount: 4,
        conceptsCount: 5,
        features: [
          '핵심 환경 3종 + 주요 캐릭터 3종 + 키비주얼 1종',
          '컨셉 스토리텔링 및 컬러 팔레트 가이드',
          '3D 블렌더 프리비즈 연계',
          '게임 기획서 및 피치덱 바로 삽입 가능'
        ],
        includedItems: [
          { name: '8K 해상도 마스터 파일', included: true },
          { name: '포토샵 레이어 분리 PSD', included: true },
          { name: '상업적 저작권 완전 양도', included: true },
          { name: '3D 블렌더 카메라 셋업 파일', included: true }
        ]
      },
      premium: {
        id: 'premium',
        name: 'PREMIUM',
        price: 2400000,
        priceFormatted: '2,400,000원',
        summary: '엔터테인먼트 마스터 세계관 아트북 패키지 (15컷+)',
        deliveryDays: 12,
        revisionCount: '무제한',
        conceptsCount: 8,
        features: [
          '세계관 풀 아트북 15컷 이상',
          '시네마틱 모션 비디오 루프 2종 제공',
          '영화/드라마 메인 포스터 레벨 마스터링',
          '전담 수석 컨셉 아티스트 1:1 디렉팅'
        ],
        includedItems: [
          { name: '8K 해상도 마스터 파일', included: true },
          { name: '포토샵 레이어 분리 PSD', included: true },
          { name: '상업적 저작권 완전 양도', included: true },
          { name: '3D 블렌더 카메라 셋업 파일', included: true }
        ]
      }
    },
    workProcess: [
      { step: 1, title: '스토리 세계관 & 시놉시스 분석', description: '시대적 배경, 조명 무드, 랜드마크 구조 및 키워드 도출' },
      { step: 2, title: '러프 썸네일 & 구도 탐색', description: '다양한 카메라 앵글의 썸네일 시안 5종 제공 후 픽스' },
      { step: 3, title: '디테일 페인팅 & 라이팅 연출', description: '대기 원근감, 특수 효과, 텍스처 오버레이 및 사실적 합성' },
      { step: 4, title: '레이어드 PSD & 최종 납품', description: '배경 분리 원본과 상업적 권리 보증서 전달' }
    ],
    faqs: [
      { question: '게임 UI나 3D 모델링용 텍스처로 바로 활용 가능한가요?', answer: '네, 레이어가 분리된 고해상도 PSD와 타일링 가능한 텍스처 소스로 정리하여 제공해 드립니다.' },
      { question: '기존 시나리오가 미공개 상태인데 보안 유지가 되나요?', answer: '네, 사전 전자 NDA 체결은 기본이며 사내 비공개 작업용 오프라인 워크스테이션에서 보안 관리됩니다.' }
    ]
  },
  {
    id: 'serv-algo-brand',
    title: '[생성형 비주얼] 차세대 테크 브랜드를 위한 AI 알고리즘 아이덴티티 & 다이내믹 로고',
    subtitle: '규격화된 고정 로고의 한계를 넘어, 데이터와 상호작용하는 프로그래머블 비주얼 아이덴티티',
    category: 'ai_branding',
    categoryLabel: 'AI 생성형 브랜딩',
    isPrime: true,
    badge: '테크 스타트업 인기',
    aiTools: ['Custom Python ComfyUI', 'Vectorizer AI', 'TouchDesigner', 'Midjourney Pro'],
    creator: MOCK_CREATORS.algo,
    heroImage: '/src/assets/images/service_ai_generative_branding_1790724547076.jpg',
    galleryImages: [
      '/src/assets/images/service_ai_generative_branding_1790724547076.jpg',
      '/src/assets/images/hero_ai_creative_platform_1790724501938.jpg',
      '/src/assets/images/service_ai_fashion_lookbook_1790724526063.jpg'
    ],
    startingPrice: 380000,
    rating: 4.97,
    reviewCount: 512,
    bookmarkCount: 3450,
    turnaroundTime: '초안 48시간 이내',
    resolution: 'Vector AI / SVG & 4K Motion',
    commercialLicense: true,
    summaryReview: 'AI 딥테크 기업으로서 평범한 로고 대신 알고리즘 기반 생성형 다이내믹 로고를 원했는데 완벽하게 구현해주셨습니다. 웹사이트 인터랙션에서 고객들이 감탄합니다.',
    packages: {
      standard: {
        id: 'standard',
        name: 'STANDARD',
        price: 380000,
        priceFormatted: '380,000원',
        summary: 'AI 생성형 심볼 로고 2종 + 벡터 원본(AI/SVG)',
        deliveryDays: 3,
        revisionCount: '무제한',
        conceptsCount: 3,
        features: [
          '생성형 아이덴티티 시안 3개 중 택 1',
          '무한 확대 가능한 벡터 원본(AI, SVG, PDF)',
          '컬러 팔레트 및 그리드 시스템',
          '3D 목업 5종 및 명함 가이드'
        ],
        includedItems: [
          { name: '벡터 원본 파일(AI, SVG, EPS, PDF)', included: true },
          { name: '상표권 등록 조사 및 저작권 양도', included: true },
          { name: '인터랙티브 웹 다이내믹 모션 Lottie', included: false },
          { name: '생성형 알고리즘 코드(TouchDesigner/Python)', included: false }
        ]
      },
      deluxe: {
        id: 'deluxe',
        name: 'DELUXE',
        price: 950000,
        priceFormatted: '950,000원',
        summary: '다이내믹 모션 로고 + 브랜드 가이드북 (20p)',
        deliveryDays: 5,
        revisionCount: '무제한',
        conceptsCount: 4,
        features: [
          '시안 4종 + 다이내믹 루프 모션 로고(Lottie/MP4)',
          '브랜드 가이드라인 완본 (20p)',
          '기업 서식류(서류봉투, 사원증, 키노트 템플릿)',
          '웹/앱 반응형 파비콘 및 앱 아이콘'
        ],
        includedItems: [
          { name: '벡터 원본 파일(AI, SVG, EPS, PDF)', included: true },
          { name: '상표권 등록 조사 및 저작권 양도', included: true },
          { name: '인터랙티브 웹 다이내믹 모션 Lottie', included: true },
          { name: '생성형 알고리즘 코드(TouchDesigner/Python)', included: false }
        ]
      },
      premium: {
        id: 'premium',
        name: 'PREMIUM',
        price: 2100000,
        priceFormatted: '2,100,000원',
        summary: '엔터프라이즈 생성형 비주얼 디자인 시스템 + 코드 소스',
        deliveryDays: 10,
        revisionCount: '무제한',
        conceptsCount: 6,
        features: [
          '실시간 데이터 연동 다이내믹 비주얼 시스템',
          'TouchDesigner / Python 생성 코드 소스 제공',
          '브랜드 가이드북 완본 (40p+) 및 키비주얼 10종',
          '상표권 출원 법률 자문 연계 지원'
        ],
        includedItems: [
          { name: '벡터 원본 파일(AI, SVG, EPS, PDF)', included: true },
          { name: '상표권 등록 조사 및 저작권 양도', included: true },
          { name: '인터랙티브 웹 다이내믹 모션 Lottie', included: true },
          { name: '생성형 알고리즘 코드(TouchDesigner/Python)', included: true }
        ]
      }
    },
    workProcess: [
      { step: 1, title: '브랜드 가치 및 데이터 파라미터 정의', description: '기업의 미션, 기술 스택, 시각적 변수(형태, 리듬, 밀도) 설정' },
      { step: 2, title: '알고리즘 생성 & 다각도 시안 도출', description: '수백 개의 생성 결과물 중 심미성과 식별력이 탁월한 4개 후보 선정' },
      { step: 3, title: '벡터화 및 모션 역학 설계', description: '수학적 벡터 커브 정밀 패스화 및 다이내믹 루프 모션 제작' },
      { step: 4, title: '가이드북 완본 & 소스 전달', description: '벡터 원본, 웹 Lottie 코드, 100% 저작권 양도 증서 발급' }
    ],
    faqs: [
      { question: '생성형 로고도 상표권 등록이 가능한가요?', answer: '네, 최종 선정된 심볼은 사람 디자이너의 정밀 수작업 벡터라이징 및 변리사 데이터베이스 상표 유사도 조사를 거쳐 상표 출원에 문제가 없도록 완벽히 가공됩니다.' },
      { question: '웹사이트에서 움직이는 인터랙티브 로고로 쓸 수 있나요?', answer: '네, 가벼운 용량의 Lottie(JSON) 및 SVG 애니메이션 코드로 제공되어 모든 웹 브라우저에서 즉시 연동됩니다.' }
    ]
  },
  {
    id: 'serv-sonic-sound',
    title: '[AI 오디오 브랜딩] 브랜드 고유 사운드 로고 & AI 맞춤형 상업용 BGM 사운드트랙',
    subtitle: 'Suno v4 Pro / Udio / ElevenLabs 기반. 저작권 걱정 없는 브랜드 시그니처 징글 및 광고 배경음악',
    category: 'ai_audio',
    categoryLabel: 'AI 음악 & 사운드',
    isPrime: true,
    badge: '저작권 100% 안심',
    aiTools: ['Suno v4 Pro', 'Udio AI Pro', 'ElevenLabs Voice', 'iZotope Ozone 11'],
    creator: MOCK_CREATORS.sonic,
    heroImage: '/src/assets/images/hero_ai_creative_platform_1790724501938.jpg',
    galleryImages: [
      '/src/assets/images/hero_ai_creative_platform_1790724501938.jpg',
      '/src/assets/images/service_ai_cinematic_video_1790724514481.jpg',
      '/src/assets/images/service_ai_concept_art_1790724536460.jpg'
    ],
    startingPrice: 280000,
    rating: 4.92,
    reviewCount: 290,
    bookmarkCount: 1980,
    turnaroundTime: '초안 24시간 이내',
    resolution: 'Lossless WAV (24bit/96kHz)',
    commercialLicense: true,
    summaryReview: '유튜브 채널과 브랜드 앱 오픈 시그니처 사운드가 필요했는데, 단 하루 만에 귀에 쏙 박히는 독보적인 사운드 로고 징글을 납품받았습니다. 음원 저작권 완벽 보장이 마음에 듭니다.',
    packages: {
      standard: {
        id: 'standard',
        name: 'STANDARD',
        price: 280000,
        priceFormatted: '280,000원',
        summary: '브랜드 사운드 로고 징글 (3~5초 3종)',
        deliveryDays: 2,
        revisionCount: 3,
        conceptsCount: 3,
        features: [
          '3~5초 브랜드 사운드 징글 3종',
          '무손실 24bit/96kHz WAV 납품',
          '유튜브, TVC, 앱 온보딩 상업적 사용 보증',
          '음원 저작권 완전 양도 증서'
        ],
        includedItems: [
          { name: '무손실 고음질 WAV / MP3', included: true },
          { name: '상업적 이용 및 저작권 양도', included: true },
          { name: '풀 길이(60초+) 브랜드 BGM 사운드트랙', included: false },
          { name: '맞춤형 AI 보이스 내레이션 믹싱', included: false }
        ]
      },
      deluxe: {
        id: 'deluxe',
        name: 'DELUXE',
        price: 680000,
        priceFormatted: '680,000원',
        summary: '브랜드 공식 캠페인 BGM (60초 풀 트랙 + 루프 버전)',
        deliveryDays: 4,
        revisionCount: '무제한',
        conceptsCount: 4,
        features: [
          '60초 풀 사운드트랙 + 15/30초 편집본',
          '자연스러운 무한 루프(Looping) 트랙 포함',
          '악기별 스템(Stems) 멀티트랙 제공',
          '스마트폰/이어폰/TV 마스터링 최적화'
        ],
        includedItems: [
          { name: '무손실 고음질 WAV / MP3', included: true },
          { name: '상업적 이용 및 저작권 양도', included: true },
          { name: '풀 길이(60초+) 브랜드 BGM 사운드트랙', included: true },
          { name: '스마트폰/이어폰/TV 마스터링 최적화', included: true }
        ]
      },
      premium: {
        id: 'premium',
        name: 'PREMIUM',
        price: 1500000,
        priceFormatted: '1,500,000원',
        summary: '글로벌 엔터프라이즈 사운드 아이덴티티 시스템',
        deliveryDays: 7,
        revisionCount: '무제한',
        conceptsCount: 6,
        features: [
          '사운드 로고 + 메인 캠페인 테마 3곡',
          'ElevenLabs 기반 브랜드 전속 AI 보이스 클로닝',
          '다국어 브랜드 보이스 가이드라인',
          '음원 협회 등록 대행 및 완전 독점권 확약'
        ],
        includedItems: [
          { name: '무손실 고음질 WAV / MP3', included: true },
          { name: '상업적 이용 및 저작권 양도', included: true },
          { name: '풀 길이(60초+) 브랜드 BGM 사운드트랙', included: true },
          { name: '맞춤형 AI 보이스 내레이션 믹싱', included: true }
        ]
      }
    },
    workProcess: [
      { step: 1, title: '브랜드 페르소나 & 청각적 톤앤매너 설정', description: '템포, 장르(미니멀, 시네마틱, 퓨처리스틱), 분위기 분석' },
      { step: 2, title: '생성형 모티브 멜로디 스케치', description: 'AI 사운드 엔진 기반 3~4개의 테마 멜로디 시안 제시' },
      { step: 3, title: '프로페셔널 오디오 믹싱 & 마스터링', description: '디지털 노이즈 제거, 이퀄라이저, 다이내믹 레인지 정밀 튜닝' },
      { step: 4, title: '최종 음원 및 라이선스 납품', description: '스템 파일 및 100% 저작권 양도 보증서 전달' }
    ],
    faqs: [
      { question: '유튜브 콘텐츠 ID 저작권 경고에 걸리지 않나요?', answer: '네, 100% 독점 생성된 오리지널 음원으로 납품되므로 유튜브 Content ID 또는 인스타그램 음원 침해 필터에 일체 저촉되지 않습니다.' }
    ]
  },
  {
    id: 'serv-meta-character',
    title: '[브랜드 전속 AI 앰버서더] 독점 가상 인플루언서 캐릭터 개발 & SNS 콘텐츠 패키지',
    subtitle: '일관된 비주얼의 브랜드 전용 가상 모델. 인스타그램 릴스, 틱톡, 팝업 디스플레이 연동',
    category: 'ai_image',
    categoryLabel: 'AI 이미지 & 룩북',
    isPrime: true,
    badge: '인플루언서 마케팅 혁신',
    aiTools: ['InstantID', 'ComfyUI IP-Adapter', 'Runway Act-One', 'LivePortrait'],
    creator: MOCK_CREATORS.metaicon,
    heroImage: '/src/assets/images/service_ai_fashion_lookbook_1790724526063.jpg',
    galleryImages: [
      '/src/assets/images/service_ai_fashion_lookbook_1790724526063.jpg',
      '/src/assets/images/service_ai_cinematic_video_1790724514481.jpg',
      '/src/assets/images/service_ai_generative_branding_1790724547076.jpg'
    ],
    startingPrice: 600000,
    rating: 4.94,
    reviewCount: 315,
    bookmarkCount: 2650,
    turnaroundTime: '초안 48시간 이내',
    resolution: '8K High-Res + 4K Video',
    commercialLicense: true,
    summaryReview: '인플루언서 섭외 리스크나 일정 조율 문제 없이 우리 브랜드만의 전속 가상 앰버서더를 갖게 되었습니다. SNS 팔로워들의 반응도 아주 뜨겁습니다.',
    packages: {
      standard: {
        id: 'standard',
        name: 'STANDARD',
        price: 600000,
        priceFormatted: '600,000원',
        summary: '버추얼 앰버서더 캐릭터 디자인 + 기본 포즈 5컷',
        deliveryDays: 4,
        revisionCount: 3,
        conceptsCount: 3,
        features: [
          '브랜드 고유 AI 모델 얼굴 3종 시안 중 택 1',
          '기본 표정 및 포즈 5컷 고화질 렌더링',
          '캐릭터 프로필 및 세계관 가이드북',
          '상업적 독점 이용 권리'
        ],
        includedItems: [
          { name: '8K 초고화질 포즈 이미지 파일', included: true },
          { name: '상업적 이용 및 저작권 양도', included: true },
          { name: 'SNS 릴스용 립싱크 말하는 영상', included: false },
          { name: '매월 정기 SNS 포스팅 콘텐츠 팩', included: false }
        ]
      },
      deluxe: {
        id: 'deluxe',
        name: 'DELUXE',
        price: 1450000,
        priceFormatted: '1,450,000원',
        summary: '캐릭터 LoRA 모델 + SNS 룩북 12컷 + 릴스 영상 2편',
        deliveryDays: 7,
        revisionCount: '무제한',
        conceptsCount: 4,
        features: [
          '앰버서더 고정 LoRA 파인튜닝 모델 파일 제공',
          '다양한 스타일링 룩북 12컷',
          '말하고 움직이는 15초 릴스/숏폼 영상 2편',
          '인스타그램 계정 톤앤매너 세팅 가이드'
        ],
        includedItems: [
          { name: '8K 초고화질 포즈 이미지 파일', included: true },
          { name: '상업적 이용 및 저작권 양도', included: true },
          { name: 'SNS 릴스용 립싱크 말하는 영상', included: true },
          { name: '앰버서더 고유 LoRA 파인튜닝 가중치', included: true }
        ]
      },
      premium: {
        id: 'premium',
        name: 'PREMIUM',
        price: 3200000,
        priceFormatted: '3,200,000원',
        summary: '엔터프라이즈 브랜드 버추얼 휴먼 올인원 런칭 패키지',
        deliveryDays: 14,
        revisionCount: '무제한',
        conceptsCount: 6,
        features: [
          '버추얼 휴먼 LoRA + 실시간 립싱크 파이프라인',
          '화보 30컷 + 숏폼 비디오 5편 + 3D 모션 클립',
          '전속 음성(Voice Cloning) 모델 구축',
          '월 1회 정기 유지보수 및 프롬프트 지속 지원'
        ],
        includedItems: [
          { name: '8K 초고화질 포즈 이미지 파일', included: true },
          { name: '상업적 이용 및 저작권 양도', included: true },
          { name: 'SNS 릴스용 립싱크 말하는 영상', included: true },
          { name: '앰버서더 고유 LoRA 파인튜닝 가중치', included: true }
        ]
      }
    },
    workProcess: [
      { step: 1, title: '브랜드 타깃 및 페르소나 설계', description: '연령, 스타일, 성격, 브랜드 감성에 부합하는 비주얼 기획' },
      { step: 2, title: 'AI 모델 생성 & 일관성 LoRA 훈련', description: '어떤 각도와 조명에서도 동일 인물로 유지되도록 알고리즘 고정' },
      { step: 3, title: '스타일링 화보 렌더링 & 모션 연동', description: '실제 브랜드 신상품 착장 및 표정 애니메이션 적용' },
      { step: 4, title: 'SNS 가이드라인 및 모델 가중치 납품', description: '지속적인 계정 운영을 위한 프롬프트 가이드 및 파일 전달' }
    ],
    faqs: [
      { question: '타 브랜드와 얼굴이 겹치거나 표절 논란이 생기지 않나요?', answer: '수백만 개의 잠재 변수를 결합하여 완전히 새롭게 창조된 독점 안면 데이터셋으로 구축되므로 타 브랜드와 겹칠 위험이 없습니다.' }
    ]
  }
];

export const MOCK_CLIENT_PROJECTS: ClientProject[] = [
  {
    id: 'proj-1',
    projectCode: 'AI-2026-0914',
    title: '신규 럭셔리 퍼퓸 브랜드 AI 시네마틱 런칭 광고 영상 (30초)',
    serviceId: 'serv-synth-video',
    creatorName: '신스 스튜디오 (Synth Studio)',
    packageType: 'DELUXE',
    totalAmount: 1350000,
    status: '진행중',
    progressPercent: 75,
    startDate: '2026.09.20',
    dueDate: '2026.10.05',
    currentMilestone: 'Runway Gen-3 씬 생성 완료 및 4K Topaz 업스케일링 & 사운드 믹싱 중',
    taxInvoiceStatus: '발행완료',
    contractNumber: 'CT-2026-SYN-0012'
  },
  {
    id: 'proj-2',
    projectCode: 'AI-2026-0882',
    title: '2026 가을/겨울 컬렉션 AI 하이패션 룩북 & 브랜드 LoRA 모델 구축',
    serviceId: 'serv-vogue-fashion',
    creatorName: '뉴럴 보그 (Neural Vogue AI)',
    packageType: 'DELUXE',
    totalAmount: 850000,
    status: '시안검토',
    progressPercent: 90,
    startDate: '2026.09.22',
    dueDate: '2026.10.01',
    currentMilestone: '12컷 8K 최종 리터칭본 고객사 승인 대기 중 (브랜드 LoRA 완료)',
    taxInvoiceStatus: '발행완료',
    contractNumber: 'CT-2026-VOG-0045'
  }
];

export const MOCK_REVIEWS_LIST = [
  {
    id: 'rev-1',
    author: '이*진 CBO',
    company: '(주)하이퍼로직스',
    rating: 5,
    date: '2026.09.24',
    servicePackage: 'DELUXE 패키지',
    comment: '기존 외주 영상 프로덕션 견적이 수천만 원이었는데, 콘텐트립 AI 크리에이터를 통해 단 5일 만에 헐리우드급 30초 브랜드 필름을 받았습니다. 전자세금계산서와 NDA 체결도 완벽했습니다.'
  },
  {
    id: 'rev-2',
    author: '박*훈 브랜드팀장',
    company: '아우라 패션랩',
    rating: 5,
    date: '2026.09.18',
    servicePackage: 'PREMIUM 패키지',
    comment: '외국인 모델 섭외비와 스튜디오 대관료를 90% 이상 절감했습니다. 특히 우리 브랜드만의 전용 LoRA 모델을 구축해주셔서 시즌 내내 일관된 모델로 신제품 룩북을 찍을 수 있어 혁신적입니다.'
  },
  {
    id: 'rev-3',
    author: '김*현 대표',
    company: '넥스트 엔터테인먼트',
    rating: 5,
    date: '2026.09.10',
    servicePackage: 'DELUXE 패키지',
    comment: '게임 세계관 콘셉트 아트 제작을 의뢰했는데, Midjourney와 ComfyUI를 정밀하게 다루는 아티스트 덕분에 시네마틱 매트페인팅 수준의 결과물을 얻었습니다. 강력 추천합니다.'
  }
];

export const ENTERPRISE_CLIENT_PROFILE = {
  companyName: '(주)넥스트커머스',
  businessNumber: '214-88-91024',
  representative: '김민준 팀장 (브랜드전략본부)',
  email: 'mj.kim@nextcommerce.co.kr',
  phone: '010-8921-5520',
  enterpriseTier: 'BIZ VIP 기업회원',
  accountManager: '이서윤 수석 매니저 (AI B2B 전담 PM)',
  voucherBalance: '2,500,000원 (정부지원 바우처)'
};
