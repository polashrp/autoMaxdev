import type { NextPage } from "next";

const UnderMaintenance1: NextPage = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start text-center text-13xl font-light-basic-typography-h4-heading">
      <div className="self-stretch bg-light-solid-color-extra-body-background h-[1080px] flex flex-col items-center justify-center">
        <div className="self-stretch flex-1 flex flex-col items-center justify-center pt-[100px] px-[70px] pb-0 box-border gap-[24px_0px] min-w-[388px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px_0px]">
            <div className="self-stretch relative leading-[44px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] md:text-5xl">
              We are launching soon
            </div>
            <div className="self-stretch relative text-mini leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              We're creating something awesome. Please subscribe to get notified
              when it's ready!
            </div>
          </div>
          <div className="rounded flex flex-row items-start justify-start">
            <div className="w-[217px] rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start border-t-[1px] border-solid border-light-solid-color-extra-divider border-r-[1px] border-b-[1px]">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                <input
                  className="[border:none] [outline:none] font-light-basic-typography-h4-heading text-mini bg-[transparent] flex-1 relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.6),_rgba(255,_255,_255,_0.6)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left"
                  placeholder="Enter Email"
                  type="email"
                />
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-center">
              <div className="flex flex-row items-center justify-center py-2.5 px-5">
                <div className="relative text-mini tracking-[0.43px] leading-[18px] font-medium font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-left">
                  Notify
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch h-[428px] flex flex-col items-center justify-start">
          <div className="self-stretch flex-1 flex flex-row items-center justify-center bg-[url('/frame-12@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <img
              className="w-[263px] relative h-[500px] object-cover hidden"
              alt=""
              src="/launchingsoon@2x.png"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[170px] shrink-0 mt-[-170px]"
            alt=""
            src="/shape7.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance1;
