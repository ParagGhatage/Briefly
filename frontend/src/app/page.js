// app/page.jsx
import Chatbox from '../components/Chatbox';

export default function Home() {
  return (
    <main className=" justify-center items-center h-screen bg-gray-200 mt-20">
      <div className='text-center text-2xl'>
        Ask us anything!
      </div>
      <Chatbox />
    </main>
  );
}
