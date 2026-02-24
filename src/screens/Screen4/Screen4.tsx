import { Link } from "react-router-dom";

export const Screen4 = (): JSX.Element => {
  return (
    <main
      className="w-full min-h-screen bg-[#0d0517] flex justify-center"
      data-model-id="8002:1337"
      role="main"
    >
      <div className="relative w-[375px] min-h-[812px] overflow-hidden bg-[#0d0517]">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-[555px] w-[1100px] h-[1100px] rounded-full bg-[#1d0c45]"
          aria-hidden="true"
        />

        <div
          className="absolute left-1/2 -translate-x-1/2 top-[226px] w-[890px] h-[890px] rounded-full bg-[#26135a]"
          aria-hidden="true"
        />

        <div
          className="absolute left-1/2 -translate-x-1/2 top-[376px] w-[760px] h-[760px] rounded-full bg-[#2e1870]"
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
          className="absolute left-1/2 -translate-x-1/2 top-[206px] w-[292px] h-[438px] object-contain z-[5]"
          alt="보라색 털 캐릭터 이미지"
          src="/img/character-x3.png"
        />

        <section className="absolute bottom-0 left-0 z-[8] h-[201px] w-[375px] overflow-hidden rounded-t-[24px] bg-[rgba(83,53,255,0.10)] [background:color(display-p3_0.3098_0.2118_1_/_0.10)]">
          <div className="pt-[15px] flex justify-center">
            <img className="h-[5px] w-[148px]" alt="Home indicator" src="/img/rectangle-3.svg" />
          </div>

          <div className="mt-[28px] flex flex-col items-center gap-[11px]">
            <Link
              className="flex h-[47.71px] w-[327.29px] shrink-0 items-center justify-center gap-[5.725px] rounded-[13.359px] px-[69.656px] py-[11.45px] bg-[rgba(120,120,130,0.20)] [background:color(display-p3_0.4706_0.4706_0.502_/_0.20)]"
              to="/x4"
              aria-label="Continue with Apple"
            >
              <div className="relative w-[13px] h-[13px] overflow-hidden">
                <div className="relative w-[11px] h-[13px] left-px">
                  <img
                    className="absolute w-[24.82%] h-[23.10%] top-0 left-[49.75%]"
                    alt=""
                    src="/img/vector-2.svg"
                  />
                  <img
                    className="absolute w-full h-[75.88%] top-[24.12%] left-0"
                    alt=""
                    src="/img/vector-3.svg"
                  />
                </div>
              </div>
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base leading-6 tracking-[-0.4px]">
                Continue with Apple
              </span>
            </Link>

            <Link
              className="flex h-[47.71px] w-[327.29px] shrink-0 items-center justify-center gap-[5.725px] rounded-[13.359px] px-[69.656px] py-[11.45px] bg-[rgba(120,120,130,0.20)] [background:color(display-p3_0.4706_0.4706_0.502_/_0.20)]"
              to="/x4"
              aria-label="Continue with Google"
            >
              <div className="relative w-[15px] h-[15px]">
                <img
                  className="absolute w-[47.84%] h-[46.84%] top-[40.75%] left-[50.97%]"
                  alt=""
                  src="/img/vector-4.svg"
                />
                <img
                  className="absolute w-[77.51%] h-[39.97%] top-[59.69%] left-[6.46%]"
                  alt=""
                  src="/img/vector-5.svg"
                />
                <img
                  className="absolute w-[21.48%] h-[44.98%] top-[27.22%] left-0"
                  alt=""
                  src="/img/vector-6.svg"
                />
                <img
                  className="absolute w-[77.84%] h-[39.97%] top-0 left-[6.46%]"
                  alt=""
                  src="/img/vector-7.svg"
                />
              </div>
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base leading-6 tracking-[-0.4px]">
                Continue with Google
              </span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
