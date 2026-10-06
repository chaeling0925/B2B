import React, { useState } from 'react';
import {
  FileText,
  Users,
  Send,
  CheckCircle2,
  Palette,
  MessageSquare,
  ShieldCheck,
  Download,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Sliders,
  Clock,
  DollarSign,
  Layers,
  Eye,
  Check,
  AlertCircle,
  FolderDown,
  FileCheck2,
  RefreshCw,
  ExternalLink,
  ChevronRight,
  Star,
  Zap,
  Info
} from 'lucide-react';
import { MOCK_CREATORS, MOCK_SERVICES } from '../data/mockData';
import { CategoryId, Creator } from '../types/marketplace';

export type PipelineStage = 
  | 'REQUEST'
  | 'MATCH'
  | 'PROPOSAL'
  | 'SELECT'
  | 'CONCEPT'
  | 'REVIEW'
  | 'APPROVAL'
  | 'DELIVERY';

interface ProjectPipelinePageProps {
  onBackToHome: () => void;
  onNavigateToWorkspace: () => void;
  onOpenChat: (creatorName: string) => void;
}

export const ProjectPipelinePage: React.FC<ProjectPipelinePageProps> = ({
  onBackToHome,
  onNavigateToWorkspace,
  onOpenChat
}) => {
  // Current Active Stage
  const [currentStage, setCurrentStage] = useState<PipelineStage>('REQUEST');

  // Stage 1: Request State
  const [briefTitle, setBriefTitle] = useState('2026 F/W 럭셔리 브랜드 AI 룩북 화보 및 시네마틱 숏폼 CF');
  const [briefCategory, setBriefCategory] = useState<CategoryId>('ai_video');
  const [briefTools, setBriefTools] = useState<string[]>(['Runway Gen-3', 'Flux.1 Pro', 'Midjourney v7']);
  const [budgetRange, setBudgetRange] = useState('3,000,000원 ~ 6,000,000원');
  const [dueDate, setDueDate] = useState('2026.10.20');
  const [briefDetails, setBriefDetails] = useState(
    '글로벌 럭셔리 브랜드의 2026 F/W 시즌 캠페인입니다. 초현실적인 네오 오가닉 유기체 조형미와 하이엔드 패션 모델이 조화를 이루는 비주얼로, 4K 마스터 영상(15초 3편) 및 8K 화보 스틸컷 5종이 필요합니다. 상업적 저작재산권 전면 양도 필수입니다.'
  );

  // Stage 2 & 4: Selected Creator & Package
  const [selectedCreatorId, setSelectedCreatorId] = useState<string>('synth');
  const [selectedPackageTier, setSelectedPackageTier] = useState<'standard' | 'deluxe' | 'premium'>('deluxe');

  // Stage 5 & 6: Selected Concept Draft for Review
  const [selectedDraftId, setSelectedDraftId] = useState<'draft-1' | 'draft-2' | 'draft-3'>('draft-2');
  const [revisionsRemaining, setRevisionsRemaining] = useState<number>(2);
  const [feedbackInput, setFeedbackInput] = useState('');
  const [feedbackHistory, setFeedbackHistory] = useState<Array<{ id: string; time: string; text: string; status: string }>>([
    {
      id: 'fb-1',
      time: '14:20',
      text: '시안 B의 유기체 발광 네온을 콘텐트립 시그니처 시안(#00F0FF)과 핑크(#FF2E93) 톤으로 보정 요청',
      status: '반영 완료'
    }
  ]);

  // Stage 7: Quality Inspection Checks
  const [inspectionChecks, setInspectionChecks] = useState<{
    resolution: boolean;
    artifactFree: boolean;
    soundSync: boolean;
    copyrightReady: boolean;
  }>({
    resolution: true,
    artifactFree: true,
    soundSync: true,
    copyrightReady: true
  });
  const [isApproved, setIsApproved] = useState(false);

  // Stages List Definition
  const PIPELINE_STEPS: Array<{
    key: PipelineStage;
    number: number;
    title: string;
    sub: string;
    icon: React.ComponentType<{ className?: string }>;
  }> = [
    { key: 'REQUEST', number: 1, title: 'REQUEST', sub: '프로젝트 의뢰 & Brief', icon: FileText },
    { key: 'MATCH', number: 2, title: 'MATCH', sub: 'AI Creator 매칭', icon: Users },
    { key: 'PROPOSAL', number: 3, title: 'PROPOSAL', sub: '견적·일정 제안', icon: Sliders },
    { key: 'SELECT', number: 4, title: 'SELECT', sub: '크리에이터 선정', icon: CheckCircle2 },
    { key: 'CONCEPT', number: 5, title: 'CONCEPT', sub: '방향 및 시안 제안', icon: Palette },
    { key: 'REVIEW', number: 6, title: 'FEEDBACK', sub: '시안 피드백 & 수정', icon: MessageSquare },
    { key: 'APPROVAL', number: 7, title: 'APPROVAL', sub: '최종 결과물 승인', icon: ShieldCheck },
    { key: 'DELIVERY', number: 8, title: 'DELIVERY', sub: '파일 전달 & 종료', icon: Download }
  ];

  const currentStageIndex = PIPELINE_STEPS.findIndex((s) => s.key === currentStage);

  const goToNextStage = () => {
    if (currentStageIndex < PIPELINE_STEPS.length - 1) {
      setCurrentStage(PIPELINE_STEPS[currentStageIndex + 1].key);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const goToPrevStage = () => {
    if (currentStageIndex > 0) {
      setCurrentStage(PIPELINE_STEPS[currentStageIndex - 1].key);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  // Brief Presets
  const applyPreset = (presetType: 'lookbook' | 'tvc' | 'concept') => {
    if (presetType === 'lookbook') {
      setBriefTitle('2026 F/W 럭셔리 브랜드 AI 룩북 화보 및 시네마틱 숏폼 CF');
      setBriefCategory('ai_image');
      setBriefTools(['Flux.1 Pro', 'Midjourney v7', 'ComfyUI']);
      setBudgetRange('2,500,000원 ~ 4,500,000원');
      setBriefDetails(
        '글로벌 럭셔리 브랜드의 시즌 룩북 화보 10컷 및 SNS 숏폼 영상 제작입니다. 일관된 브랜드 전속 AI 버추얼 모델 페이스 유지 및 하이패션 텍스처 구현이 핵심입니다.'
      );
    } else if (presetType === 'tvc') {
      setBriefTitle('글로벌 테크 기업 30초 시네마틱 AI 브랜드 필름 & 3D 모션');
      setBriefCategory('ai_video');
      setBriefTools(['Runway Gen-3', 'Sora', 'Topaz Video AI 8K']);
      setBudgetRange('4,000,000원 ~ 8,000,000원');
      setBriefDetails(
        '차세대 AI 플랫폼 런칭을 알리는 30초 풀 3D 시네마틱 CF입니다. 스토리보드, 사운드 디자인, 4K 마스터링까지 원스톱 제작 및 저작권 전면 양도를 요청합니다.'
      );
    } else {
      setBriefTitle('AAA급 SF 판타지 게임 세계관 키비주얼 아트 디렉팅');
      setBriefCategory('ai_art');
      setBriefTools(['Midjourney v7 Niji', 'ComfyUI ControlNet', 'Blender 3D']);
      setBudgetRange('2,000,000원 ~ 4,000,000원');
      setBriefDetails(
        '게임 내 주요 거대 도시 및 사이버네틱 크리처의 콘셉트 아트 5종 세트입니다. 일러스트레이터와 3D 모델러가 작업할 수 있는 정밀 턴어라운드 시트 포함입니다.'
      );
    }
  };

  // Concept Drafts Data based on Selected Package Tier
  const conceptsData = [
    {
      id: 'draft-1',
      title: '시안 A: 미니멀 사이버네틱 & 하이엔드 테크',
      summary: '절제된 다크 무드와 직선형 레이저 라이트, 미래지향적 크리에이티브',
      image: '/src/assets/images/service_ai_cinematic_video_1790724514481.jpg',
      tools: 'Runway Gen-3 Alpha · ComfyUI DepthMap',
      palette: ['#0A0E17', '#FF2E93', '#8B5CF6'],
      notes: '테크놀로지 기업의 신뢰감과 스피드감을 강조한 프레임'
    },
    {
      id: 'draft-2',
      title: '시안 B: 네오 오가닉 유기체 & 시그니처 네온',
      summary: '3D 파라메트릭 유기체와 핑크·퍼플·시안 오로라 발광의 조화 (권장 시안)',
      image: '/src/assets/images/hero_organic_sculpture_1790729297506.jpg',
      tools: 'Flux.1 Pro · Octane 3D · Custom LoRA',
      palette: ['#FF2E93', '#8B5CF6', '#00F0FF'],
      notes: '콘텐트립 AI 메인 아이덴티티와 100% 매칭되는 유려한 곡면 연출'
    },
    {
      id: 'draft-3',
      title: '시안 C: 에테리얼 보그 하이패션 에디토리얼',
      summary: '초현실적 패브릭 텍스처와 부드러운 필름 그레인의 감성적 톤앤매너',
      image: '/src/assets/images/service_ai_fashion_lookbook_1790724526063.jpg',
      tools: 'Midjourney v7 · Magnific AI Upscale',
      palette: ['#1A1D24', '#F472B6', '#38BDF8'],
      notes: '보그 매거진 에디토리얼 화보급의 텍스처 질감 극대화'
    }
  ];

  // Number of concepts shown according to package tier:
  // STANDARD -> 1, DELUXE -> 2, PREMIUM -> 3
  const visibleConceptCount = selectedPackageTier === 'standard' ? 1 : selectedPackageTier === 'deluxe' ? 2 : 3;
  const activeConcepts = conceptsData.slice(0, visibleConceptCount);

  // Add Feedback comment
  const handleAddFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackInput.trim() || revisionsRemaining <= 0) return;

    const newFb = {
      id: `fb-${Date.now()}`,
      time: '방금 전',
      text: feedbackInput.trim(),
      status: '수정 진행 중 (크리에이터 확인)'
    };
    setFeedbackHistory([newFb, ...feedbackHistory]);
    setFeedbackInput('');
    setRevisionsRemaining((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="space-y-10 pb-24 text-slate-100">
      {/* 
        ========================================================================
        TOP BREADCRUMB & HEADER
        ========================================================================
      */}
      <div className="pb-6 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors p-1.5 -ml-1.5 rounded-xl hover:bg-slate-800/60 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>마켓플레이스 홈</span>
            </button>
            <span className="text-slate-700">/</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">
                B2B PIPELINE
              </span>
              <span className="text-xs font-semibold text-white">
                AI 프로젝트 맞춤 의뢰 & 워크플로우
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToWorkspace}
              className="text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 rounded-xl cursor-pointer shadow-xs"
            >
              <span>진행 중 프로젝트 ({feedbackHistory.length > 0 ? 1 : 0})</span>
            </button>
            <div className="px-3 py-1.5 rounded-full bg-cyan-950/60 text-cyan-300 text-[11px] font-bold flex items-center gap-1.5 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>100% 안전 에스크로 & 전담 PM 배정</span>
            </div>
          </div>
        </div>

        {/* Page Hero Headline */}
        <div className="mt-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl sm:text-5xl tracking-tight text-white uppercase">
              AI PROJECT 맞춤 의뢰 파이프라인
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
              의뢰서 작성(REQUEST)부터 AI 크리에이터 추천(MATCH), 견적 제안(PROPOSAL), 시안 검토(CONCEPT & REVIEW), 
              최종 승인(APPROVAL) 및 마스터 파일 전달(DELIVERY)까지 투명하고 표준화된 B2B 전주기 워크플로우를 제공합니다.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const nextIdx = (currentStageIndex + 1) % PIPELINE_STEPS.length;
                setCurrentStage(PIPELINE_STEPS[nextIdx].key);
              }}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-[11px] font-bold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="다음 단계 미리보기"
            >
              <RefreshCw className="w-3.5 h-3.5 text-pink-400" />
              <span>단계 전환 가이드</span>
            </button>
          </div>
        </div>
      </div>

      {/* 
        ========================================================================
        PIPELINE STEPPER ROADMAP (8 STAGES INTERACTIVE STEPPER)
        ========================================================================
      */}
      <section className="bg-[#0B0F1A] rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-32 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl pointer-events-none" />

        {/* Horizontal Scroll Stepper */}
        <div className="overflow-x-auto py-4 scrollbar-thin">
          <div className="flex items-start min-w-[860px] justify-between relative pt-2">
            {/* Connecting Track Line (Aligned to center of circle: pt-2 (8px) + p-1 (4px) + 20px = 32px) */}
            <div className="absolute left-8 right-8 top-8 h-1 bg-slate-900 z-0 rounded-full" />
            <div
              className="absolute left-8 top-8 h-1 bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] z-0 transition-all duration-500 rounded-full"
              style={{
                width: `${(currentStageIndex / (PIPELINE_STEPS.length - 1)) * 92}%`
              }}
            />

            {PIPELINE_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = step.key === currentStage;
              const isPast = idx < currentStageIndex;

              return (
                <button
                  key={step.key}
                  onClick={() => setCurrentStage(step.key)}
                  className="flex flex-col items-center group relative z-10 cursor-pointer focus:outline-none p-1.5"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 font-bold text-xs ${
                      isCurrent
                        ? 'bg-gradient-to-br from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] text-white shadow-[0_0_25px_rgba(255,46,147,0.6)] scale-110 ring-2 ring-white/40'
                        : isPast
                        ? 'bg-slate-800 text-cyan-400 hover:bg-slate-750 shadow-xs'
                        : 'bg-[#080B12] text-slate-500 group-hover:text-slate-300'
                    }`}
                  >
                    {isPast ? <Check className="w-4 h-4 stroke-[3]" /> : <Icon className="w-4 h-4" />}
                  </div>

                  <div className="mt-2.5 text-center">
                    <div
                      className={`text-[11px] font-black tracking-wider uppercase ${
                        isCurrent
                          ? 'bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent'
                          : isPast
                          ? 'text-slate-200'
                          : 'text-slate-500 group-hover:text-slate-400'
                      }`}
                    >
                      {step.number}. {step.title}
                    </div>
                    <div
                      className={`text-[10px] mt-0.5 font-medium whitespace-nowrap ${
                        isCurrent ? 'text-cyan-300' : 'text-slate-400'
                      }`}
                    >
                      {step.sub}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Current Active Step Banner Summary */}
        <div className="mt-5 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-pink-500/20 text-pink-300 font-bold text-[10px]">
              STEP {currentStageIndex + 1} OF 8
            </span>
            <span className="font-bold text-white">
              {PIPELINE_STEPS[currentStageIndex].title} — {PIPELINE_STEPS[currentStageIndex].sub}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {currentStageIndex > 0 && (
              <button
                onClick={goToPrevStage}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-xs"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>이전 단계</span>
              </button>
            )}
            {currentStageIndex < PIPELINE_STEPS.length - 1 && (
              <button
                onClick={goToNextStage}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF2E93] to-[#8B5CF6] text-white font-bold hover:opacity-95 transition-opacity flex items-center gap-1 cursor-pointer text-xs shadow-md shadow-pink-500/20"
              >
                <span>다음 단계 ({PIPELINE_STEPS[currentStageIndex + 1].title})</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        STAGE 1: REQUEST (프로젝트 의뢰 및 Brief 작성)
        ========================================================================
      */}
      {currentStage === 'REQUEST' && (
        <section className="bg-[#0B0F1A] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
          <div className="pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black text-pink-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <FileText className="w-4 h-4" />
                <span>STAGE 1: REQUEST</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                프로젝트 의뢰 및 크리에이티브 Brief 작성
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                원하시는 비주얼의 카테고리, 툴 선호도, 예산 및 요구사항을 작성하시면 즉시 최적의 AI Creator가 매칭됩니다.
              </p>
            </div>

            {/* Quick 1-click Preset Fill */}
            <div className="flex flex-wrap items-center gap-2 bg-[#070A12] p-2 rounded-2xl shadow-xs">
              <span className="text-[11px] font-bold text-slate-400 px-2 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                추천 프리셋:
              </span>
              <button
                onClick={() => applyPreset('lookbook')}
                className="text-[11px] font-semibold px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                패션 룩북 화보
              </button>
              <button
                onClick={() => applyPreset('tvc')}
                className="text-[11px] font-semibold px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                시네마틱 TVC 영상
              </button>
              <button
                onClick={() => applyPreset('concept')}
                className="text-[11px] font-semibold px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                SF 콘셉트 아트
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Form */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  프로젝트 제목 *
                </label>
                <input
                  type="text"
                  value={briefTitle}
                  onChange={(e) => setBriefTitle(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#070A12] rounded-2xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all shadow-xs"
                  placeholder="예: 2026 하이엔드 테크 브랜드 AI 시네마틱 숏폼 CF"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    제작 카테고리 *
                  </label>
                  <select
                    value={briefCategory}
                    onChange={(e) => setBriefCategory(e.target.value as CategoryId)}
                    className="w-full px-4 py-3.5 bg-[#070A12] rounded-2xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 shadow-xs"
                  >
                    <option value="ai_video">AI 영상 & 상업용 CF</option>
                    <option value="ai_image">AI 이미지 & 룩북 화보</option>
                    <option value="ai_art">AI 콘셉트 아트 & 키비주얼</option>
                    <option value="ai_branding">AI 생성형 브랜딩 & 로고</option>
                    <option value="ai_audio">AI 음악 & 사운드 로고</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    희망 납기 마감일 *
                  </label>
                  <input
                    type="text"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full px-4 py-3.5 bg-[#070A12] rounded-2xl text-xs text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 shadow-xs"
                  />
                </div>
              </div>

              {/* AI Tool Preferences */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  선호 AI 생성 툴 (복수 선택 가능)
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Runway Gen-3', 'Flux.1 Pro', 'Midjourney v7', 'Sora', 'ComfyUI LoRA', 'Topaz 8K'].map((tool) => {
                    const isSelected = briefTools.includes(tool);
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => {
                          if (isSelected) {
                            setBriefTools(briefTools.filter((t) => t !== tool));
                          } else {
                            setBriefTools([...briefTools, tool]);
                          }
                        }}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-md shadow-pink-500/20'
                            : 'bg-[#070A12] text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {isSelected && '✓ '}
                        {tool}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  예상 프로젝트 예산 범위 *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    '1,500,000원 ~ 3,000,000원',
                    '3,000,000원 ~ 6,000,000원',
                    '6,000,000원 이상 (엔터프라이즈)'
                  ].map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => setBudgetRange(range)}
                      className={`p-3.5 rounded-2xl text-xs font-bold text-center transition-all cursor-pointer shadow-xs ${
                        budgetRange === range
                          ? 'bg-slate-900 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                          : 'bg-[#070A12] text-slate-400 hover:bg-slate-900/60'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              {/* Detailed Brief Description */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  상세 제작 브리프 및 요구사항 *
                </label>
                <textarea
                  rows={4}
                  value={briefDetails}
                  onChange={(e) => setBriefDetails(e.target.value)}
                  className="w-full px-4 py-3.5 bg-[#070A12] rounded-2xl text-xs text-white leading-relaxed focus:outline-none focus:ring-1 focus:ring-cyan-400 shadow-xs"
                  placeholder="원하시는 스타일, 타겟 고객, 필수 포함 요소(로고, 색상, 키프레임), 레퍼런스 영상 링크 등을 입력해주세요."
                />
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => setCurrentStage('MATCH')}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] text-white font-bold text-sm rounded-2xl hover:opacity-95 transition-opacity shadow-[0_0_25px_rgba(255,46,147,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>의뢰서 등록 및 AI Creator 매칭 시작 (MATCH)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 1 Col: B2B Guarantees Box */}
            <div className="space-y-4">
              <div className="bg-[#070A12] rounded-2xl p-5 space-y-4 shadow-md">
                <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>콘텐트립 B2B 안심 계약 보증</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <span><strong>100% 저작재산권 전면 양도</strong>: 상업적 광고 집행, 2차 저작물 제작에 대한 독점적 권리 보장</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <span><strong>안심 에스크로 결제</strong>: 최종 시안 승인 및 마스터 파일 수령 전까지 대금 안전 보관</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <span><strong>국세청 전자세금계산서</strong>: 당일 영수/청구 계산서 발행</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <span><strong>기업 전담 AI PM 1:1 배정</strong>: 킥오프부터 파일 검수까지 무료 매니징</span>
                  </li>
                </ul>
              </div>

              {/* Sample Visual Thumbnail Preview */}
              <div className="bg-[#070A12] rounded-2xl p-4 overflow-hidden shadow-md">
                <div className="text-[11px] font-bold text-slate-400 mb-2">
                  선호 비주얼 레퍼런스 스타일
                </div>
                <div className="aspect-16/9 rounded-xl overflow-hidden relative">
                  <img
                    src="/src/assets/images/hero_organic_sculpture_1790729297506.jpg"
                    alt="유기체 레퍼런스"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[10px] font-bold text-cyan-300">
                    3D 파라메트릭 유기체 & 네온
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 
        ========================================================================
        STAGE 2: MATCH (AI 기반 Creator 추천 및 Marketplace 탐색)
        ========================================================================
      */}
      {currentStage === 'MATCH' && (
        <section className="bg-[#0B0F1A] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
          <div className="pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Users className="w-4 h-4" />
                <span>STAGE 2: MATCH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                AI 기반 크리에이터 추천 및 포트폴리오 탐색
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                작성하신 Brief('{briefTitle}')에 최적화된 상위 1% 검증된 AI 스튜디오 3곳이 매칭되었습니다.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">정렬 기준:</span>
              <span className="text-xs font-bold text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-xl shadow-xs">
                매칭 적합도 순 (AI Match Score)
              </span>
            </div>
          </div>

          {/* Matched Creators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                id: 'synth',
                creator: MOCK_CREATORS.synth,
                matchRate: '99% 일치',
                matchReason: 'Runway Gen-3 영상 기획 및 4K 상업 광고 CF 전문',
                portfolioThumb: '/src/assets/images/service_ai_cinematic_video_1790724514481.jpg',
                startingPrice: '550,000원'
              },
              {
                id: 'vogue',
                creator: MOCK_CREATORS.vogue,
                matchRate: '97% 일치',
                matchReason: 'Flux Pro 커스텀 LoRA 모델 학습 및 하이엔드 패션 화보 전문',
                portfolioThumb: '/src/assets/images/hero_organic_sculpture_1790729297506.jpg',
                startingPrice: '550,000원'
              },
              {
                id: 'aether',
                creator: MOCK_CREATORS.aether,
                matchRate: '94% 일치',
                matchReason: 'Midjourney v7 & ComfyUI 게임/시네마틱 키비주얼 전문',
                portfolioThumb: '/src/assets/images/service_ai_concept_art_1790724536460.jpg',
                startingPrice: '550,000원'
              }
            ].map((card) => {
              const isSelected = selectedCreatorId === card.id;

              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedCreatorId(card.id)}
                  className={`rounded-3xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between shadow-md ${
                    isSelected
                      ? 'bg-slate-900 shadow-[0_0_30px_rgba(255,46,147,0.3)] ring-2 ring-pink-500'
                      : 'bg-[#070A12] hover:bg-slate-900/60'
                  }`}
                >
                  <div>
                    {/* Portfolio Thumbnail Preview */}
                    <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
                      <img
                        src={card.portfolioThumb}
                        alt={card.creator.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-cyan-300 text-[10px] font-black tracking-wider shadow-xs">
                        {card.matchRate}
                      </div>
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[10px] font-bold text-slate-300">
                        완료 {card.creator.completedProjects}건 · 만족도 {card.creator.satisfactionRate}%
                      </div>
                    </div>

                    {/* Creator Info */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={card.creator.avatar}
                          alt={card.creator.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-full object-cover shadow-xs"
                        />
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            <span>{card.creator.name}</span>
                            <span className="text-[10px] font-semibold text-pink-400 bg-pink-950/60 px-2 py-0.5 rounded-md">
                              {card.creator.grade}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400">
                            {card.creator.agencyName}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-slate-300 leading-relaxed bg-[#0B0F18] p-3.5 rounded-2xl shadow-xs">
                        <strong className="text-cyan-400 text-[11px] block mb-1">
                          [추천 사유]
                        </strong>
                        {card.matchReason}
                      </div>

                      {/* Tools Used */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {card.creator.primaryTools.slice(0, 3).map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 shadow-xs"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-5 pt-0 flex items-center justify-between mt-3">
                    <div>
                      <span className="text-[10px] text-slate-400 block">예상 견적</span>
                      <span className="text-xs font-black text-white">{card.startingPrice}~</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenChat(card.creator.name);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-semibold transition-colors cursor-pointer"
                      >
                        1:1 문의
                      </button>
                      <button
                        onClick={() => {
                          setSelectedCreatorId(card.id);
                          setCurrentStage('PROPOSAL');
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-[11px] font-bold shadow-sm cursor-pointer"
                      >
                        제안서 보기
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => setCurrentStage('PROPOSAL')}
              className="px-8 py-4 bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] text-white font-bold text-sm rounded-2xl hover:opacity-95 transition-opacity shadow-lg shadow-pink-500/20 flex items-center gap-2 cursor-pointer"
            >
              <span>크리에이터 제안서 확인 단계로 이동 (PROPOSAL)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* 
        ========================================================================
        STAGE 3: PROPOSAL (크리에이터 견적·일정·작업 범위 제안)
        ========================================================================
      */}
      {currentStage === 'PROPOSAL' && (
        <section className="bg-[#0B0F1A] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
          <div className="pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black text-purple-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Sliders className="w-4 h-4" />
                <span>STAGE 3: PROPOSAL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                크리에이터 맞춤 견적·일정·작업 범위 제안서
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                선택된 스튜디오가 제출한 3가지 등급별(STANDARD / DELUXE / PREMIUM) 작업 범위와 시안 제공 조건을 비교하세요.
              </p>
            </div>

            <div className="bg-[#070A12] px-4 py-2.5 rounded-2xl shadow-xs flex items-center gap-2">
              <span className="text-[11px] text-slate-400">선택 크리에이터:</span>
              <span className="text-xs font-bold text-pink-300">
                {selectedCreatorId === 'synth' ? '신스 스튜디오 (Synth AI Cinema Lab)' : selectedCreatorId === 'vogue' ? '뉴럴 보그 (Neural Vogue AI)' : '에테르 아카이브'}
              </span>
            </div>
          </div>

          {/* 3 Packages Proposal Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* STANDARD */}
            <div
              onClick={() => setSelectedPackageTier('standard')}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all cursor-pointer shadow-md ${
                selectedPackageTier === 'standard'
                  ? 'bg-slate-900 shadow-[0_0_25px_rgba(6,182,212,0.3)] ring-2 ring-cyan-400'
                  : 'bg-[#070A12] hover:bg-slate-900/60'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                    BASIC TIER
                  </span>
                  <span className="text-[11px] font-bold text-cyan-300 px-2.5 py-1 rounded-lg bg-cyan-950/60 shadow-xs">
                    단일 컷 제작
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">STANDARD</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    AI 영상 단일 컷: 목적에 맞는 단일 컷 제작 (원안 이미지 전달 필요)
                  </p>
                </div>
                <div className="pt-2">
                  <div className="font-display text-3xl text-white">550,000원</div>
                  <span className="text-[11px] text-slate-400">부액 VAT 별도 · 세금계산서 발행</span>
                </div>

                <div className="pt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">제공 개수</span>
                    <strong className="text-white font-bold">1개</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">러닝타임 (초)</span>
                    <strong className="text-white font-bold">60초 (최대 10s)</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">작업일</span>
                    <strong className="text-cyan-400 font-bold">1일 이내 완료</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">수정 횟수</span>
                    <strong className="text-white font-bold">2회 제공</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">저작권 양도</span>
                    <strong className="text-pink-400 font-bold">100% 양도 증서 포함</strong>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  className={`w-full py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    selectedPackageTier === 'standard'
                      ? 'bg-cyan-500 text-slate-950 shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {selectedPackageTier === 'standard' ? '✓ STANDARD 선택됨' : 'STANDARD 선택하기'}
                </button>
              </div>
            </div>

            {/* DELUXE (Recommended) */}
            <div
              onClick={() => setSelectedPackageTier('deluxe')}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all relative cursor-pointer shadow-md ${
                selectedPackageTier === 'deluxe'
                  ? 'bg-slate-900 shadow-[0_0_35px_rgba(255,46,147,0.4)] ring-2 ring-pink-500'
                  : 'bg-[#070A12] hover:bg-slate-900/60'
              }`}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white text-[10px] font-black tracking-wider uppercase shadow-md">
                ★ 의뢰자 78% 선택 (추천)
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-black uppercase tracking-wider text-pink-400">
                    PROFESSIONAL TIER
                  </span>
                  <span className="text-[11px] font-bold text-pink-300 px-2.5 py-1 rounded-lg bg-pink-950/60 shadow-xs">
                    숏폼 & 종편 포함
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">DELUXE</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    AI 숏폼 영상: 스토리텔링 영상 제작 (A.I. 컷 제작 + 어도비 기반 종편 포함)
                  </p>
                </div>
                <div className="pt-2">
                  <div className="font-display text-3xl bg-gradient-to-r from-pink-400 to-cyan-300 bg-clip-text text-transparent">
                    1,100,000원
                  </div>
                  <span className="text-[11px] text-slate-400">부액 VAT 별도 · 세금계산서 발행</span>
                </div>

                <div className="pt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">제공 개수</span>
                    <strong className="text-pink-300 font-bold">1개</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">러닝타임 (초)</span>
                    <strong className="text-white font-bold">60초 (최대 60s)</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">작업일</span>
                    <strong className="text-cyan-400 font-bold">1일 이내 완료</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">수정 횟수</span>
                    <strong className="text-white font-bold">2회 제공</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">종편 편집</span>
                    <strong className="text-cyan-400 font-bold">어도비 기반 종편 포함</strong>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  className={`w-full py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    selectedPackageTier === 'deluxe'
                      ? 'bg-gradient-to-r from-pink-500 to-indigo-600 text-white shadow-md shadow-pink-500/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {selectedPackageTier === 'deluxe' ? '✓ DELUXE 선택됨' : 'DELUXE 선택하기'}
                </button>
              </div>
            </div>

            {/* PREMIUM */}
            <div
              onClick={() => setSelectedPackageTier('premium')}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all cursor-pointer shadow-md ${
                selectedPackageTier === 'premium'
                  ? 'bg-slate-900 shadow-[0_0_25px_rgba(168,85,247,0.35)] ring-2 ring-purple-400'
                  : 'bg-[#070A12] hover:bg-slate-900/60'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-purple-400">
                    ENTERPRISE TIER
                  </span>
                  <span className="text-[11px] font-bold text-purple-300 px-2.5 py-1 rounded-lg bg-purple-950/60 shadow-xs">
                    총괄 제작
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">PREMIUM</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    종합 AI 광고 제작: 기획부터 이미지보드, 최종 영상까지 총괄 제작
                  </p>
                </div>
                <div className="pt-2">
                  <div className="font-display text-3xl text-white">2,200,000원</div>
                  <span className="text-[11px] text-slate-400">부액 VAT 별도 · 세금계산서 발행</span>
                </div>

                <div className="pt-4 space-y-2 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">제공 개수</span>
                    <strong className="text-purple-300 font-bold">1개</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">러닝타임 (초)</span>
                    <strong className="text-white font-bold">60초 (1분 이내)</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">작업일</span>
                    <strong className="text-cyan-400 font-bold">1일 이내 완료</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">수정 횟수</span>
                    <strong className="text-white font-bold">2회 제공</strong>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">제작 범위</span>
                    <strong className="text-cyan-400 font-bold">기획·콘티·영상 총괄</strong>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  className={`w-full py-3 rounded-2xl text-xs font-bold transition-all cursor-pointer ${
                    selectedPackageTier === 'premium'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {selectedPackageTier === 'premium' ? '✓ PREMIUM 선택됨' : 'PREMIUM 선택하기'}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => setCurrentStage('MATCH')}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>크리에이터 다시 탐색</span>
            </button>

            <button
              onClick={() => setCurrentStage('SELECT')}
              className="px-8 py-4 bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] text-white font-bold text-sm rounded-2xl hover:opacity-95 transition-opacity shadow-lg shadow-pink-500/20 flex items-center gap-2 cursor-pointer"
            >
              <span>{selectedPackageTier.toUpperCase()} 패키지로 크리에이터 최종 선정 (SELECT)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* 
        ========================================================================
        STAGE 4: SELECT (포트폴리오 / 견적 / 전문성 비교 후 Creator 선정)
        ========================================================================
      */}
      {currentStage === 'SELECT' && (
        <section className="bg-[#0B0F1A] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
          <div className="pb-5">
            <div className="text-xs font-black text-pink-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>STAGE 4: SELECT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              크리에이터 및 작업 패키지 최종 계약 체결
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              선택하신 조건으로 100% 안심 에스크로 계약이 체결되며, 선정 즉시 전담 크리에이터가 1차 시안 제작에 착수합니다.
            </p>
          </div>

          {/* Contract Overview Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-[#070A12] rounded-3xl p-6 space-y-6 shadow-md">
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
                    AI
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      신스 스튜디오 (Synth AI Cinema Lab)
                    </div>
                    <div className="text-xs text-slate-400">
                      계약 체결 대상: Runway Gen-3 Prime AI Master
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">선정 패키지</span>
                  <span className="text-sm font-black text-pink-400 uppercase">
                    {selectedPackageTier} (시안 {visibleConceptCount}개 제공)
                  </span>
                </div>
              </div>

              {/* Terms & Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="bg-[#0B0F18] p-4 rounded-2xl shadow-xs">
                  <div className="text-slate-400 text-[11px] mb-1">총 계약 금액 (VAT 별도)</div>
                  <div className="font-display text-2xl text-white">
                    {selectedPackageTier === 'standard' ? '550,000원' : selectedPackageTier === 'deluxe' ? '1,100,000원' : '2,200,000원'}
                  </div>
                  <div className="text-[10px] text-cyan-300 mt-1">에스크로 예치 보관</div>
                </div>

                <div className="bg-[#0B0F18] p-4 rounded-2xl shadow-xs">
                  <div className="text-slate-400 text-[11px] mb-1">약정 시안 제출일</div>
                  <div className="font-display text-2xl text-white">2영업일 이내</div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    {visibleConceptCount}개 시안 동시 제출
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>콘텐트립 표준 전자계약서 제 2026-NEX-084호 자동 발행</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>기밀유지협약(NDA) 체결 및 원본 프롬프트 보호 조항 적용</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>전자세금계산서 의뢰 기업((주)넥스트커머스) 앞 즉시 발행 등록</span>
                </div>
              </div>
            </div>

            {/* Right: Kickoff Action */}
            <div className="bg-gradient-to-b from-slate-900 to-[#0B0F1A] rounded-3xl p-6 flex flex-col justify-between space-y-6 shadow-xl">
              <div>
                <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-bold">
                  STEP CONFIRMATION
                </span>
                <h3 className="text-lg font-bold text-white mt-3">
                  프로젝트 킥오프 승인
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  선정 버튼을 누르시면 계약이 체결되며, 크리에이터가 즉시 {visibleConceptCount}개의 시안(Concept) 제작 단계로 넘어갑니다.
                </p>
              </div>

              <button
                onClick={() => setCurrentStage('CONCEPT')}
                className="w-full py-4 bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] text-white font-bold text-sm rounded-2xl shadow-lg shadow-pink-500/30 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>크리에이터 최종 선정 및 시안 제작 요청 (CONCEPT)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 
        ========================================================================
        STAGE 5: CONCEPT (크리에이터 프로젝트 방향 및 시안 제안)
        ========================================================================
      */}
      {currentStage === 'CONCEPT' && (
        <section className="bg-[#0B0F1A] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
          <div className="pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black text-pink-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Palette className="w-4 h-4" />
                <span>STAGE 5: CONCEPT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                크리에이터 프로젝트 방향 및 시안 제안
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                선택하신 {selectedPackageTier.toUpperCase()} 패키지에 따라 총 {visibleConceptCount}개의 독창적인 방향성 시안이 제출되었습니다.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-cyan-300 bg-cyan-950/60 px-3.5 py-2 rounded-xl shadow-xs">
                1차 시안 납품 완료 (검토 대기 중)
              </span>
            </div>
          </div>

          {/* Concepts Grid: STANDARD=1, DELUXE=2, PREMIUM=3 */}
          <div className={`grid grid-cols-1 ${visibleConceptCount === 1 ? 'max-w-xl mx-auto' : visibleConceptCount === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-6`}>
            {activeConcepts.map((concept, idx) => (
              <div
                key={concept.id}
                onClick={() => setSelectedDraftId(concept.id as any)}
                className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-md ${
                  selectedDraftId === concept.id
                    ? 'bg-slate-900 shadow-[0_0_30px_rgba(255,46,147,0.35)] ring-2 ring-pink-500'
                    : 'bg-[#070A12] hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="relative aspect-16/10 bg-slate-950 overflow-hidden group">
                    <img
                      src={concept.image}
                      alt={concept.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[10px] font-bold text-white shadow-xs">
                      CONCEPT #{idx + 1}
                    </div>
                    {selectedDraftId === concept.id && (
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-pink-500 text-[10px] font-bold text-white shadow-sm">
                        선택됨
                      </div>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {concept.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {concept.summary}
                    </p>

                    <div className="pt-3 text-[11px] space-y-1.5">
                      <div className="text-slate-400">
                        <span className="text-slate-500">사용 파이프라인:</span> {concept.tools}
                      </div>
                      <div className="flex items-center gap-1.5 pt-1">
                        <span className="text-slate-500 text-[10px]">무드 팔레트:</span>
                        {concept.palette.map((color) => (
                          <span
                            key={color}
                            className="w-3.5 h-3.5 rounded-full shadow-xs"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => {
                      setSelectedDraftId(concept.id as any);
                      setCurrentStage('REVIEW');
                    }}
                    className="w-full py-3 rounded-2xl bg-slate-800 hover:bg-pink-600 text-white text-xs font-bold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>이 시안으로 피드백 작성하기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => setCurrentStage('SELECT')}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>이전 단계</span>
            </button>

            <button
              onClick={() => setCurrentStage('REVIEW')}
              className="px-8 py-4 bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] text-white font-bold text-sm rounded-2xl hover:opacity-95 transition-opacity shadow-lg shadow-pink-500/20 flex items-center gap-2 cursor-pointer"
            >
              <span>시안 피드백 및 수정 요청 단계로 이동 (FEEDBACK)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* 
        ========================================================================
        STAGE 6: FEEDBACK (시안 비교, 선호 방향 선택 & 피드백 요청)
        ========================================================================
      */}
      {currentStage === 'REVIEW' && (
        <section className="bg-[#0B0F1A] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
          <div className="pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <MessageSquare className="w-4 h-4" />
                <span>STAGE 6: FEEDBACK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                복수 시안 비교 및 피드백·수정 요청
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                선호하시는 시안을 최종 선택하고, 패키지에 포함된 수정 횟수 내에서 정밀한 피드백을 전달할 수 있습니다.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-pink-300 bg-pink-950/60 px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-xs">
                <RefreshCw className="w-3.5 h-3.5 text-pink-400" />
                <span>무상 수정 가능 횟수: <strong>{revisionsRemaining}회</strong> 남음</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 Cols: Interactive Draft Inspection & Pin Commentary */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-300">
                  선호 시안 선택 및 프리뷰:
                </span>
                <div className="flex items-center gap-1.5">
                  {activeConcepts.map((c, i) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedDraftId(c.id as any)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${
                        selectedDraftId === c.id
                          ? 'bg-gradient-to-r from-pink-500 to-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      시안 {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Visual Display */}
              {(() => {
                const currentDraft = conceptsData.find((d) => d.id === selectedDraftId) || conceptsData[1];
                return (
                  <div className="rounded-3xl overflow-hidden bg-slate-950 relative group shadow-2xl">
                    <img
                      src={currentDraft.image}
                      alt={currentDraft.title}
                      referrerPolicy="no-referrer"
                      className="w-full aspect-16/10 object-cover"
                    />

                    {/* Interactive Feedback Pin Stamp */}
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#0B0F1A]/90 backdrop-blur-md px-3.5 py-2 rounded-full shadow-2xl text-white text-[11px] font-bold animate-pulse">
                      <span className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]" />
                      <span>피드백 반영 위치 #1 (네온 유기체 발광 곡면)</span>
                    </div>

                    <div className="p-4 bg-[#070A12] flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">{currentDraft.title}</div>
                        <div className="text-[11px] text-slate-400">{currentDraft.notes}</div>
                      </div>
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-lg">
                        {currentDraft.tools}
                      </span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Right 5 Cols: Feedback Panel & History */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#070A12] rounded-3xl p-5 space-y-4 shadow-md">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>시안 수정 요청 작성</span>
                  <span className="text-[10px] text-slate-400">잔여: {revisionsRemaining}회</span>
                </div>

                {/* Quick Feedback Tags */}
                <div className="space-y-1.5">
                  <span className="text-[10px] text-slate-400">원클릭 요청 키워드:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      '조명 채도 조절',
                      '피사체 질감 보정',
                      '네온 시안 컬러 강조',
                      '카메라 무빙 스피드 1.2배'
                    ].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setFeedbackInput((prev) => (prev ? `${prev}, ${tag}` : tag))}
                        className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                      >
                        +{tag}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleAddFeedback} className="space-y-3">
                  <textarea
                    rows={3}
                    value={feedbackInput}
                    onChange={(e) => setFeedbackInput(e.target.value)}
                    placeholder="수정 요청 사항을 상세히 남겨주세요. (예: 시안 B의 상단 곡면을 조금 더 투명하게 처리하고 콘텐트립 시그니처 핑크 림라이트를 보강해주세요)"
                    className="w-full px-3.5 py-2.5 bg-[#0B0F18] rounded-2xl text-xs text-white leading-relaxed focus:outline-none focus:ring-1 focus:ring-cyan-400 shadow-xs"
                  />

                  <button
                    type="submit"
                    disabled={!feedbackInput.trim() || revisionsRemaining <= 0}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-indigo-600 hover:opacity-90 disabled:opacity-40 text-white text-xs font-bold transition-opacity cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>피드백 전송 (수정 1회 차감)</span>
                  </button>
                </form>

                {/* History Log */}
                <div className="pt-3 space-y-2">
                  <div className="text-[11px] font-bold text-slate-400">피드백 이력</div>
                  <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                    {feedbackHistory.map((fb) => (
                      <div
                        key={fb.id}
                        className="p-3 rounded-xl bg-[#0B0F18] text-[11px] space-y-1 shadow-xs"
                      >
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-slate-400">{fb.time}</span>
                          <span className="text-cyan-300 font-bold">{fb.status}</span>
                        </div>
                        <p className="text-slate-200">{fb.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ready to approve CTA */}
              <div className="bg-gradient-to-r from-pink-950/40 to-indigo-950/40 rounded-3xl p-5 flex items-center justify-between gap-3 shadow-md">
                <div>
                  <div className="text-xs font-bold text-white">시안 수정이 만족스러우신가요?</div>
                  <div className="text-[10px] text-slate-400">최종 결과물을 확인하고 승인 단계로 넘어갑니다.</div>
                </div>
                <button
                  onClick={() => setCurrentStage('APPROVAL')}
                  className="px-4 py-2.5 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold text-xs rounded-xl hover:opacity-90 transition-opacity cursor-pointer shrink-0 shadow-sm"
                >
                  승인 단계로 이동 →
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 
        ========================================================================
        STAGE 7: APPROVAL (최종 결과물 검수 및 승인)
        ========================================================================
      */}
      {currentStage === 'APPROVAL' && (
        <section className="bg-[#0B0F1A] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
          <div className="pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>STAGE 7: APPROVAL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                최종 결과물 품질 검수 및 승인
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                수정 피드백이 100% 반영된 최종 완성본을 검수하고, 공식 승인을 진행하면 에스크로 대금이 정산되고 다운로드 링크가 열립니다.
              </p>
            </div>

            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-xs">
              <Check className="w-4 h-4" />
              <span>크리에이터 최종 마스터 납품 완료</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Visual Master Frame */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden bg-slate-950 relative shadow-2xl">
              <img
                src="/src/assets/images/hero_organic_sculpture_1790729297506.jpg"
                alt="최종 마스터 결과물"
                referrerPolicy="no-referrer"
                className="w-full aspect-16/10 object-cover"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-cyan-300 text-xs font-bold flex items-center gap-1.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>8K 초고해상도 무손실 마스터 렌더 완료</span>
              </div>
            </div>

            {/* Checklist & Approval */}
            <div className="space-y-6 bg-[#070A12] rounded-3xl p-6 shadow-md">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                엔터프라이즈 품질 검수 체크리스트
              </div>

              <div className="space-y-3 text-xs">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inspectionChecks.resolution}
                    onChange={(e) => setInspectionChecks({ ...inspectionChecks, resolution: e.target.checked })}
                    className="mt-0.5 rounded text-pink-500 focus:ring-0"
                  />
                  <span className="text-slate-200">
                    <strong>해상도 및 텍스처 검증</strong>: 4K/8K 규격 및 노이즈 아티팩트 제로 검수 통과
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inspectionChecks.artifactFree}
                    onChange={(e) => setInspectionChecks({ ...inspectionChecks, artifactFree: e.target.checked })}
                    className="mt-0.5 rounded text-pink-500 focus:ring-0"
                  />
                  <span className="text-slate-200">
                    <strong>프롬프트 레시피 일치도</strong>: 브랜드 컬러(#FF2E93, #00F0FF) 가이드 일치
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inspectionChecks.soundSync}
                    onChange={(e) => setInspectionChecks({ ...inspectionChecks, soundSync: e.target.checked })}
                    className="mt-0.5 rounded text-pink-500 focus:ring-0"
                  />
                  <span className="text-slate-200">
                    <strong>사운드 및 모션 싱크</strong>: 상업용 독점 사운드 및 모션 비트 매칭 확인
                  </span>
                </label>

                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inspectionChecks.copyrightReady}
                    onChange={(e) => setInspectionChecks({ ...inspectionChecks, copyrightReady: e.target.checked })}
                    className="mt-0.5 rounded text-pink-500 focus:ring-0"
                  />
                  <span className="text-slate-200">
                    <strong>저작권 양도 서류 서명 대기</strong>: 100% 상업적 이용 및 독점권 이전
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setIsApproved(true);
                    setCurrentStage('DELIVERY');
                  }}
                  className="w-full py-4 bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] text-white font-bold text-sm rounded-2xl shadow-lg shadow-pink-500/30 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-5 h-5 text-white" />
                  <span>최종 결과물 승인 및 파일 수령 (DELIVERY)</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 
        ========================================================================
        STAGE 8: DELIVERY (최종 파일 전달 및 프로젝트 종료)
        ========================================================================
      */}
      {currentStage === 'DELIVERY' && (
        <section className="bg-[#0B0F1A] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fade-in">
          <div className="pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Download className="w-4 h-4" />
                <span>STAGE 8: DELIVERY & COMPLETE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                최종 파일 전달 및 프로젝트 정상 완료
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                모든 제작 산출물, 프롬프트 레시피, 저작재산권 양도 확약서 및 세금계산서 발행이 완료되었습니다.
              </p>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold flex items-center gap-1.5 shadow-xs">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>프로젝트 성공적 종료 (Closed & Paid)</span>
            </div>
          </div>

          {/* Download Assets Vault */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Asset 1: Master Video / High-Res Bundle */}
            <div className="bg-[#070A12] rounded-3xl p-5 flex items-start justify-between gap-4 hover:bg-[#0c1220] transition-colors shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center shrink-0">
                  <FolderDown className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    8K 무손실 마스터 영상 & 이미지 원본 팩 (ZIP)
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    용량: 2.84 GB · ProRes 422 HQ / 8K TIFF / 숏폼 3종
                  </div>
                  <div className="text-[10px] text-pink-400 font-semibold mt-1">
                    ✓ 유효기간 무제한 영구 보관
                  </div>
                </div>
              </div>
              <button
                onClick={() => alert('최종 마스터 번들 다운로드가 시작되었습니다.')}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
              >
                다운로드
              </button>
            </div>

            {/* Asset 2: Prompt Recipe & Model Weights */}
            <div className="bg-[#070A12] rounded-3xl p-5 flex items-start justify-between gap-4 hover:bg-[#0c1220] transition-colors shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    AI 프롬프트 엔지니어링 레시피 & LoRA (.safetensors)
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    용량: 142 MB · Runway / Flux Seed 파라미터 JSON 포함
                  </div>
                  <div className="text-[10px] text-purple-400 font-semibold mt-1">
                    ✓ 향후 유사 시리즈 제작용 재사용 가능
                  </div>
                </div>
              </div>
              <button
                onClick={() => alert('프롬프트 레시피 파일이 다운로드되었습니다.')}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
              >
                다운로드
              </button>
            </div>

            {/* Asset 3: Copyright Transfer Certificate */}
            <div className="bg-[#070A12] rounded-3xl p-5 flex items-start justify-between gap-4 hover:bg-[#0c1220] transition-colors shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    100% 상업적 저작재산권 양도 확약 증서 (PDF)
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    공식 전자서명 완료 · 국세청 & 공정위 표준 계약 양식
                  </div>
                  <div className="text-[10px] text-cyan-400 font-semibold mt-1">
                    ✓ 기업 대외 공시 및 광고 심의 제출용
                  </div>
                </div>
              </div>
              <button
                onClick={() => alert('저작재산권 양도 증서 PDF가 다운로드되었습니다.')}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
              >
                증서 받기
              </button>
            </div>

            {/* Asset 4: Tax Invoice */}
            <div className="bg-[#070A12] rounded-3xl p-5 flex items-start justify-between gap-4 hover:bg-[#0c1220] transition-colors shadow-md">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    국세청 전자세금계산서 승인번호 영수증
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    승인번호: 20260929-41000-849204 · 발행 완료
                  </div>
                  <div className="text-[10px] text-emerald-400 font-semibold mt-1">
                    ✓ 기업 매입세액 공제 전표
                  </div>
                </div>
              </div>
              <button
                onClick={() => alert('전자세금계산서 PDF가 다운로드되었습니다.')}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
              >
                계산서 출력
              </button>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                setCurrentStage('REQUEST');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5 text-pink-400" />
              <span>새로운 AI 프로젝트 추가 의뢰하기</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={onNavigateToWorkspace}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
              >
                내 프로젝트 관리실로 이동
              </button>
              <button
                onClick={onBackToHome}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-pink-500/20 hover:opacity-95 transition-opacity cursor-pointer"
              >
                마켓플레이스 홈으로 돌아가기
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
