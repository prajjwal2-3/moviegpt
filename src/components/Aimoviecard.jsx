import { IMG_URL } from "../utils/constants";

const Aimoviecard = (movies) => {
  return (
    <div className="flex mx-40 bg-black my-6">
      <img
        src={IMG_URL + movies?.movie?.poster_path}
        className="w-48"
        alt="nahi aai"
      />
      <h2 className="text-white">{movies?.movie?.original_title}</h2>
      <h2 className="text-white">{movies?.movie?.overview}</h2>
    </div>
  );
};
export default Aimoviecard;
