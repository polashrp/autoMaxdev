import type { NextPage } from "next";
import { useState, useRef, useCallback } from "react";
import { Radio, FormControlLabel } from "@mui/material";
import SelactDropdownList from "./selact-dropdown-list";
import PortalPopup from "./portal-popup";
import CompareBy from "./compare-by";
import ManageDuplicates from "./manage-duplicates";

const FileManagementSettings: NextPage = () => {
  const formSelectRef = useRef<HTMLButtonElement>(null);
  const [isSelactDropdownListOpen, setSelactDropdownListOpen] = useState(false);
  const formSelect1Ref = useRef<HTMLButtonElement>(null);
  const [isCompareByPopupOpen, setCompareByPopupOpen] = useState(false);
  const frameContainerRef = useRef<HTMLDivElement>(null);
  const [isManageDuplicatesPopupOpen, setManageDuplicatesPopupOpen] =
    useState(false);

  const openSelactDropdownList = useCallback(() => {
    setSelactDropdownListOpen(true);
  }, []);

  const closeSelactDropdownList = useCallback(() => {
    setSelactDropdownListOpen(false);
  }, []);

  const openCompareByPopup = useCallback(() => {
    setCompareByPopupOpen(true);
  }, []);

  const closeCompareByPopup = useCallback(() => {
    setCompareByPopupOpen(false);
  }, []);

  const openManageDuplicatesPopup = useCallback(() => {
    setManageDuplicatesPopupOpen(true);
  }, []);

  const closeManageDuplicatesPopup = useCallback(() => {
    setManageDuplicatesPopupOpen(false);
  }, []);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "file management" to the project
  }, []);

  return (
    <>
      <div className="w-[1440px] rounded-md bg-light-solid-color-extra-white shadow-[0px_5px_20px_rgba(75,_70,_92,_0.4)] flex flex-col items-center justify-start py-[52px] px-6 box-border gap-[16px_0px] text-left text-mini text-dark-solid-color-extra-body-background font-light-basic-typography-h4-heading">
        <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-2.5 gap-[12px_0px] text-center text-7xl">
          <div className="self-stretch relative leading-[36px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.65),_rgba(0,_0,_0,_0.65)),_#8692d0] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            File Management Settings
          </div>
          <div className="self-stretch relative text-mini leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0.65),_rgba(0,_0,_0,_0.65)),_#8692d0] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Create Actions And Events For Files Management
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start py-0 px-[17px] text-sm text-mont font-mont border-t-[2px] border-solid border-light-solid-color-extra-divider border-b-[2px]">
          <div className="w-[309px] h-[350px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border gap-[12px_0px]">
            <div className="relative leading-[100%]">File Action</div>
            <div className="w-[309px] rounded-md bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
              <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-2 gap-[0px_6px]">
                <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-warning-warning-16 rounded flex flex-row items-center justify-start gap-[0px_6px]">
                  <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                    Check Duplicate Files
                  </div>
                  <img className="w-3.5 relative h-3.5" alt="" src="/x.svg" />
                </button>
                <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-warning-warning-16 rounded flex flex-row items-center justify-start gap-[0px_6px]">
                  <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                    Group Files
                  </div>
                  <img className="w-3.5 relative h-3.5" alt="" src="/x.svg" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-mini font-light-basic-typography-h4-heading">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-60 rounded flex flex-row items-start justify-start"
                ref={formSelectRef}
                onClick={openSelactDropdownList}
              >
                <div className="flex-1 rounded bg-light-solid-color-extra-white overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5 gap-[0px_8px]">
                    <div className="flex-1 relative text-smi leading-[21px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                      Select Action
                    </div>
                    <img
                      className="w-4 relative h-4"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
              </button>
              <div className="w-60 rounded bg-light-solid-color-extra-white shadow-[0px_4px_16px_rgba(165,_163,_174,_0.45)] overflow-hidden hidden flex-col items-start justify-start p-2 box-border gap-[15px_0px]">
                <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                  <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                    <img
                      className="w-3.5 relative h-3.5"
                      alt=""
                      src="/check.svg"
                    />
                  </div>
                  <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-pre-wrap">
                    Check Duplicate
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                  <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                    <img
                      className="w-3.5 relative h-3.5"
                      alt=""
                      src="/check.svg"
                    />
                  </div>
                  <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Group Files
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                  <div className="w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                  <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Archive Files
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                  <div className="w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                  <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Rename File
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                  <div className="w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                  <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Edit Files
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch flex flex-col items-center justify-center">
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
              <div className="overflow-hidden flex flex-row items-center justify-start relative gap-[0px_10px]">
                <img className="w-[30px] relative h-[30px] z-[0]" alt="" />
                <img
                  className="w-9/12 absolute !m-[0] h-[91.67%] top-[0%] right-[12.33%] bottom-[8.33%] left-[12.67%] max-w-full overflow-hidden max-h-full z-[1]"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Organize File
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
            <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start text-xl font-h5-heading1">
              <div className="self-stretch flex flex-row items-center justify-start text-smi font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                <div className="self-stretch w-[110px] flex flex-row items-center justify-start py-2 px-5 box-border gap-[0px_4px]">
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
                    variable
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
                <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-0 pl-5 gap-[0px_4px]">
                  <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    move file to
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
                <div className="w-[110px] flex flex-row items-start justify-center py-[16.5px] px-5 box-border text-right">
                  <div className="w-[458px] flex flex-row items-start justify-center">
                    <div className="relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      ACTIONS
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                  <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    #50210
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      *test.xml, test*.csv,*test*.*
                    </div>
                  </div>
                  <div className="w-[442px] hidden flex-row items-center justify-start gap-[0px_4px] text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading">
                    <div className="flex-1 relative leading-[21px]">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\folder`
                    </div>
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
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[110px] flex flex-row items-start justify-center py-4 px-5 box-border gap-[0px_16px]">
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
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
                <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                  <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    #50210
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      *test.xml, test*.csv,*test*.*
                    </div>
                  </div>
                  <div className="w-[442px] hidden flex-row items-center justify-start gap-[0px_4px] text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading">
                    <div className="flex-1 relative leading-[21px]">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\folder`
                    </div>
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
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[110px] flex flex-row items-start justify-center py-4 px-5 box-border gap-[0px_16px]">
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
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
                <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                  <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    #50210
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      *test.xml, test*.csv,*test*.*
                    </div>
                  </div>
                  <div className="w-[442px] hidden flex-row items-center justify-start gap-[0px_4px] text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading">
                    <div className="flex-1 relative leading-[21px]">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\folder`
                    </div>
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
                  <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[110px] flex flex-row items-start justify-center py-4 px-5 box-border gap-[0px_16px]">
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
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
        <div className="self-stretch flex flex-col items-center justify-center py-5 px-0">
          <div className="self-stretch flex flex-col items-center justify-center">
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
                className="w-[30px] relative h-[30px]"
                alt=""
                src="/archive.svg"
              />
              <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Archive Files
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
            <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start text-xl">
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
                    New Folder Location
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
                <div className="self-stretch w-[220px] flex flex-row items-center justify-between py-2 pr-[9px] pl-5 box-border">
                  <div className="relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    variables
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
                <div className="w-[117px] flex flex-row items-center justify-start py-[16.5px] px-5 box-border">
                  <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    ACTIONS
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini">
                  <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    #50210
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] font-h5-heading1 border-l-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="w-[268px] box-border flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\from
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] font-h5-heading1 border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\archived
                    </div>
                    <img className="w-6 relative h-6" alt="" src="/dots.svg" />
                  </div>
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[220px] flex flex-row items-start justify-start py-4 px-2.5 box-border text-smi">
                  <div className="w-[185px] flex flex-col items-start justify-start gap-[4px_0px]">
                    <div className="self-stretch relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]" />
                    <div className="self-stretch rounded bg-light-solid-color-extra-white flex flex-row items-center justify-start text-sm border-b-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[24px] font-light">
                          csv, xml,jpg
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[118px] box-border flex flex-row items-center justify-start py-4 px-5 gap-[0px_16px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
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
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
                <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini">
                  <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    #50210
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] font-h5-heading1 border-l-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="w-[268px] box-border flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\from
                    </div>
                    <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                  </div>
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] font-h5-heading1 border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\archived
                    </div>
                    <img className="w-6 relative h-6" alt="" src="/dots.svg" />
                  </div>
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[220px] flex flex-row items-start justify-start py-4 px-2.5 box-border text-smi">
                  <div className="w-[185px] flex flex-col items-start justify-start gap-[4px_0px]">
                    <div className="self-stretch relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]" />
                    <div className="self-stretch rounded bg-light-solid-color-extra-white flex flex-row items-center justify-start text-sm border-b-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[24px] font-light">
                          csv, xml,jpg
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[118px] box-border flex flex-row items-center justify-start py-4 px-5 gap-[0px_16px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
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
                    src="/dotsvertical1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini">
                  <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    #50210
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] font-h5-heading1 border-l-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="w-[268px] box-border flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\from
                    </div>
                    <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                  </div>
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] font-h5-heading1 border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\archived
                    </div>
                    <img className="w-6 relative h-6" alt="" src="/dots.svg" />
                  </div>
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[220px] flex flex-row items-start justify-start py-4 px-2.5 box-border text-smi">
                  <div className="w-[185px] flex flex-col items-start justify-start gap-[4px_0px]">
                    <div className="self-stretch relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]" />
                    <div className="self-stretch rounded bg-light-solid-color-extra-white flex flex-row items-center justify-start text-sm border-b-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[24px] font-light">
                          csv, xml,jpg
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[118px] box-border flex flex-row items-center justify-start py-4 px-5 gap-[0px_16px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
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
                    src="/dotsvertical1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="self-stretch flex flex-col items-center justify-start">
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
                className="w-[30px] relative h-[30px]"
                alt=""
                src="/filesymlink.svg"
              />
              <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Rename Files
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
            <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start text-xl font-h5-heading1">
              <div className="self-stretch flex flex-row items-center justify-start text-smi font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
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
                    current name
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
                <div className="self-stretch w-[236px] hidden flex-row items-center justify-start py-2 pr-[9px] pl-5 box-border gap-[0px_4px]">
                  <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    variables
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
                <div className="w-[110px] flex flex-row items-center justify-center py-[16.5px] px-5 box-border">
                  <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    ACTIONS
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
                <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                  <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    #50210
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\Filename1.csv
                    </div>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\Test.csv
                    </div>
                    <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                  </div>
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[111px] box-border flex flex-row items-center justify-center py-4 px-5 gap-[0px_16px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
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
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
                <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                  <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    #50211
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\media.xml
                    </div>
                    <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                  </div>
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\testingdile.xml
                    </div>
                    <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                  </div>
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[111px] box-border flex flex-row items-center justify-center py-4 px-5 gap-[0px_16px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
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
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
                <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                  <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    #50212
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\shet1.img
                    </div>
                    <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                  </div>
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x from
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                  <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      \\server_01\folder\path\mediafile01.img
                    </div>
                    <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                  </div>
                  <div className="w-[268px] flex flex-row items-center justify-start gap-[0px_4px]">
                    <div className="flex-1 relative leading-[24px] font-semibold">
                      Clean Files Older Than x Days
                    </div>
                    <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                      <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                        <div className="flex-1 relative leading-[21px]">30</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[111px] box-border flex flex-row items-center justify-center py-4 px-5 gap-[0px_16px] border-l-[1px] border-solid border-light-solid-color-extra-divider">
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
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
        <div className="self-stretch flex flex-col items-start justify-center text-mont">
          <div className="self-stretch flex flex-col items-start justify-start">
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
                className="w-[30px] relative h-[30px]"
                alt=""
                src="/files.svg"
              />
              <div className="flex-1 relative leading-[22px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Check For Duplicate
              </div>
              <div className="hidden flex-row items-center justify-start py-[13px] px-5">
                <div className="rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] flex flex-row items-center justify-center opacity-[0.65]">
                  <div className="flex flex-row items-center justify-center p-1.5">
                    <img
                      className="w-[18px] relative h-[18px]"
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                </div>
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
            <div className="self-stretch h-[311px] flex flex-row flex-wrap items-center justify-start py-0 px-[17px] box-border gap-[16px] text-sm font-mont">
              <div className="self-stretch flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 gap-[12px_0px]">
                  <div className="relative leading-[100%]">
                    Compare Files By
                  </div>
                  <div className="w-[250px] rounded-md bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-2 gap-[0px_6px]">
                      <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-warning-warning-16 rounded flex flex-row items-center justify-start gap-[0px_6px]">
                        <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-light-solid-color-danger-danger-500-base text-left">
                          File Name
                        </div>
                        <img
                          className="w-3.5 relative h-3.5"
                          alt=""
                          src="/x1.svg"
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-[5px] px-2.5 bg-light-opacity-color-warning-warning-16 rounded flex flex-row items-center justify-start gap-[0px_6px]">
                        <div className="relative text-smi leading-[14px] font-semibold font-light-basic-typography-h4-heading text-light-solid-color-danger-danger-500-base text-left">
                          Size
                        </div>
                        <img
                          className="w-3.5 relative h-3.5"
                          alt=""
                          src="/x1.svg"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start text-mini font-light-basic-typography-h4-heading">
                    <button
                      className="cursor-pointer [border:none] p-0 bg-[transparent] w-60 rounded flex flex-row items-start justify-start"
                      ref={formSelect1Ref}
                      onClick={openCompareByPopup}
                    >
                      <div className="flex-1 rounded bg-light-solid-color-extra-white overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                        <div className="flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5 gap-[0px_8px]">
                          <div className="flex-1 relative text-smi leading-[21px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                            Compare By
                          </div>
                          <img
                            className="w-4 relative h-4"
                            alt=""
                            src="/chevrondown.svg"
                          />
                        </div>
                      </div>
                    </button>
                    <div className="w-60 rounded bg-light-solid-color-extra-white shadow-[0px_4px_16px_rgba(165,_163,_174,_0.45)] overflow-hidden hidden flex-col items-start justify-start p-2 box-border gap-[15px_0px]">
                      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                        <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                          <img
                            className="w-3.5 relative h-3.5"
                            alt=""
                            src="/check.svg"
                          />
                        </div>
                        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                          File Name
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                        <div className="w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                          Last Modified
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                        <div className="w-[18px] rounded [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] h-[18px] flex flex-row items-center justify-center p-0.5 box-border">
                          <img
                            className="w-3.5 relative h-3.5"
                            alt=""
                            src="/check.svg"
                          />
                        </div>
                        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                          Size
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
                        <div className="w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400" />
                        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                          Hash
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                <div className="self-stretch flex flex-col items-start justify-start pt-3 px-0 pb-0 relative gap-[14px_0px]">
                  <div className="relative leading-[100%] z-[0]">Action</div>
                  <div
                    className="h-[35px] flex flex-col items-start justify-start cursor-pointer z-[1]"
                    ref={frameContainerRef}
                    onClick={openManageDuplicatesPopup}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-60 flex-1 rounded flex flex-row items-start justify-start">
                      <div className="self-stretch flex-1 rounded bg-light-solid-color-extra-white overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-light-solid-color-extra-divider">
                        <div className="flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5 gap-[0px_8px]">
                          <div className="flex-1 relative text-smi leading-[21px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
                            Manage Duplicates
                          </div>
                          <img
                            className="w-4 relative h-4"
                            alt=""
                            src="/chevrondown.svg"
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="w-[236px] !m-[0] absolute top-[74.5px] left-[2px] rounded shadow-[0px_4px_16px_rgba(165,_163,_174,_0.45)] h-[175px] overflow-hidden shrink-0 hidden flex-col items-start justify-start py-2 px-0 box-border gap-[4px_0px] z-[2] text-mini text-light-solid-color-extra-white font-light-basic-typography-h4-heading">
                    <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-start justify-start py-2 px-4">
                      <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Stop Job
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-start justify-start py-2 px-4">
                      <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Overwrite
                      </div>
                    </div>
                    <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-start justify-start py-2 px-4">
                      <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Ignore
                      </div>
                    </div>
                    <div className="self-stretch rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-start py-2 px-4">
                      <div className="flex-1 relative leading-[22px]">
                        Move duplicate Files only
                      </div>
                    </div>
                    <div className="w-[236px] rounded-md bg-light-opacity-color-primary-primary-8 hidden flex-row items-center justify-start py-2 px-4 box-border">
                      <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Rename Files
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-60 h-[81px] hidden flex-row items-start justify-start gap-[0px_28px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12px_0px] md:w-6/12 sm:w-full">
                    <div className="relative leading-[100%]">
                      Source SFTP Folder
                    </div>
                    <div className="self-stretch rounded-lg bg-silver h-10 flex flex-row items-start justify-start text-smi font-light-basic-typography-h4-heading">
                      <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border h-10 overflow-hidden flex flex-row items-start justify-start border-[2px] border-solid border-light-solid-color-extra-divider">
                        <div className="flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5 gap-[0px_8px]">
                          <div className="flex-1 relative leading-[21px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            Source SFTP Folder
                          </div>
                          <img
                            className="w-4 relative h-4"
                            alt=""
                            src="/dots2.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[12px_0px] md:w-6/12 sm:w-full">
                      <div className="relative leading-[100%]">
                        Target Local Folder
                      </div>
                      <div className="self-stretch rounded-lg bg-silver h-10 flex flex-row items-start justify-start text-smi font-light-basic-typography-h4-heading">
                        <div className="flex-1 rounded-md bg-light-solid-color-extra-white box-border h-10 overflow-hidden flex flex-row items-start justify-start border-[2px] border-solid border-light-solid-color-extra-divider">
                          <div className="flex-1 rounded-sm overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5 gap-[0px_8px]">
                            <div className="flex-1 relative leading-[21px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                              Local Folder
                            </div>
                            <img
                              className="w-4 relative h-4"
                              alt=""
                              src="/dots3.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start text-xl text-dark-solid-color-extra-body-background font-h5-heading1">
            <div className="self-stretch flex flex-row items-center justify-start text-smi font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
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
              <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 px-5 gap-[0px_4px]">
                <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Compare folder
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
              <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-0 pl-5 gap-[0px_4px]">
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
              <div className="self-stretch flex-1 flex flex-row items-center justify-start py-2 pr-[9px] pl-5 gap-[0px_4px]">
                <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Move duplicate
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
              <div className="w-[110px] flex flex-row items-start justify-center py-[16.5px] px-5 box-border">
                <div className="flex-1 relative tracking-[1px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  ACTIONS
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start border-r-[1px] border-solid border-light-solid-color-extra-divider border-b-[1px] border-l-[1px]">
              <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                  #50210
                </div>
              </div>
              <div className="self-stretch w-[199px] box-border flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                <FormControlLabel
                  label="Single Folder"
                  control={<Radio color="error" />}
                />
                <FormControlLabel
                  label="Multiple Folders"
                  control={<Radio color="error" checked />}
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px]">
                <div className="w-[268px] box-border flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    \\server_01\folder\path\archived
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
                <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4px]">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Clean Files Older Than x Days
                  </div>
                  <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                      <div className="flex-1 relative leading-[21px]">30</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    \\server_01\folder\path\archived
                  </div>
                  <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4px]">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Clean Files Older Than x Days
                  </div>
                  <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                      <div className="flex-1 relative leading-[21px]">30</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    \\server_01\folder\path\archived
                  </div>
                  <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4px]">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Clean Files Older Than x Days
                  </div>
                  <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                      <div className="flex-1 relative leading-[21px]">30</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[110px] flex flex-row items-start justify-center py-4 px-5 box-border gap-[0px_16px]">
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
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
              <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                  #50211
                </div>
              </div>
              <div className="self-stretch w-[199px] box-border flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                <FormControlLabel
                  label="Single Folder"
                  control={<Radio color="primary" checked />}
                />
                <FormControlLabel
                  label="Multiple Folders"
                  control={<Radio color="primary" />}
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px]">
                <div className="w-[268px] box-border flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    \\server_01\folder\path\archived
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
                <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4px]">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Clean Files Older Than x Days
                  </div>
                  <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                      <div className="flex-1 relative leading-[21px]">30</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-start py-4 px-2.5 gap-[0px_8px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                <div className="flex-1 relative leading-[24px] font-semibold">
                  Disabled
                </div>
                <img className="w-6 relative h-6" alt="" src="/dots4.svg" />
              </div>
              <div className="self-stretch flex-1 flex flex-row items-center justify-start py-4 px-2.5 gap-[0px_8px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                <div className="flex-1 relative leading-[24px] font-semibold">
                  Disabled
                </div>
                <img className="w-6 relative h-6" alt="" src="/dots4.svg" />
              </div>
              <div className="w-[110px] flex flex-row items-start justify-center py-4 px-5 box-border gap-[0px_16px]">
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
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
              <div className="w-[110px] flex flex-row items-center justify-start py-4 pr-2.5 pl-5 box-border text-mini font-light-basic-typography-h4-heading">
                <div className="w-[70px] relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                  #50212
                </div>
              </div>
              <div className="self-stretch w-[199px] box-border flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                <FormControlLabel
                  label="Single Folder"
                  control={<Radio color="primary" />}
                />
                <FormControlLabel
                  label="Multiple Folders"
                  control={<Radio color="primary" checked />}
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px]">
                <div className="w-[268px] box-border flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    \\server_01\folder\path\archived
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
                <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4px]">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Clean Files Older Than x Days
                  </div>
                  <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                      <div className="flex-1 relative leading-[21px]">30</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                <div className="w-[268px] box-border flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    \\server_01\folder\path\archived
                  </div>
                  <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4px]">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Clean Files Older Than x Days
                  </div>
                  <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                      <div className="flex-1 relative leading-[21px]">30</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center py-4 px-2.5 gap-[8px_0px] border-r-[1px] border-solid border-light-solid-color-extra-divider border-l-[1px]">
                <div className="w-[268px] box-border flex flex-row items-center justify-start pt-0 px-0 pb-[5px] gap-[0px_8px] border-b-[1px] border-solid border-light-solid-color-extra-divider">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    \\server_01\folder\path\archived
                  </div>
                  <img className="w-6 relative h-6" alt="" src="/dots1.svg" />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4px]">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Clean Files Older Than x Days
                  </div>
                  <div className="w-10 rounded bg-light-solid-color-extra-white box-border flex flex-row items-center justify-start text-smi text-dark-solid-color-extra-card-background font-light-basic-typography-h4-heading border-[1px] border-solid border-light-solid-color-extra-divider">
                    <div className="flex-1 rounded overflow-hidden flex flex-row items-center justify-start py-[7px] px-2.5">
                      <div className="flex-1 relative leading-[21px]">30</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[110px] flex flex-row items-start justify-center py-4 px-5 box-border gap-[0px_16px]">
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
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22px] h-[22px] flex flex-row items-center justify-center relative gap-[0px_10px]">
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
        <div className="self-stretch flex flex-row items-end justify-center pt-2.5 px-0 pb-0 gap-[0px_16px]">
          <div
            className="rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-center cursor-pointer"
            onClick={onButtonContainerClick}
          >
            <button className="cursor-pointer [border:none] py-2.5 px-5 bg-[transparent] flex flex-row items-center justify-center">
              <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-left">
                Save
              </div>
            </button>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] shadow-[0px_2px_4px_rgba(165,_163,_174,_0.3)] flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center py-2.5 px-5">
              <div className="relative text-mini tracking-[0.43px] font-medium font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-left">
                Cancel
              </div>
            </div>
          </button>
        </div>
      </div>
      {isSelactDropdownListOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom left"
          relativeLayerRef={formSelectRef}
          onOutsideClick={closeSelactDropdownList}
        >
          <SelactDropdownList onClose={closeSelactDropdownList} />
        </PortalPopup>
      )}
      {isCompareByPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom left"
          relativeLayerRef={formSelect1Ref}
          onOutsideClick={closeCompareByPopup}
        >
          <CompareBy onClose={closeCompareByPopup} />
        </PortalPopup>
      )}
      {isManageDuplicatesPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom left"
          relativeLayerRef={frameContainerRef}
          onOutsideClick={closeManageDuplicatesPopup}
        >
          <ManageDuplicates onClose={closeManageDuplicatesPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FileManagementSettings;
