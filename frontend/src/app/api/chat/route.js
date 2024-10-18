import axios from "axios";

// app/api/chat/route.js
export async function POST(req) {
    const { query } = await req.json();
  
    // Call your backend/NLP model to generate response (mocking it here)
    const response = await getChatbotResponse(query); // Replace with actual API call
    return new Response(JSON.stringify({ response }), { status: 200 });
  }
  
  // Mocked chatbot response function for now
  async function getChatbotResponse(query) {
    const response = await axios.post('http://127.0.0.1:5000/search',{
    
       "query":`${query}` },
      {headers:{
        'Content-Type': 'application/json',
      }},
    );
    console.log(response)
    console.log(response.data)
    if(response.data.result){
    return `Query: "${query}"\n Response:${response.data.result.document}`;

    }
    else
    {
      console.log(response.data.message)
      return `You asked: "${query}"\n Response:${response.data.message}`
    }
  }
  