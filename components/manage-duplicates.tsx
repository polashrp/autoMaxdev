import type { NextPage } from "next";

export type ManageDuplicatesType = {
  onClose?: () => void;
};

const ManageDuplicates: NextPage<ManageDuplicatesType> = ({ onClose }) => {
  return (
    <div className="w-[236px] relative rounded shadow-[0px_4px_16px_rgba(165,_163,_174,_0.45)] h-[175px] overflow-hidden flex flex-col items-start justify-start py-2 px-0 box-border gap-[4px_0px] max-w-full max-h-full text-left text-mini font-light-basic-typography-h4-heading">
      <button className="cursor-pointer [border:none] py-2 px-4 bg-light-solid-color-extra-white self-stretch rounded-md flex flex-row items-start justify-start">
        <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
          Stop Job
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-2 px-4 bg-light-solid-color-extra-white self-stretch rounded-md flex flex-row items-start justify-start">
        <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
          Overwrite
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-2 px-4 bg-light-solid-color-extra-white self-stretch rounded-md flex flex-row items-start justify-start">
        <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
          Ignore
        </div>
      </button>
      <button className="cursor-pointer [border:none] py-2 px-4 bg-[transparent] self-stretch rounded-md [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] flex flex-row items-center justify-start">
        <div className="flex-1 relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-light-solid-color-extra-white text-left">
          Move duplicate Files only
        </div>
      </button>
      <div className="w-[236px] rounded-md bg-light-opacity-color-primary-primary-8 hidden flex-row items-center justify-start py-2 px-4 box-border">
        <div className="flex-1 relative leading-[22px] text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(175,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_219.4deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Rename Files
        </div>
      </div>
    </div>
  );
};

export default ManageDuplicates;
