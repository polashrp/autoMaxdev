import type { NextPage } from "next";

export type EveryType = {
  onClose?: () => void;
};

const Every: NextPage<EveryType> = ({ onClose }) => {
  return (
    <div className="w-[216px] rounded bg-light-solid-color-extra-white shadow-[0px_4px_16px_rgba(165,_163,_174,_0.45)] overflow-hidden flex flex-col items-start justify-start py-2 px-5 box-border gap-[15px_0px] max-w-full max-h-full text-left text-mini font-light-basic-typography-h4-heading">
      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
        <input
          className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
          type="checkbox"
        />
        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          First
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
        <input
          className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
          type="checkbox"
        />
        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Second
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
        <input
          className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
          type="checkbox"
        />
        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Thrid
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
        <input
          className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
          type="checkbox"
        />
        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Fourth
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start pt-2 px-0 pb-0 gap-[0px_6px] border-t-[1px] border-solid border-light-solid-color-extra-divider">
        <input
          className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
          type="checkbox"
        />
        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          All
        </div>
      </div>
    </div>
  );
};

export default Every;
