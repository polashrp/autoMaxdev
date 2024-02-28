import type { NextPage } from "next";
import { useCallback } from "react";

export type SchduleDownloadType = {
  onClose?: () => void;
};

const SchduleDownload: NextPage<SchduleDownloadType> = ({ onClose }) => {
  const onDropdownItems1Click = useCallback(() => {
    // Please sync "daily schedule" to the project
  }, []);

  const onDropdownItems2Click = useCallback(() => {
    // Please sync "weekly schedule" to the project
  }, []);

  const onDropdownItems3Click = useCallback(() => {
    // Please sync "monthly schedule" to the project
  }, []);

  return (
    <div className="w-[190px] rounded bg-light-solid-color-extra-white shadow-[0px_4px_16px_rgba(165,_163,_174,_0.45)] overflow-hidden flex flex-col items-start justify-start p-2 box-border gap-[4px_0px] max-w-full max-h-full">
      <button className="cursor-pointer [border:none] py-2 px-4 bg-light-solid-color-extra-white self-stretch rounded-md flex flex-row items-start justify-start">
        <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
          Hourly
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] self-stretch rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-start"
        onClick={onDropdownItems1Click}
      >
        <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-left">
          Daily
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] py-2 px-4 bg-light-solid-color-extra-white self-stretch rounded-md flex flex-row items-start justify-start"
        onClick={onDropdownItems2Click}
      >
        <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
          Weekly
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] py-2 px-4 bg-light-opacity-color-primary-primary-8 self-stretch rounded-md flex flex-row items-center justify-start"
        onClick={onDropdownItems3Click}
      >
        <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
          Montlhy
        </div>
      </button>
    </div>
  );
};

export default SchduleDownload;
