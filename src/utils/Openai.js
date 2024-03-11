import OpenAI from "openai";
import { OPENAIKEY } from "./constants";


const Openai = new OpenAI(
   { apiKey: process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
}
);
export default Openai
