import {  useSelector } from "react-redux";
import Mainvideo from "./Mainvideo";
const Maincon=()=>{
    const movies = useSelector((state)=> state.Movies?.nowplayingmovies)
    if(!movies) return <div className="">loading...</div>
    
    const {title,id,overview} = movies[0];
    return(
        <div className="">
         
       <div className=" sm:py-80 sm:px-16 px-8 py-16 absolute z-10 text-white">
       <div className="sm:text-5xl text-md font-extrabold  ">{title}</div>
        <div className="sm:w-1/4 sm:block hidden  sm:text-lg text-xs my-2  ">{overview}</div>
        <button className="bg-white sm:m-2 m-1 sm:px-6 sm:py-3 px-1 rounded-md text-black shadow-md on hover:opacity-75">▶️Play</button>
        <button className="bg-gray-500 sm:m-2  sm:px-6 sm:py-3 px-1 rounded-md opacity-65 on hover:opacity-75 shadow-md">More info</button>
       </div>
       <div className=""><Mainvideo id={id}/> </div>
        </div>
       
    )
}
export default Maincon;
