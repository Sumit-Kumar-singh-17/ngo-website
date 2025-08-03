


import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Volunteer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      toast.error("Please fill out all required fields");
    } else if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email");
    } else {
      toast.success("Thank you for volunteering with us!");
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="max-w-lg mx-auto p-6 min-h-screen">
      <ToastContainer position="top-center" />
      <h2 className="text-3xl font-bold mb-6 text-center">Volunteer With Us</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Why do you want to volunteer?"
          className="w-full border border-gray-300 p-3 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          rows={4}
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold py-2 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default Volunteer;
