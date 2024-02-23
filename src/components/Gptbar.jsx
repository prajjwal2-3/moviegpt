import { useRef } from "react";
import Openai from "../utils/Openai";
import { options } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addrecommendedmovies } from "../utils/Movieslice.js";
const Gptbar=()=>{
    const prompt = useRef(null);
    const dispatch=useDispatch();
   const Tmbdmovies = async(movie)=>{
    try{
        const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", options)
        const json = await data.json()
        return json
    }catch(error){}
   };
    
    const handleclick= async()=>{
       
        const gptQuery =
        "act as a movie reccomendation system and suggest some movies for the query : " +
        (prompt.current?.value || "") +
        ". only give me ten movies, comma separated like the example given ahead. Example : Gadar , Border , Sholay , Don, Andaz Apna Apna, 3 idiots, knives out, grand budapest hostel, The shawshank redemption, 12th fail";
            try{
                const completion = await Openai.chat.completions.create({
             
                    messages: [{ role: "system", content: gptQuery }],
                    model: "gpt-3.5-turbo",
                  });
                
                 
                  const gptMovies =
                  completion?.choices?.[0]?.message?.content?.split(",") || [];
                  const promisearray=gptMovies.map((movies)=>Tmbdmovies(movies.trim()))
                  const rough = await Promise.all(promisearray)
                 const FINAL_LIST = rough.map((array)=>array.results[0])
                  console.log(FINAL_LIST)
                  dispatch(addrecommendedmovies(FINAL_LIST))
                }catch(error){
        
            }
          }
    
    
    return(
        <div className="z-50">
            < input type="text" placeholder="Enter text to search movies" className="p-2 rounded-l-md opacity-80 w-56"
            ref={prompt}
            />
            <button className="text-white p-2 rounded-r-md  bg-purple-600" onClick={handleclick}>Search</button>
         
        </div>
    )
}
export default Gptbar;