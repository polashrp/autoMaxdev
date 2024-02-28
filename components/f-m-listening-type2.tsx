import type { NextPage } from "next";

export type FMListeningType2Type = {
  onClose?: () => void;
};

const FMListeningType2: NextPage<FMListeningType2Type> = ({ onClose }) => {
  return (
    <div className="w-[190px] rounded bg-light-solid-color-extra-white shadow-[0px_4px_16px_rgba(165,_163,_174,_0.45)] overflow-hidden flex flex-col items-start justify-start p-2 box-border gap-[15px_0px] max-w-full max-h-full text-left text-mini font-light-basic-typography-h4-heading">
      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
        <input
          className="m-0 w-[18px] rounded [filter:drop-shadow(0px_2px_4px_rgba(165,_163,_174,_0.3))] h-[18px]"
          checked={true}
          type="checkbox"
        />
        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          File Created
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0px_6px]">
        <input
          className="m-0 w-[18px] rounded box-border h-[18px] border-[1.5px] border-solid border-light-solid-color-gray-gray-400"
          type="checkbox"
        />
        <div className="relative leading-[22px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          File Modified
        </div>
      </div>
    </div>
  );
};

export default FMListeningType2;
