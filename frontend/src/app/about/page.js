// About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-5 mt-20 text-black">
      <h1 className="text-4xl font-bold mb-4 mt-12 text-center text-blue-600">About LegalEagle</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">🌟 Welcome to LegalEagle</h2>
        <p className="mt-2 text-lg leading-relaxed">
          At LegalEagle, we’re dedicated to simplifying legal processes and providing accurate legal information through the power of artificial intelligence! Our platform is designed to help individuals and professionals navigate complex legal landscapes with ease and confidence.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">🎯 Our Mission</h2>
        <p className="mt-2 text-lg leading-relaxed">
          We aim to make legal assistance accessible, efficient, and user-friendly. By leveraging advanced AI technology, we strive to deliver accurate answers to your legal queries, ensuring that everyone has access to the legal knowledge they need.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">🔮 Our Vision</h2>
        <p className="mt-2 text-lg leading-relaxed">
          Imagine a world where legal advice is just a click away, empowering individuals to make informed decisions. At LegalEagle, we are committed to bringing this vision to life, transforming how people interact with legal information and services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">🛠️ How It Works</h2>
        <ol className="mt-2 list-decimal list-inside text-lg leading-relaxed">
          <li className="mb-2">📥 <strong>Question Input:</strong> Users can submit their legal questions through our intuitive interface.</li>
          <li className="mb-2">⚙️ <strong>AI Processing:</strong> Our advanced algorithms analyze the query and provide relevant legal information and resources.</li>
          <li className="mb-2">📊 <strong>Results Presentation:</strong> Users receive detailed responses, including references to legal documents and resources.</li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-blue-500">💻 Technology Behind LegalEagle</h2>
        <p className="mt-2 text-lg leading-relaxed">
          LegalEagle harnesses cutting-edge technologies in natural language processing and machine learning. Our models are trained on a vast array of legal texts and documents, ensuring accuracy and relevance in every response.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-semibold">Meet the Team</h2>
        <h3 className="text-xl font-semibold">Parag Ghatage - Full Stack Developer & Legal Tech Advocate</h3>
        <p className="mt-2">
          Hello! I’m Parag, a passionate full-stack developer focused on merging technology with the legal field. LegalEagle represents my commitment to making legal knowledge accessible to everyone through innovative solutions. I believe in the transformative power of AI to empower individuals and enhance their understanding of legal matters. Join me on this exciting journey as we explore the intersection of law and technology!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-500">🚀 Join Us on Our Journey</h2>
        <p className="mt-2 text-lg leading-relaxed">
          At LegalEagle, we are continuously evolving and improving. We welcome feedback, suggestions, and collaborations from everyone interested in enhancing legal access and knowledge. Together, we can make a significant impact in the legal field!
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-blue-500">📬 Contact Us</h2>
        <p className="mt-2 text-lg leading-relaxed">
          Have questions or interested in collaborating? Don’t hesitate to reach out through our Contact page. We’d love to hear from you!
        </p>
      </section>
    </div>
  );
};

export default About;
