import React from 'react';
import { ShieldCheck, Phone, Mail, Building, FileCheck } from 'lucide-react';
import { ContentripLogo } from './ContentripLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070D] text-slate-400 border-t border-slate-800/80 text-xs py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Trust Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-slate-800 text-slate-300">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white text-sm">100% 안전 에스크로</div>
              <div className="text-slate-400 text-xs mt-0.5">작업물 승인 완료 전까지 결제 대금 전액 안전 보호</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white text-sm">전자세금계산서 발행</div>
              <div className="text-slate-400 text-xs mt-0.5">국세청 실시간 연동 및 법인 지출결의서 즉시 발급</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white text-sm">전담 B2B 매니저 지원</div>
              <div className="text-slate-400 text-xs mt-0.5">견적 비교부터 계약 및 일정 감리 1:1 전담 매칭</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-white text-sm">기업 고객 전용 센터</div>
              <div className="text-slate-400 text-xs mt-0.5">1544-0920 (평일 09:30 ~ 18:30 운영)</div>
            </div>
          </div>
        </div>

        {/* Legal & Corporate Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 leading-relaxed text-slate-400">
            <div className="flex items-center gap-2">
              <ContentripLogo size="sm" textSuffix="AI" />
              <span className="text-cyan-400 text-[10px] font-semibold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800">
                AI CREATIVE HUB
              </span>
            </div>
            <div>(주)콘텐트립 · 대표이사: 이콘텐 · 사업자등록번호: 214-88-91024 · 통신판매업신고: 2026-서울강남-04192호</div>
            <div>주소: 서울특별시 강남구 테헤란로 152 강남파이낸스센터 18층 · B2B 제휴 및 문의: biz@contentrip.ai</div>
            <div className="text-[11px] text-slate-500 pt-1">
              에스크로 서비스: (주)콘텐트립은 안전한 기업 결제를 위해 하나은행 매매보호서비스에 가입되어 있습니다.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs shrink-0 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors font-semibold text-pink-400">개인정보처리방침</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">기업회원 표준계약규정</a>
            <span>·</span>
            <a href="#" className="hover:text-white transition-colors">안전결제 가이드</a>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-900 text-center text-slate-600 text-[11px]">
          © 2026 CONTENTRIP Inc. All rights reserved. B2B AI Creative Network & Brand Marketplace.
        </div>
      </div>
    </footer>
  );
};
