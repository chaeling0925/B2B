import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Building2, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { ServiceItem, ServicePackage } from '../types/marketplace';
import { ENTERPRISE_CLIENT_PROFILE } from '../data/mockData';

interface OrderCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceItem | null;
  selectedPackage: ServicePackage | null;
  onOrderSuccess: (orderData: {
    service: ServiceItem;
    selectedPackage: ServicePackage;
    paymentMethod: string;
  }) => void;
}

export const OrderCheckoutModal: React.FC<OrderCheckoutModalProps> = ({
  isOpen,
  onClose,
  service,
  selectedPackage,
  onOrderSuccess
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'escrow_vbank' | 'postpay'>('card');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [agreeNda, setAgreeNda] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen || !service || !selectedPackage) return null;

  const handleConfirmOrder = () => {
    if (!agreeTerms) {
      setErrorMessage('표준 용역 계약 약관에 동의해주세요.');
      return;
    }
    setErrorMessage(null);
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onOrderSuccess({
        service,
        selectedPackage,
        paymentMethod
      });
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div className="bg-[#0B0F19] text-slate-100 rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-800">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-[#0F1424]">
          <div>
            <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-bold mb-1">
              <ShieldCheck className="w-4 h-4 text-pink-400" />
              콘텐트립 AI 안심 에스크로 결제 & 전자계약 체결
            </div>
            <h2 className="text-lg font-bold text-white">
              용역 주문 및 계약서 작성
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 text-xs text-slate-300">
          {/* Order Item Summary */}
          <div className="p-4 bg-[#0F1424] rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-pink-400 bg-pink-950/60 border border-pink-500/30 px-2 py-0.5 rounded">
                  {selectedPackage.name} 패키지
                </span>
                <h3 className="font-bold text-white text-sm mt-1">
                  {service.title}
                </h3>
                <div className="text-slate-400 text-[11px] mt-0.5">
                  파트너: {service.creator.name} · 작업 소요 {selectedPackage.deliveryDays}영업일
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-base font-black text-cyan-400 tabular-nums">
                  {selectedPackage.priceFormatted}
                </div>
                <div className="text-[10px] text-slate-500">VAT 포함</div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>수정 횟수: {selectedPackage.revisionCount}</span>
              <span>제공 시안: {selectedPackage.conceptsCount}개</span>
              <span className="text-pink-400 font-semibold">원본 AI 파일 및 저작권 양도 포함</span>
            </div>
          </div>

          {/* Tax Invoice Info Pre-filled */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white">전자세금계산서 발행 정보</span>
              <span className="text-cyan-400 font-semibold text-[11px]">100% 국세청 당일 전송</span>
            </div>
            <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl space-y-1 text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-500">회사명:</span>
                <span className="font-semibold text-white">{ENTERPRISE_CLIENT_PROFILE.companyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">사업자등록번호:</span>
                <span className="font-semibold text-white">{ENTERPRISE_CLIENT_PROFILE.businessNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">세금계산서 수신 메일:</span>
                <span className="font-semibold text-white">{ENTERPRISE_CLIENT_PROFILE.email}</span>
              </div>
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="space-y-2">
            <span className="font-bold text-white">결제 및 정산 방식 선택</span>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  paymentMethod === 'card'
                    ? 'border-pink-500 bg-pink-950/30 text-pink-300 font-bold shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                    : 'border-slate-800 hover:border-slate-700 bg-slate-900/40 text-slate-400'
                }`}
              >
                <CreditCard className="w-4 h-4 mx-auto mb-1 text-pink-400" />
                <span>법인/개인 카드</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('escrow_vbank')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  paymentMethod === 'escrow_vbank'
                    ? 'border-cyan-500 bg-cyan-950/30 text-cyan-300 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                    : 'border-slate-800 hover:border-slate-700 bg-slate-900/40 text-slate-400'
                }`}
              >
                <Building2 className="w-4 h-4 mx-auto mb-1 text-cyan-400" />
                <span>에스크로 가상계좌</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('postpay')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  paymentMethod === 'postpay'
                    ? 'border-indigo-500 bg-indigo-950/30 text-indigo-300 font-bold shadow-[0_0_15px_rgba(99,102,241,0.3)]'
                    : 'border-slate-800 hover:border-slate-700 bg-slate-900/40 text-slate-400'
                }`}
              >
                <FileText className="w-4 h-4 mx-auto mb-1 text-indigo-400" />
                <span>기업 월말 후불정산</span>
              </button>
            </div>
          </div>

          {/* Agreements */}
          <div className="p-3 bg-[#0F1424] rounded-xl border border-slate-800 space-y-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="rounded text-pink-500 focus:ring-pink-500 w-4 h-4 bg-slate-900 border-slate-700"
              />
              <span className="font-semibold text-slate-200">
                [필수] 표준 용역 계약 조건 및 마켓플레이스 에스크로 보호 약관에 동의합니다.
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeNda}
                onChange={(e) => setAgreeNda(e.target.checked)}
                className="rounded text-pink-500 focus:ring-pink-500 w-4 h-4 bg-slate-900 border-slate-700"
              />
              <span className="text-slate-400">
                [선택] 프로젝트 산출물 및 전달 데이터에 대한 비밀유지협약(NDA)을 체결합니다.
              </span>
            </label>
          </div>

          {/* Order Action Button */}
          <div className="pt-2">
            {errorMessage && (
              <div className="mb-2 p-2.5 rounded-lg bg-pink-950/60 border border-pink-500/50 text-pink-300 text-xs font-medium">
                {errorMessage}
              </div>
            )}
            <button
              onClick={handleConfirmOrder}
              disabled={isProcessing}
              className="w-full py-4 bg-gradient-to-r from-[#FF2E93] via-[#8B5CF6] to-[#00F0FF] hover:opacity-95 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(255,46,147,0.35)] flex items-center justify-center gap-2 cursor-pointer"
            >
              {isProcessing ? (
                <span>전자계약서 생성 및 에스크로 정산 진행 중...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>{selectedPackage.priceFormatted} 안심 결제 및 전자계약 체결</span>
                </>
              )}
            </button>
            <div className="text-center text-[11px] text-slate-500 mt-2">
              산출물 최종 승인 전까지 결제 대금은 콘텐트립 AI 안전 에스크로 계좌에 보관됩니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
