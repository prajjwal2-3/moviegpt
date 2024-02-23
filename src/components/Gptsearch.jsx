import Gptbar from "./Gptbar"
import { IMG_URL, cover } from "../utils/constants";
import { useSelector } from "react-redux";
import Aimoviecard from "./Aimoviecard";
const Gptsearch1=()=>{
    const movie =useSelector((state)=> state.Movies?.recommendedmovies)
    return(
        <>
        <div className="flex h-screen ">
            
            <img src={cover} alt="" className="object-cover w-full " />
            <div className="absolute flex justify-center w-full items-center mt-8"><Gptbar/></div>
            
          </div>
          {movie?.map((movies,index)=>(
            <img src={IMG_URL+movies.poster_path}
            className="w-48"
            key={index} movie={movies}/>))}
        </>
    )
}
export default Gptsearch1;