"use client";
import { useState } from "react";

export default function BookingForm({ onClose }) {
  const [service, setService] = useState("");

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-black"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold mb-4">Book Our Services</h2>
      <p className="mb-4 text-gray-600">
        Select a service and provide your details.
      </p>

      <form className="space-y-4">
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border rounded-lg px-4 py-2"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border rounded-lg px-4 py-2"
        />

        {/* Services Dropdown */}
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full border rounded-lg px-4 py-2"
        >
          <option value="">Select a service</option>
          <option value="video-editing">🎬 Video Editing</option>
          <option value="mobile-development">📱 Mobile Development</option>
          <option value="web-development">💻 Web Development</option>
          <option value="graphic-design">🎨 Graphic Design</option>
          <option value="fund-management">📈 Fund Management</option>
        </select>

        {/* Message */}
        <textarea
          placeholder="Your Message"
          className="w-full border rounded-lg px-4 py-2"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
