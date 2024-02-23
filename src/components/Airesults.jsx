import {  useSelector } from "react-redux"
import { IMG_URL } from "../utils/constants"
import Aimoviecard from "./Aimoviecard"

const Airesults=()=>{
    const movie =useSelector((state)=> state.Movies?.recommendedmovies)
    return(
       <>
       {movie?.map((movies,index)=>(
        <Aimoviecard key={index} movie={movies}/>
        
       ))}
       </>
    )
}
export default Airesults