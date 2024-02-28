import type { NextPage } from "next";
import { useState, useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import JobDrower from "../components/job-drower";
import PortalDrawer from "../components/portal-drawer";

const TaskOptions: NextPage = () => {
  const [isJobDrowerOpen, setJobDrowerOpen] = useState(false);
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

  const openJobDrower = useCallback(() => {
    setJobDrowerOpen(true);
  }, []);

  const closeJobDrower = useCallback(() => {
    setJobDrowerOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative overflow-hidden flex flex-row items-start justify-start gap-[0px_10px] text-left text-2xs text-light-solid-color-extra-semi-dark font-light-basic-typography-h4-heading">
        <div
          className="self-stretch w-[279px] bg-light-solid-color-extra-white shadow-[10px_20px_70px_rgba(165,_163,_174,_0.1)] flex flex-col items-center justify-start pt-0 px-0 pb-2.5 box-border [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] lg:flex lg:w-[279px] md:hidden"
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
          <div className="self-stretch h-[557.5px] flex flex-col items-start justify-start p-[9px] box-border gap-[17px_0px] md:flex">
            <div className="self-stretch rounded-md flex flex-row items-center justify-start py-2 px-4 gap-[0px_8px] text-smi">
              <img
                className="w-[22px] relative h-[22px]"
                alt=""
                src="/feathericon--command.svg"
              />
              <div className="self-stretch flex-1 relative tracking-[0.43px] leading-[16px] font-medium flex items-center">
                Overview
              </div>
              <div className="w-[22px] rounded-xl bg-brown h-[22px] hidden flex-row items-center justify-center py-1 px-2 box-border text-center text-xs text-light-solid-color-extra-white font-roboto">
                <div className="w-[5px] relative leading-[14px] font-semibold inline-block h-3.5 shrink-0">
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
            </div>
            <div className="rounded-md flex flex-row items-center justify-center py-0 px-4">
              <div className="relative leading-[14px] uppercase text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Applications
              </div>
            </div>
            <div className="self-stretch h-[124px] flex flex-col items-end justify-start gap-[9px_0px]">
              <button className="cursor-pointer [border:none] py-2 px-4 bg-dark-opacity-color-gray-gray-8 self-stretch rounded-md h-[35px] flex flex-row items-center justify-start box-border gap-[0px_8px]">
                <img
                  className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
                  alt=""
                  src="/ic-code-48px.svg"
                />
                <div className="self-stretch flex-1 relative text-sm leading-[24px] font-light font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left flex items-center">
                  Job Management
                </div>
                <div className="w-[22px] rounded-xl bg-brown h-[22px] hidden flex-row items-center justify-center py-1 px-2 box-border">
                  <div className="w-[5px] relative text-xs leading-[14px] font-semibold font-roboto text-light-solid-color-extra-white text-center inline-block h-3.5 shrink-0">
                    2
                  </div>
                </div>
                <img
                  className="w-[18px] h-[18px] object-contain"
                  alt=""
                  src="/chevronright@2x.png"
                />
              </button>
              <button className="cursor-pointer [border:none] py-0 px-[41px] bg-[transparent] self-stretch rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] h-[35px] flex flex-row items-center justify-start box-border gap-[0px_8px]">
                <img
                  className="w-[22px] relative h-[22px]"
                  alt=""
                  src="/feathericon--briefcase.svg"
                />
                <div className="self-stretch flex-1 relative text-mini leading-[21px] font-medium font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-left flex items-center">
                  Job Overview
                </div>
                <div className="w-[22px] rounded-xl bg-brown h-[22px] hidden flex-row items-center justify-center py-1 px-2 box-border">
                  <div className="w-[5px] relative text-xs leading-[14px] font-semibold font-roboto text-light-solid-color-extra-white text-center inline-block h-3.5 shrink-0">
                    2
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
              <button className="cursor-pointer [border:none] py-0 px-[41px] bg-[transparent] self-stretch rounded-md h-[35px] flex flex-row items-center justify-start box-border gap-[0px_8px]">
                <img
                  className="w-[22px] relative h-[22px]"
                  alt=""
                  src="/feathericon--piechart.svg"
                />
                <div className="self-stretch flex-1 relative text-sm leading-[24px] font-light font-light-basic-typography-h4-heading text-light-solid-color-extra-semi-dark text-left flex items-center">
                  Reports
                </div>
                <div className="w-[22px] rounded-xl bg-brown h-[22px] hidden flex-row items-center justify-center py-1 px-2 box-border">
                  <div className="w-[5px] relative text-xs leading-[14px] font-semibold font-roboto text-light-solid-color-extra-white text-center inline-block h-3.5 shrink-0">
                    2
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
              <button className="cursor-pointer [border:none] py-0 px-[41px] bg-[transparent] self-stretch rounded-md h-[35px] flex flex-row items-center justify-start box-border gap-[0px_8px]">
                <img
                  className="w-[22px] relative h-[22px]"
                  alt=""
                  src="/feathericon--settings.svg"
                />
                <div className="self-stretch flex-1 relative text-sm leading-[24px] font-light font-light-basic-typography-h4-heading text-dark-solid-color-extra-light text-left flex items-center">
                  Settings
                </div>
                <div className="w-[22px] rounded-xl bg-brown h-[22px] hidden flex-row items-center justify-center py-1 px-2 box-border">
                  <div className="w-[5px] relative text-xs leading-[14px] font-semibold font-roboto text-light-solid-color-extra-white text-center inline-block h-3.5 shrink-0">
                    2
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
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-2">
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
        <div className="w-[18px] h-[18px] hidden flex-row items-center justify-start relative">
          <img
            className="w-3/12 absolute !m-[0] h-3/6 top-[25%] right-[37.22%] bottom-[25%] left-[37.78%] max-w-full overflow-hidden max-h-full hidden z-[0]"
            alt=""
            src="/path1.svg"
          />
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 gap-[8px_0px] text-mini text-colors-3text-primary">
          <nav className="m-0 self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] overflow-hidden flex flex-row items-center justify-center py-3 px-6 gap-[0px_10px] sm:h-auto sm:flex-row sm:gap-[0px_10px] sm:items-start sm:justify-start sm:pt-3 sm:box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[0px_10px]">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] h-5 w-5 relative hidden md:flex"
                onClick={openJobDrower}
              >
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                />
                <img
                  className="absolute h-[4%] w-6/12 top-[23%] right-[16.5%] bottom-[73%] left-[33.5%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/path.svg"
                />
                <img
                  className="absolute h-[4%] w-6/12 top-[48%] right-[25%] bottom-[48%] left-[25%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/path2.svg"
                />
                <img
                  className="absolute h-[4%] w-6/12 top-[73%] right-[33.5%] bottom-[23%] left-[16.5%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/path3.svg"
                />
              </button>
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0px_10px]">
                <img
                  className="w-[26px] relative h-[26px]"
                  alt=""
                  src="/search.svg"
                />
                <input
                  className="[border:none] [outline:none] font-light-basic-typography-h4-heading text-mini bg-[transparent] flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left sm:max-w-[120px]"
                  placeholder="Search "
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end sm:flex-1">
              <div className="flex flex-row items-center justify-start gap-[0px_16px]">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[26px] relative rounded-81xl h-[26px] overflow-hidden shrink-0">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#a8aaae]" />
                    <div className="absolute h-[80.38%] w-[80.38%] top-[9.62%] right-[10%] bottom-[10%] left-[9.62%] rounded-81xl" />
                  </div>
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/avatar11@2x.png"
                  />
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[26px] relative h-[26px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                  />
                  <img
                    className="absolute h-3/4 w-[72.31%] top-[12.31%] right-[15%] bottom-[12.69%] left-[12.69%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path.svg"
                  />
                  <img
                    className="absolute h-[16.54%] w-[16.54%] top-[16.54%] right-[20.77%] bottom-[66.92%] left-[62.69%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/path4.svg"
                  />
                  <img
                    className="relative w-[2.2px] h-[2.2px]"
                    alt=""
                    src="/shape1.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[26px] relative h-[26px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                  />
                  <div className="absolute h-[32.69%] w-[32.69%] top-[12.69%] right-[54.62%] bottom-[54.62%] left-[12.69%] rounded-12xs box-border border-[2px] border-solid border-dark-solid-color-extra-card-background" />
                  <div className="absolute h-[32.69%] w-[32.69%] top-[12.69%] right-[12.69%] bottom-[54.62%] left-[54.62%] rounded-12xs box-border border-[2px] border-solid border-dark-solid-color-extra-card-background" />
                  <div className="absolute h-[32.69%] w-[32.69%] top-[54.62%] right-[54.62%] bottom-[12.69%] left-[12.69%] rounded-12xs box-border border-[2px] border-solid border-dark-solid-color-extra-card-background" />
                  <img
                    className="relative w-[6.5px] h-[6.5px]"
                    alt=""
                    src="/shape2.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[27.6px] relative h-[37px]">
                  <img
                    className="absolute h-[70.27%] w-[94.2%] top-[14.86%] right-[5.8%] bottom-[14.86%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/bell.svg"
                  />
                  <div className="absolute top-[1.8px] left-[14.2px] w-[18px] h-[18px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-light-solid-color-danger-danger-500-base w-[18px] h-[18px]" />
                    <div className="absolute top-[1.7px] left-[5.8px] text-smi leading-[14px] font-medium font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-center inline-block w-[5px] h-3.5">
                      4
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[38px] relative h-[38px]">
                  <div className="absolute h-full w-full top-[-1.32%] right-[0%] bottom-[1.32%] left-[0%] rounded-81xl overflow-hidden">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                      <div className="absolute h-[80.53%] w-[80.53%] top-[9.74%] right-[9.74%] bottom-[9.74%] left-[9.74%] rounded-81xl" />
                    </div>
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/avatar1@2x.png"
                    />
                  </div>
                  <div className="absolute h-[31.58%] w-[31.58%] top-[70.26%] right-[0.53%] bottom-[-1.84%] left-[67.89%] rounded-[50%] bg-light-solid-color-success-success-500-base box-border border-[2px] border-solid border-light-solid-color-extra-white" />
                </button>
              </div>
            </div>
          </nav>
          <div className="self-stretch flex flex-col items-start justify-start py-2.5 px-6 gap-[26px_0px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0px_8px] sm:self-stretch sm:w-auto sm:gap-[0px_8px] sm:items-center sm:justify-start">
              <div className="flex flex-row items-center justify-start relative gap-[0px_10px]">
                <img className="w-5 relative h-5 z-[0]" alt="" />
                <img
                  className="w-9/12 absolute !m-[0] h-[37.5%] top-[12.5%] right-[12.5%] bottom-[50%] left-[12.5%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/path.svg"
                />
                <img
                  className="w-[58.5%] absolute !m-[0] h-[37.5%] top-[50%] right-[20.5%] bottom-[12.5%] left-[21%] max-w-full overflow-hidden max-h-full z-[2]"
                  alt=""
                  src="/path5.svg"
                />
                <img
                  className="w-3/12 absolute !m-[0] h-[33.5%] top-[54%] right-[37.5%] bottom-[12.5%] left-[37.5%] max-w-full overflow-hidden max-h-full z-[3]"
                  alt=""
                  src="/path6.svg"
                />
              </div>
              <div className="relative leading-[22px] sm:text-2xs">Home</div>
              <div className="flex flex-row items-center justify-start relative gap-[0px_10px]">
                <img className="w-4 relative h-4 z-[0]" alt="" />
                <img
                  className="w-3/12 absolute !m-[0] h-3/6 top-[25%] right-[37.5%] bottom-[25%] left-[37.5%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/path.svg"
                />
              </div>
              <div className="relative leading-[22px]">Job management</div>
              <div className="flex flex-row items-center justify-start relative gap-[0px_10px]">
                <img className="w-4 relative h-4 z-[0]" alt="" />
                <img
                  className="w-3/12 absolute !m-[0] h-3/6 top-[25%] right-[37.5%] bottom-[25%] left-[37.5%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/path.svg"
                />
              </div>
              <div className="relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Job Overview
              </div>
            </div>
            <div className="self-stretch bg-light-solid-color-extra-white flex flex-row flex-wrap items-start justify-center py-6 px-0 gap-[16px] text-lg text-light-solid-color-extra-white">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-start gap-[0px_10px]">
                  <div className="self-stretch w-10 rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-center p-2 box-border">
                    <div className="relative leading-[24px] font-medium">1</div>
                  </div>
                  <div className="w-[136px] flex flex-col items-start justify-start text-mini">
                    <div className="relative leading-[21px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Details
                    </div>
                    <div className="relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Name/Email/Contact
                    </div>
                  </div>
                </div>
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/chevronright1.svg"
                />
              </div>
              <div className="w-[210px] flex flex-row items-center justify-start gap-[0px_20px]">
                <div className="w-10 rounded-md bg-light-opacity-color-primary-primary-8 h-10 flex flex-row items-start justify-center p-2 box-border">
                  <div className="relative leading-[24px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#7367f0] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    2
                  </div>
                </div>
                <div className="w-[103.7px] flex flex-row items-center justify-start text-mini">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[21px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Resoruces
                    </div>
                    <div className="relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Property Type
                    </div>
                  </div>
                </div>
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/chevronright2.svg"
                />
              </div>
              <div className="w-[210px] flex flex-row items-center justify-start gap-[0px_20px]">
                <div className="w-[163.7px] flex flex-row items-center justify-start gap-[0px_16px]">
                  <div className="w-10 rounded-md bg-light-opacity-color-gray-gray-8 h-10 flex flex-row items-start justify-center p-2 box-border">
                    <div className="relative leading-[24px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      3
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-mini">
                    <div className="relative leading-[21px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Options
                    </div>
                    <div className="relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Bedrooms/Floor No
                    </div>
                  </div>
                </div>
                <img
                  className="w-6 relative h-6"
                  alt=""
                  src="/chevronright2.svg"
                />
              </div>
              <div className="w-[210px] flex flex-row items-center justify-start gap-[0px_16px]">
                <div className="w-10 rounded-md bg-light-opacity-color-gray-gray-8 h-10 flex flex-row items-start justify-center p-2 box-border">
                  <div className="relative leading-[24px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    4
                  </div>
                </div>
                <div className="w-[151.7px] flex flex-col items-start justify-start text-mini">
                  <div className="relative leading-[21px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Submit
                  </div>
                  <div className="self-stretch relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Covered Area
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-light-solid-color-extra-white flex flex-col items-start justify-start p-6 gap-[7px_0px] text-center text-dark-solid-color-extra-header-background">
              <div className="self-stretch flex flex-col items-center justify-start pt-[38px] px-0 pb-2.5 gap-[13px_0px]">
                <div className="self-stretch relative text-7xl leading-[36px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Create Job
                </div>
                <div className="self-stretch relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Provide data with this form to create your task.
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-center justify-start gap-[5px_0px] text-left">
                  <div className="self-stretch rounded-lg bg-colors-grey-200 flex flex-row items-center justify-start pt-[17px] pb-[13px] pr-[17px] pl-[15px]">
                    <div className="flex-1 flex flex-row items-center justify-start text-lg">
                      <div className="flex-1 relative leading-[24px] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center h-6">
                        Job Name Review
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-end gap-[0px_8px]">
                      <div className="w-[30px] rounded-81xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-end p-[3px] box-border">
                        <div className="w-3 relative rounded-[50%] bg-light-solid-color-extra-white h-3" />
                      </div>
                      <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Activate Job
                      </div>
                    </div>
                    <div className="self-stretch w-[263px] rounded-md bg-light-solid-color-extra-white box-border hidden flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                        <div className="flex-1 relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.6),_rgba(255,_255,_255,_0.6)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                          Search
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] h-[309px] flex flex-col items-center justify-start">
                    <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-start pt-3 px-3 pb-0 gap-[20px]">
                      <div className="self-stretch flex-1 bg-light-solid-color-extra-white box-border flex flex-col items-start justify-start gap-[12px_0px] min-w-[320px] border-r-[1px] border-solid border-light-solid-color-extra-divider md:w-6/12 sm:w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[2px_0px]">
                          <div className="self-stretch relative leading-[22px] font-medium">
                            Source SFTP Server Status
                          </div>
                          <div className="rounded bg-light-solid-color-success-success-500-base shadow-[0px_2px_3px_rgba(40,_199,_111,_0.3)] flex flex-row items-center justify-start py-[5px] px-2.5 text-smi text-light-solid-color-extra-white">
                            <div className="relative leading-[14px] font-medium">
                              Connected
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px_0px]">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[2px_0px]">
                              <div className="self-stretch relative leading-[22px] font-medium">
                                Hostname
                              </div>
                              <div className="self-stretch relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                SFTP.Server_Name
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[2px_0px] text-smi">
                              <div className="self-stretch relative text-mini leading-[22px] font-medium">
                                Authentication
                              </div>
                              <div className="self-stretch relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                User Name: SFT_server_name
                              </div>
                              <div className="self-stretch relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Password: None
                              </div>
                              <div className="self-stretch relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                SSH Key: ***********************
                              </div>
                              <div className="self-stretch relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                SSH Private Phrase: *****************
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[2px_0px]">
                              <div className="self-stretch relative leading-[22px] font-medium">
                                Port Number
                              </div>
                              <div className="self-stretch relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                22
                              </div>
                            </div>
                            <div className="w-[438.5px] hidden flex-col items-start justify-start gap-[2px_0px]">
                              <div className="self-stretch relative leading-[22px] font-medium">
                                Monitoring Type
                              </div>
                              <div className="w-[196px] rounded flex flex-row items-start justify-start text-smi">
                                <div className="flex-1 rounded bg-light-solid-color-extra-white overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                                  <div className="flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5 gap-[0px_8px]">
                                    <div className="flex-1 relative leading-[21px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Download Type
                                    </div>
                                    <img
                                      className="w-4 relative h-4"
                                      alt=""
                                      src="/chevrondown.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="w-60 rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_16px_rgba(165,_163,_174,_0.45)] overflow-hidden flex flex-col items-start justify-start pt-0 px-2 pb-[11px] box-border gap-[2px_0px] text-light-solid-color-extra-white">
                                <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-start justify-start py-2 px-4">
                                  <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                    Listener
                                  </div>
                                </div>
                                <div className="w-56 rounded-md bg-light-opacity-color-primary-primary-8 hidden flex-row items-center justify-start py-2 px-4 box-border">
                                  <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                    Schedule
                                  </div>
                                </div>
                                <div className="self-stretch rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] flex flex-row items-center justify-start py-2 px-4">
                                  <div className="flex-1 relative leading-[22px]">
                                    Schedule
                                  </div>
                                </div>
                                <div className="w-56 rounded-md bg-light-solid-color-extra-white hidden flex-row items-start justify-start py-2 px-4 box-border">
                                  <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                    Option Four
                                  </div>
                                </div>
                                <div className="w-56 rounded-md bg-light-solid-color-extra-white hidden flex-row items-start justify-start py-2 px-4 box-border">
                                  <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                    Option Five
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[509px] hidden flex-row items-center justify-start gap-[0px_16px] text-light-solid-color-extra-white">
                            <div className="rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-center justify-start py-2.5 px-5">
                                <div className="relative tracking-[0.43px] leading-[18px] font-medium">
                                  Upgrade Plan
                                </div>
                              </div>
                            </div>
                            <div className="rounded-md bg-light-opacity-color-danger-danger-16 flex flex-row items-center justify-start text-light-solid-color-danger-danger-500-base">
                              <div className="flex flex-row items-center justify-start py-2.5 px-5">
                                <div className="relative tracking-[0.43px] leading-[18px] font-medium">
                                  Cancel Subscription
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex-1 bg-light-solid-color-extra-white flex flex-col items-start justify-start gap-[12px_0px] min-w-[320px] md:w-6/12 sm:w-full">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[2px_0px]">
                          <div className="self-stretch relative leading-[22px] font-medium">
                            Target SFTP Server Status
                          </div>
                          <div className="rounded bg-light-solid-color-success-success-500-base shadow-[0px_2px_3px_rgba(40,_199,_111,_0.3)] flex flex-row items-center justify-start py-[5px] px-2.5 text-smi text-light-solid-color-extra-white">
                            <div className="relative leading-[14px] font-medium">
                              Connected
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16px_0px]">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[2px_0px]">
                              <div className="self-stretch relative leading-[22px] font-medium">
                                Hostname
                              </div>
                              <div className="self-stretch relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                SFTP.Server_Name
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[2px_0px] text-smi">
                              <div className="self-stretch relative text-mini leading-[22px] font-medium">
                                Authentication
                              </div>
                              <div className="self-stretch relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                User Name: SFT_server_name
                              </div>
                              <div className="self-stretch relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Password: None
                              </div>
                              <div className="self-stretch relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                SSH Key: ***********************
                              </div>
                              <div className="self-stretch relative leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                SSH Private Phrase: *****************
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[2px_0px]">
                              <div className="self-stretch relative leading-[22px] font-medium">
                                Port Number
                              </div>
                              <div className="self-stretch relative text-smi leading-[20px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                22
                              </div>
                            </div>
                          </div>
                          <div className="w-[438.5px] hidden flex-col items-start justify-start gap-[2px_0px]">
                            <div className="self-stretch relative leading-[22px] font-medium">
                              Monitoring Type
                            </div>
                            <div className="w-[196px] rounded flex flex-row items-start justify-start text-smi">
                              <div className="flex-1 rounded bg-light-solid-color-extra-white overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                                <div className="flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5 gap-[0px_8px]">
                                  <div className="flex-1 relative leading-[21px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                    Upload Type
                                  </div>
                                  <img
                                    className="w-4 relative h-4"
                                    alt=""
                                    src="/chevrondown.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="w-60 rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_16px_rgba(165,_163,_174,_0.45)] overflow-hidden flex flex-col items-start justify-start pt-0 px-2 pb-[11px] box-border gap-[2px_0px] text-light-solid-color-extra-white">
                              <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-start justify-start py-2 px-4">
                                <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                  Listener
                                </div>
                              </div>
                              <div className="w-56 rounded-md bg-light-opacity-color-primary-primary-8 hidden flex-row items-center justify-start py-2 px-4 box-border">
                                <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                  Schedule
                                </div>
                              </div>
                              <div className="self-stretch rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] flex flex-row items-center justify-start py-2 px-4">
                                <div className="flex-1 relative leading-[22px]">
                                  Schedule
                                </div>
                              </div>
                              <div className="w-56 rounded-md bg-light-solid-color-extra-white hidden flex-row items-start justify-start py-2 px-4 box-border">
                                <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                  Option Four
                                </div>
                              </div>
                              <div className="w-56 rounded-md bg-light-solid-color-extra-white hidden flex-row items-start justify-start py-2 px-4 box-border">
                                <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                  Option Five
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[509px] hidden flex-row items-center justify-start gap-[0px_16px] text-light-solid-color-extra-white">
                            <div className="rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-start">
                              <div className="flex flex-row items-center justify-start py-2.5 px-5">
                                <div className="relative tracking-[0.43px] leading-[18px] font-medium">
                                  Upgrade Plan
                                </div>
                              </div>
                            </div>
                            <div className="rounded-md bg-light-opacity-color-danger-danger-16 flex flex-row items-center justify-start text-light-solid-color-danger-danger-500-base">
                              <div className="flex flex-row items-center justify-start py-2.5 px-5">
                                <div className="relative tracking-[0.43px] leading-[18px] font-medium">
                                  Cancel Subscription
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[10px_0px] text-dark-solid-color-extra-body-background">
                    <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start">
                      <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start">
                        <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-start py-[12.5px] px-[18px] gap-[0px_10px]">
                          <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                            <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                              <img
                                className="w-3.5 relative h-3.5"
                                alt=""
                                src="/minus.svg"
                              />
                            </div>
                            <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                              Text
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-start">
                            <div className="flex flex-row items-center justify-start relative gap-[0px_10px]">
                              <img
                                className="w-[38px] relative h-[38px] z-[0]"
                                alt=""
                              />
                              <img
                                className="w-9/12 absolute !m-[0] h-3/4 top-[12.63%] right-[12.37%] bottom-[12.37%] left-[12.63%] max-w-full overflow-hidden max-h-full z-[1]"
                                alt=""
                                src="/path.svg"
                              />
                              <img
                                className="w-[20.79%] absolute !m-[0] h-1/4 top-[37.63%] right-[37.63%] bottom-[37.37%] left-[41.58%] max-w-full overflow-hidden max-h-full z-[2]"
                                alt=""
                                src="/path7.svg"
                              />
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Download Schedule
                          </div>
                          <div className="flex flex-row items-center justify-start">
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                              <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                                T
                              </div>
                              <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                                <div className="flex flex-row items-center justify-center p-1.5">
                                  <img
                                    className="w-[18px] relative h-[18px]"
                                    alt=""
                                    src="/plus.svg"
                                  />
                                </div>
                              </div>
                            </button>
                          </div>
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                            <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                              T
                            </div>
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start relative gap-[0px_10px] z-[1]">
                              <img className="w-5 relative h-5 z-[0]" alt="" />
                              <img
                                className="w-6/12 absolute !m-[0] h-1/4 top-[37.5%] right-[25%] bottom-[37.5%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                                alt=""
                                src="/path.svg"
                              />
                            </button>
                          </button>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start text-smi border-[1px] border-solid border-light-solid-color-extra-divider">
                          <div className="self-stretch w-[110px] flex flex-row items-center justify-between py-2 px-5 box-border">
                            <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                              ID
                            </div>
                            <div className="flex flex-col items-start justify-start">
                              <img
                                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                alt=""
                                src="/fichevronup.svg"
                              />
                              <img
                                className="w-[18px] relative h-[18px] mt-[-4px]"
                                alt=""
                                src="/chevrondown1.svg"
                              />
                            </div>
                          </div>
                          <div className="self-stretch w-[126px] hidden flex-row items-center justify-start py-2 px-5 box-border gap-[0px_30px]">
                            <img
                              className="w-[18px] relative h-[18px]"
                              alt=""
                              src="/trendingup1.svg"
                            />
                            <div className="flex flex-col items-start justify-start">
                              <img
                                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                alt=""
                                src="/fichevronup1.svg"
                              />
                              <img
                                className="w-[18px] relative h-[18px] mt-[-4px]"
                                alt=""
                                src="/chevrondown1.svg"
                              />
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 px-5 gap-[0px_4px]">
                            <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                              Current folder location
                            </div>
                            <div className="flex flex-col items-start justify-start">
                              <img
                                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                alt=""
                                src="/fichevronup1.svg"
                              />
                              <img
                                className="w-[18px] relative h-[18px] mt-[-4px]"
                                alt=""
                                src="/chevrondown1.svg"
                              />
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-[9px] pl-5 gap-[0px_4px]">
                            <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                              files older than
                            </div>
                            <div className="flex flex-col items-start justify-start">
                              <img
                                className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                alt=""
                                src="/fichevronup1.svg"
                              />
                              <img
                                className="w-[18px] relative h-[18px] mt-[-4px]"
                                alt=""
                                src="/chevrondown1.svg"
                              />
                            </div>
                          </div>
                          <div className="w-[110px] flex flex-row items-center justify-center py-[16.5px] px-2.5 box-border">
                            <div className="w-[70px] relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block h-4 shrink-0">
                              ACTIONS
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                          <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border">
                            <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                              #5021{" "}
                            </div>
                          </div>
                          <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                            <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                              <img
                                className="w-[22px] relative h-[22px]"
                                alt=""
                                src="/devicedesktopanalytics.svg"
                              />
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-4 px-5 text-xl font-h5-heading1">
                            <div className="flex-1 relative leading-[24px] font-semibold">
                              Listener
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-4 pr-[519px] pl-[15px] text-smi">
                            <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                              <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                                <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 box-border gap-[0px_6px] min-w-[119px]">
                                  <div className="flex-1 relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                    Delay 5 Minutes
                                  </div>
                                  <img
                                    className="w-3.5 relative h-3.5 hidden"
                                    alt=""
                                    src="/x3.svg"
                                  />
                                </div>
                                <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 box-border gap-[0px_6px] min-w-[113px]">
                                  <div className="flex-1 relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                    File Created, File Modified
                                  </div>
                                  <img
                                    className="w-3.5 relative h-3.5 hidden"
                                    alt=""
                                    src="/x3.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                            <img
                              className="w-[22px] relative h-[22px] hidden"
                              alt=""
                              src="/mail.svg"
                            />
                            <img
                              className="w-[22px] relative h-[22px] hidden"
                              alt=""
                              src="/eye.svg"
                            />
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                              <img
                                className="w-6 relative h-6 z-[0]"
                                alt=""
                                src="/dotsvertical.svg"
                              />
                              <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                T
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-center justify-start">
                          <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border">
                            <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                              #50220{" "}
                            </div>
                          </div>
                          <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                            <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                              <img
                                className="w-[22px] relative h-[22px]"
                                alt=""
                                src="/server.svg"
                              />
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-4 px-5 text-xl font-h5-heading1">
                            <div className="flex-1 relative leading-[24px] font-semibold">
                              Daily Schedule
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-4 pr-[519px] pl-[15px] text-smi">
                            <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                              <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                                <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                  <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                    Start: 10/10/23 - 2:00 am
                                  </div>
                                  <img
                                    className="w-3.5 relative h-3.5 hidden"
                                    alt=""
                                    src="/x3.svg"
                                  />
                                </div>
                                <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                  <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                    End: 10/30/24 - 2:00 am
                                  </div>
                                  <img
                                    className="w-3.5 relative h-3.5 hidden"
                                    alt=""
                                    src="/x3.svg"
                                  />
                                </div>
                                <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                  <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                    Reoccur: 2 days
                                  </div>
                                  <img
                                    className="w-3.5 relative h-3.5 hidden"
                                    alt=""
                                    src="/x3.svg"
                                  />
                                </div>
                                <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                  <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                    Delay job: 2 Minutes
                                  </div>
                                  <img
                                    className="w-3.5 relative h-3.5 hidden"
                                    alt=""
                                    src="/x3.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                            <img
                              className="w-[22px] relative h-[22px] hidden"
                              alt=""
                              src="/mail.svg"
                            />
                            <img
                              className="w-[22px] relative h-[22px] hidden"
                              alt=""
                              src="/eye.svg"
                            />
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                              <img
                                className="w-6 relative h-6 z-[0]"
                                alt=""
                                src="/dotsvertical.svg"
                              />
                              <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                T
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                          <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border">
                            <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                              #50230{" "}
                            </div>
                          </div>
                          <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                            <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                              <img
                                className="w-[22px] relative h-[22px]"
                                alt=""
                                src="/devicedesktopanalytics.svg"
                              />
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-4 px-5 text-xl font-h5-heading1">
                            <div className="flex-1 relative leading-[24px] font-semibold">
                              Weekly Schedule
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-center py-4 px-[15px] gap-[8px_0px] text-smi">
                            <div className="self-stretch flex flex-col items-start justify-center py-0 pr-[333px] pl-0">
                              <div className="self-stretch rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                                <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Start: 10/10/23 - 2:00 am
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      End: 10/30/24 - 2:00 am
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                      Reoccur: 2 days
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                      Delay job: 2 Minutes
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                      Delay job: 2 Minutes
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                              <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                                <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Mo
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Tues
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Wed
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Thur
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Fri
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Sat
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Sun
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                            <img
                              className="w-[22px] relative h-[22px] hidden"
                              alt=""
                              src="/mail.svg"
                            />
                            <img
                              className="w-[22px] relative h-[22px] hidden"
                              alt=""
                              src="/eye.svg"
                            />
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                              <img
                                className="w-6 relative h-6 z-[0]"
                                alt=""
                                src="/dotsvertical.svg"
                              />
                              <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                T
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-center justify-start">
                          <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border">
                            <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                              #50240{" "}
                            </div>
                          </div>
                          <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                            <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                              <img
                                className="w-[22px] relative h-[22px]"
                                alt=""
                                src="/server.svg"
                              />
                            </div>
                          </div>
                          <div className="flex-1 flex flex-row items-center justify-start py-4 px-5 text-xl font-h5-heading1">
                            <div className="flex-1 relative leading-[24px] font-semibold">
                              Monthly Schedule
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-center py-4 px-[15px] gap-[8px_0px] text-smi">
                            <div className="self-stretch flex flex-col items-start justify-center py-0 pr-[333px] pl-0">
                              <div className="self-stretch rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                                <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Start: 10/10/23 - 2:00 am
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      End: 10/30/24 - 2:00 am
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                      Reoccur: 2 days
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                      Delay job: 2 Minutes
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                      Delay job: 2 Minutes
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                              <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                                <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Jan
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Feb
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Mar
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Apr
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      May
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Jun
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Jul
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Aug
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Sept
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Oct
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Nov
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Dec
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                              <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                                <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Mo
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Tues
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Wed
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Thur
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Fri
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Sat
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Sun
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                              <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                                <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      First
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Second
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Third
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      Fourth
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                  <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                                    <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      All
                                    </div>
                                    <img
                                      className="w-3.5 relative h-3.5 hidden"
                                      alt=""
                                      src="/x3.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                            <img
                              className="w-[22px] relative h-[22px] hidden"
                              alt=""
                              src="/mail.svg"
                            />
                            <img
                              className="w-[22px] relative h-[22px] hidden"
                              alt=""
                              src="/eye.svg"
                            />
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                              <img
                                className="w-6 relative h-6 z-[0]"
                                alt=""
                                src="/dotsvertical.svg"
                              />
                              <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                T
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-center py-[12.5px] px-[18px] gap-[0px_10px]">
                          <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                            <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                              <img
                                className="w-3.5 relative h-3.5"
                                alt=""
                                src="/minus.svg"
                              />
                            </div>
                            <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                              Text
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-center">
                            <div className="flex flex-row items-center justify-center relative gap-[0px_10px]">
                              <img
                                className="w-[38px] relative h-[38px] z-[0]"
                                alt=""
                              />
                              <img
                                className="w-9/12 absolute !m-[0] h-3/4 top-[12.63%] right-[12.37%] bottom-[12.37%] left-[12.63%] max-w-full overflow-hidden max-h-full z-[1]"
                                alt=""
                                src="/path.svg"
                              />
                              <img
                                className="w-[20.79%] absolute !m-[0] h-1/4 top-[37.63%] right-[37.63%] bottom-[37.37%] left-[41.58%] max-w-full overflow-hidden max-h-full z-[2]"
                                alt=""
                                src="/path7.svg"
                              />
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Download Files
                          </div>
                          <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            4
                          </div>
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-start">
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                              <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                                T
                              </div>
                              <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                                <div className="flex flex-row items-center justify-center p-1.5">
                                  <img
                                    className="w-[18px] relative h-[18px]"
                                    alt=""
                                    src="/plus.svg"
                                  />
                                </div>
                              </div>
                            </button>
                          </button>
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                            <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                              T
                            </div>
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start relative gap-[0px_10px] z-[1]">
                              <img className="w-5 relative h-5 z-[0]" alt="" />
                              <img
                                className="w-6/12 absolute !m-[0] h-1/4 top-[37.5%] right-[25%] bottom-[37.5%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                                alt=""
                                src="/path.svg"
                              />
                            </button>
                          </button>
                        </div>
                        <div className="self-stretch flex flex-col items-center justify-start text-xl font-h5-heading1">
                          <div className="self-stretch flex flex-row items-center justify-start text-smi font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                            <div className="self-stretch w-[110px] flex flex-row items-center justify-between py-2 px-5 box-border">
                              <div className="relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                ID
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 px-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Remote folder
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 pr-[9px] pl-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                local fodler
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 pr-[9px] pl-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                file extension
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-start py-[16.5px] px-5 box-border text-center">
                              <div className="relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                ACTIONS
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch box-border flex flex-row items-start justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50214{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                root\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                *test.*, hey*.csv
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-start justify-start">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50220{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                root\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                E:\\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                *book*.docx
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch box-border flex flex-row items-start justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50214{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                root\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                *test.*, hey*.csv
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-start justify-start">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50220{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                root\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                E:\\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                *book*.docx
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-center py-[12.5px] px-[18px] gap-[0px_10px]">
                          <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                            <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                              <img
                                className="w-3.5 relative h-3.5"
                                alt=""
                                src="/minus.svg"
                              />
                            </div>
                            <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                              Text
                            </div>
                          </div>
                          <img
                            className="w-[38px] relative h-[38px] overflow-hidden shrink-0"
                            alt=""
                            src="/ic-warning-48px.svg"
                          />
                          <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Check For Duplicate
                          </div>
                          <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            4
                          </div>
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-start">
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                              <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                                T
                              </div>
                              <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                                <div className="flex flex-row items-center justify-center p-1.5">
                                  <img
                                    className="w-[18px] relative h-[18px]"
                                    alt=""
                                    src="/plus.svg"
                                  />
                                </div>
                              </div>
                            </button>
                          </button>
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                            <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                              T
                            </div>
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start relative gap-[0px_10px] z-[1]">
                              <img className="w-5 relative h-5 z-[0]" alt="" />
                              <img
                                className="w-6/12 absolute !m-[0] h-1/4 top-[37.5%] right-[25%] bottom-[37.5%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                                alt=""
                                src="/path.svg"
                              />
                            </button>
                          </button>
                        </div>
                        <div className="self-stretch flex flex-col items-center justify-start text-xl font-h5-heading1">
                          <div className="self-stretch flex flex-row items-center justify-start text-smi font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                            <div className="self-stretch w-[110px] flex flex-row items-center justify-between py-2 px-5 box-border">
                              <div className="relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                ID
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 px-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                ACTIONS
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 pr-[9px] pl-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Compare by
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 pr-[9px] pl-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                compare folder
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 pr-[9px] pl-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                from location
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 pr-[9px] pl-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                duplicate folder
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-start py-[16.5px] px-5 box-border text-center">
                              <div className="relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                ACTIONS
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch box-border flex flex-row items-start justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50214{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                Stop Job
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                Hash
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch box-border flex flex-row items-start justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50214{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                Stop Job
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                Hash
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch box-border flex flex-row items-start justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50214{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                Stop Job
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                Hash
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch box-border flex flex-row items-start justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50214{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                Stop Job
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                Hash
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-center py-[12.5px] px-[18px] gap-[0px_10px]">
                          <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                            <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                              <img
                                className="w-3.5 relative h-3.5"
                                alt=""
                                src="/minus.svg"
                              />
                            </div>
                            <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                              Text
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-center">
                            <div className="flex flex-row items-center justify-center relative gap-[0px_10px]">
                              <img
                                className="w-[38px] relative h-[38px] z-[0]"
                                alt=""
                              />
                              <img
                                className="w-9/12 absolute !m-[0] h-3/4 top-[12.63%] right-[12.37%] bottom-[12.37%] left-[12.63%] max-w-full overflow-hidden max-h-full z-[1]"
                                alt=""
                                src="/path.svg"
                              />
                              <img
                                className="w-[20.79%] absolute !m-[0] h-1/4 top-[37.63%] right-[37.63%] bottom-[37.37%] left-[41.58%] max-w-full overflow-hidden max-h-full z-[2]"
                                alt=""
                                src="/path7.svg"
                              />
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Download Files
                          </div>
                          <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            4
                          </div>
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-start">
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                              <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                                T
                              </div>
                              <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                                <div className="flex flex-row items-center justify-center p-1.5">
                                  <img
                                    className="w-[18px] relative h-[18px]"
                                    alt=""
                                    src="/plus.svg"
                                  />
                                </div>
                              </div>
                            </button>
                          </button>
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                            <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                              T
                            </div>
                            <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start relative gap-[0px_10px] z-[1]">
                              <img className="w-5 relative h-5 z-[0]" alt="" />
                              <img
                                className="w-6/12 absolute !m-[0] h-1/4 top-[37.5%] right-[25%] bottom-[37.5%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                                alt=""
                                src="/path.svg"
                              />
                            </button>
                          </button>
                        </div>
                        <div className="self-stretch flex flex-col items-center justify-start text-xl font-h5-heading1">
                          <div className="self-stretch flex flex-row items-center justify-start text-smi font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                            <div className="self-stretch w-[110px] flex flex-row items-center justify-between py-2 px-5 box-border">
                              <div className="relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                ID
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 px-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Remote folder
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 pr-[9px] pl-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                local fodler
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 pr-[9px] pl-5">
                              <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                file extension
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <img
                                  className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                                  alt=""
                                  src="/fichevronup1.svg"
                                />
                                <img
                                  className="w-[18px] relative h-[18px] mt-[-4px]"
                                  alt=""
                                  src="/chevrondown1.svg"
                                />
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-start py-[16.5px] px-5 box-border text-center">
                              <div className="relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                ACTIONS
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch box-border flex flex-row items-start justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50214{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                root\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                *test.*, hey*.csv
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-start justify-start">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50220{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                root\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                E:\\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                *book*.docx
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch box-border flex flex-row items-start justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50214{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                root\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                \\server_01\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                *test.*, hey*.csv
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-start justify-start">
                            <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                              <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                                #50220{" "}
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                root\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                E:\\folder\path\file01.txt
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                              <div className="flex-1 relative leading-[24px] font-semibold">
                                *book*.docx
                              </div>
                            </div>
                            <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/mail.svg"
                              />
                              <img
                                className="w-[22px] relative h-[22px] hidden"
                                alt=""
                                src="/eye.svg"
                              />
                              <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                                <img
                                  className="w-6 relative h-6 z-[0]"
                                  alt=""
                                  src="/dotsvertical.svg"
                                />
                                <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                                  T
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px] text-left text-dark-solid-color-extra-body-background">
                <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start text-xl font-h5-heading1">
                  <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-start py-[12.5px] px-[18px] gap-[0px_10px] text-mini font-light-basic-typography-h4-heading">
                    <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                      <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                        <img
                          className="w-3.5 relative h-3.5"
                          alt=""
                          src="/minus.svg"
                        />
                      </div>
                      <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                    <img
                      className="w-[30px] relative h-[30px]"
                      alt=""
                      src="/archive1.svg"
                    />
                    <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Archive files
                    </div>
                    <div className="flex flex-row items-center justify-start py-[13px] px-5">
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                        <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                          T
                        </div>
                        <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                          <div className="flex flex-row items-center justify-center p-1.5">
                            <img
                              className="w-[18px] relative h-[18px]"
                              alt=""
                              src="/plus.svg"
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                    <img
                      className="w-5 relative h-5"
                      alt=""
                      src="/chevrondown2.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-smi font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 px-5 gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        ID
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch w-[150.7px] hidden flex-row items-center justify-start py-2 px-5 box-border gap-[0px_30px]">
                      <img
                        className="w-[18px] relative h-[18px]"
                        alt=""
                        src="/trendingup.svg"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 px-5 gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        from location
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-[9px] pl-5 gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        archive folder
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-[9px] pl-5 gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        with extension
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-[9px] pl-5 gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        folder clean-up
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-[16.5px] px-2">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        ACTIONS
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #5021{" "}
                      </div>
                    </div>
                    <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                      <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                        <img
                          className="w-[22px] relative h-[22px]"
                          alt=""
                          src="/devicedesktopanalytics.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        server_01\folder\path\
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="w-[248px] relative leading-[24px] font-semibold inline-block shrink-0">
                        server_02\folder\path\changeFile.txt
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        csv,xml,jpg
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Older than 30 days
                      </div>
                    </div>
                    <div className="w-20 flex flex-row items-center justify-start py-4 px-5 box-border gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-center justify-start">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #50220{" "}
                      </div>
                    </div>
                    <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                      <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                        <img
                          className="w-[22px] relative h-[22px]"
                          alt=""
                          src="/server.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        \\server02\folder\path\file01.txt
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="w-60 relative leading-[24px] font-semibold inline-block shrink-0">
                        server_01\folder\path\summary
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        *test,html, *test.docx
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Older than 45 days
                      </div>
                    </div>
                    <div className="w-20 flex flex-row items-center justify-start py-4 px-5 box-border gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #50230{" "}
                      </div>
                    </div>
                    <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                      <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                        <img
                          className="w-[22px] relative h-[22px]"
                          alt=""
                          src="/devicedesktopanalytics.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        server_01\folder\path\file01.txt
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="w-[243px] relative leading-[24px] font-semibold inline-block shrink-0">
                        server_01\folder\path\changeFile.txt
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        *.*
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Older than 120 days
                      </div>
                    </div>
                    <div className="w-20 flex flex-row items-center justify-start py-4 px-5 box-border gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-center py-[12.5px] px-[18px] gap-[0px_10px]">
                      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                        <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                          <img
                            className="w-3.5 relative h-3.5"
                            alt=""
                            src="/minus.svg"
                          />
                        </div>
                        <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                          Text
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center">
                        <div className="flex flex-row items-center justify-center relative gap-[0px_10px]">
                          <img
                            className="w-[38px] relative h-[38px] z-[0]"
                            alt=""
                          />
                          <img
                            className="w-9/12 absolute !m-[0] h-3/4 top-[12.63%] right-[12.37%] bottom-[12.37%] left-[12.63%] max-w-full overflow-hidden max-h-full z-[1]"
                            alt=""
                            src="/path.svg"
                          />
                          <img
                            className="w-[20.79%] absolute !m-[0] h-1/4 top-[37.63%] right-[37.63%] bottom-[37.37%] left-[41.58%] max-w-full overflow-hidden max-h-full z-[2]"
                            alt=""
                            src="/path7.svg"
                          />
                        </div>
                      </div>
                      <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Download Files
                      </div>
                      <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        4
                      </div>
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-start">
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                          <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                            T
                          </div>
                          <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                            <div className="flex flex-row items-center justify-center p-1.5">
                              <img
                                className="w-[18px] relative h-[18px]"
                                alt=""
                                src="/plus.svg"
                              />
                            </div>
                          </div>
                        </button>
                      </button>
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                        <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                          T
                        </div>
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start relative gap-[0px_10px] z-[1]">
                          <img className="w-5 relative h-5 z-[0]" alt="" />
                          <img
                            className="w-6/12 absolute !m-[0] h-1/4 top-[37.5%] right-[25%] bottom-[37.5%] left-[25%] max-w-full overflow-hidden max-h-full z-[1]"
                            alt=""
                            src="/path.svg"
                          />
                        </button>
                      </button>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start text-xl font-h5-heading1">
                      <div className="self-stretch flex flex-row items-center justify-start text-smi font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                        <div className="self-stretch w-[110px] flex flex-row items-center justify-between py-2 px-5 box-border">
                          <div className="relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            ID
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                              alt=""
                              src="/fichevronup.svg"
                            />
                            <img
                              className="w-[18px] relative h-[18px] mt-[-4px]"
                              alt=""
                              src="/chevrondown1.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 px-5">
                          <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Current name
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                              alt=""
                              src="/fichevronup1.svg"
                            />
                            <img
                              className="w-[18px] relative h-[18px] mt-[-4px]"
                              alt=""
                              src="/chevrondown1.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 pr-[9px] pl-5">
                          <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            New file name
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                              alt=""
                              src="/fichevronup1.svg"
                            />
                            <img
                              className="w-[18px] relative h-[18px] mt-[-4px]"
                              alt=""
                              src="/chevrondown1.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-row items-center justify-between py-2 pr-[9px] pl-5">
                          <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            with extension
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                              alt=""
                              src="/fichevronup1.svg"
                            />
                            <img
                              className="w-[18px] relative h-[18px] mt-[-4px]"
                              alt=""
                              src="/chevrondown1.svg"
                            />
                          </div>
                        </div>
                        <div className="w-[110px] flex flex-row items-center justify-start py-[16.5px] px-5 box-border text-center">
                          <div className="relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            ACTIONS
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch box-border flex flex-row items-start justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                        <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                          <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                            #50214{" "}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            root\folder\path\file01.txt
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            \\server_01\folder\path\file01.txt
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            csv,xml,jpg
                          </div>
                        </div>
                        <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                          <img
                            className="w-[22px] relative h-[22px] hidden"
                            alt=""
                            src="/mail.svg"
                          />
                          <img
                            className="w-[22px] relative h-[22px] hidden"
                            alt=""
                            src="/eye.svg"
                          />
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                            <img
                              className="w-6 relative h-6 z-[0]"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                            <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                              T
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-start justify-start">
                        <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                          <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                            #50220{" "}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            root\path\file01.txt
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            E:\\folder\path\file01.txt
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            *book*.docx
                          </div>
                        </div>
                        <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                          <img
                            className="w-[22px] relative h-[22px] hidden"
                            alt=""
                            src="/mail.svg"
                          />
                          <img
                            className="w-[22px] relative h-[22px] hidden"
                            alt=""
                            src="/eye.svg"
                          />
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                            <img
                              className="w-6 relative h-6 z-[0]"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                            <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                              T
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="self-stretch box-border flex flex-row items-start justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                        <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                          <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                            #50214{" "}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            root\folder\path\file01.txt
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            \\server_01\folder\path\file01.txt
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            *test.*, hey*.csv
                          </div>
                        </div>
                        <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                          <img
                            className="w-[22px] relative h-[22px] hidden"
                            alt=""
                            src="/mail.svg"
                          />
                          <img
                            className="w-[22px] relative h-[22px] hidden"
                            alt=""
                            src="/eye.svg"
                          />
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                            <img
                              className="w-6 relative h-6 z-[0]"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                            <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                              T
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-start justify-start py-6 px-0">
                        <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                          <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                            #50220{" "}
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            \\server02\folder\path\file01.txt
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            E:\\folder\path\file01.txt
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                          <div className="flex-1 relative leading-[24px] font-semibold">
                            *test,html, *test.docx
                          </div>
                        </div>
                        <div className="w-[110px] flex flex-row items-center justify-center py-4 px-5 box-border gap-[0px_16px]">
                          <img
                            className="w-[22px] relative h-[22px] hidden"
                            alt=""
                            src="/mail.svg"
                          />
                          <img
                            className="w-[22px] relative h-[22px] hidden"
                            alt=""
                            src="/eye.svg"
                          />
                          <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-6 h-6 flex flex-row items-center justify-center relative gap-[0px_10px]">
                            <img
                              className="w-6 relative h-6 z-[0]"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                            <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[1]">
                              T
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start text-xl font-h5-heading1">
                  <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-start py-[12.5px] px-[18px] box-border gap-[0px_10px] min-w-[620px] text-mini font-light-basic-typography-h4-heading">
                    <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                      <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                        <img
                          className="w-3.5 relative h-3.5"
                          alt=""
                          src="/minus.svg"
                        />
                      </div>
                      <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                    <img
                      className="w-[38px] relative h-[38px]"
                      alt=""
                      src="/settingsautomation.svg"
                    />
                    <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      {" "}
                      Upload Files
                    </div>
                    <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      4
                    </div>
                    <div className="flex flex-row items-center justify-start py-[13px] px-5">
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                        <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                          T
                        </div>
                        <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                          <div className="flex flex-row items-center justify-center p-1.5">
                            <img
                              className="w-[18px] relative h-[18px]"
                              alt=""
                              src="/plus.svg"
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                    <img
                      className="w-5 relative h-5"
                      alt=""
                      src="/chevrondown2.svg"
                    />
                  </div>
                  <div className="self-stretch box-border flex flex-row items-center justify-start min-w-[615px] text-smi font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="self-stretch w-[127px] flex flex-row items-center justify-start py-2 px-5 box-border gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        ID
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 px-5 gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        local folder
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-[9px] pl-5 gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        REmote folder
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-[9px] pl-5 gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Compress Files
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-center py-[16.5px] px-5 text-center">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        ACTIONS
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-center justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #50214{" "}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        \\server_01\folder\path\file01.txt
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        /
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Yes
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-center py-4 px-5 gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail1.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye1.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical3.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-center justify-start min-w-[615px]">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #50220{" "}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-center py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        E:\\folder\path\file01.txt
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        /media/files
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Yes
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-center py-4 px-5 gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail1.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye1.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical3.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch box-border flex flex-row items-center justify-start min-w-[615px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #50230{" "}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        \\server_01\folder\path\file01.txt
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        /inbound
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Yes
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-center py-4 px-5 gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail1.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye1.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical3.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-center justify-start min-w-[615px]">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #50220{" "}
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-center py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        D:\folder\path\folder
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        /reports
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Yes
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-center py-4 px-5 gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail1.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye1.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start">
                  <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-start py-[12.5px] px-[18px] gap-[0px_10px]">
                    <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                      <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                        <img
                          className="w-3.5 relative h-3.5"
                          alt=""
                          src="/minus.svg"
                        />
                      </div>
                      <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                        Text
                      </div>
                    </div>
                    <img
                      className="w-[38px] relative h-[38px]"
                      alt=""
                      src="/settingsautomation.svg"
                    />
                    <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Download Schedule
                    </div>
                    <div className="flex flex-row items-center justify-start py-[13px] px-5">
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                        <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                          T
                        </div>
                        <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                          <div className="flex flex-row items-center justify-center p-1.5">
                            <img
                              className="w-[18px] relative h-[18px]"
                              alt=""
                              src="/plus.svg"
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                    <img
                      className="w-5 relative h-5"
                      alt=""
                      src="/chevrondown2.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-smi border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="self-stretch w-[127px] flex flex-row items-center justify-start py-2 px-5 box-border gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        ID
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch w-[126px] hidden flex-row items-center justify-start py-2 px-5 box-border gap-[0px_30px]">
                      <img
                        className="w-[18px] relative h-[18px]"
                        alt=""
                        src="/trendingup1.svg"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 px-5 gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Current folder location
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-[9px] pl-5 gap-[0px_4px]">
                      <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        files older than
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <img
                          className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                          alt=""
                          src="/fichevronup1.svg"
                        />
                        <img
                          className="w-[18px] relative h-[18px] mt-[-4px]"
                          alt=""
                          src="/chevrondown1.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[90px] flex flex-row items-center justify-start py-[16.5px] px-2.5 box-border">
                      <div className="w-[70px] relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block h-4 shrink-0">
                        ACTIONS
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #5021{" "}
                      </div>
                    </div>
                    <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                      <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                        <img
                          className="w-[22px] relative h-[22px]"
                          alt=""
                          src="/devicedesktopanalytics.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5 text-xl font-h5-heading1">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Listener
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 pr-[519px] pl-[15px] text-smi">
                      <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                        <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                          <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 box-border gap-[0px_6px] min-w-[119px]">
                            <div className="flex-1 relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                              Delay 5 Minutes
                            </div>
                            <img
                              className="w-3.5 relative h-3.5 hidden"
                              alt=""
                              src="/x3.svg"
                            />
                          </div>
                          <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 box-border gap-[0px_6px] min-w-[113px]">
                            <div className="flex-1 relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                              File Created, File Modified
                            </div>
                            <img
                              className="w-3.5 relative h-3.5 hidden"
                              alt=""
                              src="/x3.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-20 flex flex-row items-center justify-start py-4 px-5 box-border gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-center justify-start">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #50220{" "}
                      </div>
                    </div>
                    <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                      <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                        <img
                          className="w-[22px] relative h-[22px]"
                          alt=""
                          src="/server.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5 text-xl font-h5-heading1">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Daily Schedule
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 pr-[519px] pl-[15px] text-smi">
                      <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                        <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                          <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                            <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                              Start: 10/10/23 - 2:00 am
                            </div>
                            <img
                              className="w-3.5 relative h-3.5 hidden"
                              alt=""
                              src="/x3.svg"
                            />
                          </div>
                          <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                            <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                              End: 10/30/24 - 2:00 am
                            </div>
                            <img
                              className="w-3.5 relative h-3.5 hidden"
                              alt=""
                              src="/x3.svg"
                            />
                          </div>
                          <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                            <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                              Reoccur: 2 days
                            </div>
                            <img
                              className="w-3.5 relative h-3.5 hidden"
                              alt=""
                              src="/x3.svg"
                            />
                          </div>
                          <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                            <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                              Delay job: 2 Minutes
                            </div>
                            <img
                              className="w-3.5 relative h-3.5 hidden"
                              alt=""
                              src="/x3.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-20 flex flex-row items-center justify-start py-4 px-5 box-border gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #50230{" "}
                      </div>
                    </div>
                    <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                      <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                        <img
                          className="w-[22px] relative h-[22px]"
                          alt=""
                          src="/devicedesktopanalytics.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5 text-xl font-h5-heading1">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Weekly Schedule
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-center py-4 px-[15px] gap-[8px_0px] text-smi">
                      <div className="self-stretch flex flex-col items-start justify-center py-0 pr-[333px] pl-0">
                        <div className="self-stretch rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                          <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Start: 10/10/23 - 2:00 am
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                End: 10/30/24 - 2:00 am
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                Reoccur: 2 days
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                Delay job: 2 Minutes
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                Delay job: 2 Minutes
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                        <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                          <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Mo
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Tues
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Wed
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Thur
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Fri
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Sat
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Sun
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-20 flex flex-row items-center justify-start py-4 px-5 box-border gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical2.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch bg-dark-opacity-color-extra-menu-hover flex flex-row items-center justify-start">
                    <div className="w-[121px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border">
                      <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                        #50240{" "}
                      </div>
                    </div>
                    <div className="w-[110px] hidden flex-row items-center justify-start py-3 pr-2.5 pl-5 box-border">
                      <div className="w-[30px] rounded-11xl bg-light-opacity-color-info-info-16 h-[30px] flex flex-row items-center justify-center py-1 px-2 box-border">
                        <img
                          className="w-[22px] relative h-[22px]"
                          alt=""
                          src="/server.svg"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-start py-4 px-5 text-xl font-h5-heading1">
                      <div className="flex-1 relative leading-[24px] font-semibold">
                        Monthly Schedule
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-center py-4 px-[15px] gap-[8px_0px] text-smi">
                      <div className="self-stretch flex flex-col items-start justify-center py-0 pr-[333px] pl-0">
                        <div className="self-stretch rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                          <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Start: 10/10/23 - 2:00 am
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                End: 10/30/24 - 2:00 am
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                Reoccur: 2 days
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                Delay job: 2 Minutes
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                                Delay job: 2 Minutes
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                        <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                          <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Jan
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Feb
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Mar
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Apr
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                May
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Jun
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Jul
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Aug
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Sept
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Oct
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Nov
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Dec
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                        <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                          <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Mo
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Tues
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Wed
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Thur
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Fri
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Sat
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Sun
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                        <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border flex flex-row flex-wrap items-center justify-start min-w-[203px] border-[1px] border-solid border-light-solid-color-extra-divider">
                          <div className="flex-1 rounded-md overflow-hidden flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px]">
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                First
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Second
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Third
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                Fourth
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                            <div className="rounded bg-light-opacity-color-secondary-secondary-16 flex flex-row items-center justify-start py-[5px] px-2.5 gap-[0px_6px]">
                              <div className="relative leading-[14px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                All
                              </div>
                              <img
                                className="w-3.5 relative h-3.5 hidden"
                                alt=""
                                src="/x3.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-20 flex flex-row items-center justify-start py-4 px-5 box-border gap-[0px_16px]">
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/mail.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px] hidden"
                        alt=""
                        src="/eye.svg"
                      />
                      <img
                        className="w-[22px] relative h-[22px]"
                        alt=""
                        src="/dotsvertical2.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-start py-[12.5px] px-[18px] gap-[0px_10px]">
                  <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                    <div className="w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                    <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                      Text
                    </div>
                  </div>
                  <img
                    className="w-[38px] relative h-[38px]"
                    alt=""
                    src="/folder.svg"
                  />
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Accordion Item #5
                  </div>
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    4
                  </div>
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Accordion Item #2
                  </div>
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Accordion Item #2
                  </div>
                  <div className="flex flex-row items-center justify-start py-[13px] px-5">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                      <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                        T
                      </div>
                      <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                        <div className="flex flex-row items-center justify-center p-1.5">
                          <img
                            className="w-[18px] relative h-[18px]"
                            alt=""
                            src="/plus.svg"
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                  <img
                    className="w-5 relative h-5"
                    alt=""
                    src="/chevrondown2.svg"
                  />
                </div>
                <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-start py-[12.5px] px-[18px] gap-[0px_10px]">
                  <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                    <div className="w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                    <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                      Text
                    </div>
                  </div>
                  <img
                    className="w-[38px] relative h-[38px]"
                    alt=""
                    src="/folder.svg"
                  />
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Accordion Item #6
                  </div>
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    4
                  </div>
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Accordion Item #2
                  </div>
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Accordion Item #2
                  </div>
                  <div className="flex flex-row items-center justify-start py-[13px] px-5">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                      <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                        T
                      </div>
                      <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                        <div className="flex flex-row items-center justify-center p-1.5">
                          <img
                            className="w-[18px] relative h-[18px]"
                            alt=""
                            src="/plus.svg"
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                  <img
                    className="w-5 relative h-5"
                    alt=""
                    src="/chevrondown2.svg"
                  />
                </div>
                <div className="self-stretch bg-light-opacity-color-extra-menu-open flex flex-row items-center justify-start py-[12.5px] px-[18px] gap-[0px_10px]">
                  <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                    <div className="w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                    <div className="w-[31px] relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden">
                      Text
                    </div>
                  </div>
                  <img
                    className="w-[38px] relative h-[38px]"
                    alt=""
                    src="/folder.svg"
                  />
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Accordion Item #7
                  </div>
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    4
                  </div>
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Accordion Item #2
                  </div>
                  <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Accordion Item #2
                  </div>
                  <div className="flex flex-row items-center justify-start py-[13px] px-5">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[30px] h-[30px] flex flex-row items-center justify-center relative gap-[0px_10px]">
                      <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] text-mini leading-[22px] font-semibold font-light-basic-typography-h4-heading text-black text-left hidden z-[0]">
                        T
                      </div>
                      <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-center opacity-[0.65] z-[1]">
                        <div className="flex flex-row items-center justify-center p-1.5">
                          <img
                            className="w-[18px] relative h-[18px]"
                            alt=""
                            src="/plus.svg"
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                  <img
                    className="w-5 relative h-5"
                    alt=""
                    src="/chevrondown2.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-start py-2.5 px-6 gap-[0px_16px]">
                <div className="flex-1 flex flex-col items-start justify-start">
                  <button className="cursor-pointer [border:none] p-0 bg-light-opacity-color-secondary-secondary-16 rounded-md flex flex-row items-center justify-start opacity-[0.65]">
                    <div className="flex flex-row items-center justify-center py-2.5 px-5 gap-[0px_8px]">
                      <img
                        className="w-[18px] relative h-[18px]"
                        alt=""
                        src="/arrownarrowleft.svg"
                      />
                      <div className="relative text-mini tracking-[0.43px] leading-[18px] font-medium font-light-basic-typography-h4-heading text-light-solid-color-secondary-secondary-500-base text-left">
                        Previous
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex-1 flex flex-col items-end justify-start">
                  <Button
                    className="w-[101px]"
                    color="error"
                    variant="contained"
                    sx={{ borderRadius: "0px 0px 0px 0px", width: 101 }}
                  >
                    Sign in
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-md h-12 overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-6 box-border gap-[0px_10px] text-dimgray md:flex-col sm:h-auto sm:flex-col">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0px_5px] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
              <div className="relative leading-[22px]">{`© 2023, Empowered `}</div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mini leading-[22px] text-left inline-block">
                <span className="font-light-basic-typography-h4-heading text-gray-300">{` `}</span>
                <span className="font-medium font-light-basic-typography-h4-heading text-light-solid-color-danger-danger-500-base">
                  Entrusted Insights
                </span>
              </button>
            </div>
            <div className="flex-1 flex flex-row items-center justify-end py-0 px-6 gap-[11px] md:flex-[unset] md:self-stretch sm:flex-col sm:pl-0 sm:pr-0 sm:box-border sm:flex-[unset] sm:self-stretch">
              <button className="cursor-pointer [border:none] p-[5px] bg-[transparent] h-8 flex flex-row items-center justify-end box-border">
                <div className="relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right">
                  License
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[5px] bg-[transparent] h-8 flex flex-row items-center justify-end box-border">
                <div className="relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right">{`Term & Conditions`}</div>
              </button>
              <button className="cursor-pointer [border:none] p-[5px] bg-[transparent] h-8 flex flex-row items-center justify-end box-border">
                <div className="relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right">
                  Documentation
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-[5px] bg-[transparent] h-8 flex flex-row items-center justify-end box-border">
                <div className="relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-right">
                  Support
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isJobDrowerOpen && (
        <PortalDrawer placement="Left" onOutsideClick={closeJobDrower}>
          <JobDrower onClose={closeJobDrower} />
        </PortalDrawer>
      )}
    </>
  );
};

export default TaskOptions;
