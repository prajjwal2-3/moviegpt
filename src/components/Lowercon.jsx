import { useSelector } from "react-redux";
import Moviecard from "./Moviecard"

const Lowercon=()=>{
    const movies = useSelector((state) => state.Movies?.nowplayingmovies);
    return(
        <div className="d">
            Now playing
            <Moviecard movies={movies}/>
        </div>
    )
}
export default Lowercon