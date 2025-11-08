"use client";
import Send from "./send-message-btn";
export default function Fields() {
  return (
    <fieldset
      className="
    flex flex-col gap-2
    md:px-20 md:py-10 md:w-full
    md:bg-white dark:bg-transparent
    md:border md:rounded-xl border-gray-500/20 
    border-0 dark:border-0 
    md:border-t md:shadow-md
    "
    >
      <legend className="font-bold text-2xl mb-20 md:mb-0 md:text-4xl text-center text-blue-950 dark:text-white">
        Contact
      </legend>
      <fieldset className="flex flex-col gap-2">
        <label
          htmlFor="full-name"
          className="text-blue-950 dark:text-white font-bold"
        >
          Full Name
        </label>
        <input
          className="
          border border-gray-500/20 rounded-lg p-2 
          bg-transparent dark:text-white 
          dark:focus:outline-white focus:outline-1 focus:outline-blue-950"
          name="full-name"
          type="text"
          placeholder="Your full name"
          required
        ></input>
        <label
          className="text-blue-950 dark:text-white font-bold"
          htmlFor="company"
        >
          Your Company/Organization
        </label>
        <input
          className="
          border border-gray-500/20 rounded-lg p-2 
          bg-transparent dark:text-white 
          dark:focus:outline-white focus:outline-1 focus:outline-blue-950"
          name="company"
          type="text"
          placeholder="Company or Oraganization"
          required
        ></input>
        <label
          className="text-blue-950 dark:text-white font-bold"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="
          border border-gray-500/20 rounded-lg p-2 
          bg-transparent dark:text-white 
          dark:focus:outline-white focus:outline-1 focus:outline-blue-950"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        ></input>
        <label
          className="text-blue-950 dark:text-white font-bold"
          htmlFor="Area of Interest"
        >
          Area of Interest
        </label>
        <select
          className="
          custom-select"
          title="Area of Interest"
        >
          <option value="Equity Investment">Select one ...</option>
          <option value="Equity Investment">Equity Investment</option>
          <option value="LPG Supply and Partnership">
            LPG Supply and Partnership
          </option>
          <option value="Tank Manufacturing">Tank Manufacturing</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
        <label
          className="text-blue-950 dark:text-white font-bold"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="border border-gray-500/20 rounded-lg p-2 
          bg-transparent dark:text-white 
          dark:focus:outline-white focus:outline-1 focus:outline-blue-950
          resize-none h-40
          "
          name="message"
          placeholder="Message"
          draggable="false"
        ></textarea>
      </fieldset>
      <div
        className="
      w-full flex flex-col-reverse
      gap-20 md:gap-5
      items-center  md:flex-row 
      md:justify-around"
      >
        <p className="text-sm md:text-md">
          Or email us at:{"\t"}
          <strong className="text-lime-600">invest@aei-kdm.example.com</strong>
        </p>
        <Send />
      </div>
    </fieldset>
  );
}
