"use client";
import Heading from "./heading";
import Commitments from "./commitments";
import Vision from "./vision";

export default function About() {
  return (
    <div className="flex flex-col">
      <Heading />
      <Commitments />
      <Vision />
    </div>
  );
}
