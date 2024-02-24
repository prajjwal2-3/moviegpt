import OpenAI from "openai";
import { OPENAIKEY } from "./constants";


const Openai = new OpenAI(
   { apiKey: OPENAIKEY,
    dangerouslyAllowBrowser: true,
}
);
export default Openai
