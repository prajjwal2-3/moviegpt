import {  useSelector } from "react-redux";
import Mainvideo from "./Mainvideo";
const Maincon=()=>{
    const movies = useSelector((state)=> state.Movies?.nowplayingmovies)
    if(!movies) return <div className="">loading...</div>
    
    const {title,id,overview} = movies[0];
    return(
        <div className="">
         
       <div className=" py-80 px-16 absolute bg-gradient-to-r from-black h-screen text-white">
       <div className="text-5xl font-extrabold  ">{title}</div>
        <div className="w-1/4 text-lg my-2 ">{overview}</div>
        <button className="bg-white m-2  px-6 py-3 rounded-md text-black shadow-md on hover:opacity-75">▶️Play</button>
        <button className="bg-gray-500 m-2  px-6 py-3 rounded-md opacity-65 shadow-md">More info</button>
       </div>
       <div className=""><Mainvideo id={id}/> </div>
        </div>
       
    )
}
export default Maincon;