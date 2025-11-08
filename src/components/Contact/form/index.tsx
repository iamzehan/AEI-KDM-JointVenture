"use client";
import Fields from "./input-fields";
export default function Form() {
  return (
    <form className="
    py-10 flex flex-col gap-3 md:gap-0 p-5 w-full xl:w-2/3 md:items-center
    md:bg-white dark:bg-transparent xl:bg-transparent
    ">
      <Fields />
    </form>
  );
}
