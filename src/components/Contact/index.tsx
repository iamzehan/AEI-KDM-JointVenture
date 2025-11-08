"use client";
import Form from "./form";
import Direct from "./Direct";
export default function Contact() {
  return (
    <div className="flex flex-col h-full items-center gap-10 xl:flex-row">
      <Form/>
      <Direct/>
    </div>
  );
}
