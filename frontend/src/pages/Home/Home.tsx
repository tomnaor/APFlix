import { ChatForm } from "@/components/ChatForm/ChatForm";
import { MoviesRecommendations } from "@/components/MoviesRecommendation/MoviesRecommendations";
import { WelcomeHeader } from "@/components/WelcomeHeader/WelcomeHeader";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl items-center">
      <WelcomeHeader />
      <ChatForm />
      <MoviesRecommendations />
    </div>
  );
};
