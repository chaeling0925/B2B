import React from 'react';
import { Star, Heart, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types/marketplace';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect: (service: ServiceItem) => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e: React.MouseEvent) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelect,
  isBookmarked,
  onToggleBookmark
}) => {
  return (
    <div 
      onClick={() => onSelect(service)}
      className="group bg-[#0F1424] rounded-xl border border-slate-800/90 overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_4px_24px_rgba(6,182,212,0.18)] transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Thumbnail Box */}
        <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
          <img
            src={service.heroImage}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 filter brightness-95"
          />

          {/* Prime AI Badge overlay */}
          <div className="absolute top-2.5 left-2.5 bg-black/85 backdrop-blur-xs text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm flex items-center gap-1.5 border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span className="font-semibold text-slate-200">{service.creator.grade}</span>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={(e) => onToggleBookmark(service.id, e)}
            className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer ${
              isBookmarked 
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-[0_0_10px_rgba(236,72,153,0.4)]' 
                : 'bg-black/60 text-slate-300 hover:text-white hover:bg-black/80'
            }`}
            title="관심 AI 크리에이터 저장"
          >
            <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4">
          {/* Creator & Toolstack Meta */}
          <div className="flex items-center justify-between gap-2 mb-1.5 text-xs text-slate-400">
            <span className="font-medium text-slate-300 truncate">
              {service.creator.name}
            </span>
            <span className="flex items-center gap-1 shrink-0 text-cyan-400 text-[11px] font-medium">
              <Clock className="w-3 h-3" />
              {service.turnaroundTime}
            </span>
          </div>

          {/* Service Title */}
          <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug mb-2">
            {service.title}
          </h3>

          {/* AI Toolstack & Resolution metadata (Zero-pill text format) */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-2 truncate">
            <span className="text-pink-400 font-medium">{service.categoryLabel}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300 truncate">{service.aiTools.slice(0, 2).join(' / ')}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">{service.resolution.split(' ')[0]}</span>
          </div>

          {/* Brand Safety & Guarantee */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>상업적 이용 보증</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>전자세금계산서</span>
          </div>
        </div>
      </div>

      {/* Bottom Rating & Price */}
      <div className="px-4 pb-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="font-bold text-white tabular-nums">{service.rating.toFixed(2)}</span>
          <span className="text-slate-500">({service.reviewCount.toLocaleString()})</span>
        </div>

        <div className="text-right">
          <div className="text-[10px] text-slate-500">VAT 포함</div>
          <div className="text-base font-bold text-white tabular-nums">
            {service.startingPrice.toLocaleString()}원~
          </div>
        </div>
      </div>
    </div>
  );
};
