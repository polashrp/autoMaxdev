import type { NextPage } from "next";

export type SelectMonthsType = {
  onClose?: () => void;
};

const SelectMonths: NextPage<SelectMonthsType> = ({ onClose }) => {
  return (
    <div className="w-[265px] rounded bg-light-solid-color-extra-white shadow-[0px_4px_16px_rgba(165,_163,_174,_0.45)] h-[277px] overflow-hidden flex flex-col items-start justify-start py-2 px-5 box-border gap-[15px_0px] max-w-full max-h-full text-left text-mini font-light-basic-typography-h4-heading">
      <div className="flex flex-row items-start justify-start gap-[0px_29px]">
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            January
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            July
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_20px]">
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            February
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            August
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_40px]">
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            March
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            September
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_51px]">
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            April
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            October
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_55px]">
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            May
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            November
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[0px_54px]">
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            June
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0px_6px]">
          <input
            className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
            type="checkbox"
          />
          <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            December
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-2 px-0 gap-[0px_6px] border-t-[1px] border-solid border-light-solid-color-extra-divider">
        <input
          className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
          type="checkbox"
        />
        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Every Month
        </div>
      </div>
    </div>
  );
};

export default SelectMonths;
