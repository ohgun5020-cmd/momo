import { Link } from "react-router-dom";

export const Screen8 = (): JSX.Element => {
  return (
    <main
      className="w-full min-h-screen bg-[#0d0517] flex justify-center"
      data-model-id="8002:1164"
      role="main"
    >
      <div className="relative w-[375px] min-h-[812px] overflow-hidden bg-[#0d0517]">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-[555px] w-[1100px] h-[1100px] rounded-full bg-[#1d0c45]"
          aria-hidden="true"
        />

        <div
          className="absolute left-1/2 -translate-x-1/2 top-[152px] w-[890px] h-[890px] rounded-full bg-[#26135a]"
          aria-hidden="true"
        />

        <div
          className="absolute left-1/2 -translate-x-1/2 top-[390px] w-[760px] h-[760px] rounded-full bg-[#2e1870]"
          aria-hidden="true"
        />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[393px] h-[59px] z-[6]" role="banner">
          <img
            className="absolute w-[35.75%] top-[calc(50.00%_-_30px)] left-[64.38%] h-[59px]"
            alt="Battery and signal levels"
            src="/img/levels-8.svg"
          />

          <div className="absolute w-[35.75%] top-[calc(50.00%_-_30px)] left-0 h-[59px] flex">
            <time className="flex items-center justify-center ml-[37.01%] w-[37px] mr-[36.65%] flex-1 [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-white text-[17px] text-center tracking-[0] leading-[22px]">
              9:41
            </time>
          </div>
        </div>

        <header className="absolute top-[74px] left-6 w-[327px] z-[7]">
          <img className="w-[63px] h-[25px]" alt="모모 로고" src="/img/vector-9.svg" />

          <p className="mt-5 whitespace-pre-line [font-family:'Inter',Helvetica] font-medium text-base leading-8 text-[#7e7992]">
            모모는 김상이에요. 사당역 살구요.
            {"\n"}
            좋아하는건 피자랍니다.
          </p>
        </header>

        <img
          className="absolute left-1/2 -translate-x-1/2 bottom-[115px] w-[332px] h-[430px] object-contain z-[5]"
          alt="보라색 털 캐릭터 이미지"
          src="/img/gemini-generated-image-czadtsczadtsczad-1-2.png"
        />

        <Link
          className="absolute left-1/2 -translate-x-1/2 bottom-[51px] w-[327px] h-[72px] flex items-center justify-center rounded-[24px] border border-[#7f72ba] bg-[#4f36ff24] backdrop-blur-[5px] z-[8]"
          to="/x3"
          aria-label="다음 화면으로 이동"
        >
          <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-base tracking-[0] leading-6">
            계속해볼까?
          </span>
        </Link>
      </div>
    </main>
  );
};
