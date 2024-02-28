import type { NextPage } from "next";
import { Button } from "@mui/material";

const ResetPassword: NextPage = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start text-left text-7xl text-light-solid-color-extra-semi-dark font-light-basic-typography-h4-heading">
      <div className="self-stretch bg-light-solid-color-extra-body-background h-[1080px] flex flex-col items-center justify-center relative">
        <div className="w-[12.57%] !m-[0] absolute h-[16.76%] top-[66.89%] right-[30.33%] bottom-[16.35%] left-[57.1%] rounded-xl bg-light-opacity-color-danger-danger-8 box-border flex flex-row items-center justify-center p-[23px] z-[0] border-[2px] border-dashed border-light-opacity-color-danger-danger-8">
          <div className="self-stretch flex-1 rounded-3xs bg-light-opacity-color-danger-danger-8 border-[1px] border-solid border-light-opacity-color-danger-danger-8" />
        </div>
        <div className="w-[16.49%] !m-[0] absolute h-[21.63%] top-[13.81%] right-[52.22%] bottom-[64.56%] left-[31.29%] flex flex-row items-center justify-center p-2.5 box-border z-[1]">
          <div className="w-[108.4%] absolute !m-[0] h-[108.56%] top-[-4.28%] right-[-4.18%] bottom-[-4.28%] left-[-4.22%] z-[0]">
            <div className="absolute h-[67.03%] w-[66.03%] top-[0%] right-[0%] bottom-[32.97%] left-[33.97%] rounded-xl bg-light-opacity-color-danger-danger-8 box-border border-[1px] border-solid border-light-opacity-color-danger-danger-8" />
            <div className="absolute h-[86.75%] w-[85.46%] top-[13.25%] right-[14.54%] bottom-[0%] left-[0%] rounded-3xs bg-light-opacity-color-danger-danger-8 box-border border-[1px] border-solid border-light-opacity-color-danger-danger-8" />
          </div>
        </div>
        <div className="self-stretch flex-1 bg-dark-opacity-color-extra-table-striped flex flex-row items-center justify-center p-6 z-[2] border-[1px] border-solid border-light-opacity-color-danger-danger-8">
          <div className="w-[450px] flex flex-row items-center justify-center">
            <div className="flex-1 rounded-md bg-light-solid-color-extra-white shadow-[0px_4px_18px_rgba(75,_70,_92,_0.1)] flex flex-col items-center justify-start p-8 gap-[24px_0px] z-[0]">
              <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-0 gap-[0px_10px]">
                <img
                  className="w-[34px] relative h-[23.4px]"
                  alt=""
                  src="/vuexylogo1.svg"
                />
                <b className="relative leading-[36px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0.1)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Automation
                </b>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[26px_0px] text-3xl">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                  <div className="self-stretch relative leading-[30px] font-medium">
                    Reset Password 🔒
                  </div>
                  <div className="self-stretch relative text-mini leading-[22px]">
                    <span>{`for `}</span>
                    <span className="font-semibold">john.doe@email.com</span>
                  </div>
                </div>
                <div className="self-stretch h-[222px] flex flex-col items-start justify-start gap-[16px_0px] text-smi">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px]">
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <div className="relative">New Password</div>
                      <div className="relative text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]" />
                    </div>
                    <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-semi-dark">
                      <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                        <input
                          className="[border:none] [outline:none] font-light-basic-typography-h4-heading text-mini bg-[transparent] flex-1 relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.6),_rgba(255,_255,_255,_0.6)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="w-[400px] relative text-light-solid-color-danger-danger-500-base hidden">
                      Message
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px]">
                    <div className="self-stretch flex flex-row items-start justify-between">
                      <div className="relative">Confirm Password</div>
                      <div className="relative text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]" />
                    </div>
                    <div className="self-stretch rounded-md bg-light-solid-color-extra-white flex flex-row items-center justify-start border-[1px] border-solid border-light-solid-color-extra-semi-dark">
                      <div className="flex-1 rounded-md overflow-hidden flex flex-row items-center justify-start py-[7px] px-3.5">
                        <input
                          className="[border:none] [outline:none] font-light-basic-typography-h4-heading text-mini bg-[transparent] flex-1 relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.6),_rgba(255,_255,_255,_0.6)),_#4b465c] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="w-[400px] relative text-light-solid-color-danger-danger-500-base hidden">
                      Message
                    </div>
                  </div>
                  <Button
                    className="self-stretch"
                    color="error"
                    variant="contained"
                    sx={{ borderRadius: "0px 0px 0px 0px" }}
                  >
                    Sign in
                  </Button>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center gap-[0px_4px]">
                    <img
                      className="w-5 relative h-5"
                      alt=""
                      src="/chevronleft.svg"
                    />
                    <div className="relative text-mini leading-[22px] font-light-basic-typography-h4-heading text-transparent !bg-clip-text [background:conic-gradient(from_180deg_at_50%_50%,_rgba(176,_25,_44,_0.9)_0deg,_rgba(210,_46,_67,_0.72)_309.6deg)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-center">
                      {" "}
                      Back to log in
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
