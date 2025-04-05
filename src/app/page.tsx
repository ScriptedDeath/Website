import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white font-sans">
      <header className="bg-transparent py-6 px-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">IGCPC</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex items-center justify-center flex-col text-center py-20 px-8">
        <div className="max-w-4xl">
          <h2 className="text-5xl font-bold mb-4">Welcome to IGCPC</h2>
          <p className="text-lg mb-6">
            The International Generational Crisis Prevention Court. Our mission is to uphold the values of **sovereignty**, **justice**, and **progress**. Join us in shaping the future.
          </p>
          <a href="#services" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Learn More
          </a>
        </div>
      </main>

      <section id="about" className="bg-gray-900 py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-4">About IGCPC</h3>
          <p className="text-lg mb-6">
            The IGCPC is dedicated to ensuring fairness and transparency in **global justice systems**, focusing on **generational sustainability**.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 px-8 bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-8 text-white">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="service-card bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Legal Services</h4>
              <p className="text-lg">We provide comprehensive legal support in **international law**, **arbitration**, and **sovereignty cases**.</p>
            </div>
            <div className="service-card bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Consulting</h4>
              <p className="text-lg">We offer **consulting services** to organizations and governments in need of guidance on **international relations**.</p>
            </div>
            <div className="service-card bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">Crisis Management</h4>
              <p className="text-lg">Our team specializes in resolving **international crises** and **generational challenges** through diplomacy and policy.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-semibold mb-4 text-white">Contact Us</h3>
          <p className="text-lg mb-6 text-white">
            Have questions or want to learn more about our mission? Get in touch with us.
          </p>
          <a href="mailto:contact@igcpc.org" className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Email Us
          </a>
        </div>
      </section>

      <footer className="bg-black py-6 text-center text-gray-400">
        <p>&copy; 2025 IGCPC. All rights reserved.</p>
      </footer>
    </div>
  );
}
