import type { NextPage } from "next";

const UnderMaintenance2: NextPage = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start text-center text-5xl font-light-basic-typography-h4-heading">
      <div className="self-stretch bg-light-solid-color-extra-body-background h-[1080px] flex flex-col items-center justify-center">
        <div className="self-stretch flex-1 flex flex-col items-center justify-center pt-[100px] px-[70px] pb-0 box-border gap-[24px_0px] min-w-[388px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[6px_0px]">
            <div className="self-stretch h-11 relative leading-[44px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block">
              You are not authorized!
            </div>
            <div className="self-stretch relative text-mini leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              <p className="m-0">
                You do not have permission to view this page using the
                credentials that you have provided while login.
              </p>
              <p className="m-0">Please contact your site administrator.</p>
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
        <div className="self-stretch h-[428px] flex flex-col items-center justify-start bg-[url('/illustration2@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <img
              className="w-[170.5px] relative h-[500px] object-cover hidden"
              alt=""
              src="/youarenotauthorized@2x.png"
            />
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[355px] shrink-0 mt-[-170px]"
            alt=""
            src="/shape8.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance2;
