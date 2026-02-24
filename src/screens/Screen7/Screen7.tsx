import { useState } from "react";
import { Link } from "react-router-dom";

export const Screen7 = (): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [selectedContact] = useState("모모");

  const contacts = [
    { id: 1, name: "라라", isSelected: false },
    { id: 2, name: "모모", isSelected: true },
  ];

  const messages = [
    { id: 1, text: "ㅋ?" },
    { id: 2, text: "드듸어" },
    { id: 3, text: "또왔늬~" },
  ];

  return (
    <div
      className="bg-[#120520] w-full min-w-[393px] min-h-[852px] flex flex-col relative"
      data-model-id="8002:1795"
    >
      <header className="z-[1] h-[59px] w-[393px] self-center relative">
        <img
          className="absolute w-[35.75%] top-[calc(50.00%_-_30px)] left-[64.38%] h-[59px]"
          alt="Status indicators"
          src="/img/levels-7.svg"
        />

        <div className="absolute w-[35.75%] top-[calc(50.00%_-_30px)] left-0 h-[59px] flex">
          <time className="flex items-center justify-center ml-[37.01%] w-[37px] mr-[36.65%] flex-1 [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-white text-[17px] text-center tracking-[0] leading-[22px]">
            9:41
          </time>
        </div>
      </header>

      {isDropdownOpen && (
        <div
          className="fixed top-0 left-0 w-[393px] h-[852px] z-[5] block"
          role="dialog"
          aria-label="Contact selection"
        >
          <Link
            to="/x10"
            className="absolute top-[100px] left-[66px] w-[262px] h-[94px] bg-[#3535354c] rounded-[14px] backdrop-blur-[5.0px] backdrop-brightness-[100.0%] backdrop-saturate-[101.8%] backdrop-hue-rotate-[10.0deg] [-webkit-backdrop-filter:blur(5.0px)_brightness(100.0%)_saturate(101.8%)_hue-rotate(10.0deg)] shadow-[inset_1px_0_0_rgba(255,255,255,0.32),inset_-1px_0_3px_rgba(0,0,0,0.12)]"
            aria-label="Select contact"
          >
            <ul className="list-none p-0 m-0">
              {contacts.map((contact, index) => (
                <li key={contact.id}>
                  <div
                    className={`absolute ${index === 0 ? "top-7" : "top-[59px]"} left-[33px] flex items-center gap-[9px]`}
                  >
                    <span className="[font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[22px] whitespace-nowrap">
                      {contact.name}
                    </span>
                    {contact.isSelected && (
                      <img
                        className="w-[18px] h-[18px]"
                        alt="Selected"
                        src="/img/check.svg"
                      />
                    )}
                  </div>
                  {index === 0 && (
                    <div
                      className="absolute top-[46px] left-0 w-[262px] h-px bg-[#e5e5ea1a]"
                      role="separator"
                    />
                  )}
                </li>
              ))}
            </ul>
          </Link>
        </div>
      )}

      <nav
        className="z-[2] w-[393px] h-11 relative"
        aria-label="Main navigation"
      >
        <Link
          className="absolute top-1 left-5 w-6 h-6 block"
          to="/x5"
          aria-label="Back"
        >
          <img
            className="absolute w-[75.00%] h-0 top-[30.83%] left-[7.92%]"
            alt=""
            src="/img/icon-16.svg"
          />
          <img
            className="absolute w-[54.17%] h-0 top-[60.00%] left-[7.92%]"
            alt=""
            src="/img/icon-17.svg"
          />
        </Link>

        <button
          className="inline-flex items-center gap-1 absolute top-[5px] left-[calc(50.00%_-_22px)]"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          aria-label="Select contact"
        >
          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-white text-[17px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
            {selectedContact}
          </span>
          <span
            className="relative flex items-center justify-center w-fit [font-family:'SF_Pro-Medium',Helvetica] font-medium text-[#ffffff99] text-xs text-center tracking-[-0.40px] leading-4 whitespace-nowrap"
            aria-hidden="true"
          >
            􀆊
          </span>
        </button>

        <button
          className="absolute top-1 left-[349px] w-6 h-6"
          aria-label="More options"
        >
          <img
            className="absolute w-[75.00%] h-[75.00%] top-[12.50%] left-[4.17%]"
            alt=""
            src="/img/icon-18.svg"
          />
          <img
            className="absolute w-[62.50%] h-[62.50%] top-[3.66%] left-[29.17%]"
            alt=""
            src="/img/icon-19.svg"
          />
        </button>
      </nav>

      <main className="inline-flex z-[3] items-start gap-[13px] fixed top-[143px] left-4">
        <img
          className="relative w-[25px] h-[25px]"
          alt="모모 profile"
          src="/img/group-2147237152-3.png"
        />

        <article className="inline-flex flex-col items-start gap-px relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-white text-[17px] tracking-[-0.40px] leading-[22px] whitespace-nowrap">
            모모
          </h2>
          {messages.map((message) => (
            <p
              key={message.id}
              className="relative w-[323px] [font-family:'Inter',Helvetica] font-normal text-white text-[17px] tracking-[-0.10px] leading-[27px]"
            >
              {message.text}
            </p>
          ))}
        </article>
      </main>

      <footer className="fixed top-[770px] left-0 w-[393px] h-[82px] z-[4] flex flex-col justify-between">
        <div className="w-[393px] flex">
          <button
            className="mt-1.5 w-28 h-6 relative ml-5"
            aria-label="Additional actions"
          >
            <img
              className="w-full h-full"
              alt=""
              src="/img/leading-action-2.svg"
            />
          </button>

          <div className="w-[189px] h-[38px] relative ml-4">
            <div className="absolute -top-px -left-px w-[189px] h-10 bg-[#180e22] rounded-[32px] border border-solid border-[#494949]" />
            <label htmlFor="message-input" className="sr-only">
              Message input
            </label>
            <input
              id="message-input"
              type="text"
              placeholder="고민있오?"
              className="absolute top-[calc(50.00%_-_11px)] left-3.5 w-[calc(100%_-_56px)] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-white text-[17px] tracking-[0] leading-[22px] bg-transparent border-0 outline-none placeholder:text-[#ffffff4c]"
            />
            <button
              className="absolute top-[9px] left-[157px] w-5 h-5"
              aria-label="Send message"
            >
              <img
                className="absolute w-[66.67%] h-[91.67%] top-[4.17%] left-[16.67%]"
                alt=""
                src="/img/solid-6.svg"
              />
            </button>
          </div>

          <button
            className="mt-1.5 w-6 h-6 relative ml-3"
            aria-label="Voice message"
          >
            <img
              className="absolute w-[83.33%] h-[83.33%] top-[8.33%] left-[8.33%]"
              alt=""
              src="/img/solid-7.svg"
            />
          </button>
        </div>

        <div className="h-[34px] w-[393px] self-center flex items-end justify-center">
          <div
            className="mb-2 w-[148px] h-[5px] ml-px bg-white rounded-full"
            role="presentation"
          >
            <img className="w-full h-full" alt="" src="/img/rectangle-3.svg" />
          </div>
        </div>
      </footer>
    </div>
  );
};
