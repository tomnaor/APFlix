import { moviesMapper } from "../MoviesRecommendation/moviesMapper";

interface MoviesCarouselProps {
  animationDirection?: "up" | "down";
}

export const MoviesCarousel = ({ animationDirection }: MoviesCarouselProps) => {
  const animation =
    animationDirection === "down"
      ? "animate-infinite-scroll-down"
      : "animate-infinite-scroll-up";

  return (
    <div className="flex-col flex-nowrap h-full overflow-hidden gap-4 [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] hidden lg:flex">
      <ul
        className={`flex flex-col items-center md:justify-start [&_li]:my-4 [&_img]:max-w-none ${animation}`}
      >
        {Object.entries(moviesMapper).map(([movieName, movieImg]) => {
          return (
            <li key={movieName}>
              <img src={movieImg} alt="movie poster" className="h-60" />
            </li>
          );
        })}
      </ul>
      <ul
        aria-hidden="true"
        className={`flex flex-col items-center md:justify-start [&_li]:my-4 [&_img]:max-w-none ${animation}`}
      >
        {Object.entries(moviesMapper).map(([movieName, movieImg]) => {
          return (
            <li key={movieName}>
              <img src={movieImg} alt="movie poster" className="h-60" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
