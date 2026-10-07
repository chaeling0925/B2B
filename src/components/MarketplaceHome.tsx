import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Video, 
  Image as ImageIcon, 
  Palette, 
  Cpu, 
  Music, 
  LayoutGrid, 
  ArrowRight, 
  ArrowUpRight, 
  Sliders, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  FileCheck2,
  Lock,
  Receipt,
  UserCheck,
  Eye,
  Layers
} from 'lucide-react';
import { ServiceItem, CategoryId } from '../types/marketplace';
import { ServiceCard } from './ServiceCard';
import { HowItWorksProcess } from './HowItWorksProcess';

interface MarketplaceHomeProps {
  services: ServiceItem[];
  currentCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenInquiry?: (service: ServiceItem) => void;
  onOpenRfp: () => void;
  onOpenPipeline?: () => void;
  onOpenWorkspace?: () => void;
  bookmarks: string[];
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const MarketplaceHome: React.FC<MarketplaceHomeProps> = ({
  services,
  currentCategory,
  onSelectCategory,
  onSelectService,
  onOpenInquiry,
  onOpenRfp,
  onOpenPipeline,
  onOpenWorkspace,
  bookmarks,
  onToggleBookmark,
  searchQuery,
  onSearchChange
}) => {
  const [selectedToolFilter, setSelectedToolFilter] = useState<string>('all');

  // Recommended search keywords requested by user
  const recommendedSearchTerms = [
    '광고 영상',
    '제품 이미지',
    '숏폼',
    '브랜드 비주얼',
    '캐릭터'
  ];

  // AI-Focused Categories
  const categorySubtitles: Record<CategoryId, string> = {
    all: '기업 프로젝트 목적에 맞는 생성형 AI 크리에이터를 확인하세요',
    ai_video: '촬영 비용과 일정 부담 없이 제작하는 광고·캠페인·숏폼 영상',
    ai_image: '스튜디오 대관 없이 브랜드 톤을 유지하는 커머스·모델 룩북',
    ai_art: '게임 세계관, 엔터테인먼트, 영화 프리비즈 시네마틱 콘셉트 아트',
    ai_branding: '데이터 기반 다이내믹 로고 시스템과 무한 확장 벡터 아이덴티티',
    ai_audio: '저작권 분쟁 없는 기업 브랜드 독점 AI 사운드트랙과 오디오 로고'
  };

  const aiCategories = [
    { id: 'all' as CategoryId, label: '전체 제작 분야', pillLabel: '전체 분야', icon: LayoutGrid, count: services.length, desc: '모든 AI 제작 솔루션' },
    { id: 'ai_video' as CategoryId, label: '광고·브랜드 영상', pillLabel: '광고·브랜드 영상', icon: Video, desc: 'Runway Gen-3 · Sora · 캠페인 필름' },
    { id: 'ai_image' as CategoryId, label: '제품·커머스 이미지', pillLabel: '제품·커머스 화보', icon: ImageIcon, desc: 'Flux Pro · 커스텀 LoRA 화보' },
    { id: 'ai_art' as CategoryId, label: '콘셉트 아트·비주얼', pillLabel: '콘셉트 아트', icon: Palette, desc: '게임 세계관 · 영화 프리비즈' },
    { id: 'ai_branding' as CategoryId, label: '생성형 브랜딩', pillLabel: '생성형 브랜드 로고', icon: Cpu, desc: '알고리즘 로고 · 벡터 시스템' },
    { id: 'ai_audio' as CategoryId, label: '음악 & 오디오 로고', pillLabel: '사운드·BGM', icon: Music, desc: '맞춤형 BGM · 오디오 브랜딩' }
  ];

  // Quick AI Tools Filter
  const popularAiTools = [
    '전체 툴',
    'Runway Gen-3',
    'Midjourney v7',
    'Flux.1 Pro',
    'ComfyUI',
    'Sora'
  ];

  // Real Portfolio Case Studies grounded in actual project assets
  const actualCaseStudies = [
    {
      id: 'case-synth-video',
      title: '글로벌 브랜드 캠페인 시네마틱 필름',
      category: '광고·브랜드 영상',
      targetServiceId: 'serv-synth-video',
      purpose: '브랜드 인지도 제고 및 TVC·디지털 캠페인 광고',
      format: '4K UHD Master Video (ProRes 422 HQ) · 스토리보드 PDF · 프롬프트 레시피',
      tools: 'Runway Gen-3 Alpha · Topaz Video AI 8K',
      image: '/src/assets/images/service_ai_cinematic_video_1790724514481.jpg',
      leadCreator: '신스 스튜디오'
    },
    {
      id: 'case-neural-vogue',
      title: '하이엔드 패션 & 코스메틱 룩북',
      category: '제품·커머스 이미지',
      targetServiceId: 'serv-vogue-fashion',
      purpose: '신규 시즌 룩북 화보 및 이커머스 상세페이지 비주얼',
      format: '8K High-Res Still Cuts (PNG/TIFF) · 브랜드 전용 LoRA 파인튜닝 가중치',
      tools: 'Flux.1 Pro · ComfyUI LoRA Node',
      image: '/src/assets/images/service_ai_fashion_lookbook_1790724526063.jpg',
      leadCreator: '뉴럴 보그'
    },
    {
      id: 'case-aether-art',
      title: 'SF 게임 & 영화 프리비즈 시네마틱 콘셉트 아트',
      category: '콘셉트 아트·비주얼',
      targetServiceId: 'serv-aether-concept',
      purpose: '게임 타이틀 세계관 비주얼라이징 및 제작 전 프리비즈 검토',
      format: '8K 레이어드 포토샵 PSD · 캐릭터/배경 턴어라운드 시트',
      tools: 'Midjourney v7 · Photoshop GenFill',
      image: '/src/assets/images/service_ai_concept_art_1790724536460.jpg',
      leadCreator: '에테르 아카이브'
    },
    {
      id: 'case-3d-motion',
      title: '테크 디바이스 3D 모션 & 인터랙티브 비주얼',
      category: '광고·브랜드 영상',
      targetServiceId: 'serv-synth-video',
      purpose: '하드웨어 신제품 론칭 키비주얼 및 디지털 옥외광고(DOOH)',
      format: '60fps 4K 무손실 MP4/WebM · 3D 모션 클립',
      tools: 'Blender 3D · Runway Gen-3',
      image: '/src/assets/images/portfolio_3d_motion_1790667523166.jpg',
      leadCreator: '신스 스튜디오'
    },
    {
      id: 'case-algo-branding',
      title: '생성형 브랜드 아이덴티티 & 벡터 시스템',
      category: '생성형 브랜딩',
      targetServiceId: 'serv-algo-branding',
      purpose: '인터랙티브 환경에 대응하는 동적 기업 CI/BI 리브랜딩',
      format: '무한 확대 벡터(AI/SVG) · 브랜드 스타일 가이드북 · Lottie 애니메이션',
      tools: 'Custom Python ComfyUI · Vectorizer AI',
      image: '/src/assets/images/portfolio_branding_ci_1790667509842.jpg',
      leadCreator: '알고 브랜드 랩'
    },
    {
      id: 'case-packaging-3d',
      title: '프리미엄 패키지 & 커머스 3D 렌더링',
      category: '제품·커머스 이미지',
      targetServiceId: 'serv-vogue-fashion',
      purpose: '패키지 지기구조 목업 검토 및 마케팅 상세페이지 소스',
      format: '300DPI 인쇄용 고해상도 TIFF · 분리 레이어 PSD',
      tools: 'Flux.1 Pro · 3D Photoreal Render',
      image: '/src/assets/images/portfolio_packaging_1790667534439.jpg',
      leadCreator: '뉴럴 보그'
    }
  ];

  // Filter services by category and tool
  const filteredServices = services.filter((service) => {
    const matchesCategory = currentCategory === 'all' || service.category === currentCategory;
    const matchesTool = selectedToolFilter === 'all' || selectedToolFilter === '전체 툴' || 
      service.aiTools.some((t) => t.toLowerCase().includes(selectedToolFilter.toLowerCase().replace('.1', '')));
    return matchesCategory && matchesTool;
  });

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const target = document.getElementById('services-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeywordClick = (term: string) => {
    onSearchChange(term);
    if (term === '광고 영상' || term === '숏폼') {
      onSelectCategory('ai_video');
    } else if (term === '제품 이미지') {
      onSelectCategory('ai_image');
    } else if (term === '브랜드 비주얼') {
      onSelectCategory('ai_branding');
    } else if (term === '캐릭터') {
      onSelectCategory('ai_art');
    }
    const target = document.getElementById('services-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPanelCategory = (categoryId: CategoryId, term?: string) => {
    onSelectCategory(categoryId);
    if (term) onSearchChange(term);
    const target = document.getElementById('services-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-20 pb-28 text-slate-100">
      {/* 
        ========================================================================
        1. HERO SECTION: Clean Dark Charcoal/Navy Surface + Search-First UX
        ========================================================================
      */}
      <section className="bg-[#0D121F] border border-slate-800/80 rounded-2xl p-6 sm:p-10 lg:p-12 mt-4 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Title -> Description -> Search Bar -> Recommended Keywords -> Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Title (Korean headline with clean semantic line breaks) */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white tracking-tight leading-[1.28] text-balance">
                아이디어가 기회가 되고,<br />
                작업이 비즈니스가 되는 곳.
              </h1>
              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-300 leading-relaxed max-w-xl">
                AI 광고 영상부터 제품 이미지까지, 작업 사례를 비교하고<br />
                프로젝트에 맞는 제작 전문가에게 의뢰하세요.
              </p>
            </div>

            {/* Large Search Bar (Prominent Exploration Tool) */}
            <div className="w-full max-w-xl">
              <form 
                onSubmit={handleSearchSubmit}
                className="relative flex items-center bg-[#070A12] border border-slate-700/80 rounded-xl p-1.5 focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400/50 transition-all shadow-inner"
              >
                <div className="pl-3.5 pr-2 text-slate-400 shrink-0">
                  <Search className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="어떤 콘텐츠가 필요하신가요?"
                  className="flex-1 bg-transparent py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    className="p-1 text-slate-500 hover:text-slate-300 text-xs mr-2 cursor-pointer"
                  >
                    초기화
                  </button>
                )}
                <button
                  type="submit"
                  className="px-4 sm:px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  검색
                </button>
              </form>
            </div>

            {/* Recommended Search Terms (추천 검색어) */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium shrink-0">추천 검색어</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {recommendedSearchTerms.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => handleKeywordClick(term)}
                    className="px-3 py-1 bg-[#131A2C] hover:bg-[#18233C] text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer border border-slate-800/80 text-xs font-medium"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons: Primary vs Secondary clear visual differentiation */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Primary Action */}
              <button
                type="button"
                onClick={onOpenPipeline || onOpenRfp}
                className="px-5 py-2.5 bg-gradient-to-r from-pink-500 via-indigo-600 to-cyan-500 hover:opacity-95 text-white text-xs sm:text-sm font-bold rounded-lg transition-all shadow-[0_0_18px_rgba(236,72,153,0.3)] cursor-pointer flex items-center gap-2"
              >
                <span>프로젝트 의뢰하기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Secondary Action */}
              <button
                type="button"
                onClick={() => handleScrollToSection('portfolio-section')}
                className="px-4 py-2.5 bg-[#101524] hover:bg-[#151C30] text-slate-200 hover:text-white text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer border border-slate-700/80"
              >
                작업 사례 보기
              </button>
            </div>
          </div>

          {/* Right Column: 제작 분야 선택 패널 (Typography and Thin Hairline Dividers, No Photo) */}
          <div className="lg:col-span-5 bg-[#090D18] border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
            {/* Panel Top Title */}
            <div className="pb-4 border-b border-slate-800/80">
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
                어떤 콘텐츠를 제작하시나요?
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                원하시는 분야를 선택하면 관련 포트폴리오로 연결됩니다.
              </p>
            </div>

            {/* 3 Panel Category Items */}
            <div className="divide-y divide-slate-800/60 my-1">
              
              {/* Item 01 */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleSelectPanelCategory('ai_video', '광고 영상')}
                onKeyDown={(e) => e.key === 'Enter' && handleSelectPanelCategory('ai_video', '광고 영상')}
                className="group py-4 px-3 rounded-lg hover:bg-[#111728] focus:bg-[#111728] focus:outline-none transition-colors cursor-pointer flex items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-cyan-400 tracking-wider">01</span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-white transition-colors">
                      광고·브랜드 영상
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                    브랜드 메시지를 전달하는 캠페인 영상
                  </p>
                </div>
                <div className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-150 shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Item 02 */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleSelectPanelCategory('ai_image', '제품 이미지')}
                onKeyDown={(e) => e.key === 'Enter' && handleSelectPanelCategory('ai_image', '제품 이미지')}
                className="group py-4 px-3 rounded-lg hover:bg-[#111728] focus:bg-[#111728] focus:outline-none transition-colors cursor-pointer flex items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-cyan-400 tracking-wider">02</span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-white transition-colors">
                      제품·커머스 이미지
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                    상세페이지와 광고에 사용할 제품 비주얼
                  </p>
                </div>
                <div className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-150 shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Item 03 */}
              <div
                role="button"
                tabIndex={0}
                onClick={() => handleSelectPanelCategory('ai_video', '숏폼')}
                onKeyDown={(e) => e.key === 'Enter' && handleSelectPanelCategory('ai_video', '숏폼')}
                className="group py-4 px-3 rounded-lg hover:bg-[#111728] focus:bg-[#111728] focus:outline-none transition-colors cursor-pointer flex items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-cyan-400 tracking-wider">03</span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-white transition-colors">
                      SNS·숏폼 콘텐츠
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                    채널과 게시 형식에 맞춘 콘텐츠
                  </p>
                </div>
                <div className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-150 shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Panel Bottom Link */}
            <div className="pt-3 border-t border-slate-800/80 text-right">
              <button
                type="button"
                onClick={() => handleSelectPanelCategory('all', '')}
                className="text-xs font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer group"
              >
                <span>전체 제작 분야 보기</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        2. B2B SECTION 1: 제작 분야 (Production Categories & Search Filter)
        ========================================================================
      */}
      <section id="categories-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-slate-800/80">
          <div>
            <span className="text-xs font-semibold text-cyan-400">제작 분야 안내</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
              분야별 전문 크리에이터와 제작 포맷
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            {categorySubtitles[currentCategory]}
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {aiCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  onSelectCategory(cat.id);
                  handleScrollToSection('services-section');
                }}
                className={`p-4 rounded-xl text-left transition-all duration-150 flex flex-col justify-between h-28 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#12192E] border-cyan-400/80 text-white shadow-md'
                    : 'bg-[#0D1220] border-slate-800/90 hover:border-slate-700 text-slate-300 hover:text-white hover:bg-[#101626]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  )}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold line-clamp-1">{cat.label}</div>
                  <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                    {cat.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 
        ========================================================================
        3. B2B SECTION 2: 실제 작업 사례 (Actual Portfolio & Work Examples)
        - Displays production purpose and deliverable format using real assets
        ========================================================================
      */}
      <section id="portfolio-section" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-2 border-b border-slate-800/80">
          <div>
            <span className="text-xs font-semibold text-pink-400">포트폴리오 & 납품 결과물</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
              실제 작업 사례
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-lg">
            실제 보유 포트폴리오를 기반으로 제작 목적과 공식 납품 산출물 형식을 투명하게 안내합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actualCaseStudies.map((item) => {
            const matchedService = services.find(s => s.id === item.targetServiceId) || services[0];
            return (
              <div
                key={item.id}
                onClick={() => onSelectService(matchedService)}
                className="group bg-[#0D1220] border border-slate-800 hover:border-slate-700 rounded-xl overflow-hidden transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                {/* Media Image with purpose overlay */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1220] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 bg-[#070A12]/80 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-semibold text-cyan-300 border border-slate-700/60">
                    {item.category}
                  </div>
                  <div className="absolute bottom-2.5 right-3 text-[10px] text-slate-400">
                    제작 파트너: <strong className="text-slate-200 font-semibold">{item.leadCreator}</strong>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* 제작 목적 */}
                    <div className="bg-[#090D18] p-3 rounded-lg border border-slate-800/80 space-y-1.5 text-xs">
                      <div>
                        <span className="text-slate-400 font-medium">제작 목적:</span>{' '}
                        <span className="text-slate-200">{item.purpose}</span>
                      </div>
                      <div className="pt-1 border-t border-slate-800/60">
                        <span className="text-slate-400 font-medium">결과물 형식:</span>{' '}
                        <span className="text-slate-300">{item.format}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom: Tools & View Action */}
                  <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-800/60 text-slate-400">
                    <span className="truncate max-w-[200px] text-[11px] text-slate-400">
                      사용 엔진: {item.tools}
                    </span>
                    <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold text-xs">
                      상세 보기
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 
        ========================================================================
        4. B2B SECTION 3: 의뢰 과정 (Commission & Production Process)
        - Authentic 4-step B2B production & inspection pipeline
        ========================================================================
      */}
      <section id="process-section" className="space-y-4">
        <HowItWorksProcess 
          onOpenInquiryDemo={() => {
            if (onOpenInquiry && services.length > 0) {
              onOpenInquiry(services[0]);
            }
          }}
          onNavigateToWorkspace={onOpenWorkspace}
        />
      </section>

      {/* 
        ========================================================================
        5. B2B SECTION 4: 기업 이용 안내 (Enterprise Guarantees & Terms)
        - Grounded in real support terms: Tax Invoices, NDA, Copyright Transfer, PM
        ========================================================================
      */}
      <section id="enterprise-terms" className="bg-[#0D121F] border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-slate-800/80">
          <div>
            <span className="text-xs font-semibold text-cyan-400">안심 계약 및 제도</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
              기업 이용 안내 및 지원 조건
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            법인 회계 처리, 기밀 유지, 법적 권리 보호를 위해 공식 보증하는 운영 기준입니다.
          </p>
        </div>

        {/* 5 Clear Enterprise Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Guarantee 1: 전자세금계산서 */}
          <div className="bg-[#090D18] border border-slate-800/90 rounded-xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-950/50 text-cyan-400 flex items-center justify-center border border-cyan-800/40">
              <Receipt className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                국세청 연동 전자세금계산서 발급
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                결제 즉시 등록된 법인 사업자등록번호로 전자세금계산서가 발행되며, 지출결의서용 견적서·거래명세서 다운로드를 지원합니다.
              </p>
            </div>
          </div>

          {/* Guarantee 2: 비밀유지협약 NDA */}
          <div className="bg-[#090D18] border border-slate-800/90 rounded-xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-pink-950/50 text-pink-400 flex items-center justify-center border border-pink-800/40">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                표준 비밀유지협약(NDA) 사전 체결
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                미공개 신제품, 브랜드 기밀 문서 및 내부 기획안 보호를 위해 프로젝트 착수 전 전자서명 표준 NDA 체결을 지원합니다.
              </p>
            </div>
          </div>

          {/* Guarantee 3: 저작재산권 양도 */}
          <div className="bg-[#090D18] border border-slate-800/90 rounded-xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-purple-950/50 text-purple-400 flex items-center justify-center border border-purple-800/40">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                상업적 저작재산권 100% 완전 양도
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                최종 승인된 산출물은 상표권 출원, 광고 집행, 2차적 저작물 작성권이 포함된 공식 저작권 양도 확약서와 원본 파일을 제공합니다.
              </p>
            </div>
          </div>

          {/* Guarantee 4: 전담 B2B PM */}
          <div className="bg-[#090D18] border border-slate-800/90 rounded-xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-950/50 text-indigo-400 flex items-center justify-center border border-indigo-800/40">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                전담 B2B 프로젝트 매니저(PM) 배정
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                복잡한 브리프 구체화부터 적합 크리에이터 매칭, 일정 감리, 검수 피드백까지 콘텐트립 B2B PM이 1:1로 지원합니다.
              </p>
            </div>
          </div>

          {/* Guarantee 5: 안전 에스크로 정산 */}
          <div className="bg-[#090D18] border border-slate-800/90 rounded-xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-950/50 text-emerald-400 flex items-center justify-center border border-emerald-800/40">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                안전 에스크로 대금 보호 시스템
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                결제된 용역 대금은 에스크로 계좌에 안전하게 예치되며, 최종 산출물 검수 완료 및 구매 확정 시점에 정산이 진행됩니다.
              </p>
            </div>
          </div>

          {/* Guarantee 6: 정산 및 결제 수단 */}
          <div className="bg-[#090D18] border border-slate-800/90 rounded-xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-slate-850 text-slate-300 flex items-center justify-center border border-slate-700/60">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                법인카드 및 계좌이체 후불 정산
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                법인카드 결제는 물론, 계약 조건에 따라 선금/잔금 분할 지급 및 사전 등록 기업 대상 익월말 후불 정산을 협의 지원합니다.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ========================================================================
        6. SERVICE CATALOG & FILTERS: Detailed Packages Exploration
        ========================================================================
      */}
      <section id="services-section" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-slate-800/80">
          <div>
            <span className="text-xs font-semibold text-cyan-400">서비스 탐색</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
              분야별 패키지 & 크리에이터
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              요구 조건에 맞는 전문가를 비교하고 1:1 상담 또는 표준 패키지를 확인하세요.
            </p>
          </div>

          {/* AI Tools Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
            <span className="text-slate-400 text-[11px] shrink-0 mr-1 flex items-center gap-1">
              <Sliders className="w-3 h-3" />
              엔진:
            </span>
            {popularAiTools.map((tool) => (
              <button
                key={tool}
                type="button"
                onClick={() => setSelectedToolFilter(tool === '전체 툴' ? 'all' : tool)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer border ${
                  (selectedToolFilter === tool || (selectedToolFilter === 'all' && tool === '전체 툴'))
                    ? 'bg-cyan-950/50 border-cyan-400/80 text-cyan-300'
                    : 'bg-[#0D1220] border-slate-800 text-slate-400 hover:text-white hover:bg-[#12192A]'
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {aiCategories.map((cat) => {
            const isSelected = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer border ${
                  isSelected
                    ? 'bg-slate-800 border-slate-600 text-white shadow-xs'
                    : 'bg-transparent border-transparent text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                {cat.pillLabel}
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center bg-[#0D1220] border border-slate-800 rounded-xl space-y-3">
            <p className="text-slate-400 text-sm">선택한 조건에 일치하는 AI 서비스가 없습니다.</p>
            <button
              type="button"
              onClick={() => {
                onSelectCategory('all');
                setSelectedToolFilter('all');
                onSearchChange('');
              }}
              className="px-4 py-2 bg-slate-800 text-white text-xs font-semibold rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
            >
              전체 목록 보기
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={onSelectService}
                onOpenInquiry={onOpenInquiry}
                isBookmarked={bookmarks.includes(service.id)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </div>
        )}
      </section>

      {/* 
        ========================================================================
        7. B2B TRUST & USAGE FLOW: '쉽고, 편하고, 안전한 콘텐트립'
        - Referenced from the 4-step flow graphic tailored for AI B2B
        ========================================================================
      */}
      <section className="bg-[#0D121F] border border-slate-800 rounded-2xl p-8 sm:p-12 text-center space-y-10">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            쉽고, 편하고, 안전한 콘텐트립
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            복잡한 견적 검토와 계약 과정 없이, 기업 고객을 위한 가장 신뢰할 수 있는 AI 제작 프로세스를 제공합니다.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 pt-4">
          
          {/* Step 1: 키워드로 찾고 */}
          <div className="flex flex-col items-center text-center space-y-4 group">
            {/* Graphic: Search Pill Box */}
            <div className="h-32 flex items-center justify-center w-full">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#121828] border-2 border-slate-700/80 rounded-full shadow-lg group-hover:border-cyan-400/80 transition-all duration-300">
                <span className="text-xs font-semibold text-slate-200">AI 광고 영상</span>
                <span className="text-cyan-400 text-xs font-bold animate-pulse">|</span>
                <div className="w-6 h-6 rounded-full bg-slate-950 flex items-center justify-center text-white ml-1">
                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                키워드로 찾고
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[220px] mx-auto">
                도움을 받을 AI 전문가를 검색과 카테고리를 통해 바로 찾을 수 있어요
              </p>
            </div>
          </div>

          {/* Step 2: 실시간 문의하고 */}
          <div className="flex flex-col items-center text-center space-y-4 group">
            {/* Graphic: 3D Smartphone with Dual Chat Bubbles */}
            <div className="h-32 flex items-center justify-center w-full relative">
              <div className="relative w-16 h-28 bg-[#151D30] border-2 border-slate-700 rounded-2xl shadow-xl flex flex-col items-center justify-between p-1.5 transform rotate-[-6deg] group-hover:rotate-0 transition-transform duration-300">
                <div className="w-5 h-1 bg-slate-800 rounded-full mt-0.5" />
                <div className="w-full flex-1 bg-[#090D18] rounded-xl my-1 relative overflow-hidden" />
                <div className="w-2.5 h-2.5 rounded-full border border-slate-700" />

                {/* Floating Chat Bubble Top (Cyan) */}
                <div className="absolute -top-1 -left-4 px-2.5 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl rounded-br-none shadow-md text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Floating Chat Bubble Bottom (Emerald / Pink) */}
                <div className="absolute bottom-4 -right-4 px-2.5 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl rounded-bl-none shadow-md text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                실시간 문의하고
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[220px] mx-auto">
                일을 맡기기 전 궁금한 부분은 전문가에게 직접 물어보고 바로 확인해요
              </p>
            </div>
          </div>

          {/* Step 3: 안전하게 결제하고 */}
          <div className="flex flex-col items-center text-center space-y-4 group">
            {/* Graphic: Isometric Blue Padlock with Won symbol */}
            <div className="h-32 flex items-center justify-center w-full">
              <div className="relative flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
                {/* Silver Shackle */}
                <div className="w-10 h-10 border-4 border-slate-400 rounded-t-full border-b-0 -mb-2 z-0" />
                {/* Blue Padlock Body */}
                <div className="w-16 h-14 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 rounded-xl shadow-xl flex items-center justify-center relative z-10 border border-cyan-400/30">
                  <span className="text-white font-extrabold text-lg drop-shadow-sm">₩</span>
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                안전하게 결제하고
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[220px] mx-auto">
                에스크로 결제로 작업물을 받을 때까지 거래 대금을 안전하게 보호받아요
              </p>
            </div>
          </div>

          {/* Step 4: 원하던 작업물을 받아요 */}
          <div className="flex flex-col items-center text-center space-y-4 group">
            {/* Graphic: Folder with Colorful File Sheets */}
            <div className="h-32 flex items-center justify-center w-full">
              <div className="relative w-18 h-18 group-hover:scale-105 transition-transform duration-300">
                {/* Yellow / Pink Top Sheet */}
                <div className="absolute top-0 right-1 w-12 h-14 bg-pink-500 rounded-lg shadow-md transform rotate-12" />
                {/* Purple Middle Sheet */}
                <div className="absolute top-1 left-2 w-12 h-14 bg-indigo-500 rounded-lg shadow-md transform rotate-[-8deg]" />
                {/* Cyan Sheet */}
                <div className="absolute top-2 left-4 w-12 h-14 bg-cyan-400 rounded-lg shadow-md" />
                {/* Green Front Folder */}
                <div className="absolute bottom-0 inset-x-0 h-11 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl shadow-xl flex items-center justify-center border border-emerald-400/40">
                  <span className="text-white text-[10px] font-black tracking-tight">contentrip</span>
                </div>
              </div>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                원하던 작업물을 받아요
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[220px] mx-auto">
                검증된 전문가들의 고퀄리티 작업물과 100% 저작재산권을 제공받을 수 있어요
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Button: 자세히 보기 */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => handleScrollToSection('process-section')}
            className="px-8 py-3 bg-[#13192B] hover:bg-[#1A233C] text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
          >
            자세히 보기
          </button>
        </div>
      </section>

      {/* 
        ========================================================================
        8. B2B BOTTOM CALL-TO-ACTION (Clean Enterprise RFP Request)
        ========================================================================
      */}
      <section className="bg-[#0D121F] border border-slate-800 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
            프로젝트에 필요한 최적의 AI 제작팀을 찾아보세요
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
            예산과 일정, 희망하는 레퍼런스를 등록하시면 전담 PM이 검토 후 최적의 AI 디렉터 맞춤 비교 견적을 안내해 드립니다.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenPipeline || onOpenRfp}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 via-indigo-600 to-cyan-500 hover:opacity-95 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(236,72,153,0.3)] shrink-0 cursor-pointer flex items-center gap-2"
        >
          <span>맞춤 RFP 견적 요청하기</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};

