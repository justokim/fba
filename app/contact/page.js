"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const KEY = process.env.NEXT_PUBLIC_API_KEY;
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");

  const clearForm = () => {
    setMessage("");
    setName("");
    setSubject("");
    setEmail("");
    setHearAboutUs("");
  };

  const submitForm = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      email: email,
      message: message,
      subject: subject,
      hearAboutUs: hearAboutUs,
    };

    try {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, body, KEY).then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "message Sent Successfully",
          });

          clearForm();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: " something went wrong",
            text: error.text,
          });
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full py-36 px-6 bg-black text-white">
      <div className="max-w-5xl mx-auto shadow-lg p-4 rounded">
        <h1 className="text-5xl pb-4 text-center font-bold">CONTACT US</h1>

        <form onSubmit={submitForm} className="space-y-6 pt-8">
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Name</label>
            <input
              className="bg-black border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Email *</label>
            <input
              className="bg-black border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={email}
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Subject</label>
            <input
              className="bg-black border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Message</label>
            <textarea
              className="bg-black border border-white/20 outline-none p-1 rounded px-2 resize-none placeholder:text-white/30"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us how we can help..."
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">How did you hear about us?</label>
            <input
              className="bg-black border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={hearAboutUs}
              onChange={(e) => setHearAboutUs(e.target.value)}
              placeholder="e.g., Friend, Social Media, Website, etc."
            />
          </div>

          <div className="flex justify-between items-center">
            {/* <div className="text-red-500 text-lg">*{errMsg}</div> */}
            <button
              type="submit"
              className="outline-none bg-orange-600 text-black font-bold px-4 py-2 rounded uppercase"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
