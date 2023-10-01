import { ChatForm } from "@/components/ChatForm/ChatForm";
import { WelcomeHeader } from "@/components/WelcomeHeader/WelcomeHeader";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl items-center">
      <WelcomeHeader />
      <ChatForm />
    </div>
  );
};
