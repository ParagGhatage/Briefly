
import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from 'dotenv';

export async function Plan(query,dataa) {
    config();
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI); // Load API key from environment

    // Choose the appropriate model
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        generationConfig: { responseMimeType: "application/json" }
    });

    // Define a prompt to handle legal queries with structured output
    let prompt = `
    Please provide a detailed and structured response (according to indian law) to the legal query "${query}":
    
    

    {
      "type": "object",
      "properties": {
        "Question": {
          "type": "string",
          "description": "The legal question asked by the user"
        },
        "Answer": {
          "type": "string",
          "description": "A detailed answer to the legal question with references to relevant laws, precedents, or statutes"
        },
        "Summary": {
          "type": "string",
          "description": "A brief summary of the answer for quick reference"
        },
        "RelevantLaws": {
          "type": "array",
          "items": {
            "type": "string",
            "description": "Relevant laws, codes, or statutes related to the query"
          }
        },
        "References": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "Title": { "type": "string", "description": "Title of the reference material" },
              "URL": { "type": "string", "description": "Link to additional reading or source" }
            }
          }
        },
        "AdditionalNotes": {
          "type": "string",
          "description": "Any additional information or notes for better understanding"
        }
      },
      "required": ["Question", "Answer", "Summary", "RelevantLaws"]
    
    And context provided to us is "${dataa}"
      }
    `;

    // Generate the content
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Parse JSON response
    const data = JSON.parse(text);

    return (data);
}
