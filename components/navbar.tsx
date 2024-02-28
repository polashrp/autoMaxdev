import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Drowar from "./drowar";
import PortalDrawer from "./portal-drawer";

const Navbar: NextPage = () => {
  const [isDrowarOpen, setDrowarOpen] = useState(false);

  const openDrowar = useCallback(() => {
    setDrowarOpen(true);
  }, []);

  const closeDrowar = useCallback(() => {
    setDrowarOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] overflow-hidden flex flex-row flex-wrap items-start justify-start py-3 px-6 box-border gap-[0px_11px] max-w-full text-left text-mini text-light-solid-color-extra-white font-light-basic-typography-h4-heading">
        <div className="flex-1 flex flex-row items-center justify-center gap-[0px_10px] min-w-[887px] max-w-full mq1275:min-w-full">
          <div
            className="h-5 w-5 relative hidden cursor-pointer"
            onClick={openDrowar}
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
          </div>
          <div className="flex-1 flex flex-row items-center justify-start py-1.5 px-0 box-border gap-[0px_10px] max-w-full">
            <img className="h-[26px] w-[26px] relative" loading="lazy" alt="" />
            <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-[calc(100%_-_36px)]">{`Search `}</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-center text-smi">
          <div className="flex flex-row items-center justify-start gap-[0px_16px]">
            <div className="h-[26px] w-[26px] relative rounded-81xl overflow-hidden shrink-0">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#a8aaae]" />
                <div className="absolute h-[80.38%] w-[80.38%] top-[9.62%] right-[9.62%] bottom-[10%] left-[10%] rounded-81xl z-[1]" />
              </div>
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
                loading="lazy"
                alt=""
              />
            </div>
            <div className="flex flex-col items-end justify-start pt-[5px] pb-[13px] pr-[3px] pl-[15px] relative gap-[2px_0px]">
              <img
                className="w-full h-full absolute !m-[0] top-[0px] right-[-0.4px] bottom-[0px] left-[0.4px] max-w-full overflow-hidden max-h-full"
                alt=""
              />
              <img
                className="w-[18.8px] h-[19.5px] absolute !m-[0] bottom-[3.3px] left-[calc(50%_-_9.3px)] z-[1]"
                alt=""
                src="/path.svg"
              />
              <div className="h-1 flex flex-row items-start justify-start py-0 px-0.5 box-border">
                <img
                  className="h-[4.3px] w-[4.3px] relative z-[2]"
                  alt=""
                  src="/path4.svg"
                />
              </div>
              <img
                className="w-[2.2px] h-[2.2px] relative z-[2]"
                alt=""
                src="/shape1.svg"
              />
            </div>
            <div className="h-[27px] flex flex-row items-start justify-start pt-[5px] pb-1 pr-[3px] pl-1 box-border relative gap-[0px_5px]">
              <img
                className="h-full w-full absolute !m-[0] top-[0.5px] right-[-0.4px] bottom-[-0.5px] left-[0.4px] max-w-full overflow-hidden max-h-full"
                alt=""
              />
              <div className="h-[17px] w-[7px] relative">
                <div className="absolute top-[0.8px] left-[-0.2px] rounded-12xs box-border w-[8.5px] h-[8.5px] z-[1] border-[2px] border-solid border-dark-solid-color-extra-card-background" />
                <div className="absolute top-[11.7px] left-[-0.2px] rounded-12xs box-border w-[8.5px] h-[8.5px] z-[1] border-[2px] border-solid border-dark-solid-color-extra-card-background" />
              </div>
              <div className="h-[18px] flex flex-col items-start justify-start gap-[5px_0px]">
                <div className="w-[8.5px] h-[8.5px] relative rounded-12xs box-border z-[1] border-[2px] border-solid border-dark-solid-color-extra-card-background" />
                <img
                  className="w-[6.5px] h-[6.5px] relative z-[1]"
                  alt=""
                  src="/shape2.svg"
                />
              </div>
            </div>
            <div className="h-[38px] flex flex-col items-center justify-center pt-[5px] pb-1.5 pr-0.5 pl-0 box-border">
              <div className="h-[27px] flex flex-row items-start justify-start relative">
                <img
                  className="h-[26px] w-[26px] relative"
                  loading="lazy"
                  alt=""
                />
                <div className="h-[18px] w-[18px] absolute !m-[0] top-[-4.7px] right-[-6.7px] z-[1]">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-light-solid-color-danger-danger-500-base w-full h-full" />
                  <div className="absolute top-[-35.3px] left-[1382.1px] leading-[14px] font-medium inline-block w-[9px] h-3.5 z-[1]">
                    4
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[38px] w-[38px] relative">
              <div className="absolute h-full w-full top-[-1.32%] right-[0%] bottom-[1.32%] left-[0%] rounded-81xl overflow-hidden">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0.2)),_#7367f0]" />
                  <div className="absolute h-[80.53%] w-[80.53%] top-[9.74%] right-[9.74%] bottom-[9.74%] left-[9.74%] rounded-81xl z-[1]" />
                </div>
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[2]"
                  alt=""
                />
              </div>
              <div className="absolute h-[31.58%] w-[31.58%] top-[75.53%] right-[-4.74%] bottom-[-7.11%] left-[73.16%] rounded-[50%] bg-light-solid-color-success-success-500-base box-border z-[3] border-[0px] border-solid border-light-solid-color-extra-white" />
            </div>
          </div>
        </div>
      </div>
      {isDrowarOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrowar}
        >
          <Drowar onClose={closeDrowar} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Navbar;
