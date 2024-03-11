
import { IMG_URL } from "../utils/constants";
const Moviecard = (movies) => {

  return (
    
      <div className="sm:mx-4 mx-2 flex-shrink-0 on hover:scale-105 duration-200 ">
     <img src={IMG_URL+movies.movie.poster_path} alt="poster image" className="sm:w-52 w-36 rounded-xl " />
    
    </div>
   
  )
};
export default Moviecard;
