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
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  Flame,
  Zap
} from 'lucide-react';
import { ServiceItem, CategoryId } from '../types/marketplace';
import { ServiceCard } from './ServiceCard';

interface MarketplaceHomeProps {
  services: ServiceItem[];
  currentCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenRfp: () => void;
  onOpenPipeline?: () => void;
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
  onOpenRfp,
  onOpenPipeline,
  bookmarks,
  onToggleBookmark,
  searchQuery,
  onSearchChange
}) => {
  const [selectedToolFilter, setSelectedToolFilter] = useState<string>('all');

  // AI-Focused Categories
  const aiCategories = [
    { id: 'all' as CategoryId, label: '전체 AI 크리에이티브', icon: LayoutGrid, count: services.length },
    { id: 'ai_video' as CategoryId, label: 'AI 영상 & 광고 CF', icon: Video, desc: 'Runway Gen-3 · Sora · 상업용 필름' },
    { id: 'ai_image' as CategoryId, label: 'AI 이미지 & 룩북', icon: ImageIcon, desc: 'Flux Pro · 커스텀 LoRA 모델 화보' },
    { id: 'ai_art' as CategoryId, label: 'AI 콘셉트 아트', icon: Palette, desc: '게임 세계관 · 영화 프리비즈 · 키비주얼' },
    { id: 'ai_branding' as CategoryId, label: 'AI 생성형 브랜딩', icon: Cpu, desc: '알고리즘 로고 · 다이내믹 아이덴티티' },
    { id: 'ai_audio' as CategoryId, label: 'AI 음악 & 사운드', icon: Music, desc: '사운드 로고 · 맞춤형 BGM · 보이스' }
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

  // Filter services by category and tool
  const filteredServices = services.filter((service) => {
    const matchesCategory = currentCategory === 'all' || service.category === currentCategory;
    const matchesTool = selectedToolFilter === 'all' || selectedToolFilter === '전체 툴' || 
      service.aiTools.some((t) => t.toLowerCase().includes(selectedToolFilter.toLowerCase().replace('.1', '')));
    return matchesCategory && matchesTool;
  });

  return (
    <div className="space-y-16 pb-24 text-slate-100">
      {/* 
        ========================================================================
        HERO SECTION: EDITORIAL LAYOUT + CONTENTRIP AI SIGNATURE NEON GRADIENT
        (Pink #FF2E93 -> Purple #8B5CF6 -> Cyan #00F0FF)
        ========================================================================
      */}
      <section className="bg-[#0B0F1A] rounded-2xl border border-slate-800/90 overflow-hidden mt-4 shadow-2xl relative">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF2E93]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Split Hero: Left Typography & Narrative vs Right Director & Brand Geometric Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-14 relative z-10">
          {/* Left Column: Massive Editorial Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Giant Stacked Condensed Headline */}
            <div>
              <h1 className="font-display text-5xl sm:text-7xl lg:text-[5.75rem] tracking-tight leading-[0.95] text-white uppercase select-none">
                CREATE<span className="text-[#FF2E93]">.</span>
                <br />
                CONNECT<span className="text-[#8B5CF6]">.</span>
                <br />
                <span className="bg-gradient-to-r from-[#FF2E93] via-[#A855F7] to-[#00F0FF] bg-clip-text text-transparent">
                  GROW
                </span>
                <span className="text-[#00F0FF]">.</span>
              </h1>
            </div>

            {/* Sub-Headline: Clean white text with unified gradient accents on '기회' and '비즈니스' */}
            <div className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white leading-snug">
              작업이{' '}
              <span className="bg-gradient-to-r from-[#FF2E93] to-[#C084FC] bg-clip-text text-transparent font-black">
                기회
              </span>
              가 되고, 아이디어가{' '}
              <span className="bg-gradient-to-r from-[#818CF8] to-[#00F0FF] bg-clip-text text-transparent font-black">
                비즈니스
              </span>
              가 됩니다.
            </div>

            {/* Clean Explanatory Description */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
              <strong className="text-white">콘텐트립 AI</strong>는 Runway Gen-3, Midjourney v7, Flux Pro 기반 상위 1% 생성형 AI 크리에이터와 기업 고객을 직접 잇는 B2B 마켓플레이스입니다. 
              100% 상업적 저작재산권 양도, 프롬프트 레시피 공개, 국세청 전자세금계산서 당일 발행.
            </p>

            {/* Primary Action Button (Glowing Signature Neon Gradient) */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <button
                onClick={onOpenPipeline || onOpenRfp}
                className="inline-flex items-center gap-3.5 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,46,147,0.45)]">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  AI 프로젝트 맞춤 의뢰 (RFP)
                </span>
              </button>

              <button
                onClick={() => onSelectCategory('all')}
                className="text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors underline underline-offset-4 cursor-pointer"
              >
                전체 포트폴리오 둘러보기
              </button>
            </div>

            {/* Quick Search Bar with Neon Focus Ring */}
            <div className="relative max-w-lg mt-4">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="찾으시는 AI 비디오, 룩북, 캐릭터 또는 툴(Runway, Flux 등) 검색"
                className="w-full pl-10 pr-24 py-3 bg-[#070A12] border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
              />
              <button
                onClick={onOpenPipeline || onOpenRfp}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-gradient-to-r from-[#FF2E93] to-[#8B5CF6] hover:opacity-90 text-white text-[11px] font-bold rounded-lg cursor-pointer transition-all shadow-md shadow-pink-500/20"
              >
                매칭 요청
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual with Brand Gradient Block & Circular Stamp (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Signature Neon Gradient Geometric Block (Pink -> Violet -> Cyan) */}
            <div className="absolute top-0 right-0 w-[82%] h-[90%] bg-gradient-to-br from-[#FF2E93] via-[#7C3AED] to-[#00F0FF] rounded-2xl z-0 shadow-[0_0_40px_rgba(139,92,246,0.35)] flex flex-col justify-between p-4">
              <div className="text-right text-[10px] font-black uppercase tracking-widest text-white drop-shadow-sm">
                BASED IN SEOUL
                <br />
                TOP 1% AI DIRECTORS
              </div>
              <div className="text-left text-[9px] font-bold tracking-widest text-white/80 uppercase">
                CONTENTRIP AI PLATFORM
              </div>
            </div>

            {/* Main AI Generative Organic Sculpture (Parametric 3D Organism in signature neon palette) */}
            <div className="relative z-10 w-[84%] aspect-3/4 rounded-xl overflow-hidden shadow-2xl mr-8 mt-6 border-2 border-slate-900 bg-slate-950 group">
              <img
                src="/src/assets/images/hero_organic_sculpture_1790729297506.jpg"
                alt="콘텐트립 AI 생성형 유기체 3D 비주얼"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle glass reflection & bottom badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono tracking-wider text-cyan-300">
                AI BIO-ALGORITHM V4.2
              </div>
            </div>

            {/* Floating Circular Stamp Sticker (Dark glass with Cyan/Pink neon rim) */}
            <div className="absolute bottom-6 left-2 sm:left-4 z-20 w-28 h-28 rounded-full bg-[#070A14]/95 text-white p-2 shadow-2xl border-2 border-cyan-400 flex flex-col items-center justify-center text-center rotate-[-12deg] hover:rotate-0 transition-transform select-none cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.35)]">
              <div className="text-[7.5px] font-bold tracking-tighter uppercase text-cyan-300">
                • CONTENTRIP AI •
              </div>
              <div className="text-[10px] font-black tracking-tight uppercase leading-tight mt-0.5 text-white">
                AVAILABLE
                <br />
                <span className="bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent">
                  FOR B2B
                </span>
              </div>
              <div className="text-[7.5px] font-semibold text-slate-400 mt-0.5">
                ENTERPRISE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Pinned Black Statistics Bar (Spanning Full Width with Brand Gradient Accents) */}
        <div className="bg-[#05070D] border-t border-slate-800/90 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          <div className="p-4 sm:p-6 text-center">
            <div className="font-display text-3xl sm:text-4xl bg-gradient-to-r from-[#FF2E93] to-purple-400 bg-clip-text text-transparent tracking-tight tabular-nums">
              100%
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-1">
              COMMERCIAL RIGHTS
            </div>
          </div>

          <div className="p-4 sm:p-6 text-center">
            <div className="font-display text-3xl sm:text-4xl text-white tracking-tight tabular-nums">
              80+
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-1">
              VERIFIED AI CREATORS
            </div>
          </div>

          <div className="p-4 sm:p-6 text-center">
            <div className="font-display text-3xl sm:text-4xl text-cyan-400 tracking-tight tabular-nums">
              2h
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-1">
              RAPID PM MATCHING
            </div>
          </div>

          <div className="p-4 sm:p-6 text-center">
            <div className="font-display text-3xl sm:text-4xl text-white tracking-tight tabular-nums">
              48h
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-1">
              AVERAGE DRAFT TIME
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SELECTED WORK: ASYMMETRIC BENTO GRID (MATCHING REFERENCE IMAGE)
        ========================================================================
      */}
      <section className="space-y-5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <h2 className="font-display text-2xl sm:text-3xl text-white tracking-tight uppercase">
              SELECTED WORK
            </h2>
            <span className="text-xs font-bold text-pink-400">콘텐트립 AI 엄선 포트폴리오</span>
          </div>
          <button
            onClick={() => onSelectCategory('all')}
            className="text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-pink-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Work 1: Cinematic Video */}
          <div 
            onClick={() => onSelectService(services[0])}
            className="group relative bg-[#0F1424] rounded-xl overflow-hidden border border-slate-800 hover:border-pink-500/70 hover:shadow-[0_0_25px_rgba(255,46,147,0.2)] transition-all duration-300 cursor-pointer"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/service_ai_cinematic_video_1790724514481.jpg"
                alt="AI Video Showcase"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-2xl text-white uppercase tracking-tight">
                  SYNTH STUDIO
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5 flex items-center justify-between">
                  <span>AI VIDEO & CF 광고</span>
                  <span className="text-cyan-400 font-bold">4K CINEMA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Work 2: Fashion Lookbook (With Signature Gradient Geometric Corner) */}
          <div 
            onClick={() => onSelectService(services[1])}
            className="group relative bg-[#0F1424] rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-400/70 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-pointer"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/service_ai_fashion_lookbook_1790724526063.jpg"
                alt="AI Fashion Showcase"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-95"
              />
              {/* Angular Neon Gradient Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#FF2E93] to-[#00F0FF] transform rotate-45 translate-x-8 -translate-y-8" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-2xl text-white uppercase tracking-tight">
                  NEURAL VOGUE
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5 flex items-center justify-between">
                  <span>AI FASHION & 룩북</span>
                  <span className="text-pink-400 font-bold">FLUX PRO / LoRA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Work 3: Concept Art & Worldbuilding */}
          <div 
            onClick={() => onSelectService(services[2])}
            className="group relative bg-[#0F1424] rounded-xl overflow-hidden border border-slate-800 hover:border-purple-400/70 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-pointer"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
              <img
                src="/src/assets/images/service_ai_concept_art_1790724536460.jpg"
                alt="AI Concept Art Showcase"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-2xl text-white uppercase tracking-tight">
                  AETHER CONCEPT
                </div>
                <div className="text-[11px] text-slate-300 mt-0.5 flex items-center justify-between">
                  <span>AI 콘셉트 아트 & 매트</span>
                  <span className="text-emerald-400 font-bold">8K MATTE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SERVICES SECTION: DEEP VIOLET CARD + 2X2 GRID (MATCHING REFERENCE IMAGE)
        ========================================================================
      */}
      <section className="bg-[#0B0F1A] rounded-2xl border border-slate-800/90 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
          {/* Left Deep Gradient Card: SERVICES ↘ */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#1E0D36] via-[#101426] to-[#081B2B] border-r border-pink-500/20 p-8 sm:p-10 flex flex-col justify-between text-white space-y-8">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-tight bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  SERVICES
                </h3>
                <div className="w-10 h-10 rounded-full bg-pink-500/20 border border-pink-500/40 text-cyan-300 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 transform rotate-45" />
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                기업 브랜드의 상업적 요구에 최적화된 콘텐트립 AI 전용 생성 파이프라인.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>100% 저작재산권 귀사 완전 귀속</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                <span>전담 AI PM 1:1 매칭 & 일정 감리</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>프롬프트 레시피 및 시드 투명 공개</span>
              </div>
            </div>
          </div>

          {/* Right 2x2 Services Grid (Matching Wireframe Circles in Reference) */}
          <div className="lg:col-span-8 p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#0B0F1A]">
            {/* Service 1 */}
            <div 
              onClick={() => onSelectCategory('ai_video')}
              className="space-y-2.5 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full border border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-950/30 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-all shadow-xs">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                AI 영상 & 광고 CF (AI Video & CF)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Runway Gen-3, Sora, Kling 기반 시네마틱 럭셔리 광고 필름, 숏폼 CF, 3D 제품 비디오 제작.
              </p>
            </div>

            {/* Service 2 */}
            <div 
              onClick={() => onSelectCategory('ai_image')}
              className="space-y-2.5 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full border border-slate-700 group-hover:border-pink-400 group-hover:bg-pink-950/30 flex items-center justify-center text-slate-300 group-hover:text-pink-400 transition-all shadow-xs">
                <ImageIcon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white group-hover:text-pink-300 transition-colors">
                AI 패션 & 모델 룩북 (AI Fashion Lookbook)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Flux Pro & 브랜드 전용 LoRA 파인튜닝. 스튜디오 대관 없이 동일 모델 페이스를 유지하는 하이엔드 화보.
              </p>
            </div>

            {/* Service 3 */}
            <div 
              onClick={() => onSelectCategory('ai_art')}
              className="space-y-2.5 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full border border-slate-700 group-hover:border-purple-400 group-hover:bg-purple-950/30 flex items-center justify-center text-slate-300 group-hover:text-purple-400 transition-all shadow-xs">
                <Palette className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white group-hover:text-purple-300 transition-colors">
                AI 콘셉트 아트 & 비주얼 (Concept Art & Matte)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                게임 세계관, 영화 프리비즈, 시네마틱 매트페인팅. 8K 레이어드 포토샵 PSD 납품.
              </p>
            </div>

            {/* Service 4 */}
            <div 
              onClick={() => onSelectCategory('ai_branding')}
              className="space-y-2.5 cursor-pointer group"
            >
              <div className="w-11 h-11 rounded-full border border-slate-700 group-hover:border-cyan-400 group-hover:bg-cyan-950/30 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 transition-all shadow-xs">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                AI 생성형 브랜딩 (Generative Identity)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                데이터와 상호작용하는 알고리즘 다이내믹 로고 시스템, 무한 확대 벡터(SVG/AI) 및 Lottie 모션.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        ALL SERVICES & FILTER SECTION (Zero-Pill Controls)
        ========================================================================
      */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-white tracking-tight uppercase">
              AI CREATORS & SERVICES
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              검증된 AI 디렉터의 패키지 서비스를 확인하고 1:1 상담 또는 즉시 주문을 진행하세요.
            </p>
          </div>

          {/* AI Engine Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
            <span className="text-slate-500 text-[11px] shrink-0 mr-1 flex items-center gap-1">
              <Sliders className="w-3 h-3" />
              엔진:
            </span>
            {popularAiTools.map((tool) => (
              <button
                key={tool}
                onClick={() => setSelectedToolFilter(tool === '전체 툴' ? 'all' : tool)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  (selectedToolFilter === tool || (selectedToolFilter === 'all' && tool === '전체 툴'))
                    ? 'border-pink-500 bg-gradient-to-r from-pink-950/50 to-purple-950/40 text-pink-300 shadow-[0_0_12px_rgba(255,46,147,0.3)]'
                    : 'border-slate-800 bg-[#0F1424] text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        {/* Category Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {aiCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-24 cursor-pointer ${
                  isSelected
                    ? 'border-cyan-400 bg-cyan-950/30 text-white shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'border-slate-800 bg-[#0F1424] hover:border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                <div>
                  <div className="text-xs font-bold line-clamp-1">{cat.label}</div>
                  <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                    {cat.desc || `${services.length}개 서비스`}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Service Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center bg-[#0F1424] rounded-2xl border border-slate-800 space-y-3">
            <p className="text-slate-400 text-sm">선택한 조건에 일치하는 AI 서비스가 없습니다.</p>
            <button
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
                isBookmarked={bookmarks.includes(service.id)}
                onToggleBookmark={onToggleBookmark}
              />
            ))}
          </div>
        )}
      </section>

      {/* 
        ========================================================================
        TRUSTED BY LOGO STRIP (MATCHING REFERENCE IMAGE)
        ========================================================================
      */}
      <section className="border-y border-slate-800/80 py-8 space-y-4">
        <div className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 text-center">
          TRUSTED BY VISIONARY ENTERPRISE CLIENTS
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-400 text-xs sm:text-sm font-black tracking-widest uppercase opacity-75">
          <span>HYPERLOGIX</span>
          <span>AURA LABS</span>
          <span>NEXUS COMMERCE</span>
          <span>CANON</span>
          <span>HEXA</span>
          <span>WARE</span>
          <span>SISU</span>
        </div>
      </section>

      {/* 
        ========================================================================
        BOTTOM SIGNATURE GRADIENT CTA (MATCHING REFERENCE IMAGE BOTTOM)
        ========================================================================
      */}
      <section className="bg-gradient-to-r from-[#1F0A38] via-[#11162B] to-[#072436] border border-pink-500/40 rounded-2xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_50px_rgba(255,46,147,0.2)]">
        <div className="space-y-2 max-w-xl">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] uppercase bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent">
            LET'S CREATE
            <br />
            SOMETHING GREAT
            <br />
            TOGETHER.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium pt-2">
            상위 1% 검증된 AI 크리에이터와 함께 <strong className="text-white">콘텐트립 AI</strong>에서 브랜드의 새로운 비주얼 스케일을 열어보세요. 
            맞춤 RFP 접수 시 2시간 이내 3인의 비교 견적서가 무료로 제공됩니다.
          </p>
        </div>

        <button
          onClick={onOpenPipeline || onOpenRfp}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,240,255,0.4)] shrink-0 cursor-pointer group"
          title="맞춤 RFP 견적 요청"
        >
          <ArrowUpRight className="w-8 h-8 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </section>
    </div>
  );
};
