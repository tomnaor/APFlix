import LogoSvg from "../../../public/logo.svg";

export const WelcomeHeader = () => {
  return (
    <div className="flex w-full pb-2 border-b items-center justify-between">
      <div className="flex gap-1 items-center">
        <img src={LogoSvg} alt="logo" />
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
          APFlix
        </h1>
      </div>
      <p className="text-sm text-center">Your movies recommendation platform</p>
    </div>
  );
};
