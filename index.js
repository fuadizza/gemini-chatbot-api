import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Gemini setup
const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = gemini.getGenerativeModel({ model: "gemini-1.5-flash" });


app.listen(port, () => {
    console.log(`Gemini Chatbot running on http://localhost:${port}`);
});


//Route penting
