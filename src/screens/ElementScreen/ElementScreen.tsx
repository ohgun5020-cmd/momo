import { Link } from "react-router-dom";

export const ElementScreen = (): JSX.Element => {
  return (
    <main
      className="w-full min-h-screen bg-[#0d0517] flex justify-center"
      data-model-id="8002:1583"
      role="main"
    >
      <div className="relative w-[375px] min-h-[812px] overflow-hidden bg-[#0d0517]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/video/x5-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="x5 background video"
        />

        <div className="absolute top-0 left-0 w-full h-[430px] bg-[linear-gradient(180deg,rgba(13,5,23,0.85)_0%,rgba(13,5,23,0.28)_58%,rgba(13,5,23,0)_100%)]" />
        <div className="absolute bottom-0 left-0 w-full h-[260px] bg-[linear-gradient(180deg,rgba(13,5,23,0)_0%,rgba(13,5,23,0.82)_68%,rgba(13,5,23,0.96)_100%)]" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[393px] h-[59px] z-[5]" role="banner">
          <img
            className="absolute w-[35.75%] top-[calc(50.00%_-_30px)] left-[64.38%] h-[59px]"
            alt="Status bar indicators"
            src="/img/levels-8.svg"
          />

          <div className="absolute w-[35.75%] top-[calc(50.00%_-_30px)] left-0 h-[59px] flex">
            <time className="flex items-center justify-center ml-[37.01%] w-[37px] mr-[36.65%] flex-1 [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-white text-[17px] text-center tracking-[0] leading-[22px]">
              9:41
            </time>
          </div>
        </div>

        <header className="flex flex-col w-[327px] items-start gap-4 absolute top-[76px] left-1/2 -translate-x-1/2 z-[6]">
          <img className="relative w-[63px] h-[25px]" alt="MOMO logo" src="/img/vector-9.svg" />

          <p className="relative self-stretch [font-family:'Inter',Helvetica] text-[#7b7887] leading-8 font-medium text-base tracking-[0]">
            19세 이상이면, 비속어를 쓸 수 있긴해.
            <br />
            비속어가 별로니? 그럼, 안전 모드로 진행하렴
          </p>
        </header>

        <Link
          className="absolute top-[598px] left-1/2 -translate-x-1/2 w-[327px] h-[72px] flex items-center justify-center rounded-[24px] bg-[rgba(83,53,255,0.10)] backdrop-blur-[5px] border border-[#7e74b6] shadow-[inset_1px_0_0_rgba(255,255,255,0.24),inset_-1px_0_2px_rgba(0,0,0,0.18)] z-[6]"
          style={{ background: "color(display-p3 0.3098 0.2118 1 / 0.10)" }}
          to="/x4"
          aria-label="안전 모드 진행하기"
        >
          <span className="h-4 ml-0.5 w-[140px] [font-family:'Inter',Helvetica] text-white text-center leading-4 whitespace-nowrap flex items-center justify-center font-medium text-base tracking-[0]">
            안전 모드 진행하기
          </span>
        </Link>

        <Link
          className="absolute top-[690px] left-1/2 -translate-x-1/2 w-[327px] h-[72px] flex items-center justify-center bg-[#7937fa] rounded-3xl z-[6]"
          to="/x6"
          aria-label="시원하게 가보자"
        >
          <span className="h-4 ml-0.5 w-[128px] [font-family:'Inter',Helvetica] font-semibold text-white text-base text-center leading-6 whitespace-nowrap">
            시원하게 가보자!
          </span>
        </Link>
      </div>
    </main>
  );
};
