import React, { useState } from 'react';
import { 
  Check, 
  Search, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  FolderCheck, 
  Calendar, 
  Download, 
  FileCheck, 
  Sparkles, 
  Play, 
  X, 
  FileText,
  Clock,
  ArrowRight,
  ExternalLink,
  Lock,
  Cpu,
  Video
} from 'lucide-react';

interface HowItWorksProcessProps {
  onOpenInquiryDemo?: () => void;
  onNavigateToWorkspace?: () => void;
}

export const HowItWorksProcess: React.FC<HowItWorksProcessProps> = ({
  onOpenInquiryDemo,
  onNavigateToWorkspace
}) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [showInspectionModal, setShowInspectionModal] = useState<boolean>(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState<boolean>(false);

  const steps = [
    {
      step: 1,
      title: 'AI 전문가 탐색',
      desc: '내 프로젝트에 꼭 맞는 AI 디렉터를 탐색해요',
      detail: 'Runway Gen-3, Flux Pro 등 엔진별 포트폴리오와 실제 기업 프로젝트 레퍼런스를 비교하고 적임 파트너를 선택합니다.'
    },
    {
      step: 2,
      title: '무료 견적 & 브리프 상담',
      desc: '1:1 브리프로 예상 견적과 일정을 사전 확인해요',
      detail: '희망 분량과 톤앤매너를 남기면 전담 디렉터가 15분 내 맞춤 제안서와 시드·스토리보드 방향을 회신합니다.'
    },
    {
      step: 3,
      title: '안심 계약 & 에스크로 결제',
      desc: '작업 완료 전까지 결제 대금을 안전하게 보호해요',
      detail: '100% 에스크로 예치, 사전 NDA 비밀유지협약 체결, 국세청 연동 법인 전자세금계산서가 발행됩니다.'
    },
    {
      step: 4,
      title: '4K 산출물 검수 & 구매 확정',
      desc: '결과물과 저작권 증서를 확인하고 최종 확정해요',
      detail: '무압축 4K 마스터본과 100% 저작재산권 양도 확약서를 검토한 후 만족 시 결제를 확정합니다.'
    }
  ];

  return (
    <section className="bg-[#080B12] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden text-slate-100">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="mb-10 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/50 text-purple-300 text-xs font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>콘텐트립 B2B 엔터프라이즈 안심 프로세스</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          의뢰 후, 이렇게 진행돼요
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
          검증된 AI 스튜디오 탐색부터 맞춤 견적, 안전 에스크로 계약, 최종 4K 마스터본 검수까지 기업 고객을 위한 4단계 파이프라인을 확인해보세요.
        </p>
      </div>

      {/* Grid: Left Stepper vs Right Interactive Preview Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative z-10">
        
        {/* Left: 4-Step Interactive Timeline */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="relative pl-1 space-y-2">
            {steps.map((item, index) => {
              const isSelected = activeStep === item.step;
              const isLast = index === steps.length - 1;

              return (
                <div 
                  key={item.step}
                  onClick={() => setActiveStep(item.step)}
                  className="relative pb-6 last:pb-0 cursor-pointer group"
                >
                  {/* Vertical Connection Line */}
                  {!isLast && (
                    <div 
                      className={`absolute left-4 top-8 -bottom-1 w-0.5 transition-colors ${
                        item.step < activeStep 
                          ? 'bg-purple-500' 
                          : 'bg-slate-800'
                      }`}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    {/* Step Icon Badge */}
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all font-bold text-xs shadow-md z-10 ${
                        isSelected 
                          ? 'bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] scale-110'
                          : item.step < activeStep
                          ? 'bg-[#6D28D9] text-white'
                          : 'bg-[#151D30] text-slate-400'
                      }`}
                    >
                      {item.step < activeStep ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <span>{item.step}</span>
                      )}
                    </div>

                    {/* Step Text Info */}
                    <div 
                      className={`flex-1 transition-all rounded-2xl p-3 -mt-1 ${
                        isSelected 
                          ? 'bg-[#111728] shadow-lg shadow-purple-950/20' 
                          : 'hover:bg-slate-900/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className={`text-sm sm:text-base font-bold transition-colors ${
                          isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                        }`}>
                          {item.title}
                        </h3>
                        {isSelected && (
                          <span className="text-[10px] font-bold text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded-full">
                            단계 확인 중
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                      {isSelected && (
                        <p className="text-[11px] text-cyan-300 mt-2 pt-2 leading-relaxed">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Security Guarantee */}
          <div className="p-3.5 bg-[#0F1424] rounded-2xl text-xs text-slate-400 flex items-center justify-between shadow-md">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% 저작재산권 양도 확약서 & 전자세금계산서 전건 발행</span>
            </span>
            {onNavigateToWorkspace && (
              <button 
                onClick={onNavigateToWorkspace}
                className="text-cyan-400 font-bold hover:underline shrink-0 text-[11px] cursor-pointer"
              >
                워크스페이스 이동 →
              </button>
            )}
          </div>
        </div>

        {/* Right: Dynamic Interactive Screen based on activeStep */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-[#0B0F19] rounded-3xl p-5 sm:p-7 shadow-2xl flex-1 flex flex-col justify-between space-y-5">
            
            {/* ================= STEP 1: AI 크리에이터 탐색 화면 ================= */}
            {activeStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3">
                  <div>
                    <span className="font-bold text-sm sm:text-base text-white">1단계: 콘텐트립 AI 크리에이터 큐레이션</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">상위 1% 검증된 AI 스튜디오 및 4K 상업 포트폴리오 비교</p>
                  </div>
                  <span className="text-[10px] text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full font-bold">
                    STEP 01
                  </span>
                </div>

                {/* Filter tags preview */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
                  {['전체 파트너', '4K 시네마틱 영상', 'AI 패션 룩북', '콘셉트 아트', '다이내믹 브랜딩'].map((tag, idx) => (
                    <span 
                      key={tag}
                      className={`px-3 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap ${
                        idx === 0 
                          ? 'bg-purple-950/60 text-purple-300' 
                          : 'bg-[#111728] text-slate-400'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Studio Card Previews */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-[#111728] rounded-2xl p-3.5 space-y-2.5 shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-[7.5px] font-black text-cyan-300 text-center leading-tight">
                        SYNTH
                        <br />
                        CINEMA
                      </div>
                      <div>
                        <div className="font-bold text-xs text-white">신스 스튜디오</div>
                        <div className="text-[10px] text-purple-300 font-medium">콘텐트립 PRIME 파트너</div>
                      </div>
                    </div>
                    <div className="aspect-16/9 rounded-xl overflow-hidden bg-slate-950 relative">
                      <img 
                        src="/src/assets/images/service_ai_cinematic_video_1790724514481.jpg" 
                        alt="Cinematic Video"
                        className="w-full h-full object-cover" 
                      />
                      <span className="absolute bottom-1.5 left-1.5 bg-black/80 px-2 py-0.5 rounded text-[9px] font-mono text-cyan-300">
                        Runway Gen-3 · 4K CF
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[11px] text-slate-400">만족도 99.7% (840건)</span>
                      <strong className="text-white">550,000원~</strong>
                    </div>
                  </div>

                  <div className="bg-[#111728] rounded-2xl p-3.5 space-y-2.5 shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-[7.5px] font-black text-pink-300 text-center leading-tight">
                        NEURAL
                        <br />
                        VOGUE
                      </div>
                      <div>
                        <div className="font-bold text-xs text-white">뉴럴 보그</div>
                        <div className="text-[10px] text-pink-300 font-medium">콘텐트립 PRIME 파트너</div>
                      </div>
                    </div>
                    <div className="aspect-16/9 rounded-xl overflow-hidden bg-slate-950 relative">
                      <img 
                        src="/src/assets/images/service_ai_fashion_lookbook_1790724526063.jpg" 
                        alt="Fashion Lookbook"
                        className="w-full h-full object-cover" 
                      />
                      <span className="absolute bottom-1.5 left-1.5 bg-black/80 px-2 py-0.5 rounded text-[9px] font-mono text-pink-300">
                        Flux Pro · 브랜드 LoRA
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-[11px] text-slate-400">만족도 99.4% (1,260건)</span>
                      <strong className="text-white">350,000원~</strong>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#0E1322] rounded-xl text-xs text-slate-400 flex items-center justify-between shadow-xs">
                  <span>엔진별·예산별 조건으로 원하는 포트폴리오를 빠르게 탐색하세요.</span>
                  <button 
                    onClick={() => setActiveStep(2)}
                    className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>2단계 견적 받기 보기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 2: 무료 견적 & 브리프 상담 화면 ================= */}
            {activeStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3">
                  <div>
                    <span className="font-bold text-sm sm:text-base text-white">2단계: 1:1 맞춤 견적 & 사전 브리프 상담</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">평균 15분 이내 전담 디렉터 1:1 견적 회신 및 시드 검토</p>
                  </div>
                  <span className="text-[10px] text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full font-bold">
                    STEP 02
                  </span>
                </div>

                {/* Simulated Chat Dialogue */}
                <div className="bg-[#0F1424] rounded-2xl p-4 space-y-3 text-xs shadow-md">
                  {/* Creator intro */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-[7px] font-bold text-cyan-300 shrink-0">
                      SYNTH
                    </div>
                    <div className="bg-[#141B2D] p-3 rounded-2xl rounded-tl-none text-slate-200 leading-relaxed max-w-[85%]">
                      안녕하세요! <strong>신스 스튜디오</strong> 총괄 디렉터입니다. 프로젝트 목적(15초 숏폼 / 30초 브랜드 CF)과 희망 레퍼런스를 남겨주시면 10분 내 세부 견적과 시드 가이드를 전달해 드립니다.
                    </div>
                  </div>

                  {/* Client inquiry */}
                  <div className="flex items-end justify-end gap-2.5">
                    <div className="bg-gradient-to-r from-pink-500 to-indigo-600 text-white p-3 rounded-2xl rounded-tr-none leading-relaxed max-w-[80%]">
                      신제품 런칭용 30초 4K 시네마틱 광고 영상 제작 의뢰 희망합니다. 다음 주 화요일까지 1차 키프레임 도출 가능한가요?
                    </div>
                  </div>

                  {/* Creator reply with quote */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-[7px] font-bold text-cyan-300 shrink-0">
                      SYNTH
                    </div>
                    <div className="bg-[#141B2D] p-3 rounded-2xl rounded-tl-none text-slate-200 leading-relaxed max-w-[85%] space-y-1.5">
                      <div className="text-cyan-300 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>맞춤 견적 및 패스트트랙 일정 회신 완료</span>
                      </div>
                      <p>
                        네, 가능합니다! [DELUXE 패키지: 1,100,000원] 적용 시 48시간 내 키프레임 3종 확정 후 최종 4K ProRes 마스터본이 납품됩니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#0E1322] rounded-xl text-xs shadow-xs">
                  {onOpenInquiryDemo ? (
                    <button
                      onClick={onOpenInquiryDemo}
                      className="px-3.5 py-1.5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold rounded-lg text-xs hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      실제 무료 견적 팝업 열기
                    </button>
                  ) : (
                    <span className="text-slate-400">맞춤 견적서 확인 후 계약을 결정할 수 있습니다.</span>
                  )}
                  <button 
                    onClick={() => setActiveStep(3)}
                    className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>3단계 안전 결제 보기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 3: 안전 에스크로 계약 화면 ================= */}
            {activeStep === 3 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3">
                  <div>
                    <span className="font-bold text-sm sm:text-base text-white">3단계: 콘텐트립 B2B 안심 에스크로 결제 & 계약</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">산출물 최종 승인 전까지 결제 대금 100% 안전 에스크로 보관</p>
                  </div>
                  <span className="text-[10px] text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full font-bold">
                    STEP 03
                  </span>
                </div>

                {/* Escrow Guarantee Contract Card */}
                <div className="bg-[#0F1424] rounded-2xl p-5 space-y-4 shadow-lg shadow-purple-950/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-white">콘텐트립 B2B 안심 에스크로 보증</div>
                        <div className="text-[10px] text-slate-400">계약 번호: CT-2026-NEX-482</div>
                      </div>
                    </div>
                    <span className="text-emerald-400 text-xs font-bold bg-emerald-950/50 px-2.5 py-0.5 rounded-full">
                      에스크로 보호 적용
                    </span>
                  </div>

                  {/* 3 Key Protections */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                    <div className="p-3 bg-[#141B2D] rounded-xl space-y-1 shadow-xs">
                      <div className="font-bold text-white flex items-center gap-1 text-[11px]">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>저작재산권 100% 양도</span>
                      </div>
                      <p className="text-[10px] text-slate-400">상표권 출원 및 상업적 독점 이용 보증 확약서 교부</p>
                    </div>

                    <div className="p-3 bg-[#141B2D] rounded-xl space-y-1 shadow-xs">
                      <div className="font-bold text-white flex items-center gap-1 text-[11px]">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>국세청 전자세금계산서</span>
                      </div>
                      <p className="text-[10px] text-slate-400">법인 카드 및 계좌이체 즉시 지출증빙 전자계산서 발행</p>
                    </div>

                    <div className="p-3 bg-[#141B2D] rounded-xl space-y-1 shadow-xs">
                      <div className="font-bold text-white flex items-center gap-1 text-[11px]">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                        <span>표준 NDA 비밀유지</span>
                      </div>
                      <p className="text-[10px] text-slate-400">미공개 신제품 디자인 및 기업 보안 자료 사전 보호</p>
                    </div>
                  </div>

                  <div className="p-3 bg-purple-950/30 rounded-xl text-slate-300 text-xs flex items-center justify-between">
                    <span>최종 마스터본 확인 및 고객 승인 전까지 대금이 파트너에게 지급되지 않습니다.</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#0E1322] rounded-xl text-xs shadow-xs">
                  <span className="text-slate-400">법인 후불 정산 및 분할 결제도 지원됩니다.</span>
                  <button 
                    onClick={() => setActiveStep(4)}
                    className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>4단계 산출물 검수 보기</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 4: 4K 산출물 검수 & 최종 확정 ================= */}
            {activeStep === 4 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between pb-3">
                  <div>
                    <span className="font-bold text-sm sm:text-base text-white">4단계: 기업 워크스페이스 - 최종 작업물 검수 & 확정</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">납품된 4K 마스터본과 저작권 증서를 확인한 후 구매를 확정합니다.</p>
                  </div>
                  <span className="text-[10px] text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full font-bold">
                    STEP 04
                  </span>
                </div>

                {/* Delivered Asset Project Card */}
                <div className="bg-[#101628] rounded-2xl p-4 sm:p-5 space-y-4 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs pb-3">
                    <div className="flex items-center gap-2">
                      <span className={`px-2.5 py-0.5 rounded font-bold text-xs ${
                        isOrderConfirmed 
                          ? 'bg-sky-500/20 text-sky-300' 
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {isOrderConfirmed ? '구매 확정 완료' : '작업물 도착 (검수 대기)'}
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        자동 구매 확정 예정: <strong className="text-slate-200">7일 후 자동 정산</strong>
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono">
                      프로젝트 코드: TRIP-2026-NEX-982
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-900 shrink-0">
                        <img 
                          src="/src/assets/images/service_ai_cinematic_video_1790724514481.jpg" 
                          alt="AI Video Thumbnail"
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-[7.5px] font-black text-cyan-300 text-center uppercase tracking-tighter leading-tight">
                            4K CINEMA
                            <br />
                            MASTER
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm text-white">
                          [Runway Gen-3] 글로벌 브랜드 시네마틱 4K 광고 영상 마스터본
                        </h4>
                        <div className="text-base font-extrabold text-white mt-0.5 tabular-nums">
                          1,100,000원
                        </div>
                        <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                          <span>신스 스튜디오 (SYNTH AI Cinema)</span>
                          <span className="text-slate-600">·</span>
                          <span className="text-emerald-400 font-semibold">산출물 3종 업로드 완료</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right sm:shrink-0 w-full sm:w-auto">
                      <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/40 px-2 py-0.5 rounded">
                        4K ProRes 422 HQ 포함
                      </span>
                    </div>
                  </div>

                  {/* Bottom Notice & CTA */}
                  <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    <p className="text-slate-400 leading-relaxed text-[11px] sm:max-w-md">
                      작업물을 확인하고 구매 확정 또는 무상 수정 요청을 진행해 주세요.
                    </p>

                    <button
                      type="button"
                      onClick={() => setShowInspectionModal(true)}
                      className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                        isOrderConfirmed
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-white hover:bg-slate-100 text-slate-950 shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                      }`}
                    >
                      <FolderCheck className="w-3.5 h-3.5 text-slate-900" />
                      <span>{isOrderConfirmed ? '작업물 다시보기' : '작업물 확인'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Delivery Inspection Modal */}
      {showInspectionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0B0F19] text-slate-100 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 flex items-center justify-between bg-[#080B12]">
              <div>
                <div className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
                  CONTENTRIP ASSET VERIFICATION
                </div>
                <h3 className="font-bold text-lg text-white mt-0.5">
                  최종 납품 작업물 검수 및 구매 확정
                </h3>
              </div>
              <button 
                onClick={() => setShowInspectionModal(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-300">
              {/* Media Preview Box */}
              <div className="relative aspect-16/9 rounded-2xl overflow-hidden bg-black group">
                <img 
                  src="/src/assets/images/service_ai_cinematic_video_1790724514481.jpg" 
                  alt="Delivered Video Preview"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black/80 px-2.5 py-1 rounded text-[11px] font-mono text-cyan-300">
                  4K UHD · 60fps · ProRes 422 HQ (00:45)
                </div>
              </div>

              {/* Deliverable File Package */}
              <div className="space-y-2">
                <div className="font-bold text-white text-xs">최종 승인 산출물 패키지</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="p-3 bg-[#111728] rounded-xl flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-cyan-400" />
                      <div>
                        <div className="font-medium text-white text-xs">4K_Cinema_Master.mp4</div>
                        <div className="text-[10px] text-slate-500">1.8GB · 4K 무압축 마스터본</div>
                      </div>
                    </div>
                    <button className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-3 bg-[#111728] rounded-xl flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-purple-400" />
                      <div>
                        <div className="font-medium text-white text-xs">저작재산권_양도확약서.pdf</div>
                        <div className="text-[10px] text-slate-500">전자서명 공증 완료</div>
                      </div>
                    </div>
                    <button className="p-1.5 hover:bg-slate-800 text-slate-400 hover:text-white rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Confirmation Notice */}
              <div className="p-3.5 bg-sky-950/30 rounded-xl text-sky-200 text-xs space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-sky-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  구매 확정 시 에스크로 보관 대금이 크리에이터에게 정산됩니다.
                </div>
                <div className="text-[11px] text-slate-400">
                  전자세금계산서 및 사업자 지출결의서용 영수증은 구매 확정 즉시 국세청으로 전송됩니다.
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-5 bg-[#080B12] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowInspectionModal(false);
                  alert('무상 수정 요청 피드백이 전담 디렉터에게 전달되었습니다.');
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                수정 요청하기
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsOrderConfirmed(true);
                  setShowInspectionModal(false);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] cursor-pointer flex items-center gap-1.5"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>구매 확정 (에스크로 정산 완료)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
