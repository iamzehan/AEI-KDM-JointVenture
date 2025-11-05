"use client";
import { benefits } from "@/lib/benefits";
export default function Benefits() {
  return (
    <div>
      <ul>
        {benefits.map((benefit, index) => {
          return (<li key={index}>{benefit}</li>)
        })}
      </ul>
    </div>
  );
}