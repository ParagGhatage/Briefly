// app/page.jsx
import Chatbox from '../components/Chatbox';

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center text-4xl font-bold mb-6 text-gray-800">
        Get Instant Legal Answers with AI!
        </div>
        <Chatbox />
      </div>
    </main>
  );
}
