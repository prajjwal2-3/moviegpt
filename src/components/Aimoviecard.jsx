import { IMG_URL } from "../utils/constants";

const Aimoviecard = (movies) => {
  return (
    <div className="flex sm:mx-40 mx-5  bg-slate-900 rounded-lg p-4 sm:my-6 my-2 shadow-2xl ">
      <img
        src={IMG_URL + movies?.movie?.poster_path}
        className="sm:w-48 w-32 h-64 rounded-xl on hover:scale-105 duration-200  shadow-2xl"
        alt="nahi aai"
      />
     <div className="flex flex-col justify-around sm:m-10 m-2">
     <h1 className="text-white font-semibold sm:text-4xl text-xl">{movies?.movie?.original_title}</h1>
     <h2 className="text-white opacity-60">{movies?.movie?.release_date}</h2>
      <h2 className="text-white text-xs sm:text-sm">{movies?.movie?.overview}</h2>
<div className="flex">
<button className="bg-white sm:m-2 mt-1 sm:px-6 px-2  sm:py-3 mx-1 py-1 rounded-md text-black shadow-md on hover:opacity-75">▶️Play</button>
        <button className="bg-gray-500 sm:m-2 mt-1 px-2 sm:px-6 sm:py-3 rounded-md opacity-65 on hover:opacity-75 shadow-md ">More info</button>
      
</div>
     </div>
    </div>
  );
};
export default Aimoviecard;
