import type { NextPage } from "next";
import { useState, useRef, useCallback } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FMMonitoringType2 from "./f-m-monitoring-type2";
import PortalPopup from "./portal-popup";
import FMListeningType2 from "./f-m-listening-type2";
import FMSchduleDownload2 from "./f-m-schdule-download2";
import Days1 from "./days1";

export type FilesMonitoring2Type = {
  onClose?: () => void;
};

const FilesMonitoring2: NextPage<FilesMonitoring2Type> = ({ onClose }) => {
  const iconButtonRef = useRef<HTMLButtonElement>(null);
  const [isFMMonitoringType1PopupOpen, setFMMonitoringType1PopupOpen] =
    useState(false);
  const iconButton1Ref = useRef<HTMLButtonElement>(null);
  const [isFMListeningType1Open, setFMListeningType1Open] = useState(false);
  const iconButton2Ref = useRef<HTMLButtonElement>(null);
  const [isFMSchduleDownload1PopupOpen, setFMSchduleDownload1PopupOpen] =
    useState(false);
  const [dateTimeLblDateTimePickerValue, setDateTimeLblDateTimePickerValue] =
    useState(null);
  const [dateTimeLblDateTimePicker1Value, setDateTimeLblDateTimePicker1Value] =
    useState(null);
  const iconButton3Ref = useRef<HTMLButtonElement>(null);
  const [isDaysPopupOpen, setDaysPopupOpen] = useState(false);

  const openFMMonitoringType1Popup = useCallback(() => {
    setFMMonitoringType1PopupOpen(true);
  }, []);

  const closeFMMonitoringType1Popup = useCallback(() => {
    setFMMonitoringType1PopupOpen(false);
  }, []);

  const openFMListeningType1 = useCallback(() => {
    setFMListeningType1Open(true);
  }, []);

  const closeFMListeningType1 = useCallback(() => {
    setFMListeningType1Open(false);
  }, []);

  const openFMSchduleDownload1Popup = useCallback(() => {
    setFMSchduleDownload1PopupOpen(true);
  }, []);

  const closeFMSchduleDownload1Popup = useCallback(() => {
    setFMSchduleDownload1PopupOpen(false);
  }, []);

  const openDaysPopup = useCallback(() => {
    setDaysPopupOpen(true);
  }, []);

  const closeDaysPopup = useCallback(() => {
    setDaysPopupOpen(false);
  }, []);

  const onButtonClick = useCallback(() => {
    // Please sync "file management" to the project
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                    onClick={openFMMonitoringType1Popup}
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
                    onClick={openFMListeningType1}
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
                    onClick={openFMSchduleDownload1Popup}
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
          <div className="w-full rounded-xl [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.05))] flex flex-col items-start justify-start py-3.5 px-[19px] box-border gap-[12px] max-w-[620px] text-lg text-gray-100 font-mont">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[21px] text-base">
              <b className="flex-1 relative inline-block text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] h-[22px] opacity-[0.6]">
                Daily Job Schedule Name*
              </b>
            </div>
            <div className="w-[582px] rounded-lg bg-light-solid-color-extra-white box-border hidden flex-row items-center justify-between py-3 px-2 font-h5-heading1 border-[1px] border-solid border-gray-100">
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
            <div className="self-stretch rounded-lg bg-light-solid-color-extra-white flex flex-row items-center justify-start py-3 px-2.5 font-h5-heading1 border-[1px] border-solid border-light-solid-color-extra-divider">
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
            <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-col items-start justify-start p-[15px] gap-[4px_0px] text-smi text-black font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[21px]">Start</div>
                <div className="w-[246px]">
                  <DateTimePicker
                    label="Date and Time"
                    value={dateTimeLblDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setDateTimeLblDateTimePickerValue(newValue);
                    }}
                    sx={{}}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: false,
                        required: false,
                        autoFocus: false,
                        error: false,
                        color: "primary",
                        placeholder: "Date and Time",
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
                <div className="w-[190px] hidden flex-col items-start justify-start gap-[4px_0px] text-mont">
                  <div className="w-[67px] relative hidden">Monitoring</div>
                  <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start text-black border-[1px] border-solid border-light-solid-color-extra-semi-dark">
                    <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 gap-[0px_6px]">
                      <div className="flex-1 relative leading-[21px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Start Date and Time
                      </div>
                      <div className="w-4 h-4 flex flex-row items-center justify-center relative gap-[0px_10px] text-mini">
                        <div className="w-2.5 absolute !m-[0] top-[1px] left-[-13px] leading-[22px] font-semibold hidden z-[0]">
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
                      </div>
                    </div>
                  </div>
                  <div className="w-[400px] relative text-light-solid-color-danger-danger-500-base hidden">
                    Message
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between">
                <div className="relative leading-[21px]">End</div>
                <div className="w-[246px]">
                  <DateTimePicker
                    label="Date and Time"
                    value={dateTimeLblDateTimePicker1Value}
                    onChange={(newValue: any) => {
                      setDateTimeLblDateTimePicker1Value(newValue);
                    }}
                    sx={{}}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: false,
                        required: false,
                        autoFocus: false,
                        error: false,
                        color: "primary",
                        placeholder: "Date and Time",
                      },
                      openPickerIcon: {
                        component: () => <></>,
                      },
                    }}
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between text-sm text-mont font-mont">
                <div className="flex flex-row items-center justify-center py-2.5 px-0">
                  <div className="relative">Recur every:</div>
                </div>
                <input
                  className="[outline:none] bg-light-solid-color-extra-white w-[106px] rounded-md box-border h-7 flex flex-col items-center justify-center border-[1px] border-solid border-light-solid-color-extra-divider"
                  type="text"
                />
                <div className="flex flex-row items-center justify-center p-2.5">
                  <div className="relative">Days</div>
                </div>
              </div>
              <div className="w-[190px] flex flex-col items-start justify-start gap-[4px_0px] text-sm text-mont font-mont">
                <div className="self-stretch relative">Days</div>
                <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5 gap-[0px_6px]">
                    <input
                      className="[border:none] [outline:none] font-light-basic-typography-h4-heading text-smi bg-[transparent] flex-1 relative leading-[21px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left"
                      placeholder="Select Days"
                      type="text"
                    />
                    <button
                      className="cursor-pointer [border:none] p-0 bg-[transparent] w-4 h-4 flex flex-row items-center justify-center relative gap-[0px_10px]"
                      ref={iconButton3Ref}
                      onClick={openDaysPopup}
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
                <div className="w-[400px] relative text-smi font-light-basic-typography-h4-heading text-light-solid-color-danger-danger-500-base hidden">
                  Message
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-md box-border h-11 overflow-hidden shrink-0 flex flex-row flex-wrap items-center justify-start py-[7px] px-2 gap-[6px] border-[1px] border-solid border-light-solid-color-extra-divider">
              <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-danger-danger-16 flex-1 rounded flex flex-row items-center justify-between">
                <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                  Mon
                </div>
                <img className="w-3.5 relative h-3.5" alt="" src="/x2.svg" />
              </button>
              <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-danger-danger-16 flex-1 rounded flex flex-row items-center justify-between">
                <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                  Tu
                </div>
                <img className="w-3.5 relative h-3.5" alt="" src="/x2.svg" />
              </button>
              <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-danger-danger-16 flex-1 rounded flex flex-row items-center justify-between">
                <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                  Wed
                </div>
                <img className="w-3.5 relative h-3.5" alt="" src="/x2.svg" />
              </button>
              <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-danger-danger-16 flex-1 rounded flex flex-row items-center justify-between">
                <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                  Thru
                </div>
                <img className="w-3.5 relative h-3.5" alt="" src="/x2.svg" />
              </button>
              <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-danger-danger-16 flex-1 rounded flex flex-row items-center justify-between">
                <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                  Fri
                </div>
                <img className="w-3.5 relative h-3.5" alt="" src="/x2.svg" />
              </button>
              <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-danger-danger-16 flex-1 rounded flex flex-row items-center justify-between">
                <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                  Sat
                </div>
                <img className="w-3.5 relative h-3.5" alt="" src="/x2.svg" />
              </button>
              <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-danger-danger-16 flex-1 rounded flex flex-row items-center justify-between">
                <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                  Sun
                </div>
                <img className="w-3.5 relative h-3.5" alt="" src="/x2.svg" />
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between text-sm text-mont">
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
            <div className="self-stretch flex flex-row items-center justify-between text-sm text-mont">
              <div className="flex flex-row items-center justify-center py-2.5 px-0">
                <div className="relative">Repeat job</div>
              </div>
              <input
                className="[outline:none] bg-light-solid-color-extra-white w-[106px] rounded-md box-border h-7 flex flex-col items-center justify-center border-[1px] border-solid border-light-solid-color-extra-divider"
                type="text"
              />
              <div className="flex flex-row items-center justify-center p-2.5">
                <div className="relative">Hour</div>
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
        {isFMMonitoringType1PopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Bottom left"
            relativeLayerRef={iconButtonRef}
            onOutsideClick={closeFMMonitoringType1Popup}
          >
            <FMMonitoringType2 onClose={closeFMMonitoringType1Popup} />
          </PortalPopup>
        )}
        {isFMListeningType1Open && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Bottom left"
            relativeLayerRef={iconButton1Ref}
            onOutsideClick={closeFMListeningType1}
          >
            <FMListeningType2 onClose={closeFMListeningType1} />
          </PortalPopup>
        )}
        {isFMSchduleDownload1PopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Bottom left"
            relativeLayerRef={iconButton2Ref}
            onOutsideClick={closeFMSchduleDownload1Popup}
          >
            <FMSchduleDownload2 onClose={closeFMSchduleDownload1Popup} />
          </PortalPopup>
        )}
        {isDaysPopupOpen && (
          <PortalPopup
            overlayColor="rgba(113, 113, 113, 0.3)"
            placement="Bottom left"
            relativeLayerRef={iconButton3Ref}
            onOutsideClick={closeDaysPopup}
          >
            <Days1 onClose={closeDaysPopup} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default FilesMonitoring2;
