import {  useSelector } from "react-redux";
import Mainvideo from "./Mainvideo";
const Maincon=()=>{
    const movies = useSelector((state)=> state.Movies?.nowplayingmovies)
    if(!movies) return <div className="">loading...</div>
    console.log(movies[0])
    const {title,id,overview} = movies[0];
    return(
        <div className=" ">
         
       <div className=" py-80 px-16  text-black">
       <div className="text-5xl font-extrabold  ">{title}</div>
        <div className="w-1/4 text-lg my-2 ">{overview}</div>
       </div>
       
        </div>
       
    )
}
export default Maincon;