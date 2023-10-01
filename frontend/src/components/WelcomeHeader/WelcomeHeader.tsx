export const WelcomeHeader = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-center">
        Welcome to APFlix
      </h1>
      <p className="text-center">Your own movie recommendation platform</p>
    </div>
  );
};
