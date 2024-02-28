import type { NextPage } from "next";

const SearchButtonLicenseButtonM: NextPage = () => {
  return (
    <header className="self-stretch flex flex-col items-start justify-start pt-0 px-6 pb-2 box-border gap-[26px_0px] max-w-full text-left text-5xl text-colors-3text-primary font-h5-heading1">
      <div className="self-stretch box-border flex flex-row flex-wrap items-start justify-between py-3 px-0 max-w-full gap-[20px] border-b-[1px] border-solid border-gainsboro">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[0px_20px] max-w-full">
          <h2 className="m-0 relative text-inherit leading-[28.8px] font-semibold font-inherit whitespace-nowrap">
            Welcome back, Lucy
          </h2>
          <div className="relative text-sm tracking-[0.1px] leading-[20px] whitespace-nowrap mq1575:hidden">
            Monday, 29 April 2019
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0px_8px]">
          <div className="flex flex-row items-start justify-start relative gap-[0px_10px]">
            <img className="h-[30px] w-[30px] relative" alt="" />
            <img
              className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/iconsicfilter-listdefault@2x.png"
            />
          </div>
          <div className="flex flex-row items-start justify-start relative gap-[0px_10px]">
            <img className="h-[30px] w-[30px] relative" alt="" />
            <img
              className="h-5 w-5 absolute !m-[0] top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/iconsicloop@2x.png"
            />
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start">
            <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_0px_14px_rgba(53,_64,_82,_0.05)] flex flex-row items-center justify-start py-1 pr-1.5 pl-2 whitespace-nowrap">
              <div className="relative text-smi tracking-[0.3px] leading-[22px] font-semibold font-h5-heading1 text-light-solid-color-extra-white text-left">
                Today: April 29
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_7.8px] max-w-full text-mini font-light-basic-typography-h4-heading">
        <div className="flex flex-row items-center justify-start relative gap-[0px_10px]">
          <img className="h-5 w-5 relative" alt="" />
          <img
            className="h-[37.5%] w-9/12 absolute !m-[0] top-[12.5%] right-[12.5%] bottom-[50%] left-[12.5%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/path.svg"
          />
          <img
            className="h-[37.5%] w-[58.5%] absolute !m-[0] top-[50%] right-[20.5%] bottom-[12.5%] left-[21%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/path5.svg"
          />
          <img
            className="h-[33.5%] w-3/12 absolute !m-[0] top-[54%] right-[37.5%] bottom-[12.5%] left-[37.5%] max-w-full overflow-hidden max-h-full z-[2]"
            alt=""
            src="/path6.svg"
          />
        </div>
        <div className="relative leading-[22px]">Home</div>
        <div className="flex flex-row items-center justify-start relative gap-[0px_10px]">
          <img className="h-4 w-4 relative" alt="" />
          <img
            className="h-3/6 w-3/12 absolute !m-[0] top-[25%] right-[37.5%] bottom-[25%] left-[37.5%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/path.svg"
          />
        </div>
        <div className="relative leading-[22px] whitespace-nowrap">
          Job management
        </div>
        <div className="flex flex-row items-center justify-start relative gap-[0px_10px]">
          <img className="h-4 w-4 relative" alt="" />
          <img
            className="h-3/6 w-3/12 absolute !m-[0] top-[25%] right-[37.5%] bottom-[25%] left-[37.5%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/path.svg"
          />
        </div>
        <div className="relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
          Job Overview
        </div>
      </div>
    </header>
  );
};

export default SearchButtonLicenseButtonM;
