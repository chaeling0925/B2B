import React, { useState } from 'react';
import { Header } from './components/Header';
import { MarketplaceHome } from './components/MarketplaceHome';
import { ServiceDetail } from './components/ServiceDetail';
import { ClientWorkspace } from './components/ClientWorkspace';
import { ProjectPipelinePage } from './components/ProjectPipelinePage';
import { RfpModal } from './components/RfpModal';
import { ChatDrawer } from './components/ChatDrawer';
import { OrderCheckoutModal } from './components/OrderCheckoutModal';
import { Footer } from './components/Footer';
import { MOCK_SERVICES, MOCK_CLIENT_PROJECTS, ENTERPRISE_CLIENT_PROFILE } from './data/mockData';
import { ServiceItem, CategoryId, ClientProject, ServicePackage } from './types/marketplace';
import { MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'explore' | 'detail' | 'workspace' | 'pipeline'>('explore');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(MOCK_SERVICES[0]);
  const [currentCategory, setCurrentCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState<string[]>(['serv-synth-video', 'serv-vogue-fashion']);
  const [projects, setProjects] = useState<ClientProject[]>(MOCK_CLIENT_PROJECTS);

  const [bizMode, setBizMode] = useState(true);

  // Modals & Drawers
  const [isRfpOpen, setIsRfpOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatService, setChatService] = useState<ServiceItem | null>(MOCK_SERVICES[0]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutService, setCheckoutService] = useState<ServiceItem | null>(null);
  const [checkoutPackage, setCheckoutPackage] = useState<ServicePackage | null>(null);

  // Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleOpenPipeline = () => {
    setActiveView('pipeline');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setActiveView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter(b => b !== id));
      showToast('관심 파트너에서 제외되었습니다.');
    } else {
      setBookmarks([...bookmarks, id]);
      showToast('관심 파트너(찜)에 저장되었습니다.');
    }
  };

  const handleOpenChat = (service?: ServiceItem) => {
    setChatService(service || selectedService || MOCK_SERVICES[0]);
    setIsChatOpen(true);
  };

  const handleOpenCheckout = (service: ServiceItem, selectedPackage: ServicePackage) => {
    setCheckoutService(service);
    setCheckoutPackage(selectedPackage);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (orderData: {
    service: ServiceItem;
    selectedPackage: ServicePackage;
    paymentMethod: string;
  }) => {
    const newProject: ClientProject = {
      id: `proj-${Date.now()}`,
      projectCode: `TRIP-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      title: `${orderData.service.title.split('|')[1]?.trim() || orderData.service.title} (${orderData.selectedPackage.name})`,
      serviceId: orderData.service.id,
      creatorName: orderData.service.creator.name,
      packageType: orderData.selectedPackage.name as any,
      totalAmount: orderData.selectedPackage.price,
      status: '진행중',
      progressPercent: 15,
      startDate: '2026.09.29',
      dueDate: '2026.10.15',
      currentMilestone: '1차 브리프 접수 및 전담 디자이너 킥오프 준비 중',
      taxInvoiceStatus: '발행완료',
      contractNumber: `CT-2026-NEX-${Math.floor(100 + Math.random() * 900)}`
    };

    setProjects([newProject, ...projects]);
    setActiveView('workspace');
    showToast(`계약 체결 및 주문이 완료되었습니다. 전자세금계산서가 발행되었습니다.`);
  };

  const handleRfpSuccess = (title: string) => {
    showToast(`'${title}' RFP 견적요청서가 등록되었습니다. 전담 PM이 2시간 내 회신합니다.`);
  };

  // Filter services by search
  const visibleServices = MOCK_SERVICES.filter(s => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return s.title.toLowerCase().includes(q) ||
           s.subtitle.toLowerCase().includes(q) ||
           s.creator.name.toLowerCase().includes(q) ||
           s.categoryLabel.toLowerCase().includes(q);
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#070A10] text-slate-100 selection:bg-pink-500/30 selection:text-pink-200">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F1424] text-white px-5 py-3.5 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2.5 border border-pink-500/50 shadow-[0_0_20px_rgba(236,72,153,0.3)] animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <Header
        currentCategory={currentCategory}
        onSelectCategory={(cat) => {
          setCurrentCategory(cat);
          if (activeView !== 'explore') setActiveView('explore');
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenRfp={handleOpenPipeline}
        onOpenPipeline={handleOpenPipeline}
        onOpenWorkspace={() => setActiveView('workspace')}
        activeView={activeView}
        onNavigateHome={() => {
          setActiveView('explore');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        bookmarkCount={bookmarks.length}
        activeProjectCount={projects.length}
        bizMode={bizMode}
        onToggleBizMode={() => setBizMode(!bizMode)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-8">
        {activeView === 'explore' && (
          <MarketplaceHome
            services={visibleServices}
            currentCategory={currentCategory}
            onSelectCategory={setCurrentCategory}
            onSelectService={handleSelectService}
            onOpenRfp={handleOpenPipeline}
            onOpenPipeline={handleOpenPipeline}
            bookmarks={bookmarks}
            onToggleBookmark={handleToggleBookmark}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        )}

        {activeView === 'pipeline' && (
          <ProjectPipelinePage
            onBackToHome={() => {
              setActiveView('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToWorkspace={() => {
              setActiveView('workspace');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenChat={(creatorName) => {
              const matched = MOCK_SERVICES.find(s => s.creator.name.includes(creatorName)) || MOCK_SERVICES[0];
              handleOpenChat(matched);
            }}
          />
        )}

        {activeView === 'detail' && selectedService && (
          <ServiceDetail
            service={selectedService}
            onBack={() => setActiveView('explore')}
            onOpenChat={(service) => handleOpenChat(service)}
            onOpenCheckout={handleOpenCheckout}
            isBookmarked={bookmarks.includes(selectedService.id)}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeView === 'workspace' && (
          <ClientWorkspace
            projects={projects}
            onBack={() => setActiveView('explore')}
            onSelectProjectForChat={(creator) => {
              const matched = MOCK_SERVICES.find(s => s.creator.name.includes(creator)) || MOCK_SERVICES[0];
              handleOpenChat(matched);
            }}
          />
        )}
      </main>

      {/* Floating 1:1 Inquire Assistant Badge with Neon Glow */}
      <div className="fixed bottom-6 left-6 z-30 hidden sm:block">
        <button
          onClick={() => handleOpenChat(selectedService || MOCK_SERVICES[0])}
          className="flex items-center gap-3 bg-[#0F1424]/90 backdrop-blur-md p-2.5 pr-4 rounded-full border border-slate-800 hover:border-pink-500/50 shadow-2xl transition-all duration-200 hover:-translate-y-0.5 group text-left shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 via-indigo-600 to-cyan-500 text-white font-bold flex items-center justify-center text-xs shadow-md ring-2 ring-pink-500/30">
            AI
          </div>
          <div>
            <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
              AI 크리에이터 실시간 매칭
            </div>
            <div className="text-[11px] text-slate-400">
              Runway·Flux 맞춤 제작 문의 (10분 내 답변)
            </div>
          </div>
        </button>
      </div>

      {/* Modals & Drawers */}
      <RfpModal
        isOpen={isRfpOpen}
        onClose={() => setIsRfpOpen(false)}
        onSubmitSuccess={handleRfpSuccess}
      />

      <ChatDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        service={chatService}
        onOpenCheckoutFromChat={() => {
          if (chatService) {
            handleOpenCheckout(chatService, chatService.packages.deluxe);
          }
        }}
      />

      <OrderCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        service={checkoutService}
        selectedPackage={checkoutPackage}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
