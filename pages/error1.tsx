import type { NextPage } from "next";

const Error1: NextPage = () => {
  return (
    <div className="w-full relative h-[1080px] overflow-hidden flex flex-col items-start justify-start text-center text-13xl text-dark-solid-color-extra-header-background font-light-basic-typography-h4-heading">
      <div className="self-stretch flex-1 bg-light-solid-color-extra-body-background flex flex-col items-center justify-center">
        <div className="self-stretch flex-1 flex flex-col items-center justify-center pt-[100px] px-[70px] pb-0 gap-[24px_0px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px_0px]">
            <div className="self-stretch relative leading-[44px] font-medium md:text-5xl">
              Page Not Found :(
            </div>
            <div className="self-stretch relative text-mini leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Oops! 😖 The requested URL was not found on this server.
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative text-mini tracking-[0.43px] leading-[18px] font-medium font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-left">
                Back to home
              </div>
            </div>
          </button>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-center justify-start bg-[url('/illustration@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch" />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[314px] shrink-0"
            alt=""
            src="/shape5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Error1;
