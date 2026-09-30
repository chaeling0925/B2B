import React, { useState } from 'react';
import { 
  Star, 
  Heart, 
  Share2, 
  Check, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  MessageSquare, 
  CreditCard, 
  CheckCircle2, 
  ChevronDown, 
  Info 
} from 'lucide-react';
import { ServiceItem, ServicePackage } from '../types/marketplace';
import { MOCK_REVIEWS_LIST } from '../data/mockData';

interface ServiceDetailProps {
  service: ServiceItem;
  onBack: () => void;
  onOpenChat: (service: ServiceItem) => void;
  onOpenCheckout: (service: ServiceItem, selectedPackage: ServicePackage) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  service,
  onBack,
  onOpenChat,
  onOpenCheckout,
  isBookmarked,
  onToggleBookmark
}) => {
  const [selectedPackageTier, setSelectedPackageTier] = useState<'standard' | 'deluxe' | 'premium'>('deluxe');
  const [activeTab, setActiveTab] = useState<'portfolio' | 'description' | 'pricing' | 'faq' | 'reviews'>('description');
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);
  const [showShareToast, setShowShareToast] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const currentPkg = service.packages[selectedPackageTier];

  const handleShare = () => {
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2500);
  };

  return (
    <div className="space-y-6 pb-20 text-slate-100">
      {/* Toast Notification for share */}
      {showShareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F1424] text-white px-4 py-3 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2 border border-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,0.3)] animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          공유 링크가 클립보드에 복사되었습니다.
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <button onClick={onBack} className="hover:text-white transition-colors">
          콘텐트립 AI 홈
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span>AI 크리에이티브</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-cyan-400 font-medium">{service.categoryLabel}</span>
      </div>

      {/* Top Service Title & Header Row */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          {/* Prime Tag */}
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-xs font-black px-2.5 py-0.5 rounded tracking-wider italic shadow-xs">
              AI PRIME
            </span>
            <span className="text-xs font-semibold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
              {service.creator.grade}
            </span>
            {service.badge && (
              <span className="text-xs text-slate-400 font-medium">
                {service.badge}
              </span>
            )}
          </div>

          {/* Social / Wishlist Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => onToggleBookmark(service.id, e)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                isBookmarked
                  ? 'bg-pink-950/60 border-pink-500 text-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.3)]'
                  : 'bg-[#0F1424] border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span>{service.bookmarkCount.toLocaleString()}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-[#0F1424] text-slate-300 hover:text-white hover:border-slate-700 text-xs font-medium transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>공유</span>
            </button>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
          {service.title}
        </h1>

        {/* Rating and Reviews */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="font-bold text-white text-sm tabular-nums">{service.rating.toFixed(2)}</span>
          <span className="text-slate-400">({service.reviewCount.toLocaleString()}개의 기업 리뷰)</span>
          <span className="text-slate-600">·</span>
          <span className="text-cyan-400 font-medium">{service.turnaroundTime}</span>
          <span className="text-slate-600">·</span>
          <span className="text-slate-300 font-medium">해상도 {service.resolution}</span>
        </div>
      </div>

      {/* Creator Quick Agency Bar with AI Specialty & Toolstack */}
      <div className="bg-[#0F1424] rounded-xl p-4 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-indigo-600 to-cyan-500 text-white font-bold flex items-center justify-center text-sm shadow-md ring-2 ring-indigo-500/30 shrink-0">
            {service.creator.name.slice(0, 2)}
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-sm">{service.creator.name}</span>
              <span className="bg-pink-950/70 border border-pink-700/50 text-pink-300 text-[10px] font-bold px-1.5 py-0.2 rounded">
                AI 전문 스튜디오
              </span>
            </div>
            <div className="text-xs text-slate-300 font-medium mt-0.5">
              {service.creator.aiSpecialty}
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 mt-1">
              <span className="text-cyan-400">주요 툴: {service.aiTools.join(' · ')}</span>
              <span>·</span>
              <span>평균 응답: {service.creator.responseTime}</span>
              <span>·</span>
              <span>만족도 {service.creator.satisfactionRate}%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
          <button
            onClick={() => onOpenChat(service)}
            className="w-full md:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-pink-400" />
            AI 디렉터 1:1 사전 문의
          </button>
        </div>
      </div>

      {/* Main Content Layout: Left 65% + Right 35% Sticky Rail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 cols on lg) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Visual Showcase Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-md">
              <img
                src={service.galleryImages[selectedGalleryIdx] || service.heroImage}
                alt={service.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2.5 py-1 rounded-md backdrop-blur-xs border border-slate-800">
                {selectedGalleryIdx + 1} / {service.galleryImages.length}
              </div>
            </div>

            {/* Thumbnail switcher */}
            <div className="flex items-center gap-3 overflow-x-auto pb-1">
              {service.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedGalleryIdx(idx)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                    selectedGalleryIdx === idx
                      ? 'border-pink-500 scale-102 shadow-[0_0_10px_rgba(236,72,153,0.5)]'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Prime Assurance Box */}
          <div className="bg-[#0F1424] border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="shrink-0 flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900 border border-slate-800 w-28">
              <span className="text-xl font-black italic tracking-wide bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">prime</span>
              <span className="text-[10px] text-cyan-400 font-bold mt-1">상위 2% 전문가</span>
            </div>

            <div className="space-y-2 flex-1">
              <h3 className="text-sm font-bold text-white">
                이 서비스는 콘텐트립이 엄선한 <span className="text-pink-400 font-extrabold">상위 2% 전문가</span>가 제공해요
              </h3>
              <ul className="space-y-1 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>포트폴리오와 실제 기업 고객 리뷰로 철저히 검증된 하이엔드 퀄리티</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>경력·이력 및 법인 세금계산서 발행 자격 인증 심사를 완료한 공식 파트너</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>스타트업 및 대기업의 까다로운 NDA 보안과 피드백 프로세스 최적화</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recent Review Summary Box */}
          <div className="bg-[#0F1424] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                최근 받은 리뷰
                <span className="text-xs text-slate-500 font-normal">전체보기</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/80 border border-indigo-500/30 rounded-xl space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span>고객들의 리뷰를 요약했어요</span>
                  <Info className="w-3 h-3 text-slate-500" />
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "{service.summaryReview}"
                </p>
              </div>

              <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-white">5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-500">(주)하이퍼로직스</span>
                </div>
                <p className="text-xs text-slate-400 line-clamp-3">
                  "법인 세금계산서와 전자계약 절차가 간편하고 첫 시안부터 브랜드 방향성을 완벽하게 잡아주셔서 프로젝트가 예정보다 3일 일찍 종료되었습니다."
                </p>
              </div>
            </div>
          </div>

          {/* Tabbed In-Depth Information */}
          <div>
              {/* Tab navigation */}
              <div className="flex items-center gap-6 border-b border-slate-800 text-sm font-semibold">
                {[
                  { id: 'description', label: '서비스 설명' },
                  { id: 'portfolio', label: '포트폴리오' },
                  { id: 'pricing', label: '가격 정보' },
                  { id: 'faq', label: '자주 묻는 질문' },
                  { id: 'reviews', label: `기업 후기 (${service.reviewCount})` }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`pb-3 relative transition-colors cursor-pointer ${
                      activeTab === tab.id
                        ? 'text-white font-bold border-b-2 border-white -mb-px'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

            {/* Tab Contents */}
            <div className="pt-6">
              {activeTab === 'description' && (
                <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">
                      엔터프라이즈급 브랜드 아이덴티티 구축을 약속합니다
                    </h4>
                    <p className="text-slate-400">
                      본 서비스는 단순한 심볼 그래픽 제작이 아닌, 귀사의 비즈니스 방향성과 시장 경쟁력을 분석하여 
                      기업의 가치를 시각적으로 극대화하는 브랜드 전략 솔루션입니다.
                    </p>
                  </div>

                  {/* Work Process */}
                  <div className="bg-[#0F1424] rounded-xl p-5 border border-slate-800">
                    <h5 className="font-bold text-white mb-4 text-xs tracking-wider uppercase">
                      프로젝트 진행 프로세스
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.workProcess.map(proc => (
                        <div key={proc.step} className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-[11px] font-bold flex items-center justify-center">
                              {proc.step}
                            </span>
                            <span className="font-bold text-white text-xs">{proc.title}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 pl-7">{proc.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enterprise Benefits */}
                  <div className="border border-indigo-500/30 bg-[#0F1424] rounded-xl p-5 space-y-3">
                    <h5 className="font-bold text-cyan-300 text-xs flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-pink-400" />
                      기업 고객 전용 안심 보장 혜택
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>국세청 연동 법인 전자세금계산서 100% 당일 발급</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>영수증 및 지출결의서 원클릭 다운로드</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>표준 전자계약서 및 NDA(비밀유지협약) 체결</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>완성본에 대한 상업적 저작권 완전 양도 보장</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'portfolio' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.galleryImages.map((img, idx) => (
                      <div key={idx} className="rounded-xl overflow-hidden border border-slate-800 group bg-slate-900 aspect-4/3">
                        <img
                          src={img}
                          alt={`Portfolio Item ${idx + 1}`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-200"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'pricing' && (
                <div className="space-y-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight">가격 정보</h3>

                  {/* Top Purple Callout Box */}
                  <div className="bg-[#1C172E]/90 border border-purple-500/30 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-1.5 text-sm font-bold text-purple-300">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span>패키지 별 주요 특징을 비교해 보세요</span>
                      <Info className="w-3.5 h-3.5 text-purple-400/80 cursor-pointer" />
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="font-bold text-white">공통점</div>
                      <ul className="text-slate-300 space-y-1">
                        <li className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 inline-block shrink-0" />
                          <span>모든 패키지는 1일 이내에 작업이 완료되며, 수정은 2회까지 요청하실 수 있습니다.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="font-bold text-white">주요 특징</div>
                      <ul className="text-slate-300 space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 inline-block mt-1.5 shrink-0" />
                          <span><strong className="text-white">STANDARD</strong> : 목적에 맞는 단일 컷 제작에 적합하며, 원안을 제공해주셔야 합니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 inline-block mt-1.5 shrink-0" />
                          <span><strong className="text-white">DELUXE</strong> : 스토리텔링이 가능한 형태의 영상 및 어도비 기반 종편을 포함하여 제작합니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-slate-400 inline-block mt-1.5 shrink-0" />
                          <span><strong className="text-white">PREMIUM</strong> : 기획부터 최종 영상까지 총괄 제작하는 종합 AI 광고 프로젝트입니다.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Main Comparison Table */}
                  <div className="border border-slate-800 rounded-2xl bg-[#090D18] overflow-hidden shadow-xl">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left min-w-[700px]">
                        {/* Header with Tier Names & Prices */}
                        <thead>
                          <tr className="border-b border-slate-800">
                            <th className="p-5 w-[160px] bg-[#070A12] text-slate-400 font-medium"></th>
                            <th className="p-5 text-center bg-[#0C1020] border-l border-slate-800/80">
                              <div className="text-xs font-bold text-slate-300">STANDARD</div>
                              <div className="text-xl sm:text-2xl font-black text-white mt-1">550,000원</div>
                            </th>
                            <th className="p-5 text-center bg-[#0E1326] border-l border-slate-800/80">
                              <div className="text-xs font-bold text-slate-300">DELUXE</div>
                              <div className="text-xl sm:text-2xl font-black text-white mt-1">1,100,000원</div>
                            </th>
                            <th className="p-5 text-center bg-[#0C1020] border-l border-slate-800/80">
                              <div className="text-xs font-bold text-slate-300">PREMIUM</div>
                              <div className="text-xl sm:text-2xl font-black text-white mt-1">2,200,000원</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/80 text-xs">
                          {/* Row: 패키지 설명 */}
                          <tr>
                            <td className="p-5 font-bold text-slate-300 bg-[#070A12] align-top">패키지 설명</td>
                            <td className="p-5 text-left border-l border-slate-800/80 align-top space-y-3">
                              <div className="font-bold text-white text-sm">AI 영상 단일 컷</div>
                              <p className="text-slate-300 leading-relaxed">목적에 맞는 단일 컷 제작</p>
                              <p className="text-slate-400 leading-relaxed">원안이 되는 이미지를 전달주셔야 합니다.</p>
                              <div className="text-slate-400 pt-1">최대길이 : 10s</div>
                            </td>
                            <td className="p-5 text-left border-l border-slate-800/80 align-top space-y-3 bg-[#0C1020]/40">
                              <div className="font-bold text-white text-sm">AI 숏폼 영상</div>
                              <p className="text-slate-300 leading-relaxed">스토리텔링이 가능한 형태의 영상 제작</p>
                              <div className="text-slate-400 leading-relaxed">
                                <div>- A.I. 컷 제작</div>
                                <div>- 어도비 기반 종편 포함</div>
                              </div>
                              <div className="text-slate-400 pt-1">최대길이 : 60s</div>
                            </td>
                            <td className="p-5 text-left border-l border-slate-800/80 align-top space-y-3">
                              <div className="font-bold text-white text-sm">종합 AI 광고 제작</div>
                              <p className="text-slate-300 leading-relaxed">기획부터 이미지보드, 최종 영상까지 총괄 제작 프로젝트</p>
                              <div className="text-slate-400 pt-1">금액 기준은 1분 이내입니다.</div>
                            </td>
                          </tr>

                          {/* Row: 제공 개수 */}
                          <tr>
                            <td className="p-4 font-bold text-slate-300 bg-[#070A12]">제공 개수</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium">1개</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium bg-[#0C1020]/40">1개</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium">1개</td>
                          </tr>

                          {/* Row: 러닝타임 (초) */}
                          <tr>
                            <td className="p-4 font-bold text-slate-300 bg-[#070A12]">러닝타임 (초)</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium">60초</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium bg-[#0C1020]/40">60초</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium">60초</td>
                          </tr>

                          {/* Row: 작업일 */}
                          <tr>
                            <td className="p-4 font-bold text-slate-300 bg-[#070A12]">작업일</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium">1일</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium bg-[#0C1020]/40">1일</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium">1일</td>
                          </tr>

                          {/* Row: 수정 횟수 */}
                          <tr>
                            <td className="p-4 font-bold text-slate-300 bg-[#070A12]">수정 횟수</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium">2회</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium bg-[#0C1020]/40">2회</td>
                            <td className="p-4 text-center border-l border-slate-800/80 text-white font-medium">2회</td>
                          </tr>

                          {/* Row: 구매하기 버튼 */}
                          <tr className="bg-[#070A12]/50">
                            <td className="p-4 bg-[#070A12]"></td>
                            <td className="p-4 text-center border-l border-slate-800/80">
                              <button
                                onClick={() => onOpenCheckout(service, service.packages.standard)}
                                className="w-full max-w-[200px] py-3 bg-[#1A1F2C] hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-md"
                              >
                                구매하기
                              </button>
                            </td>
                            <td className="p-4 text-center border-l border-slate-800/80 bg-[#0C1020]/40">
                              <button
                                onClick={() => onOpenCheckout(service, service.packages.deluxe)}
                                className="w-full max-w-[200px] py-3 bg-[#1A1F2C] hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-md"
                              >
                                구매하기
                              </button>
                            </td>
                            <td className="p-4 text-center border-l border-slate-800/80">
                              <button
                                onClick={() => onOpenCheckout(service, service.packages.premium)}
                                className="w-full max-w-[200px] py-3 bg-[#1A1F2C] hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-md"
                              >
                                구매하기
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="space-y-3">
                  {service.faqs.map((faq, idx) => (
                    <div 
                      key={idx}
                      className="border border-slate-800 rounded-xl overflow-hidden bg-[#0F1424]"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-white hover:bg-slate-800/50 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-pink-400 font-black">Q.</span>
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${
                          expandedFaq === idx ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {expandedFaq === idx && (
                        <div className="px-4 pb-4 pt-1 text-xs text-slate-400 bg-slate-900/50 border-t border-slate-800 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-4">
                  {MOCK_REVIEWS_LIST.map(rev => (
                    <div key={rev.id} className="p-4 rounded-xl border border-slate-800 bg-[#0F1424] space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-800 text-white text-[10px] flex items-center justify-center font-bold">
                            {rev.company.slice(0, 1)}
                          </div>
                          <span className="text-xs font-bold text-white">{rev.author}</span>
                          <span className="text-xs text-slate-500">({rev.company})</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-slate-400">
                          <div className="flex text-amber-400">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400" />
                            ))}
                          </div>
                          <span>{rev.date}</span>
                        </div>
                      </div>
                      <div className="text-[11px] text-cyan-400 font-semibold">
                        구매 옵션: {rev.servicePackage}
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {rev.comment}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Sticky Column: Package Selector & Purchase Module */}
        <div className="lg:col-span-4 sticky top-24">
          <div className="bg-[#0F1424] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
            {/* Package Tabs */}
            <div className="grid grid-cols-3 border-b border-slate-800 text-xs font-bold text-center">
              {(['standard', 'deluxe', 'premium'] as const).map(tier => {
                const isSelected = selectedPackageTier === tier;
                return (
                  <button
                    key={tier}
                    onClick={() => setSelectedPackageTier(tier)}
                    className={`py-3 transition-colors ${
                      isSelected
                        ? 'border-b-2 border-white text-white bg-slate-900/60 font-bold'
                        : 'text-slate-400 hover:text-white bg-[#0B0F19]'
                    }`}
                  >
                    {tier.toUpperCase()}
                  </button>
                );
              })}
            </div>

            {/* Package Details */}
            <div className="p-5 space-y-5">
              {/* Price Row */}
              <div>
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl font-black text-white tabular-nums">
                    {currentPkg.priceFormatted}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">VAT 포함</span>
                </div>
                <div className="text-xs text-slate-400 mt-1 flex items-center justify-between">
                  <span>무이자 할부 최대 12개월</span>
                  <span className="text-slate-300 font-medium">법인 후불결제 지원</span>
                </div>
              </div>

              {/* Package Summary Description */}
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-300 font-medium">
                {currentPkg.summary}
              </div>

              {/* Delivery and Revisions */}
              <div className="grid grid-cols-2 gap-3 text-xs border-y border-slate-800 py-3 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span>작업 소요: <strong className="text-white">{currentPkg.deliveryDays}영업일</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>수정 횟수: <strong className="text-white">{currentPkg.revisionCount}</strong></span>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-white">제공 산출물 및 혜택</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentPkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expandable Technical Inclusion Items */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
                {currentPkg.includedItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Check className={`w-3.5 h-3.5 ${item.included ? 'text-indigo-400' : 'text-slate-700'}`} />
                      <span className={item.included ? 'text-slate-200' : 'text-slate-600 line-through'}>
                        {item.name}
                      </span>
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {item.included ? '제공' : '미포함'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenCheckout(service, currentPkg)}
                  className="w-full py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  주문 및 안심 계약 요청하기
                </button>

                <button
                  onClick={() => onOpenChat(service)}
                  className="w-full py-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                  전문가에게 사전 문의하기
                </button>
              </div>

              {/* B2B Assurance Footer */}
              <div className="p-3 bg-slate-900/60 rounded-xl text-[11px] text-slate-400 space-y-1 border border-slate-800">
                <div className="font-semibold text-slate-300 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  콘텐트립 B2B 기업 구매 보호
                </div>
                <div>작업 완료 및 산출물 승인 전까지 결제 대금은 안전하게 에스크로 보호됩니다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
