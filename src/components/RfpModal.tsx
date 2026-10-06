import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  UploadCloud, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Calendar, 
  DollarSign, 
  FileText 
} from 'lucide-react';
import { ENTERPRISE_CLIENT_PROFILE } from '../data/mockData';

interface RfpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (title: string) => void;
}

export const RfpModal: React.FC<RfpModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [category, setCategory] = useState('브랜드 CI/BI 리브랜딩');
  const [budget, setBudget] = useState('300만 ~ 700만 원');
  const [duration, setDuration] = useState('2~3주 이내');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ndaRequired, setNdaRequired] = useState(true);
  const [taxInvoiceRequired, setTaxInvoiceRequired] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [titleError, setTitleError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setTitleError('프로젝트 제목을 입력해주세요.');
      return;
    }
    setTitleError(null);
    setIsSubmitted(true);
    setTimeout(() => {
      onSubmitSuccess(title);
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0B0F19] text-slate-100 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/80">
        {/* Header */}
        <div className="p-6 flex items-start justify-between bg-[#0F1424] shadow-xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-950/60 text-pink-300 text-[11px] font-bold mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              콘텐트립 AI 맞춤 매칭 시스템
            </div>
            <h2 className="text-xl font-bold text-white">
              기업 맞춤 프로젝트 견적 요청서 (RFP)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              요구사항을 등록하시면 검증된 상위 파트너 3곳의 견적서와 포트폴리오를 무료로 받아보실 수 있습니다.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-cyan-950/60 text-cyan-400 flex items-center justify-center mx-auto animate-bounce shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">
              견적 요청서가 성공적으로 접수되었습니다!
            </h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              콘텐트립 <strong>{ENTERPRISE_CLIENT_PROFILE.accountManager}</strong>가 요구사항을 검토한 후, 
              2시간 이내에 3곳의 최적 파트너 비교 견적서와 포트폴리오를 이메일로 전송해 드립니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 text-xs text-slate-300">
            {/* Enterprise Client Info */}
            <div className="p-3.5 bg-slate-900/80 rounded-2xl flex items-center justify-between shadow-xs">
              <div>
                <span className="font-bold text-white">{ENTERPRISE_CLIENT_PROFILE.companyName}</span>
                <span className="text-slate-400 ml-2">({ENTERPRISE_CLIENT_PROFILE.representative})</span>
              </div>
              <span className="text-cyan-400 font-semibold text-[11px]">
                {ENTERPRISE_CLIENT_PROFILE.enterpriseTier} 자동 적용
              </span>
            </div>

            {/* Category selection */}
            <div>
              <label className="block font-bold text-white mb-2">
                1. AI 제작 분야 <span className="text-pink-400">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  'AI 영상 & CF 광고',
                  'AI 이미지 & 룩북',
                  'AI 콘셉트 아트 & 비주얼',
                  'AI 생성형 브랜딩',
                  'AI 오디오 & 사운드',
                  '버추얼 인플루언서'
                ].map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`p-2.5 rounded-xl text-center font-medium transition-all cursor-pointer ${
                      category === cat
                        ? 'bg-pink-950/60 text-pink-300 font-bold shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                        : 'bg-slate-900/60 hover:bg-slate-850 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Title & Budget & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-white mb-2">
                  예상 예산 범위 <span className="text-pink-400">*</span>
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#0F1424] text-white focus:ring-1 focus:ring-pink-500 focus:outline-none"
                >
                  <option value="100만 ~ 300만 원">100만 ~ 300만 원 (스타트업 표준)</option>
                  <option value="300만 ~ 700만 원">300만 ~ 700만 원 (브랜드 고도화)</option>
                  <option value="700만 ~ 1,500만 원">700만 ~ 1,500만 원 (엔터프라이즈 풀 패키지)</option>
                  <option value="1,500만 원 이상">1,500만 원 이상 (대규모 종합 프로젝트)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-white mb-2">
                  희망 완료 일정 <span className="text-pink-400">*</span>
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#0F1424] text-white focus:ring-1 focus:ring-pink-500 focus:outline-none"
                >
                  <option value="급행 1주 이내">급행 1주 이내 (긴급 착수)</option>
                  <option value="2~3주 이내">2~3주 이내 (일반 일정)</option>
                  <option value="1개월 이상">1개월 이상 (충분한 퀄리티 지향)</option>
                  <option value="일정 협의 가능">일정 협의 가능</option>
                </select>
              </div>
            </div>

            {/* Title input */}
            <div>
              <label className="block font-bold text-white mb-2">
                프로젝트 명칭 <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (titleError) setTitleError(null);
                }}
                placeholder="예: 2026 하반기 신규 프리미엄 코스메틱 브랜드 CI/BI 리뉴얼"
                className="w-full p-3 rounded-xl bg-[#0F1424] text-white placeholder-slate-500 focus:ring-1 focus:ring-pink-500 focus:outline-none"
                required
              />
              {titleError && (
                <p className="mt-1 text-xs text-pink-400 font-medium">{titleError}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block font-bold text-white mb-2">
                프로젝트 상세 브리프 및 요구사항
              </label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="타깃 고객, 선호하는 디자인 무드(미니멀, 모던 등), 필수 포함 산출물(원본 AI, 패키지 지기구조 등)을 자유롭게 작성해주세요."
                className="w-full p-3 rounded-xl bg-[#0F1424] text-white placeholder-slate-500 focus:ring-1 focus:ring-pink-500 focus:outline-none leading-relaxed"
              />
            </div>

            {/* Reference Upload Box Simulation */}
            <div className="p-4 rounded-2xl text-center bg-slate-900/60 hover:bg-slate-850 cursor-pointer transition-colors shadow-xs">
              <UploadCloud className="w-6 h-6 text-slate-400 mx-auto mb-1" />
              <div className="font-semibold text-slate-300">기존 브로슈어 또는 레퍼런스 파일 첨부</div>
              <div className="text-[11px] text-slate-500">PDF, ZIP, 이미지 최대 50MB 지원</div>
            </div>

            {/* B2B Toggles */}
            <div className="space-y-2 pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={ndaRequired}
                  onChange={(e) => setNdaRequired(e.target.checked)}
                  className="rounded text-pink-500 focus:ring-pink-500 w-4 h-4 bg-slate-900 border-none"
                />
                <span className="font-medium text-slate-200">
                  착수 전 법인 비밀유지협약서(NDA) 체결 필수
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={taxInvoiceRequired}
                  onChange={(e) => setTaxInvoiceRequired(e.target.checked)}
                  className="rounded text-pink-500 focus:ring-pink-500 w-4 h-4 bg-slate-900 border-none"
                />
                <span className="font-medium text-slate-200">
                  전자세금계산서 100% 필수 발행 (국세청 전송)
                </span>
              </label>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-500 via-indigo-600 to-cyan-500 hover:opacity-95 text-white font-bold rounded-2xl text-sm transition-all shadow-[0_0_20px_rgba(236,72,153,0.35)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                맞춤 견적요청서 제출하기 (비교견적 3건 무료)
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
