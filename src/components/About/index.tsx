"use client";
import Heading from "./heading";
import Commitments from "./commitments";
import Vision from "./vision";

export default function About() {
  return (
    <div className="flex flex-col md:w-full lg:w-2/3 md:flex-row md:flex-wrap">
      <Heading />
      <Vision />
      <Commitments />
    </div>
  );
}
