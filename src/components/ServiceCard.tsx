import React, { useState } from 'react';
import { 
  Star, 
  Heart, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Check, 
  VolumeX, 
  Volume2, 
  Quote 
} from 'lucide-react';
import { ServiceItem } from '../types/marketplace';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
  onOpenInquiry?: (service: ServiceItem) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelect,
  onOpenInquiry,
  isBookmarked,
  onToggleBookmark
}) => {
  const [isMuted, setIsMuted] = useState(true);

  const creatorName = service.creator.name.replace(/\s*\(.*?\)/, '');
  const partnerBadge = service.creator.partnerBadge || '콘텐트립 PRIME 파트너';
  const logoText = service.creator.logoText || service.creator.agencyName || 'CONTENTRIP';
  const watermark = service.videoWatermark || `${service.creator.agencyName} | ${creatorName.toUpperCase()}`;
  
  // Default bullet points if not specified
  const bulletFeatures = service.bulletFeatures || [
    '대기업/브랜드 레퍼런스 급 4K 초고화질',
    '스토리보드·음원·나레이션 올인원 패키지',
    '국세청 세금계산서 & 상업적 저작재산권 100% 양도'
  ];

  const managerQuote = service.managerRecommendation || {
    quote: '삼성·현대·CJ 등 국내 주요 엔터프라이즈가 선택한 AI 영상 프로덕션',
    author: '콘텐트립 총괄 크리에이티브 디렉터 추천'
  };

  return (
    <div 
      className="group bg-[#0D1220] hover:bg-[#111728] rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-200 flex flex-col justify-between p-4 sm:p-5 shadow-lg shadow-black/40"
    >
      <div>
        {/* Card Header: Creator Logo + Name + Official Partner Badge + Bookmark */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2.5">
            {/* Dark Circular Creator Avatar with Logo Text */}
            <div className="w-8 h-8 rounded-full bg-[#05070D] text-white flex items-center justify-center p-1 shrink-0">
              <span className="text-[6.5px] font-black tracking-tighter leading-tight uppercase text-slate-300 text-center line-clamp-2">
                {logoText}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm text-white">
                {creatorName}
              </span>
              <span className="text-[10px] text-sky-400 bg-sky-500/15 font-semibold px-2 py-0.5 rounded">
                {partnerBadge}
              </span>
            </div>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => onToggleBookmark(service.id, e)}
            className={`p-1.5 rounded-full transition-colors cursor-pointer ${
              isBookmarked 
                ? 'text-pink-400 bg-pink-500/20' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
            title="관심 파트너 저장"
          >
            <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Media Box (Video / Cinematic Image with Watermark & Sound Toggle) */}
        <div 
          onClick={() => onSelect(service)}
          className="relative aspect-16/10 rounded-xl overflow-hidden bg-slate-950 cursor-pointer mb-4 group/media"
        >
          <img
            src={service.heroImage}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover/media:scale-103 transition-transform duration-300 filter brightness-95"
          />

          {/* Video Watermark Overlay top left */}
          <div className="absolute top-2.5 left-3 text-[10px] font-mono tracking-wider text-white/80 drop-shadow-md select-none font-semibold uppercase">
            {watermark}
          </div>

          {/* Sound Mute/Unmute Indicator Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted(!isMuted);
            }}
            className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded bg-black/75 hover:bg-black text-slate-200 hover:text-white flex items-center justify-center transition-colors shadow-md backdrop-blur-xs cursor-pointer"
            title={isMuted ? '음소거 해제' : '음소거'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
          </button>
        </div>

        {/* Title & Bullet Checkmarks */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between gap-2">
            <h3 
              onClick={() => onSelect(service)}
              className="font-bold text-sm sm:text-[15px] text-white hover:text-sky-300 transition-colors line-clamp-1 cursor-pointer"
            >
              {service.title.replace(/^\[.*?\]\s*/, '')}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold text-white tabular-nums">{service.rating.toFixed(2)}</span>
            <span className="text-slate-500">({service.reviewCount.toLocaleString()})</span>
            <span className="text-slate-600">·</span>
            <span className="text-cyan-400 font-medium text-[11px]">{service.turnaroundTime}</span>
          </div>

          {/* Bullet points with blue/cyan checkmark */}
          <div className="space-y-1.5 text-xs text-slate-300 pt-1">
            {bulletFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Endorsement Quote Box without harsh border */}
        <div className="bg-[#131A2D] rounded-xl p-3.5 mb-4 relative">
          <div className="text-pink-500 text-base font-serif font-black leading-none mb-1 opacity-80">
            “
          </div>
          <p className="text-xs font-semibold text-slate-200 line-clamp-2 leading-relaxed">
            {managerQuote.quote}
          </p>
          <div className="text-[11px] text-slate-400 mt-1 font-medium">
            - {managerQuote.author}
          </div>
        </div>
      </div>

      {/* Bottom Dual Action Buttons (Borderless) */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        <button
          type="button"
          onClick={() => onSelect(service)}
          className="w-full py-2.5 px-3 bg-[#182138] hover:bg-[#202C4B] text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer text-center"
        >
          자세히 보기
        </button>

        <button
          type="button"
          onClick={() => {
            if (onOpenInquiry) {
              onOpenInquiry(service);
            } else {
              onSelect(service);
            }
          }}
          className="w-full py-2.5 px-3 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer text-center hover:opacity-90"
        >
          무료 견적받기
        </button>
      </div>
    </div>
  );
};
