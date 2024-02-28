import type { NextPage } from "next";
import { useEffect } from "react";
import AppsPages from "../components/apps-pages";
import CardViewPendingOrders from "../components/card-view-pending-orders";
import Navbar from "../components/navbar";
import SearchButtonLicenseButtonM from "../components/search-button-license-button-m";

const Dashboard: NextPage = () => {
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
    <div className="w-full relative bg-light-solid-color-extra-white overflow-hidden flex flex-row items-start justify-start gap-[0px_10px] tracking-[normal] text-left text-3xl text-light-solid-color-extra-semi-dark font-quicksand mq1275:pl-2.5 mq1275:pr-2.5 mq1275:box-border">
      <div
        className="h-[1098px] w-[279px] bg-light-solid-color-extra-white shadow-[10px_20px_70px_rgba(165,_163,_174,_0.1)] flex flex-col items-center justify-start pt-0 px-0 pb-2.5 box-border [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] mq1275:hidden"
        data-animate-on-scroll
      >
        <div className="self-stretch h-12 flex flex-row items-start justify-start pt-3 px-4 pb-0 box-border gap-[0px_10px]">
          <div className="h-[34px] w-[34px] flex flex-row items-center justify-start relative">
            <img
              className="h-3/4 w-9/12 absolute !m-[0] top-[12.65%] right-[12.35%] bottom-[12.35%] left-[12.65%] max-w-full overflow-hidden max-h-full"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start">
            <h3 className="m-0 self-stretch h-[34px] relative text-inherit leading-[24px] font-bold font-inherit flex items-center mq450:text-lg mq450:leading-[19px]">
              AUTOMAx
            </h3>
          </div>
        </div>
        <AppsPages />
        <CardViewPendingOrders />
      </div>
      <div className="h-[18px] w-[18px] hidden flex-row items-center justify-start relative z-[1]">
        <img
          className="h-3/6 w-3/12 absolute !m-[0] top-[25%] right-[37.22%] bottom-[25%] left-[37.78%] max-w-full overflow-hidden max-h-full hidden z-[0]"
          alt=""
          src="/path1.svg"
        />
      </div>
      <img
        className="h-5 w-5 absolute !m-[0] top-[19px] left-[245px] hidden z-[2]"
        alt=""
        src="/clearall.svg"
      />
      <main className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border max-w-[calc(100%_-_289px)] mq1275:max-w-full">
        <section className="self-stretch flex flex-col items-center justify-start gap-[18px_0px] max-w-full text-left text-mid text-colors-3text-primary font-h5-heading1">
          <Navbar />
          <SearchButtonLicenseButtonM />
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-6 box-border gap-[26px_0px] max-w-full">
            <div className="self-stretch rounded-xl flex flex-row flex-wrap items-start justify-between shrink-0 max-w-full">
              <div className="w-[791px] flex flex-row flex-wrap items-start justify-between min-w-[390px] min-h-[304px] max-w-full gap-[-2.1000000000000227px]">
                <div className="w-[395px] bg-light-solid-color-extra-white shadow-[0px_0px_14px_rgba(53,_64,_82,_0.05)] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[15px] box-border gap-[17px_0px] min-w-[375px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="relative tracking-[0.06px] leading-[20.4px] font-semibold">
                      Pending Orders
                    </div>
                    <div className="w-[47px] rounded-71xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-col items-center justify-start py-1 px-[5px] box-border text-center text-xs text-light-solid-color-extra-white font-roboto">
                      <div className="relative tracking-[0.14px] leading-[12px]">
                        Today
                      </div>
                    </div>
                  </div>
                  <h2 className="m-0 self-stretch relative text-5xl leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
                    Sales Today
                  </h2>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_16px] text-base text-limegreen mq450:flex-wrap">
                    <div className="relative tracking-[0.09px] leading-[28px]">
                      +26%
                    </div>
                    <div className="relative tracking-[0.09px] leading-[28px] text-colors-4text-secondary">
                      Since last week
                    </div>
                  </div>
                </div>
                <div className="w-[395px] bg-light-solid-color-extra-white shadow-[0px_0px_14px_rgba(53,_64,_82,_0.05)] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[15px] box-border gap-[17px_0px] min-w-[375px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="relative tracking-[0.06px] leading-[20.4px] font-semibold">
                      Visitors
                    </div>
                    <div className="w-[47px] rounded-71xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-col items-center justify-start py-1 px-[5px] box-border text-center text-xs text-light-solid-color-extra-white font-roboto">
                      <div className="relative tracking-[0.14px] leading-[12px]">
                        Today
                      </div>
                    </div>
                  </div>
                  <h2 className="m-0 self-stretch relative text-5xl leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
                    Sales Today
                  </h2>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_16px] text-base text-limegreen mq450:flex-wrap">
                    <div className="relative tracking-[0.09px] leading-[28px]">
                      +26%
                    </div>
                    <div className="relative tracking-[0.09px] leading-[28px] text-colors-4text-secondary">
                      Since last week
                    </div>
                  </div>
                </div>
                <div className="w-[395px] bg-light-solid-color-extra-white shadow-[0px_0px_14px_rgba(53,_64,_82,_0.05)] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[15px] box-border gap-[17px_0px] min-w-[375px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="relative tracking-[0.06px] leading-[20.4px] font-semibold">
                      Sales Today
                    </div>
                    <div className="w-[47px] rounded-71xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-col items-center justify-start py-1 px-[5px] box-border text-center text-xs text-light-solid-color-extra-white font-roboto">
                      <div className="relative tracking-[0.14px] leading-[12px]">
                        Today
                      </div>
                    </div>
                  </div>
                  <h2 className="m-0 self-stretch relative text-5xl leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
                    Sales Today
                  </h2>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_16px] text-base text-limegreen mq450:flex-wrap">
                    <div className="relative tracking-[0.09px] leading-[28px]">
                      +26%
                    </div>
                    <div className="relative tracking-[0.09px] leading-[28px] text-colors-4text-secondary">
                      Since last week
                    </div>
                  </div>
                </div>
                <div className="w-[395px] bg-light-solid-color-extra-white shadow-[0px_0px_14px_rgba(53,_64,_82,_0.05)] overflow-hidden shrink-0 flex flex-col items-start justify-start p-[15px] box-border gap-[17px_0px] min-w-[375px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                    <div className="relative tracking-[0.06px] leading-[20.4px] font-semibold">
                      Total Earnings
                    </div>
                    <div className="w-[47px] rounded-71xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-col items-center justify-start py-1 px-[5px] box-border text-center text-xs text-light-solid-color-extra-white font-roboto">
                      <div className="relative tracking-[0.14px] leading-[12px]">
                        Today
                      </div>
                    </div>
                  </div>
                  <h2 className="m-0 self-stretch relative text-5xl leading-[28.8px] font-semibold font-inherit mq450:text-lgi mq450:leading-[23px]">
                    Sales Today
                  </h2>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_16px] text-base text-limegreen mq450:flex-wrap">
                    <div className="relative tracking-[0.09px] leading-[28px]">
                      +26%
                    </div>
                    <div className="relative tracking-[0.09px] leading-[28px] text-colors-4text-secondary">
                      Since last week
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[0.9621] bg-light-solid-color-extra-white shadow-[0px_0px_14px_rgba(53,_64,_82,_0.05)] flex flex-col items-start justify-start py-0 px-[15px] box-border gap-[26px_0px] min-w-[335px] max-w-full text-right text-xs text-colors-4text-secondary">
                <div className="self-stretch flex flex-row items-center justify-center gap-[0px_26px] max-w-full mq825:flex-wrap">
                  <input
                    className="w-[calc(100%_-_3.3px)] [border:none] [outline:none] bg-light-solid-color-extra-white h-[53px] flex-1 rounded-t rounded-b-none overflow-hidden flex flex-row items-start justify-start p-4 box-border font-h5-heading1 font-semibold text-mid text-colors-3text-primary min-w-[300px] max-w-full"
                    placeholder="Job Submissions"
                    type="text"
                  />
                  <div className="bg-light-solid-color-extra-white flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start py-[3px] px-2">
                      <img
                        className="h-[13.3px] w-[3.3px] relative"
                        alt=""
                        src="/shape-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-light-solid-color-extra-white shadow-[0px_0px_14px_rgba(53,_64,_82,_0.05)] overflow-hidden flex flex-row items-end justify-center py-px px-0 box-border gap-[12px] max-w-full mq825:flex-wrap">
                  <div className="h-[228px] w-[35px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-0 px-[9px] gap-[36px_0px] opacity-[0.85] mix-blend-normal border-r-[1px] border-solid border-colors-grey-200">
                    <div className="relative tracking-[0.3px] leading-[19px]">
                      80
                    </div>
                    <div className="relative tracking-[0.3px] leading-[19px]">
                      60
                    </div>
                    <div className="relative tracking-[0.3px] leading-[19px]">
                      40
                    </div>
                    <div className="relative tracking-[0.3px] leading-[19px]">
                      20
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-end justify-start py-0 pr-0.5 pl-0 box-border gap-[0px_20px] min-w-[464px] max-w-full text-center mq825:flex-wrap mq825:min-w-full">
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[174px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-32 w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Jan
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[110px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-[85px] w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Feb
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[86px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-[61px] w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Mar
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[146px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-[100px] w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Apr
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[180px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-[85px] w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        May
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[136px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-32 w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Jun
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[136px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-32 w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Jul
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[175px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-[73px] w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Aug
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[159px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-[68px] w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Sep
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[188px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-[188px] w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Oct
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[72px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-[121px] w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Nov
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-end gap-[25px_0px] min-w-[20px] max-w-[41px]">
                      <div className="h-[184px] flex flex-row items-end justify-start gap-[0px_5px]">
                        <div className="h-[173px] w-[18px] [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)]" />
                        <div className="h-[125px] w-[18px] [background:linear-gradient(rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.4)),_#a8aaae]" />
                      </div>
                      <div className="relative tracking-[0.3px] leading-[19px]">
                        Dec
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1583px] overflow-x-auto flex flex-row flex-wrap items-start justify-start py-0 pr-[3px] pl-0 box-border gap-[20px_18px] max-w-full shrink-0">
              <div className="w-[781px] bg-light-solid-color-extra-white shadow-[0px_0px_14px_rgba(53,_64,_82,_0.05)] shrink-0 flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[20px_0px] min-w-[420px]">
                <div className="self-stretch flex flex-row items-center justify-center gap-[0px_26px] max-w-full">
                  <div className="flex-1 rounded-t rounded-b-none bg-light-solid-color-extra-white overflow-hidden flex flex-row items-start justify-start p-4 box-border min-w-[329px] max-w-full">
                    <div className="w-[329px] relative tracking-[0.06px] leading-[20.4px] font-semibold inline-block shrink-0 max-w-full">
                      Source/Medium
                    </div>
                  </div>
                  <div className="bg-light-solid-color-extra-white flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start py-[3px] px-2">
                      <img
                        className="h-[13.3px] w-[3.3px] relative"
                        alt=""
                        src="/shape-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[173px] flex flex-col items-center justify-start pt-[61px] pb-[67px] pr-[31px] pl-7 box-border relative text-center text-xl">
                  <img
                    className="w-full h-full absolute !m-[0] top-[0px] right-[-0.6px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    loading="lazy"
                    alt=""
                  />
                  <div className="w-[84.4px] relative tracking-[0.04px] leading-[24px] font-semibold inline-block z-[1] mq450:text-base mq450:leading-[19px]">
                    +23%
                  </div>
                  <div className="self-stretch relative text-xs tracking-[0.3px] leading-[19.92px] z-[1]">
                    more visitors
                  </div>
                </div>
                <div className="w-[781px] overflow-x-auto flex flex-col items-center justify-start max-w-full text-sm">
                  <div className="w-[781px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px]">
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[15px] px-4 box-border">
                      <div className="flex-1 relative tracking-[0.07px] leading-[21.98px] font-semibold">
                        Source
                      </div>
                    </div>
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[15px] px-4 box-border">
                      <div className="flex-1 relative tracking-[0.07px] leading-[21.98px] font-semibold">
                        Revenue
                      </div>
                    </div>
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start py-[15px] px-4 box-border">
                      <div className="flex-1 relative tracking-[0.07px] leading-[21.98px] font-semibold">
                        Value
                      </div>
                    </div>
                  </div>
                  <div className="w-[781px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px]">
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 box-border">
                      <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                        Social
                      </div>
                    </div>
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 box-border">
                      <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                        270
                      </div>
                    </div>
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 box-border">
                      <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                        +35%
                      </div>
                    </div>
                  </div>
                  <div className="w-[781px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px]">
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 box-border whitespace-nowrap">
                      <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                        Search Engines
                      </div>
                    </div>
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 box-border">
                      <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                        270
                      </div>
                    </div>
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 box-border">
                      <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                        +35%
                      </div>
                    </div>
                  </div>
                  <div className="w-[781px] flex flex-row items-center justify-between gap-[0px] [row-gap:20px] z-[1]">
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 box-border">
                      <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                        Direct
                      </div>
                    </div>
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 box-border">
                      <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                        270
                      </div>
                    </div>
                    <div className="w-[260px] bg-light-solid-color-extra-white shadow-[0px_-1px_0px_#e0e0e0_inset] overflow-hidden shrink-0 flex flex-row items-start justify-start p-4 box-border">
                      <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                        +35%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[469px] w-[781px] relative bg-light-solid-color-extra-white shadow-[0px_0px_14px_rgba(53,_64,_82,_0.05)] shrink-0 min-w-[420px] text-center text-sm">
                <div className="self-stretch flex flex-row items-center justify-center gap-[0px_26px] max-w-full text-left text-mid">
                  <div className="flex-1 rounded-t rounded-b-none bg-light-solid-color-extra-white overflow-hidden flex flex-row items-start justify-start p-4 box-border min-w-[329px] max-w-full">
                    <div className="w-[329px] relative tracking-[0.06px] leading-[20.4px] font-semibold inline-block shrink-0 max-w-full">
                      Latest projects
                    </div>
                  </div>
                  <div className="bg-light-solid-color-extra-white flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start py-[3px] px-2">
                      <img
                        className="h-[13.3px] w-[3.3px] relative"
                        alt=""
                        src="/shape-3.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute top-[71.7px] left-[0px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.07px] leading-[21.98px] font-semibold">
                    Name
                  </div>
                </div>
                <div className="absolute top-[71.7px] left-[156.3px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.07px] leading-[21.98px] font-semibold">
                    Start Date
                  </div>
                </div>
                <div className="absolute top-[72.7px] left-[312.6px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    End Date
                  </div>
                </div>
                <div className="absolute top-[71.7px] left-[468.9px] w-[156px] flex flex-col items-center justify-start">
                  <div className="w-[124.3px] relative tracking-[0.07px] leading-[21.98px] font-semibold inline-block">
                    State
                  </div>
                </div>
                <div className="absolute top-[71.7px] left-[625.2px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.07px] leading-[21.98px] font-semibold">
                    Asignee
                  </div>
                </div>
                <div className="absolute top-[132.1px] left-[0px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    Project Aurora
                  </div>
                </div>
                <div className="absolute top-[132.1px] left-[156.3px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[132.1px] left-[312.6px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[132.1px] left-[468.9px] w-[156px] flex flex-col items-center justify-start text-xs text-light-solid-color-extra-white font-roboto">
                  <div className="rounded-71xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-col items-center justify-between py-1 px-1.5 box-border min-h-[20px]">
                    <div className="relative tracking-[0.14px] leading-[12px]">
                      Done
                    </div>
                  </div>
                </div>
                <div className="absolute top-[132.1px] left-[625.2px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    James Dalton
                  </div>
                </div>
                <div className="absolute top-[191.6px] left-[0px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    Project Aurora
                  </div>
                </div>
                <div className="absolute top-[191.6px] left-[156.3px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[191.6px] left-[312.6px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[191.6px] left-[468.9px] w-[156px] flex flex-col items-center justify-start text-xs text-light-solid-color-extra-white font-roboto">
                  <div className="rounded-71xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-col items-center justify-between py-1 px-1.5 box-border min-h-[20px]">
                    <div className="relative tracking-[0.14px] leading-[12px]">
                      Done
                    </div>
                  </div>
                </div>
                <div className="absolute top-[191.6px] left-[625.2px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    James Dalton
                  </div>
                </div>
                <div className="absolute top-[251px] left-[0px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    Project Aurora
                  </div>
                </div>
                <div className="absolute top-[251px] left-[156.3px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[251px] left-[312.6px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[251px] left-[468.9px] w-[156px] flex flex-col items-center justify-start text-xs text-light-solid-color-extra-white font-roboto">
                  <div className="rounded-71xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-col items-center justify-between py-1 px-1.5 box-border min-h-[20px]">
                    <div className="relative tracking-[0.14px] leading-[12px]">
                      Done
                    </div>
                  </div>
                </div>
                <div className="absolute top-[251px] left-[625.2px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    James Dalton
                  </div>
                </div>
                <div className="absolute top-[310.4px] left-[0px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    Project Aurora
                  </div>
                </div>
                <div className="absolute top-[310.4px] left-[156.3px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[310.4px] left-[312.6px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[310.4px] left-[468.9px] w-[156px] flex flex-col items-center justify-start text-xs text-light-solid-color-extra-white font-roboto">
                  <div className="rounded-71xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-col items-center justify-between py-1 px-1.5 box-border min-h-[20px]">
                    <div className="relative tracking-[0.14px] leading-[12px]">
                      Done
                    </div>
                  </div>
                </div>
                <div className="absolute top-[310.4px] left-[625.2px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    James Dalton
                  </div>
                </div>
                <div className="absolute top-[369.9px] left-[0px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    Project Aurora
                  </div>
                </div>
                <div className="absolute top-[369.9px] left-[156.3px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[369.9px] left-[312.6px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[369.9px] left-[468.9px] w-[156px] flex flex-col items-center justify-start text-xs text-light-solid-color-extra-white font-roboto">
                  <div className="rounded-71xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-col items-center justify-between py-1 px-1.5 box-border min-h-[20px]">
                    <div className="relative tracking-[0.14px] leading-[12px]">
                      Done
                    </div>
                  </div>
                </div>
                <div className="absolute top-[369.9px] left-[625.2px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    James Dalton
                  </div>
                </div>
                <div className="absolute top-[429.3px] left-[0px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    Project Aurora
                  </div>
                </div>
                <div className="absolute top-[429.3px] left-[156.3px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[429.3px] left-[312.6px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    01/01/2019
                  </div>
                </div>
                <div className="absolute top-[429.3px] left-[468.9px] w-[156px] flex flex-col items-center justify-start text-xs text-light-solid-color-extra-white font-roboto">
                  <div className="rounded-71xl [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-col items-center justify-between py-1 px-1.5 box-border min-h-[20px]">
                    <div className="relative tracking-[0.14px] leading-[12px]">
                      Done
                    </div>
                  </div>
                </div>
                <div className="absolute top-[429.3px] left-[625.2px] w-[156px] flex flex-row items-center justify-center">
                  <div className="flex-1 relative tracking-[0.1px] leading-[20px]">
                    James Dalton
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-12 rounded-md overflow-hidden shrink-0 flex flex-row items-center justify-center py-3 px-6 box-border gap-[0px_10px] max-w-full text-mini text-dimgray font-light-basic-typography-h4-heading mq450:h-auto">
            <div className="flex-1 flex flex-row items-center justify-start gap-[0px_4px] min-h-[24px] max-w-[calc(100%_-_796px)] shrink-0 mq450:flex-wrap">
              <div className="relative leading-[22px]">{`© 2023, Empowered `}</div>
              <div className="relative leading-[22px] text-gray-300">
                <span>{` `}</span>
                <span className="font-medium text-light-solid-color-danger-danger-500-base">
                  Entrusted Insights
                </span>
              </div>
            </div>
            <div className="flex-[0.9389] flex flex-row items-center justify-end py-0 px-6 box-border gap-[11px] max-w-[calc(100%_-_796px)] shrink-0 text-right mq825:flex-wrap">
              <div className="flex flex-row items-center justify-end p-[5px]">
                <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  License
                </div>
              </div>
              <div className="flex flex-row items-center justify-end py-[5px] pr-[5px] pl-0.5">
                <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Term & Conditions`}</div>
              </div>
              <div className="flex flex-row items-center justify-end p-[5px]">
                <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Documentation
                </div>
              </div>
              <div className="flex flex-row items-center justify-end p-[5px]">
                <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Support
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
