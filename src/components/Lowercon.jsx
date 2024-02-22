import { useSelector } from "react-redux";
import Moviecard from "./Moviecard"

const Lowercon=()=>{
    const movies1 = useSelector((state) => state.Movies?.nowplayingmovies);
    const movies2 = useSelector((state)=> state.Movies?.popularmovies)
    if(!movies1) return <div className="">loading....</div>
    return(
        <>
        <div className="bg-black text-white  -mt-38">
        <div className="text-white font-bold text-xl ml-6">Now playing</div>
          <div className="flex overflow-x-auto p-6 ">
      {movies1.map((movies,index)=>(
 <Moviecard key={index} movie={movies}/>
         ))}
      </div>
        </div>
        <div className="bg-black text-white">
        <div className="text-white font-bold text-xl ml-6">Popular Movies</div>
          <div className="flex overflow-x-auto p-6  ">
      {movies2.map((movies,index)=>(
 <Moviecard key={index} movie={movies}/>
         ))}
      </div>
        </div>
        </>
    )
}
export default Lowercon