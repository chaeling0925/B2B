import React, { useState, useRef } from 'react';
import { 
  X, 
  Paperclip, 
  Send, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Trash2, 
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { ServiceItem } from '../types/marketplace';

interface InquiryQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceItem | null;
  onNavigateToDetail?: (service: ServiceItem) => void;
  onOpenCheckout?: (service: ServiceItem) => void;
}

interface AttachedFile {
  id: string;
  name: string;
  size: string;
}

interface ChatMessage {
  id: string;
  sender: 'creator' | 'client';
  text: string;
  timestamp: string;
  attachments?: AttachedFile[];
}

export const InquiryQuoteModal: React.FC<InquiryQuoteModalProps> = ({
  isOpen,
  onClose,
  service,
  onNavigateToDetail,
  onOpenCheckout
}) => {
  const [inputText, setInputText] = useState('');
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  if (!isOpen || !service) return null;

  const creatorName = service.creator.name.replace(/\s*\(.*?\)/, '');
  const responseTime = service.creator.responseTime || '평균 응답 시간: 15분 이내';
  const logoText = service.creator.logoText || service.creator.agencyName || 'CONTENTRIP';

  const defaultTemplate = `- 작업 종류·분량 (예: 15초 숏폼):
- 결과물 용도·채널 (예: 유튜브):
- 레퍼런스 링크·참고 영상:
- 희망 일정:
- 이외 요청사항:`;

  const handleApplyTemplate = () => {
    setInputText(defaultTemplate);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles: AttachedFile[] = Array.from(e.target.files).slice(0, 3 - attachedFiles.length).map((file, idx) => ({
      id: `file-${Date.now()}-${idx}`,
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)}MB`
    }));

    setAttachedFiles((prev) => [...prev, ...newFiles].slice(0, 3));
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleRemoveFile = (id: string) => {
    setAttachedFiles((prev) => prev.filter(f => f.id !== id));
  };

  const handleSendMessage = () => {
    if (!inputText.trim() && attachedFiles.length === 0) return;

    const currentText = inputText.trim() || '첨부한 프로젝트 자료를 검토 후 견적을 부탁드립니다.';
    const currentAttachments = [...attachedFiles];

    const clientMsg: ChatMessage = {
      id: `client-${Date.now()}`,
      sender: 'client',
      text: currentText,
      timestamp: '방금 전',
      attachments: currentAttachments
    };

    setMessages((prev) => [...prev, clientMsg]);
    setInputText('');
    setAttachedFiles([]);

    // Simulate instant intelligent response from the expert
    setIsTyping(true);
    setTimeout(() => {
      let reply = `안녕하세요, 담당자님! ${creatorName}입니다. 문의주신 내용 확인했습니다.\n\n요청사항 검토 결과 [${service.packages.deluxe.name} 패키지: ${service.packages.deluxe.priceFormatted}] 기준으로 1~2일 내 1차 시안 납품이 가능합니다. 국세청 전자세금계산서 및 상업적 저작재산권 100% 양도 계약서가 함께 발행됩니다.`;
      
      if (currentText.includes('숏폼') || currentText.includes('15초')) {
        reply = `네, 담당자님! 15초/숏폼 목적이시라면 릴스/쇼츠 규격(9:16) 4K 마스터링 및 스토리텔링 컷 편집을 포함하여 맞춤 견적 550,000원~1,100,000원에 제작 가능합니다.`;
      } else if (currentText.includes('급행') || currentText.includes('일정')) {
        reply = `네, 일정의 경우 긴급 패스트트랙을 적용하여 접수 후 24시간 이내 1차 키프레임 컨펌 후 즉시 최종본 마스터링이 가능합니다.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `creator-${Date.now()}`,
          sender: 'creator',
          text: reply,
          timestamp: '방금 전'
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-[#0B0F19] text-slate-100 rounded-3xl max-w-xl w-full max-h-[92vh] flex flex-col shadow-2xl relative shadow-[0_0_50px_rgba(0,0,0,0.85)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Dark Theme: Logo Avatar + Creator Name + Response Time + Close Button) */}
        <div className="p-5 pb-4 flex items-center justify-between bg-[#080B12] shrink-0">
          <div className="flex items-center gap-3">
            {/* Dark Circular Creator Avatar with Logo Text */}
            <div className="w-11 h-11 rounded-full bg-[#05070D] text-white flex items-center justify-center p-1.5 shadow-sm text-center shrink-0">
              <span className="text-[7.5px] font-black tracking-tighter leading-tight uppercase text-slate-300 line-clamp-2">
                {logoText}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white">
                  {creatorName}
                </h3>
                {service.creator.partnerBadge && (
                  <span className="text-[10px] text-sky-400 bg-sky-950/60 font-semibold px-2 py-0.5 rounded">
                    {service.creator.partnerBadge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{responseTime}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body (Dark Theme) */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#080B12]">
          {/* Welcome & Inquiry Template Guide Bubble */}
          <div className="bg-[#0F1424] rounded-2xl p-4 sm:p-5 text-[13px] text-slate-200 leading-relaxed relative shadow-md">
            <div className="font-semibold text-white mb-2">
              안녕하세요, {creatorName}입니다.<br />
              아래 내용을 남겨주시면, 고객님 상황에 맞는 견적을 알려 드릴게요.
            </div>

            <div className="text-slate-300 font-mono text-[12px] bg-[#070A10] p-3.5 rounded-xl my-2.5 whitespace-pre-line leading-relaxed shadow-inner">
              - 작업 종류·분량 (예: 15초 숏폼):<br />
              - 결과물 용도·채널 (예: 유튜브):<br />
              - 레퍼런스 링크·참고 영상:<br />
              - 희망 일정:<br />
              - 이외 요청사항:
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <span>잘 모르거나 해당되지 않는 부분은 비워두셔도 괜찮아요.<br className="hidden sm:inline" /> 편하게 문의 남겨주세요 :)</span>
              
              <button
                type="button"
                onClick={handleApplyTemplate}
                className="shrink-0 ml-2 px-3 py-1 text-[11px] font-bold text-sky-400 bg-sky-950/60 hover:bg-sky-900/60 rounded-lg transition-colors cursor-pointer"
              >
                양식 채우기
              </button>
            </div>
          </div>

          {/* Interactive Chat History if any */}
          {messages.map((m) => {
            const isMe = m.sender === 'client';
            return (
              <div 
                key={m.id}
                className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} space-y-1 animate-in fade-in duration-150`}
              >
                <div 
                  className={`max-w-[88%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                    isMe 
                      ? 'bg-gradient-to-r from-pink-500 via-indigo-600 to-cyan-500 text-white rounded-tr-none shadow-md shadow-pink-500/10' 
                      : 'bg-[#12182B] text-slate-200 rounded-tl-none font-medium'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>

                  {/* Attached Files inside Message */}
                  {m.attachments && m.attachments.length > 0 && (
                    <div className="mt-2.5 pt-2 space-y-1">
                      {m.attachments.map((file) => (
                        <div key={file.id} className="flex items-center gap-1.5 text-[11px] text-cyan-200">
                          <FileText className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{file.name}</span>
                          <span className="text-[10px] opacity-75">({file.size})</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-slate-500 px-1">{m.timestamp}</span>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-center gap-1.5 bg-[#0F1424] p-3 rounded-2xl w-24 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}
        </div>

        {/* Input & Action Area (Dark Theme) */}
        <div className="p-4 sm:p-5 pt-3 bg-[#080B12] space-y-3 shrink-0">
          {/* Attached Files Chips */}
          {attachedFiles.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {attachedFiles.map((file) => (
                <div 
                  key={file.id}
                  className="flex items-center gap-1.5 bg-[#111728] px-2.5 py-1 rounded-lg text-xs text-slate-300"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-medium truncate max-w-[150px]">{file.name}</span>
                  <span className="text-[10px] text-slate-500">({file.size})</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(file.id)}
                    className="p-0.5 text-slate-400 hover:text-rose-400 transition-colors ml-1 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Textarea Box with Character Counter */}
          <div className="focus-within:ring-1 focus-within:ring-sky-500/40 rounded-2xl p-3.5 transition-colors bg-[#0D1220] relative">
            <textarea
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value.slice(0, 1000))}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                  handleSendMessage();
                }
              }}
              placeholder="전문가에게 상담받고 싶은 내용을 적어주세요"
              className="w-full text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none resize-none leading-relaxed bg-transparent"
            />
            <div className="text-right text-[11px] text-slate-500 font-mono select-none">
              {inputText.length}/1,000
            </div>
          </div>

          {/* Bottom Toolbar: [📎 파일첨부] + helper text + [전송] button */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={attachedFiles.length >= 3}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111728] hover:bg-[#161F36] text-slate-300 hover:text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >
                <Paperclip className="w-3.5 h-3.5 text-slate-400" />
                <span>파일첨부</span>
              </button>

              <span className="text-[11px] text-slate-500 hidden sm:inline">
                각 파일은 최대 500MB까지 첨부할 수 있어요.(최대 3개)
              </span>
            </div>

            <button
              type="button"
              onClick={handleSendMessage}
              disabled={!inputText.trim() && attachedFiles.length === 0}
              className={`px-6 py-2 text-xs font-bold rounded-lg transition-all shadow-sm cursor-pointer ${
                inputText.trim() || attachedFiles.length > 0
                  ? 'bg-gradient-to-r from-pink-500 via-indigo-600 to-cyan-500 hover:opacity-90 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                  : 'bg-slate-800 text-slate-500 opacity-50 cursor-not-allowed'
              }`}
            >
              전송
            </button>
          </div>

          {/* Quick links to details or order */}
          {messages.length > 0 && (
            <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>상담 후 100% 전자세금계산서 및 안심 계약 체결 지원</span>
              </div>
              {onOpenCheckout && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCheckout(service);
                  }}
                  className="font-bold text-sky-400 hover:text-sky-300 flex items-center gap-0.5 cursor-pointer"
                >
                  <span>즉시 주문/결제</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
