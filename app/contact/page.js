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

  const clearForm = () => {
    setMessage("");
    setName("");
    setSubject("");
    setEmail("");
  };

  const submitForm = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      email: email,
      message: message,
      subject: subject,
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
    <div className="w-full py-12 px-6">
      <div className="max-w-5xl mx-auto bg-slate-50  shadow-lg p-4 rounded">
        <h1 className="text-5xl pb-4 text-center">Contact Us</h1>

        <form onSubmit={submitForm} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Name</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Email</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={email}
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Subject</label>
            <input
              className="bg-gray-200 outline-none p-1 rounded px-2"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Message</label>
            <textarea
              className="bg-gray-200 outline-none p-1 rounded px-2 resize-none"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center">
            {/* <div className="text-red-500 text-lg">*{errMsg}</div> */}
            <button
              type="submit"
              className="outline-none bg-[#6D31ED] text-white px-4 py-2 rounded"
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
