import { Link } from "react-router-dom";

export const Element = (): JSX.Element => {
  return (
    <div
      className="bg-[#0d0517] overflow-hidden w-full min-w-[375px] min-h-[812px] h-screen relative"
      data-model-id="8002:1526"
    >
      <header className="z-[3] h-[59px] w-[393px] absolute top-0 left-1/2 -translate-x-1/2">
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
      </header>

      <Link
        to="/x2"
        aria-label="Navigate to next screen"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[4]"
      >
        <img
          className="w-[100px] block"
          alt="QR code container"
          src="/img/container.svg"
        />
      </Link>

      <img
        className="z-[2] w-[375px] h-[315px] aspect-[0.67] object-cover absolute left-1/2 bottom-0 -translate-x-1/2"
        alt="Gemini generated image showing a MOMO branded cap"
        src="/img/gemini-generated-image-czadtsczadtsczad-1.png"
      />

      <footer className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[375px] h-[34px] z-[5] flex items-end justify-center">
        <div
          className="mb-2 w-[148px] h-[5px] ml-px bg-white rounded-full"
          role="presentation"
          aria-label="Home indicator"
        >
          <img className="w-full h-full" alt="" src="/img/rectangle-3.svg" />
        </div>
      </footer>
    </div>
  );
};
