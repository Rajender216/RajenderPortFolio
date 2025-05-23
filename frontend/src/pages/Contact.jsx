import { useState } from "react";
import Spline from "@splinetool/react-spline";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/auth/connect`,
        form,
        {
          withCredentials: true,
        }
      );

      if (responce.data.success) {
        toast.success(responce.data.message);
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(responce.data.message);
      }
    } catch (error) {
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16 bg-black border-b border-gray-700"
    >
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <div className="w-110 h-80 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.2)] border border-cyan-400">
          <Spline scene="/Contact2.splinecode" />
        </div>
      </div>

      <div className="w-full md:w-1/2 max-w-lg text-white space-y-6">
        <h2 className="text-4xl font-bold text-teal-400 mb-2">Let's Connect</h2>
        <p className="text-gray-400 mb-4">
          Have a project in mind or just want to say hello? Feel free to reach
          out!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white"
          />
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md text-white"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-cyan-400 hover:bg-purple-500 text-black font-semibold rounded-md transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
