"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Register = () => {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_REGISTER_TEMPLATE_ID;
  const KEY = process.env.NEXT_PUBLIC_API_KEY;

  const [email, setEmail] = useState("");
  const [childname, setChildname] = useState("");
  const [parentname, setParentname] = useState("");
  const [age, setAge] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [grade, setGrade] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState("");

  const clearForm = () => {
    setAge("");
    setChildname("");
    setParentname("");
    setEmail("");
    setGrade("");
    setPhonenumber("");
    setHearAboutUs("");
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const submitForm = (e) => {
    e.preventDefault();

    const body = {
      parentName: parentname,
      email: email,
      childName: childname,
      age: age,
      grade: grade,
      phoneNumber: phonenumber,
      hearAboutUs: hearAboutUs,
    };

    try {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, body, KEY).then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });

          clearForm();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops, something went wrong",
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
      <div className="max-w-5xl mx-auto p-4 shadow-lg rounded">
        <h1 className="text-5xl pb-4 text-center font-bold">REGISTER</h1>

        <form onSubmit={submitForm} className="space-y-6 pt-8">
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Email *</label>
            <input
              type="email"
              required
              className="bg-black/90 border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
            />
            <div
              className={
                email.length > 1 && !validateEmail(email)
                  ? `block text-red-500`
                  : `hidden`
              }
            >
              not a valid email
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Parent Name *</label>
            <input
              className="bg-black/90 border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={parentname}
              onChange={(e) => setParentname(e.target.value)}
              required
              placeholder="Parent full name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Child Name *</label>
            <input
              className="bg-black/90 border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={childname}
              onChange={(e) => setChildname(e.target.value)}
              required
              placeholder="Child full name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Age</label>
            <input
              className="bg-black/90 border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Grade</label>
            <input
              className="bg-black/90 border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={grade}
              placeholder="4th grade"
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">Phone Number</label>
            <input
              // input="tel"
              id="phone"
              name="phone"
              className="bg-black/90 border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={phonenumber}
              placeholder="xxx-xxx-xxxx"
              onChange={(e) => setPhonenumber(e.target.value)}
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg pb-0.5">How did you hear about us?</label>
            <input
              className="bg-black/90 border border-white/20 outline-none p-1 rounded px-2 placeholder:text-white/30"
              value={hearAboutUs}
              onChange={(e) => setHearAboutUs(e.target.value)}
              placeholder="e.g., Friend, Social Media, Website, etc."
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="outline-none bg-orange-600 text-black font-bold px-4 py-2 rounded uppercase"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
