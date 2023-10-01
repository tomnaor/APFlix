import { ChatForm } from "@/components/ChatForm/ChatForm";
import { MoviesRecommendations } from "@/components/MoviesRecommendation/MoviesRecommendations";
import { WelcomeHeader } from "@/components/WelcomeHeader/WelcomeHeader";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full max-w-6xl justify-between flex-1 p-3">
      <WelcomeHeader />
      <MoviesRecommendations />
      <ChatForm />
    </div>
  );
};
