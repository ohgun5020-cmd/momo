import { useState } from "react";
import { Link } from "react-router-dom";

export const Screen9 = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const updateField = (field: "name" | "email" | "age" | "password", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main
      className="w-full min-h-screen bg-[#f2f2f4] flex justify-center"
      data-model-id="8002:1544"
      role="main"
    >
      <div className="relative w-[375px] min-h-[812px] overflow-hidden bg-[#f2f2f4]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[393px] h-[59px]" role="banner">
          <img
            className="absolute w-[35.75%] top-[calc(50.00%_-_30px)] left-[64.38%] h-[59px]"
            alt="Battery and signal levels"
            src="/img/levels-9.svg"
          />

          <div className="absolute w-[35.75%] top-[calc(50.00%_-_30px)] left-0 h-[59px] flex">
            <time className="flex items-center justify-center ml-[37.01%] w-[37px] mr-[36.65%] flex-1 [font-family:'SF_Pro-Semibold',Helvetica] font-normal text-black text-[17px] text-center tracking-[0] leading-[22px]">
              9:41
            </time>
          </div>
        </div>

        <header className="absolute top-[58px] left-6 right-6 h-6 flex items-center justify-between">
          <Link to="/x3" aria-label="뒤로 가기" className="w-6 h-6 flex items-center justify-center">
            <img className="w-6 h-6" alt="뒤로 가기" src="/img/left-actionable.svg" />
          </Link>

          <Link
            to="/x5"
            className="[font-family:'Inter',Helvetica] font-light text-[#6d86ff] text-base leading-6"
            aria-label="나중에 하기"
          >
            나중에 하기
          </Link>
        </header>

        <section className="absolute top-[116px] left-6 w-[327px]">
          <img className="w-[63px] h-[25px]" alt="모모 로고" src="/img/vector-10.svg" />
          <p className="mt-4 whitespace-pre-line [font-family:'Inter',Helvetica] font-medium text-[#6e747b] text-base leading-8">
            나랑 함께 하려면 이름 정도 알아야 하지 않을까?
            {"\n"}
            모... 이 정도는 해줄 수 있지 않나 싶어.
          </p>
        </section>

        <form className="absolute top-[248px] left-6 w-[327px] flex flex-col gap-3">
          <div>
            <label htmlFor="name" className="block [font-family:'Inter',Helvetica] font-semibold text-neutralblack text-base leading-7">
              자기, 뭐라고 불러줄까?
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="이지아"
              className="mt-1 w-full h-12 rounded-[10px] border border-[#dedfe2] bg-[#f2f2f4] px-4 [font-family:'Inter',Helvetica] font-light text-[#222222] text-base placeholder:text-[#9ca2a8] outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block [font-family:'Inter',Helvetica] font-semibold text-neutralblack text-base leading-7">
              이메일 주소는?
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="mala.adinasti@mail.com"
              className="mt-1 w-full h-12 rounded-[10px] border border-[#dedfe2] bg-[#f2f2f4] px-4 [font-family:'Inter',Helvetica] font-light text-[#222222] text-base placeholder:text-[#7e858d] outline-none"
            />
          </div>

          <div>
            <label htmlFor="age" className="block [font-family:'Inter',Helvetica] font-semibold text-neutralblack text-base leading-7">
              나이는?
            </label>
            <input
              id="age"
              type="text"
              value={formData.age}
              onChange={(e) => updateField("age", e.target.value)}
              placeholder="26"
              className="mt-1 w-full h-12 rounded-[10px] border border-[#dedfe2] bg-[#f2f2f4] px-4 [font-family:'Inter',Helvetica] font-light text-[#222222] text-base placeholder:text-[#7e858d] outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block [font-family:'Inter',Helvetica] font-semibold text-neutralblack text-base leading-7">
              우리들만의 비밀 번호 ^.^
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => updateField("password", e.target.value)}
                placeholder="********"
                className="w-full h-12 rounded-[10px] border border-[#dedfe2] bg-[#f2f2f4] pl-4 pr-12 [font-family:'Inter',Helvetica] font-light text-[#222222] text-base placeholder:text-[#7e858d] outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-3 w-6 h-6"
                aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 보기"}
              >
                <img className="w-6 h-6" alt="비밀번호 표시 토글" src="/img/icon-20.svg" />
              </button>
            </div>
          </div>
        </form>

        <Link
          className="absolute left-1/2 -translate-x-1/2 bottom-[50px] w-[327px] h-[72px] rounded-[24px] bg-[linear-gradient(90deg,#6f37f6_0%,#7f3cf8_100%)] flex items-center justify-center"
          to="/x5"
          aria-label="시작"
        >
          <span className="[font-family:'Inter',Helvetica] font-semibold text-white text-base leading-6">시작!</span>
        </Link>

        <footer className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[375px] h-[34px] flex items-end justify-center">
          <img className="mb-2 w-[148px] h-[5px]" alt="Home indicator" src="/img/rectangle-4.svg" />
        </footer>
      </div>
    </main>
  );
};
