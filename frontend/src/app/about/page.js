import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-16 text-gray-800">
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-10">About Briefly</h1>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-500">⚖️ Welcome to Briefly</h2>
        <p className="mt-4 text-xl leading-relaxed">
          Briefly is on a mission to revolutionize legal assistance by combining the power of artificial intelligence and human understanding. Whether you’re a lawyer, student, or just someone seeking legal guidance, we simplify complex legal matters into easy-to-understand answers—delivered in brief, yet comprehensive explanations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-500">🎯 Our Mission</h2>
        <p className="mt-4 text-xl leading-relaxed">
          Our mission is to break down the barriers of legal knowledge by making it accessible, understandable, and efficient. Using cutting-edge AI and NLP technology, Briefly aims to democratize legal information for everyone—ensuring that legal assistance is always just a click away.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-blue-500">🔮 Our Vision</h2>
        <p className="mt-4 text-xl leading-relaxed">
          Imagine a world where legal jargon no longer intimidates people. At Briefly, we envision a future where AI simplifies the law, empowering individuals with the information they need to make better decisions—quickly and confidently. We aim to become the most trusted legal companion for individuals and professionals alike.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-500">🛠️ How Briefly Works</h2>
        <ol className="mt-4 list-decimal list-inside text-xl leading-relaxed">
          <li className="mb-3">📥 <strong>Question Submission:</strong> Users ask their legal questions via an intuitive input interface.</li>
          <li className="mb-3">⚙️ <strong>AI Processing:</strong> Our AI models analyze the query and pull relevant legal data, breaking it down into easy-to-understand terms.</li>
          <li className="mb-3">📄 <strong>Response Delivery:</strong> Detailed legal explanations, supported by references to relevant legal documents, are delivered almost instantly.</li>
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-500">💻 The Technology Behind Briefly</h2>
        <p className="mt-4 text-xl leading-relaxed">
          Briefly leverages advanced technologies in natural language processing (NLP) and deep learning. Our models are trained on vast legal datasets, enabling us to provide accurate, reliable, and easy-to-digest legal information. With continuous learning, our system evolves to stay up-to-date with the latest legal frameworks and rulings.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-semibold text-center mb-8">Meet Our Team</h2>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-blue-500">🚀 Parag Ghatage – Full Stack Developer & ML Enthusiast</h3>
          <p className="mt-4 text-xl leading-relaxed">
            Hey there! I’m Parag, the mind behind Briefly and a passionate web developer with a deep interest in AI. I love combining technology and innovation to solve real-world problems. My goal is to revolutionize the legal field through AI-driven solutions that are efficient and impactful. With a background in developing both full-stack applications and machine learning models, I’m driven by a mission to make legal knowledge accessible to everyone.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-500">🚀 Pratham Angdalwar – Full Stack Developer & AI Enthusiast</h3>
    <p className="mt-4 text-xl leading-relaxed">
    Hi! I’m Pratham, a full-stack developer with a deep passion for artificial intelligence and its transformative potential. At Briefly, I focus on building robust, scalable systems that integrate AI-driven insights into our legal platform. While I’m not a legal expert, my strength lies in developing the AI that powers our chatbot, making complex data understandable and accessible to all users. From AI algorithms to seamless user interfaces, I love tackling tech challenges and turning innovative ideas into real-world solutions.
    </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-500">🚀 Join Us on This Journey</h2>
        <p className="mt-4 text-xl leading-relaxed">
          Briefly is constantly evolving, and we’re eager to hear from users, experts, and collaborators who share our vision of simplifying legal access. Together, we can reshape the future of legal assistance.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-blue-500">📬 Contact Us</h2>
        <p className="mt-4 text-xl leading-relaxed">
          Have questions or suggestions? Interested in collaborating? Reach out to us through our contact page or connect with us on social media. We’re excited to hear from you!
        </p>
      </section>
    </div>
  );
};

export default About;
