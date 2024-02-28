import type { NextPage } from "next";
import { useEffect } from "react";

export type DrowarType = {
  onClose?: () => void;
};

const Drowar: NextPage<DrowarType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="w-[279px] h-full relative bg-light-solid-color-extra-white shadow-[10px_20px_70px_rgba(165,_163,_174,_0.1)] flex flex-col items-center justify-start pt-0 px-0 pb-2.5 box-border [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-[90%] overflow-auto text-left text-2xs text-light-solid-color-extra-semi-dark font-light-basic-typography-h4-heading lg:flex lg:w-auto lg:[align-self:unset] md:flex md:h-[1173px] sm:h-[812px]"
      data-animate-on-scroll
    >
      <div className="w-[260px] h-12 flex flex-row items-start justify-start pt-3 pb-0 pr-1.5 pl-[7px] box-border gap-[0px_10px] text-3xl font-quicksand md:flex">
        <div className="w-[34px] h-[34px] flex flex-row items-center justify-start relative">
          <img
            className="w-9/12 absolute !m-[0] h-3/4 top-[12.65%] right-[12.35%] bottom-[12.35%] left-[12.65%] max-w-full overflow-hidden max-h-full z-[0]"
            alt=""
            src="/shape.svg"
          />
        </div>
        <div className="flex-1 h-[34px] flex flex-col items-start justify-start">
          <b className="self-stretch flex-1 relative leading-[24px] flex items-center">
            AUTOMAx
          </b>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start p-[9px] gap-[17px_0px] md:flex">
        <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] self-stretch rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(234,_84,_85,_0.81)_-47.95deg,_rgba(176,_25,_44,_0.81)_40.25deg,_rgba(234,_84,_85,_0.81)_312.05deg,_rgba(176,_25,_44,_0.81)_400.25deg)] flex flex-row items-center justify-start gap-[0px_8px]">
          <img
            className="w-[22px] relative h-[22px]"
            alt=""
            src="/feathericon--command1.svg"
          />
          <div className="self-stretch flex-1 relative text-smi tracking-[0.43px] leading-[16px] font-medium font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-left flex items-center">
            Overview
          </div>
          <div className="w-[22px] rounded-xl bg-brown h-[22px] hidden flex-row items-center justify-center py-1 px-2 box-border">
            <div className="w-[5px] relative text-xs leading-[14px] font-semibold font-roboto text-light-solid-color-extra-white text-center inline-block h-3.5 shrink-0">
              5
            </div>
          </div>
          <div className="w-[18px] h-[18px] flex flex-row items-center justify-start relative">
            <img
              className="w-3/12 absolute !m-[0] h-3/6 top-[25%] right-[37.22%] bottom-[25%] left-[37.78%] max-w-full overflow-hidden max-h-full hidden z-[0]"
              alt=""
              src="/path.svg"
            />
          </div>
        </button>
        <div className="rounded-md flex flex-row items-center justify-center py-0 px-4">
          <div className="relative leading-[14px] uppercase text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Applications
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] self-stretch rounded-md flex flex-row items-center justify-start gap-[0px_8px]">
          <img
            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
            alt=""
            src="/ic-account-balance-48px.svg"
          />
          <div className="self-stretch flex-1 relative text-sm leading-[24px] font-light font-light-basic-typography-h4-heading text-light-solid-color-extra-semi-dark text-left flex items-center">
            Job Management
          </div>
          <div className="w-[22px] rounded-xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] h-[22px] flex flex-row items-center justify-center py-1 px-2 box-border">
            <div className="w-[5px] relative text-xs leading-[14px] font-semibold font-roboto text-light-solid-color-extra-white text-center inline-block h-3.5 shrink-0">
              2
            </div>
          </div>
          <div className="w-[18px] h-[18px] flex flex-row items-center justify-start relative">
            <img
              className="w-3/12 absolute !m-[0] h-3/6 top-[25%] right-[37.22%] bottom-[25%] left-[37.78%] max-w-full overflow-hidden max-h-full z-[0]"
              alt=""
              src="/path1.svg"
            />
          </div>
        </button>
        <div className="w-[261px] rounded-md hidden flex-row items-center justify-start py-2 px-[37px] box-border gap-[0px_8px] text-sm">
          <img
            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
            alt=""
            src="/ic-settings-48px.svg"
          />
          <div className="self-stretch flex-1 relative leading-[24px] font-light flex items-center">
            Settings
          </div>
          <div className="w-[22px] rounded-xl bg-brown h-[22px] hidden flex-row items-center justify-center py-1 px-2 box-border text-center text-xs text-light-solid-color-extra-white font-roboto">
            <div className="w-[5px] relative leading-[14px] font-semibold inline-block h-3.5 shrink-0">
              2
            </div>
          </div>
          <div className="w-[18px] h-[18px] hidden flex-row items-center justify-start relative">
            <img
              className="w-3/12 absolute !m-[0] h-3/6 top-[25%] right-[37.22%] bottom-[25%] left-[37.78%] max-w-full overflow-hidden max-h-full hidden z-[0]"
              alt=""
              src="/path1.svg"
            />
          </div>
        </div>
        <div className="rounded-md flex flex-row items-center justify-center pt-8 px-4 pb-0">
          <div className="relative leading-[14px] uppercase text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Settings
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] self-stretch rounded-md flex flex-row items-center justify-start gap-[0px_8px]">
          <img
            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
            alt=""
            src="/ic-lock-outline-48px.svg"
          />
          <div className="self-stretch flex-1 relative text-sm leading-[24px] font-light font-light-basic-typography-h4-heading text-light-solid-color-extra-semi-dark text-left flex items-center">
            Security
          </div>
          <div className="w-[22px] rounded-xl bg-brown h-[22px] hidden flex-row items-center justify-center py-1 px-2 box-border">
            <div className="w-[5px] relative text-xs leading-[14px] font-semibold font-roboto text-light-solid-color-extra-white text-center inline-block h-3.5 shrink-0">
              5
            </div>
          </div>
          <div className="w-[18px] h-[18px] flex flex-row items-center justify-start relative">
            <img
              className="w-3/12 absolute !m-[0] h-3/6 top-[25%] right-[37.22%] bottom-[25%] left-[37.78%] max-w-full overflow-hidden max-h-full hidden z-[0]"
              alt=""
              src="/path1.svg"
            />
          </div>
        </button>
      </div>
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-end py-0 px-2">
        <div className="rounded-md flex flex-row items-start justify-start py-0 px-4">
          <div className="relative leading-[14px] uppercase text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Help
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] self-stretch rounded-md flex flex-row items-center justify-start gap-[0px_8px]">
          <img
            className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
            alt=""
            src="/ic-headset-mic-48px.svg"
          />
          <div className="self-stretch flex-1 relative text-xl leading-[24px] font-semibold font-h5-heading1 text-light-solid-color-extra-semi-dark text-left flex items-center">
            Customer support
          </div>
          <div className="w-[22px] rounded-xl bg-brown h-[22px] hidden flex-row items-center justify-center py-1 px-2 box-border">
            <div className="w-[5px] relative text-xs leading-[14px] font-semibold font-roboto text-light-solid-color-extra-white text-center inline-block h-3.5 shrink-0">
              5
            </div>
          </div>
          <div className="w-[18px] h-[18px] hidden flex-row items-center justify-start relative">
            <img
              className="w-3/12 absolute !m-[0] h-3/6 top-[25%] right-[37.22%] bottom-[25%] left-[37.78%] max-w-full overflow-hidden max-h-full hidden z-[0]"
              alt=""
              src="/path1.svg"
            />
          </div>
        </button>
        <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] self-stretch rounded-md flex flex-row items-center justify-start gap-[0px_8px]">
          <img
            className="w-[22px] relative h-[22px]"
            alt=""
            src="/feathericon--helpcircle.svg"
          />
          <div className="self-stretch flex-1 relative text-sm leading-[24px] font-light font-light-basic-typography-h4-heading text-light-solid-color-extra-semi-dark text-left flex items-center">
            Documents
          </div>
          <div className="w-[22px] rounded-xl bg-brown h-[22px] hidden flex-row items-center justify-center py-1 px-2 box-border">
            <div className="w-[5px] relative text-xs leading-[14px] font-semibold font-roboto text-light-solid-color-extra-white text-center inline-block h-3.5 shrink-0">
              5
            </div>
          </div>
          <div className="w-[18px] h-[18px] hidden flex-row items-center justify-start relative">
            <img
              className="w-3/12 absolute !m-[0] h-3/6 top-[25%] right-[37.22%] bottom-[25%] left-[37.78%] max-w-full overflow-hidden max-h-full hidden z-[0]"
              alt=""
              src="/path1.svg"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Drowar;
