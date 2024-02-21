import {  useSelector } from "react-redux";
import Mainvideo from "./Mainvideo";
const Maincon=()=>{
    const movies = useSelector((state)=> state.Movies?.nowplayingmovies)
    if(!movies) return <div className="">loading...</div>
    console.log(movies[0])
    const {title,id,overview} = movies[0];
    return(
        <div className="py-80 px-16">
        <div className="text-3xl font-bold ">{title}</div>
        <div className="w-1/4 text-lg">{overview}</div>
        <Mainvideo id={id}/>
        </div>
        
    )
}
export default Maincon;