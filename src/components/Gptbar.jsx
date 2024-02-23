import { useRef } from "react";

const Gptbar=()=>{
    const prompt = useRef(null);
    const handleclick=()=>{
        console.log(prompt)
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