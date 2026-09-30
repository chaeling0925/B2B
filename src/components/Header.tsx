import React, { useState } from 'react';
import { 
  Search, 
  Building2, 
  FileText, 
  FolderKanban, 
  Sparkles,
  ShieldCheck,
  ChevronDown,
  User,
  Bell
} from 'lucide-react';
import { CategoryId } from '../types/marketplace';
import { ENTERPRISE_CLIENT_PROFILE } from '../data/mockData';
import { ContentripLogo } from './ContentripLogo';

interface HeaderProps {
  currentCategory: CategoryId;
  onSelectCategory: (cat: CategoryId) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenRfp: () => void;
  onOpenWorkspace: () => void;
  onOpenPipeline?: () => void;
  activeView: 'explore' | 'detail' | 'workspace' | 'pipeline';
  onNavigateHome: () => void;
  bookmarkCount: number;
  activeProjectCount: number;
  bizMode: boolean;
  onToggleBizMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onOpenRfp,
  onOpenWorkspace,
  onOpenPipeline,
  activeView,
  onNavigateHome,
  bookmarkCount,
  activeProjectCount,
  bizMode,
  onToggleBizMode
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800 text-slate-100">
      {/* Top Banner when Biz Mode is active */}
      {bizMode && (
        <div className="bg-[#070A10] text-slate-400 text-[11px] py-1.5 px-4 sm:px-8 border-b border-slate-800/60 transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-bold text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
                콘텐트립 AI 브랜드 전용 모드
              </span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-400 hidden md:inline">
                (주)넥스트커머스 전담 AI PM 배정 · 100% 전자세금계산서 & NDA 체결 지원
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={onOpenPipeline || onOpenRfp}
                className="text-slate-300 hover:text-white font-medium flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
                맞춤 AI RFP 비교견적 3건 요청
              </button>
              <button 
                onClick={onOpenWorkspace}
                className="text-slate-400 hover:text-slate-200 font-medium transition-colors cursor-pointer"
              >
                지출 및 세금계산서 관리실
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Bar matching Contentrip Clean Dark Aesthetic */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-6">
        {/* Left: Contentrip Logo & 콘텐트립 AI Switcher */}
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={onNavigateHome}
            className="flex items-center tracking-tight hover:opacity-95 transition-opacity group cursor-pointer"
          >
            <ContentripLogo size="md" textSuffix="AI" />
          </button>

          <span className="text-slate-800 font-light text-base select-none">|</span>

          {/* BIZ Mode Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              브랜드 전용
            </span>
            <button
              onClick={onToggleBizMode}
              className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
                bizMode ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_12px_rgba(236,72,153,0.4)]' : 'bg-slate-700'
              }`}
              title="콘텐트립 AI 브랜드 전용 모드 전환"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out mt-[2px] shadow-sm ${
                  bizMode ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Right Menu Links */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0 text-xs sm:text-sm font-medium text-slate-300">
          {/* Dedicated AI Project Pipeline Link */}
          <button
            onClick={onOpenPipeline || onOpenRfp}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all text-xs font-semibold cursor-pointer ${
              activeView === 'pipeline'
                ? 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                : 'bg-slate-900/60 border-slate-700/80 hover:border-pink-500/50 text-slate-200 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>AI 맞춤 의뢰</span>
            <span className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">
              파이프라인
            </span>
          </button>

          <button
            onClick={onOpenPipeline || onOpenRfp}
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>엔터프라이즈</span>
            <span className="bg-pink-950/70 text-pink-300 border border-pink-700/50 text-[10px] font-bold px-1.5 py-0.2 rounded">
              기업용
            </span>
          </button>

          <button
            onClick={onOpenRfp}
            className="hidden sm:inline hover:text-white transition-colors text-slate-300"
          >
            크리에이터 등록
          </button>

          {/* Project Workspace CTA button */}
          <button
            onClick={onOpenWorkspace}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all text-xs font-semibold ${
              activeView === 'workspace'
                ? 'bg-slate-800 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                : 'bg-slate-900/80 border-slate-700/80 hover:border-slate-600 text-slate-200 hover:text-white'
            }`}
          >
            <FolderKanban className="w-3.5 h-3.5 text-cyan-400" />
            <span>내 프로젝트</span>
            {activeProjectCount > 0 && (
              <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold px-1.5 py-0.2 rounded-full text-[10px]">
                {activeProjectCount}
              </span>
            )}
          </button>

          {/* User Account / Profile popover */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-1.5 hover:text-white transition-colors p-1 rounded-lg"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                넥
              </div>
              <span className="hidden xl:inline text-xs font-bold text-slate-200 max-w-[80px] truncate">
                {ENTERPRISE_CLIENT_PROFILE.companyName}
              </span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-72 bg-[#0F1422] rounded-xl shadow-2xl border border-slate-800 p-4 z-50 text-xs text-slate-200 animate-fade-in">
                <div className="border-b border-slate-800 pb-3 mb-3">
                  <div className="text-[10px] font-bold text-pink-400 mb-0.5">
                    {ENTERPRISE_CLIENT_PROFILE.enterpriseTier}
                  </div>
                  <div className="font-bold text-white text-sm">
                    {ENTERPRISE_CLIENT_PROFILE.companyName}
                  </div>
                  <div className="text-slate-400 text-xs">
                    {ENTERPRISE_CLIENT_PROFILE.representative}
                  </div>
                </div>

                <div className="space-y-2 text-slate-300 mb-3">
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">잔여 정부지원 바우처</span>
                    <span className="font-bold text-cyan-300">{ENTERPRISE_CLIENT_PROFILE.voucherBalance}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">전담 B2B PM</span>
                    <span className="font-semibold text-slate-100">{ENTERPRISE_CLIENT_PROFILE.accountManager}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-1">
                  <button 
                    onClick={() => { setShowProfileMenu(false); onOpenWorkspace(); }}
                    className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-800 text-slate-200 flex items-center gap-2 font-medium"
                  >
                    <FolderKanban className="w-3.5 h-3.5 text-cyan-400" />
                    프로젝트 및 세금계산서 관리실
                  </button>
                  <button 
                    onClick={() => { setShowProfileMenu(false); onOpenRfp(); }}
                    className="w-full text-left px-2 py-1.5 rounded hover:bg-slate-800 text-slate-200 flex items-center gap-2 font-medium"
                  >
                    <FileText className="w-3.5 h-3.5 text-pink-400" />
                    맞춤 견적요청서(RFP) 작성
                  </button>
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={onOpenRfp}
            className="px-4 py-2 bg-gradient-to-r from-pink-500 via-indigo-600 to-cyan-500 hover:opacity-95 text-white rounded-lg text-xs font-bold transition-all shadow-[0_0_14px_rgba(236,72,153,0.35)] cursor-pointer"
          >
            RFP 의뢰
          </button>
        </div>
      </div>
    </header>
  );
};
