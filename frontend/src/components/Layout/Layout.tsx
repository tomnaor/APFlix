import { MoviesCarousel } from "../MoviesCarousel/MoviesCarousel";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-screen flex items-center justify-evenly">
      <MoviesCarousel animationDirection="up" />
      {children}
      <MoviesCarousel animationDirection="down" />
    </div>
  );
};
