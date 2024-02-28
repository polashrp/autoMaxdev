import type { NextPage } from "next";
import { useState, useRef, useCallback } from "react";
import MonitoringType from "./monitoring-type";
import PortalPopup from "./portal-popup";
import ListeningType from "./listening-type";
import SchduleDownload from "./schdule-download";

export type FilesMonitoringType = {
  onClose?: () => void;
};

const FilesMonitoring: NextPage<FilesMonitoringType> = ({ onClose }) => {
  const iconButtonRef = useRef<HTMLButtonElement>(null);
  const [isMonitoringTypePopupOpen, setMonitoringTypePopupOpen] =
    useState(false);
  const iconButton1Ref = useRef<HTMLButtonElement>(null);
  const [isListeningTypeOpen, setListeningTypeOpen] = useState(false);
  const iconButton2Ref = useRef<HTMLButtonElement>(null);
  const [isSchduleDownloadPopupOpen, setSchduleDownloadPopupOpen] =
    useState(false);

  const openMonitoringTypePopup = useCallback(() => {
    setMonitoringTypePopupOpen(true);
  }, []);

  const closeMonitoringTypePopup = useCallback(() => {
    setMonitoringTypePopupOpen(false);
  }, []);

  const openListeningType = useCallback(() => {
    setListeningTypeOpen(true);
  }, []);

  const closeListeningType = useCallback(() => {
    setListeningTypeOpen(false);
  }, []);

  const openSchduleDownloadPopup = useCallback(() => {
    setSchduleDownloadPopupOpen(true);
  }, []);

  const closeSchduleDownloadPopup = useCallback(() => {
    setSchduleDownloadPopupOpen(false);
  }, []);

  const onButtonClick = useCallback(() => {
    // Please sync "file management" to the project
  }, []);

  return (
    <>
      <div className="w-[776px] rounded-md bg-light-solid-color-extra-white shadow-[0px_5px_20px_rgba(75,_70,_92,_0.4)] flex flex-col items-center justify-center py-[25px] px-11 box-border gap-[16px_0px] max-w-full max-h-full overflow-auto text-left text-7xl text-mont font-light-basic-typography-h4-heading">
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-2.5 gap-[12px_0px] text-center">
          <div className="self-stretch relative leading-[36px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.65),_rgba(0,_0,_0,_0.65)),_#8692d0] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Files Monitoring
          </div>
          <div className="self-stretch relative text-mini leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.65),_rgba(0,_0,_0,_0.65)),_#8692d0] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Manage How Files Are Detected
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-3 px-0 pb-[200px] gap-[12px] text-smi">
          <div className="w-[190px] flex flex-col items-start justify-start gap-[4px_0px]">
            <div className="self-stretch relative">Monitoring</div>
            <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-semi-dark">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 gap-[0px_6px]">
                <input
                  className="[border:none] [outline:none] font-light-basic-typography-h4-heading text-smi bg-[transparent] flex-1 relative leading-[21px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left"
                  placeholder="Monitoring Type"
                  type="text"
                />
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] w-4 h-4 flex flex-row items-center justify-center relative gap-[0px_10px]"
                  ref={iconButtonRef}
                  onClick={openMonitoringTypePopup}
                >
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
            </div>
            <div className="w-[400px] relative text-light-solid-color-danger-danger-500-base hidden">
              Message
            </div>
          </div>
          <div className="w-[190px] flex flex-col items-start justify-start gap-[4px_0px]">
            <div className="self-stretch relative whitespace-pre-wrap">
              Listening Type
            </div>
            <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-semi-dark">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 gap-[0px_6px]">
                <input
                  className="[border:none] [outline:none] font-light-basic-typography-h4-heading text-smi bg-[transparent] flex-1 relative leading-[21px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left"
                  placeholder="Select Action"
                  type="text"
                />
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] w-4 h-4 flex flex-row items-center justify-center relative gap-[0px_10px]"
                  ref={iconButton1Ref}
                  onClick={openListeningType}
                >
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
            </div>
            <div className="w-[400px] relative text-light-solid-color-danger-danger-500-base hidden">
              Message
            </div>
          </div>
          <div className="w-[190px] flex flex-col items-start justify-start gap-[4px_0px]">
            <div className="self-stretch relative">Schdule Download</div>
            <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-semi-dark">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 gap-[0px_6px]">
                <input
                  className="[border:none] [outline:none] font-light-basic-typography-h4-heading text-smi bg-[transparent] flex-1 relative leading-[21px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left"
                  placeholder="Select Schedule Time"
                  type="text"
                />
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] w-4 h-4 flex flex-row items-center justify-center relative gap-[0px_10px]"
                  ref={iconButton2Ref}
                  onClick={openSchduleDownloadPopup}
                >
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
            </div>
            <div className="w-[400px] relative text-light-solid-color-danger-danger-500-base hidden">
              Message
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.05))] flex flex-col items-start justify-start py-3.5 px-[19px] box-border gap-[12px] max-w-[620px] text-base text-gray-100 font-mont">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px]">
            <b className="w-[239.9px] relative inline-block text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] h-[22px] shrink-0 opacity-[0.6]">
              Listener
            </b>
          </div>
          <div className="w-[582px] rounded-lg bg-light-solid-color-extra-white box-border hidden flex-row items-center justify-between py-3 px-2 text-lg font-h5-heading1 border-[1px] border-solid border-gray-100">
            <div className="flex flex-row flex-wrap items-center justify-start gap-[6px]">
              <img
                className="w-6 relative h-6"
                alt=""
                src="/feathericon--clock.svg"
              />
              <b className="w-[460px] relative flex items-center shrink-0">
                Date and Time
              </b>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-col items-start justify-start p-[15px] gap-[4px_0px] text-sm text-mont border-[1px] border-solid border-light-solid-color-extra-divider">
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-center py-2.5 px-0">
                <div className="relative">Delay job</div>
              </div>
              <input
                className="[outline:none] bg-light-solid-color-extra-white w-[106px] rounded-md box-border h-7 flex flex-col items-center justify-center border-[1px] border-solid border-light-solid-color-extra-divider"
                type="text"
              />
              <div className="flex flex-row items-center justify-center p-2.5">
                <div className="relative">Minutes</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0px_100px] min-w-[230px]">
              <div className="flex-1 relative">Listener Action</div>
              <div className="flex-1 relative">File Created, File Modified</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-center pt-2.5 px-0 pb-0 gap-[0px_16px]">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-center"
            onClick={onButtonClick}
          >
            <div className="flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-left">
                Save
              </div>
            </div>
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-left">
                Cancel
              </div>
            </div>
          </button>
        </div>
      </div>
      {isMonitoringTypePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom left"
          relativeLayerRef={iconButtonRef}
          onOutsideClick={closeMonitoringTypePopup}
        >
          <MonitoringType onClose={closeMonitoringTypePopup} />
        </PortalPopup>
      )}
      {isListeningTypeOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom left"
          relativeLayerRef={iconButton1Ref}
          onOutsideClick={closeListeningType}
        >
          <ListeningType onClose={closeListeningType} />
        </PortalPopup>
      )}
      {isSchduleDownloadPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom left"
          relativeLayerRef={iconButton2Ref}
          onOutsideClick={closeSchduleDownloadPopup}
        >
          <SchduleDownload onClose={closeSchduleDownloadPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FilesMonitoring;
