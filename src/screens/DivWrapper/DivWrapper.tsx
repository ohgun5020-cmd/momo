import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round">
    <path d="M4 8h16" />
    <path d="M4 15h10" />
  </svg>
);

const ComposeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="m9 15 6.6-6.6 2 2L11 17H9z" />
  </svg>
);

const CameraIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.7l1.2-1.5h5.2L15.8 6h1.7A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z" />
    <circle cx="12" cy="12.5" r="3.2" />
  </svg>
);

const ImageIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <circle cx="9" cy="10" r="1.5" />
    <path d="m6 17 4.4-4.4a1 1 0 0 1 1.4 0L14 15l2.3-2.3a1 1 0 0 1 1.4 0L20 15" />
  </svg>
);

const FolderIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6H10l1.7 2h6.8A2.5 2.5 0 0 1 21 10.5v7A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
  </svg>
);

const MicIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="4" width="6" height="11" rx="3" />
    <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0" />
    <path d="M12 17v3" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M4 20V4l17 8z" />
  </svg>
);

const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 13a8 8 0 0 1 16 0" />
    <rect x="3" y="12" width="4" height="7" rx="2" />
    <rect x="17" y="12" width="4" height="7" rx="2" />
  </svg>
);

type FeatureCard = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
};

const featureCards: FeatureCard[] = [
  {
    id: "talk-scan",
    icon: "📩",
    title: "톡 스캔",
    subtitle: "걔 마음이 궁금할 때",
  },
  {
    id: "face-check",
    icon: "😶",
    title: "면상 체크",
    subtitle: "허세끼? 이상형? 궁금해",
  },
  {
    id: "star",
    icon: "🔮",
    title: "별자리",
    subtitle: "재미삼아 보는거야",
  },
];

type DivWrapperProps = {
  initialSelectOpen?: boolean;
};

export const DivWrapper = ({ initialSelectOpen = false }: DivWrapperProps): JSX.Element => {
  const contacts = ["라라", "모모"];
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState("모모");
  const [isSelectOpen, setIsSelectOpen] = useState(initialSelectOpen);
  const [draftMessage, setDraftMessage] = useState("");
  const [selectedQuickCardId, setSelectedQuickCardId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const raf = requestAnimationFrame(() => setKeyboardOpen(true));
    const focusTimer = setTimeout(() => inputRef.current?.focus(), 180);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(focusTimer);
    };
  }, []);

  useEffect(() => {
    const initialDraft = (location.state as { draft?: string } | null)?.draft;
    if (initialDraft && !draftMessage) {
      setDraftMessage(initialDraft);
    }
  }, [draftMessage, location.state]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const draft = draftMessage.trim();
    if (!draft) {
      return;
    }
    navigate("/x8", { state: { draft } });
  };

  const handleQuickCardClick = (card: FeatureCard) => {
    setSelectedQuickCardId(card.id);
    setDraftMessage(card.subtitle);
    setKeyboardOpen(true);
    window.setTimeout(() => {
      navigate("/x8", { state: { draft: card.subtitle } });
    }, 120);
  };

  return (
    <main className="w-full min-h-screen bg-[#120520] flex justify-center" data-model-id="8002:1872" role="main">
      <div className="relative w-[375px] min-h-[812px] overflow-hidden bg-[#120520]">
        <div className="absolute inset-0 z-[2] pointer-events-none bg-[linear-gradient(180deg,rgba(18,5,32,0)_0%,rgba(18,5,32,0.12)_100%)]" />

        <header className="absolute top-0 left-1/2 -translate-x-1/2 w-[393px] h-[59px] z-[4]">
          <img
            className="absolute w-[35.75%] top-[calc(50.00%_-_30px)] left-[64.38%] h-[59px]"
            alt="Signal and battery indicators"
            src="/img/levels-6.svg"
          />

          <div className="absolute w-[35.75%] top-[calc(50.00%_-_30px)] left-0 h-[59px] flex">
            <time className="flex items-center justify-center ml-[37.01%] w-[37px] mr-[36.65%] flex-1 [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-white text-[17px] text-center tracking-[0] leading-[22px]">
              9:41
            </time>
          </div>
        </header>

        <nav className="absolute top-[59px] left-0 w-full h-11 z-[5] text-white" aria-label="Main navigation">
          <Link className="absolute left-5 top-1 w-6 h-6 text-white" to="/x6" aria-label="Back">
            <MenuIcon />
          </Link>

          <button
            type="button"
            onClick={() => setIsSelectOpen((prev) => !prev)}
            className="absolute left-1/2 -translate-x-1/2 top-[5px] inline-flex items-center gap-1"
            aria-expanded={isSelectOpen}
            aria-haspopup="listbox"
            aria-label="Select contact"
          >
            <h1 className="[font-family:'SF_Pro-Semibold',Helvetica] font-normal text-white text-[17px] leading-[22px]">
              {selectedContact}
            </h1>
            <span className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#ffffff99] text-xs leading-4">
              &gt;
            </span>
          </button>

          <button type="button" className="absolute right-5 top-1 w-6 h-6 text-[#ffffffb3]" aria-label="Compose">
            <ComposeIcon />
          </button>
        </nav>

        {isSelectOpen && (
          <>
            <button
              type="button"
              className="absolute inset-0 z-[8]"
              aria-label="Close contact select"
              onClick={() => setIsSelectOpen(false)}
            />

            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[262px] h-[94px] rounded-[14px] border border-[#4f4869] bg-[#241733e0] shadow-[0_12px_28px_rgba(0,0,0,0.35)] z-[9]">
              {contacts.map((contact, index) => (
                <button
                  key={contact}
                  type="button"
                  className="relative w-full h-[47px] px-4 flex items-center gap-2 text-left"
                  onClick={() => {
                    if (contact === "라라") {
                      setIsSelectOpen(false);
                      navigate("/x10");
                      return;
                    }
                    setSelectedContact(contact);
                    setIsSelectOpen(false);
                  }}
                >
                  <span className="w-3 text-white">{selectedContact === contact ? "✓" : ""}</span>
                  <span className="[font-family:'Inter',Helvetica] text-white text-[17px] leading-[22px]">{contact}</span>
                  {index === 0 && <span className="absolute left-0 top-[47px] w-full h-px bg-[#ffffff14]" />}
                </button>
              ))}
            </div>
          </>
        )}

        <button
          type="button"
          className={`absolute left-0 right-0 z-[3] ${keyboardOpen ? "top-[103px] bottom-[392px]" : "top-[103px] bottom-[118px]"}`}
          onClick={() => setKeyboardOpen(false)}
          aria-label="Hide keyboard"
        />

        <img className="absolute left-1/2 -translate-x-1/2 top-[414px] w-[63px] h-[25px] z-[4]" alt="MOMO logo" src="/img/vector-8.svg" />

        <section className={`absolute left-4 z-[6] w-[359px] overflow-x-scroll overscroll-x-contain touch-pan-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-all duration-300 ${keyboardOpen ? "bottom-[390px]" : "bottom-[102px]"}`}>
          <div className="inline-flex items-start gap-3 pr-6 snap-x snap-mandatory">
            {featureCards.map((card) => (
              <button
                key={card.id}
                type="button"
                onClick={() => handleQuickCardClick(card)}
                className="w-[152px] h-[70px] px-4 py-[12px] rounded-[14px] bg-[#2d293280] backdrop-blur-[3px] text-left flex-shrink-0 overflow-hidden snap-start"
                aria-label={card.title}
              >
                <p
                  className={`w-full truncate [font-family:'Inter',Helvetica] text-base leading-[21px] tracking-[-0.4px] ${
                    selectedQuickCardId === card.id ? "font-bold text-white" : "font-semibold text-white"
                  }`}
                >
                  {card.icon} {card.title}
                </p>
                <p
                  className={`w-full truncate mt-0.5 [font-family:'Inter',Helvetica] text-base leading-[21px] tracking-[-0.4px] ${
                    selectedQuickCardId === card.id ? "font-bold text-white" : "font-normal text-[#ffffff4d]"
                  }`}
                >
                  {card.subtitle}
                </p>
              </button>
            ))}
          </div>
        </section>

        <footer className={`absolute left-0 w-full h-[90px] z-[7] transition-all duration-300 ${keyboardOpen ? "bottom-[300px]" : "bottom-0"}`}>
          <div className="px-4 pt-[6px] flex items-center gap-3 text-white">
            <button type="button" className="w-6 h-6" aria-label="Camera">
              <CameraIcon />
            </button>

            <button type="button" className="w-6 h-6" aria-label="Image">
              <ImageIcon />
            </button>

            <button type="button" className="w-6 h-6" aria-label="Folder">
              <FolderIcon />
            </button>

            <form
              className="ml-1 flex-1 h-10 rounded-[22px] border border-[#75679f] bg-[#221437f0] px-4 flex items-center"
              onSubmit={handleSubmit}
              onClick={() => setKeyboardOpen(true)}
            >
              <input
                ref={inputRef}
                type="text"
                value={draftMessage}
                onChange={(event) => setDraftMessage(event.target.value)}
                onFocus={() => setKeyboardOpen(true)}
                onClick={() => setKeyboardOpen(true)}
                placeholder="고민있오?"
                className={`w-full bg-transparent outline-none [font-family:'SF_Pro-Regular',Helvetica] text-white text-[17px] leading-[22px] placeholder:text-[#ffffff80] ${
                  selectedQuickCardId ? "font-bold" : "font-normal"
                }`}
                aria-label="Message input"
              />
              <button type="submit" className="ml-2 text-[#ffffff99]" aria-label="Send to chat">
                {draftMessage.trim() ? <SendIcon /> : <MicIcon />}
              </button>
            </form>

            <button type="button" className="w-6 h-6" aria-label="Headset">
              <HeadsetIcon />
            </button>
          </div>

          <div className="h-[34px] flex items-end justify-center">
            <div className="mb-2 w-[148px] h-[5px] bg-white rounded-full" role="presentation" />
          </div>
        </footer>

        <section
          className={`absolute left-0 w-full h-[300px] bg-[#c9ccd2] z-[8] transition-transform duration-300 ease-out ${keyboardOpen ? "translate-y-0" : "translate-y-full"}`}
          style={{ bottom: 0 }}
          aria-label="Virtual keyboard"
        >
          <img className="w-full h-full object-cover" alt="Keyboard visual" src="/img/key.jpg" />
        </section>
      </div>
    </main>
  );
};
