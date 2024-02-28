import type { NextPage } from "next";

const CardViewPendingOrders: NextPage = () => {
  return (
    <div className="self-stretch h-[520.1px] overflow-hidden flex flex-col items-start justify-end py-0 px-2 box-border text-left text-2xs text-light-solid-color-extra-semi-dark font-light-basic-typography-h4-heading">
      <div className="rounded-md flex flex-row items-start justify-start py-0 px-4">
        <div className="relative leading-[14px] uppercase text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.5),_rgba(255,_255,_255,_0.5)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Help
        </div>
      </div>
      <div className="self-stretch rounded-md flex flex-row items-center justify-start py-2 px-4 gap-[0px_8px] text-xl font-h5-heading1">
        <img
          className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/ic-headset-mic-48px.svg"
        />
        <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-semibold font-inherit mq450:text-base mq450:leading-[19px]">
          Customer support
        </h3>
        <div className="h-[22px] w-[22px] rounded-xl bg-brown hidden flex-row items-center justify-center py-1 px-[7px] box-border text-center text-xs text-light-solid-color-extra-white font-roboto">
          <div className="self-stretch w-[7px] relative leading-[14px] font-semibold inline-block shrink-0">
            5
          </div>
        </div>
        <div className="h-[18px] w-[18px] hidden flex-row items-center justify-start relative">
          <img
            className="h-3/6 w-3/12 absolute !m-[0] top-[25%] right-[37.22%] bottom-[25%] left-[37.78%] max-w-full overflow-hidden max-h-full hidden z-[0]"
            alt=""
            src="/path1.svg"
          />
        </div>
      </div>
      <div className="self-stretch rounded-md flex flex-row items-center justify-start py-2 px-4 gap-[0px_8px] text-sm">
        <img
          className="h-[22px] w-[22px] relative"
          loading="lazy"
          alt=""
          src="/feathericon--helpcircle.svg"
        />
        <div className="flex-1 relative leading-[24px] font-light">
          Documents
        </div>
        <div className="h-[22px] w-[22px] rounded-xl bg-brown hidden flex-row items-center justify-center py-1 px-[7px] box-border text-center text-xs text-light-solid-color-extra-white font-roboto">
          <div className="self-stretch w-[7px] relative leading-[14px] font-semibold inline-block shrink-0">
            5
          </div>
        </div>
        <div className="h-[18px] w-[18px] hidden flex-row items-center justify-start relative">
          <img
            className="h-3/6 w-3/12 absolute !m-[0] top-[25%] right-[37.22%] bottom-[25%] left-[37.78%] max-w-full overflow-hidden max-h-full hidden z-[0]"
            alt=""
            src="/path1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CardViewPendingOrders;
