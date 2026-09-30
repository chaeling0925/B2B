import React, { useState } from 'react';
import { 
  Building2, 
  FolderKanban, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Download, 
  ArrowLeft, 
  Phone, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { ClientProject } from '../types/marketplace';
import { ENTERPRISE_CLIENT_PROFILE } from '../data/mockData';

interface ClientWorkspaceProps {
  projects: ClientProject[];
  onBack: () => void;
  onSelectProjectForChat: (creatorName: string) => void;
}

export const ClientWorkspace: React.FC<ClientWorkspaceProps> = ({
  projects,
  onBack,
  onSelectProjectForChat
}) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'documents' | 'account'>('projects');
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const handleDownloadDoc = (docName: string) => {
    setDownloadSuccessToast(`${docName} 다운로드가 완료되었습니다.`);
    setTimeout(() => setDownloadSuccessToast(null), 3000);
  };

  const handleApproveMilestone = (projectTitle: string) => {
    setDownloadSuccessToast(`[마일스톤 승인 완료] '${projectTitle}' 산출물이 성공적으로 승인되었습니다. 안심 에스크로 정산이 진행됩니다.`);
    setTimeout(() => setDownloadSuccessToast(null), 3500);
  };

  return (
    <div className="space-y-6 pb-20 text-slate-100">
      {/* Toast Notification */}
      {downloadSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F1424] text-white px-4 py-3 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2 border border-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,0.3)] animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          {downloadSuccessToast}
        </div>
      )}

      {/* Top Breadcrumb & Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <button 
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            콘텐트립 AI 마켓플레이스로 돌아가기
          </button>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-white">
              기업 고객 전담 워크스페이스
            </h1>
            <span className="text-xs bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-300 border border-pink-500/30 font-bold px-2 py-0.5 rounded">
              {ENTERPRISE_CLIENT_PROFILE.enterpriseTier}
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {ENTERPRISE_CLIENT_PROFILE.companyName} · {ENTERPRISE_CLIENT_PROFILE.representative}
          </p>
        </div>

        {/* Dedicated PM Card */}
        <div className="bg-[#0F1424] text-white rounded-xl p-3 sm:px-4 sm:py-2.5 flex items-center gap-3 border border-slate-800 shadow-md">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF2E93] to-[#00F0FF] text-white font-bold flex items-center justify-center text-xs shadow-xs">
            PM
          </div>
          <div className="text-xs">
            <div className="text-slate-400 text-[10px]">콘텐트립 AI 전담 매니저</div>
            <div className="font-bold text-slate-100">{ENTERPRISE_CLIENT_PROFILE.accountManager}</div>
          </div>
          <a 
            href="tel:1544-0920" 
            className="ml-2 px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-300 rounded text-[11px] font-medium transition-colors flex items-center gap-1 border border-slate-700"
          >
            <Phone className="w-3 h-3 text-cyan-400" />
            직통 연결
          </a>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 bg-[#0F1424] rounded-xl border border-slate-800 shadow-xs">
          <div className="text-xs text-slate-400 font-medium">진행 중 프로젝트</div>
          <div className="text-xl font-bold text-white mt-1 tabular-nums">2건</div>
          <div className="text-[11px] text-cyan-400 mt-0.5">정상 진행 중</div>
        </div>

        <div className="p-4 bg-[#111728] rounded-xl border border-slate-800 shadow-xs">
          <div className="text-xs text-slate-400 font-medium">검토 대기 시안</div>
          <div className="text-xl font-bold text-white mt-1 tabular-nums">1건</div>
          <div className="text-[11px] text-slate-400 mt-0.5">피드백 필요</div>
        </div>

        <div className="p-4 bg-[#111728] rounded-xl border border-slate-800 shadow-xs">
          <div className="text-xs text-slate-400 font-medium">전자세금계산서</div>
          <div className="text-xl font-bold text-white mt-1 tabular-nums">3건</div>
          <div className="text-[11px] text-slate-400 mt-0.5">국세청 연동 완료</div>
        </div>

        <div className="p-4 bg-[#111728] rounded-xl border border-slate-800 shadow-xs">
          <div className="text-xs text-slate-400 font-medium">정부지원 바우처 잔액</div>
          <div className="text-xl font-bold text-white mt-1 tabular-nums">250만 원</div>
          <div className="text-[11px] text-slate-500 mt-0.5">2026.12.31 만료</div>
        </div>
      </div>

      {/* Workspace Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 text-sm font-semibold">
        <button
          onClick={() => setActiveTab('projects')}
          className={`pb-3 px-1 transition-colors ${
            activeTab === 'projects'
              ? 'border-b-2 border-white text-white font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          의뢰 프로젝트 관리 ({projects.length})
        </button>
        <button
          onClick={() => setActiveTab('documents')}
          className={`pb-3 px-1 transition-colors ${
            activeTab === 'documents'
              ? 'border-b-2 border-white text-white font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          세금계산서 & 계약서 보관함
        </button>
        <button
          onClick={() => setActiveTab('account')}
          className={`pb-3 px-1 transition-colors ${
            activeTab === 'account'
              ? 'border-b-2 border-white text-white font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          기업 정보 및 지출 관리
        </button>
      </div>

      {/* Tab: Projects */}
      {activeTab === 'projects' && (
        <div className="space-y-4">
          {projects.map((proj) => (
            <div 
              key={proj.id}
              className="bg-[#0F1424] rounded-xl border border-slate-800 p-5 shadow-xs space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                    <span className="font-mono font-medium text-cyan-400">{proj.projectCode}</span>
                    <span>·</span>
                    <span>계약번호 {proj.contractNumber}</span>
                    <span>·</span>
                    <span className="text-pink-400 font-bold">{proj.packageType}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {proj.title}
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5">
                    파트너사: <strong className="text-slate-200">{proj.creatorName}</strong>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-bold text-white tabular-nums">
                    {proj.totalAmount.toLocaleString()}원
                  </div>
                  <div className="text-xs text-cyan-400 font-semibold mt-0.5">
                    세금계산서 {proj.taxInvoiceStatus}
                  </div>
                </div>
              </div>

              {/* Progress & Milestone */}
              <div className="bg-slate-900/80 rounded-lg p-3 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">
                    현재 단계: <span className="text-cyan-300">{proj.currentMilestone}</span>
                  </span>
                  <span className="text-pink-400 font-bold tabular-nums">
                    {proj.progressPercent}% 완료
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-400 transition-all duration-500 rounded-full"
                    style={{ width: `${proj.progressPercent}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>착수일: {proj.startDate}</span>
                  <span>납기 목표일: {proj.dueDate}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProjectForChat(proj.creatorName)}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold transition-colors border border-slate-700"
                  >
                    파트너 실시간 소통방
                  </button>
                  <button
                    onClick={() => handleDownloadDoc(`[계약서]_${proj.projectCode}.pdf`)}
                    className="px-3 py-1.5 bg-[#0F1424] border border-slate-800 hover:bg-slate-800 text-slate-300 rounded-lg text-xs font-medium transition-colors flex items-center gap-1"
                  >
                    <Download className="w-3 h-3 text-slate-400" />
                    전자계약서
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setDownloadSuccessToast(`'${proj.title}' 피드백 코멘트 검토 요청이 등록되었습니다.`);
                      setTimeout(() => setDownloadSuccessToast(null), 3000);
                    }}
                    className="px-4 py-2 border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs font-semibold rounded-lg transition-colors"
                  >
                    피드백 코멘트 작성
                  </button>
                  <button
                    onClick={() => handleApproveMilestone(proj.title)}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-600 hover:opacity-90 text-white text-xs font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                  >
                    산출물 최종 승인
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Documents */}
      {activeTab === 'documents' && (
        <div className="bg-[#0F1424] rounded-xl border border-slate-800 overflow-hidden shadow-xs">
          <div className="p-4 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between">
            <h3 className="text-xs font-bold text-white">
              법인 전자세금계산서 및 전자계약서 목록
            </h3>
            <span className="text-xs text-cyan-400">국세청 홈택스 API 자동 연동</span>
          </div>

          <div className="divide-y divide-slate-800 text-xs">
            {[
              {
                title: '전자세금계산서 (2026년 9월분)',
                type: '세금계산서',
                idNum: '20260920-4100021-9812',
                date: '2026.09.20',
                amount: '1,800,000원',
                status: '국세청 전송 완료'
              },
              {
                title: '표준 크리에이티브 용역 전자계약서',
                type: '전자계약서',
                idNum: 'CT-2026-NEX-0021',
                date: '2026.09.20',
                amount: '1,800,000원',
                status: '쌍방 전자서명 완료'
              },
              {
                title: '기밀유지협약서 (NDA)',
                type: '보안계약서',
                idNum: 'NDA-2026-0919-01',
                date: '2026.09.19',
                amount: '-',
                status: '체결 완료'
              }
            ].map((doc, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-900/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-400 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{doc.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      관리번호: {doc.idNum} · 발행일: {doc.date}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <div className="font-semibold text-slate-200">{doc.amount}</div>
                    <div className="text-[10px] text-cyan-400">{doc.status}</div>
                  </div>
                  <button
                    onClick={() => handleDownloadDoc(`${doc.title}.pdf`)}
                    className="p-2 border border-slate-700 hover:bg-slate-800 rounded-lg text-slate-300 transition-colors"
                    title="PDF 다운로드"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Account Info */}
      {activeTab === 'account' && (
        <div className="bg-[#0F1424] rounded-xl border border-slate-800 p-6 shadow-xs space-y-6">
          <h3 className="text-sm font-bold text-white">
            기업 고객 세무 및 결제 기본 정보
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="font-bold text-slate-200">사업자 정보 (세금계산서 발행용)</div>
              <div className="space-y-1 text-slate-400">
                <div>상호명: <strong className="text-white">{ENTERPRISE_CLIENT_PROFILE.companyName}</strong></div>
                <div>사업자등록번호: <strong className="text-white">{ENTERPRISE_CLIENT_PROFILE.businessNumber}</strong></div>
                <div>대표자/담당자: <strong className="text-white">{ENTERPRISE_CLIENT_PROFILE.representative}</strong></div>
                <div>계산서 수신 이메일: <strong className="text-white">{ENTERPRISE_CLIENT_PROFILE.email}</strong></div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="font-bold text-slate-200">결제 및 바우처 정보</div>
              <div className="space-y-1 text-slate-400">
                <div>기업 회원 등급: <strong className="text-pink-400">{ENTERPRISE_CLIENT_PROFILE.enterpriseTier}</strong></div>
                <div>보유 바우처: <strong className="text-cyan-400">{ENTERPRISE_CLIENT_PROFILE.voucherBalance}</strong></div>
                <div>지출 결제 방식: <strong className="text-white">법인카드 / 전자세금계산서 월말 후불정산</strong></div>
                <div>에스크로 보호 계좌: <strong className="text-white">하나은행 (가상계좌 발급 완료)</strong></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
