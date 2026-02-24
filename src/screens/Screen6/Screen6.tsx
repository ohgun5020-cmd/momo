import { FormEvent, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useChatConversation } from "../../chat/useChatConversation";

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

const SendIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
    <path d="M4 20V4l17 8z" />
  </svg>
);

type ChatRouteState = {
  draft?: string;
} | null;

export const Screen6 = (): JSX.Element => {
  const contacts = ["라라", "모모"];
  const [selectedContact, setSelectedContact] = useState("모모");
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [keyboardOpen, setKeyboardOpen] = useState(true);
  const { messages, isReplying, sendMessage, clearConversation } = useChatConversation("모모");
  const location = useLocation();
  const navigate = useNavigate();
  const isDraftConsumed = useRef(false);

  useEffect(() => {
    const state = location.state as ChatRouteState;
    if (isDraftConsumed.current || !state?.draft) {
      return;
    }

    sendMessage(state.draft);
    setInputValue("");
    isDraftConsumed.current = true;
    navigate(location.pathname, { replace: true, state: null });
  }, [location.pathname, location.state, navigate, sendMessage]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const sent = sendMessage(inputValue);
    if (sent) {
      setInputValue("");
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#120520] flex justify-center" data-model-id="8002:1646" role="main">
      <div className="relative w-[375px] min-h-[812px] overflow-hidden bg-[#120520]">
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
          <Link className="absolute left-5 top-1 w-6 h-6 text-white" to="/x5" aria-label="Back">
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
            <span className="[font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#ffffff99] text-xs leading-4">&gt;</span>
          </button>

          <button
            type="button"
            className="absolute right-5 top-1 w-6 h-6 text-[#ffffffb3]"
            aria-label="Reset conversation"
            onClick={clearConversation}
          >
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

        <section
          className={`absolute top-[143px] left-4 right-4 z-[4] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${keyboardOpen ? "bottom-[390px]" : "bottom-[96px]"}`}
          onClick={() => setKeyboardOpen(false)}
        >
          <div className="inline-flex items-start gap-3 w-full">
            <img className="w-[25px] h-[25px] mt-0.5" alt="MOMO avatar" src="/img/group-2147237152-3.png" />
            <div className="flex-1">
              <h2 className="[font-family:'Inter',Helvetica] font-semibold text-white text-[17px] leading-[22px]">
                모모
              </h2>

              <div className="mt-1 space-y-2">
                {messages.map((message) =>
                  message.role === "assistant" ? (
                    <p
                      key={message.id}
                      className="[font-family:'Inter',Helvetica] font-normal text-white text-[17px] leading-[27px] tracking-[-0.1px]"
                    >
                      {message.text}
                    </p>
                  ) : (
                    <div key={message.id} className="flex justify-end">
                      <p className="max-w-[230px] rounded-[18px] bg-[#3f2a75] px-3 py-2 [font-family:'Inter',Helvetica] font-normal text-white text-[16px] leading-[22px]">
                        {message.text}
                      </p>
                    </div>
                  ),
                )}

                {isReplying && (
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffff80] text-[16px] leading-[24px]">
                    모모가 답장하는 중...
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <form
          className={`absolute left-0 right-0 px-[18px] py-2 z-[10] transition-all duration-300 bg-[linear-gradient(180deg,rgba(18,5,32,0)_0%,rgba(18,5,32,0.58)_36%,rgba(18,5,32,0.82)_100%)] backdrop-blur-[2px] ${keyboardOpen ? "bottom-[327px]" : "bottom-[16px]"}`}
          onSubmit={handleSubmit}
          onClick={() => setKeyboardOpen(true)}
        >
          <div className="relative h-[38px]">
            <button type="button" className="absolute left-0 top-0 w-8 h-8 rounded-2xl bg-[#322c39] text-white text-3xl leading-none" aria-label="Add">
              +
            </button>

            <div className="absolute left-12 right-[42px] h-[38px] rounded-[32px] border border-[#494949] bg-[#180e22] px-3.5 flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onFocus={() => setKeyboardOpen(true)}
                onClick={() => setKeyboardOpen(true)}
                className="w-full bg-transparent outline-none [font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[17px] leading-[22px]"
                placeholder="고민있오?"
                aria-label="Message input"
              />
            </div>

            <button
              type="submit"
              className={`absolute right-0 top-[2px] w-[30px] h-[30px] rounded-[15px] text-white flex items-center justify-center ${inputValue.trim() ? "bg-[#7937fa]" : "bg-[#564570]"}`}
              aria-label="Send"
            >
              <SendIcon />
            </button>
          </div>
        </form>

        <img
          className={`absolute left-0 bottom-0 w-full h-[327px] object-cover transition-transform duration-300 ${keyboardOpen ? "translate-y-0" : "translate-y-full"}`}
          alt="Keyboard visual"
          src="/img/key.jpg"
        />
      </div>
    </main>
  );
};
