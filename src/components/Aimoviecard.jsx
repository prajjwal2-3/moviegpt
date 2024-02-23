import { IMG_URL } from "../utils/constants";

const Aimoviecard = (movies) => {
  return (
    <div className="flex mx-40  bg-slate-900 rounded-lg p-4 my-6 shadow-2xl">
      <img
        src={IMG_URL + movies?.movie?.poster_path}
        className="w-48 rounded-xl on hover:scale-105 duration-200  shadow-2xl"
        alt="nahi aai"
      />
     <div className="flex flex-col justify-around m-10">
     <h1 className="text-white font-semibold text-4xl">{movies?.movie?.original_title}</h1>
     <h2 className="text-white opacity-60">{movies?.movie?.release_date}</h2>
      <h2 className="text-white">{movies?.movie?.overview}</h2>
<div className="">
<button className="bg-white m-2  px-6 py-3  rounded-md text-black shadow-md on hover:opacity-75">▶️Play</button>
        <button className="bg-gray-500 m-2  px-6 py-3 rounded-md opacity-65 on hover:opacity-75 shadow-md ">More info</button>
      
</div>
     </div>
    </div>
  );
};
export default Aimoviecard;
