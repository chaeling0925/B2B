import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Paperclip, 
  Clock, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { ServiceItem } from '../types/marketplace';
import { ENTERPRISE_CLIENT_PROFILE } from '../data/mockData';

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceItem | null;
  onOpenCheckoutFromChat: () => void;
}

interface Message {
  id: string;
  sender: 'client' | 'creator';
  text: string;
  timestamp: string;
}

export const ChatDrawer: React.FC<ChatDrawerProps> = ({
  isOpen,
  onClose,
  service,
  onOpenCheckoutFromChat
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'creator',
      text: `안녕하세요, (주)넥스트커머스 담당자님! 콘텐트립 파트너 ${service?.creator.name || '디렉터'}입니다. 원하시는 디자인 방향, 일정, 세금계산서 및 예산에 대해 편하게 문의주시면 10분 내로 친절히 답변 드리겠습니다.`,
      timestamp: '오후 2:30'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen || !service) return null;

  const quickQuestions = [
    'Runway/Flux 작업 시 프롬프트 레시피와 시드값도 제공되나요?',
    '브랜드 고유 얼굴 유지를 위한 LoRA 커스텀 파인튜닝이 가능한가요?',
    '법인 전자세금계산서 발행 및 상업적 저작재산권 100% 양도되나요?',
    '착수 전 기업 비밀유지협약서(NDA) 사전 체결이 가능한가요?'
  ];

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const newMsg: Message = {
      id: `client-${Date.now()}`,
      sender: 'client',
      text,
      timestamp: '방금 전'
    };

    setMessages((prev) => [...prev, newMsg]);
    if (!textToSend) setInputValue('');

    // Simulate smart creator reply
    setIsTyping(true);
    setTimeout(() => {
      let replyText = '네, 문의주셔서 감사합니다! 말씀해주신 요구사항 검토 후 콘텐트립 맞춤 제안서와 견적을 바로 준비해 드리겠습니다.';
      if (text.includes('세금계산서') || text.includes('후불')) {
        replyText = '네! 당사는 국세청 연동 100% 전자세금계산서 발행 및 지출결의서용 증빙 서류를 결제 즉시 발급해 드리고 있습니다. 법인 카드 및 후불정산도 지원 가능합니다.';
      } else if (text.includes('NDA') || text.includes('비밀유지')) {
        replyText = '물론입니다. 미공개 신규 브랜드나 기업 보안을 위해 전자서명 표준 NDA를 사전 체결한 후 작업을 착수하고 있습니다. 안심하고 자료를 공유해주셔도 좋습니다.';
      } else if (text.includes('저작권') || text.includes('AI')) {
        replyText = '최종 확정된 로고와 브랜드 디자인은 원본 AI 벡터 파일 일체와 함께 저작권 양도 확약서가 제공되며, 상표권 출원 및 상업적 이용에 아무런 제약이 없습니다.';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `creator-${Date.now()}`,
          sender: 'creator',
          text: replyText,
          timestamp: '방금 전'
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div className="bg-[#0B0F19] w-full max-w-md h-full flex flex-col shadow-2xl border-l border-slate-800 animate-slide-left text-slate-100">
        {/* Drawer Header */}
        <div className="p-4 bg-[#05070D] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-indigo-600 to-cyan-500 text-white font-bold flex items-center justify-center text-xs shadow-md">
                {service.creator.name.slice(0, 2)}
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-cyan-400 ring-2 ring-slate-900" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-sm text-white">
                <span>{service.creator.name}</span>
                <span className="bg-pink-500/20 text-pink-300 border border-pink-500/40 text-[10px] px-1 rounded font-black italic">
                  prime
                </span>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-cyan-400" />
                <span>10분 이내 빠른 응답 가능</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Service Quick Bar */}
        <div className="p-3 bg-[#0F1424] border-b border-slate-800 flex items-center justify-between text-xs">
          <div className="truncate pr-2 text-slate-300">
            <span className="text-slate-500">문의 서비스:</span>{' '}
            <strong className="text-white">{service.title}</strong>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenCheckoutFromChat();
            }}
            className="shrink-0 px-2.5 py-1 bg-gradient-to-r from-pink-500 to-indigo-600 hover:opacity-90 text-white text-[11px] font-bold rounded transition-colors"
          >
            계약서 작성
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#070A10]">
          {messages.map((m) => {
            const isMe = m.sender === 'client';
            return (
              <div
                key={m.id}
                className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                    isMe
                      ? 'bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-tr-none shadow-md shadow-pink-500/10'
                      : 'bg-[#111728] border border-slate-800 text-slate-200 rounded-tl-none shadow-xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-slate-500 mt-1 px-1">
                  {m.timestamp}
                </span>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-[#111728] p-2.5 rounded-xl border border-slate-800 max-w-[120px]">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          )}
        </div>

        {/* Quick Enterprise Questions */}
        <div className="p-2.5 bg-[#0B0F19] border-t border-slate-800 overflow-x-auto no-scrollbar flex items-center gap-1.5">
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(q)}
              className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-[11px] font-medium rounded-full whitespace-nowrap transition-colors border border-slate-800 shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#0B0F19] border-t border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSendMessage('📎 [첨부자료] 기업_브랜드_디자인_브리프_v1.pdf (첨부 완료)')}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="브리프 파일 첨부"
            >
              <Paperclip className="w-4 h-4" />
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="궁금한 일정, 예산, 디자인 요구사항을 남겨주세요"
              className="flex-1 text-xs p-2.5 bg-[#070A10] border border-slate-800 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-white placeholder-slate-500"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2.5 bg-gradient-to-r from-pink-500 via-indigo-600 to-cyan-500 hover:opacity-90 text-white rounded-xl transition-all shadow-md shadow-pink-500/20"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="text-[10px] text-slate-500 text-center mt-2 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3 text-cyan-400" />
            콘텐트립 AI 안심 채팅방: 주고받은 대화는 생성형 용역 계약의 공식 참고 자료로 보존됩니다.
          </div>
        </div>
      </div>
    </div>
  );
};
