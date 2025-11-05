"use client";
import * as icon from "@mui/icons-material";
interface Mission {
  title: string;
  list_of_mission: string[];
}
interface Content {
  title: string;
  description: string;
  mission: Mission;
}
const vision: { data: Content } = {
  data: {
    title: "Our Vision",
    description:
      "To transform Bangladesh's LPG supply chain, ensuring a secure, sustainable, and uninterrupted energy supply that powers growth and well-being for individuals and businesses.",
    mission: {
      title: "Our Mission",
      list_of_mission: [
        "To Build & Operate a world-class LPG terminal.",
        "To Empower local bottling companies for affordable distribution.",
        "To Stabilize the market with a strategic reserve and price stability.",
        "To Partner with government, industry, and finance for a resilient ecosystem.",
      ],
    },
  },
};
export default function Vision() {
  const data = vision.data;
  const EnergyIcon = icon.EnergySavingsLeaf;
  const VisionIcon = icon.RemoveRedEye;
  const PropaneIcon = icon.PropaneTank;
  return (
    <div className="
    w-full border-x-1 border-gray-500/10 md:shadow-xl/10
    flex flex-col p-10 md:items-start items-center text-justify gap-3 text-shadow-sm">
      <p
        className="
      text-2xl font-bold text-justify md:text-3xl 
      mb-5 text-blue-950 dark:text-white"
      >
        <EnergyIcon fontSize="large" className="text-lime-600" />
        {"\t"}A Future of Energy That Works for Everyone
      </p>
      <p className="text-xl font-bold text-blue-950 dark:text-white">
        <VisionIcon fontSize="small" className="mb-1 text-red-400" />
        {"\t"}
        {data.title}
      </p>
      <p className="text-gray-500 dark:text-white">{data.description}</p>
      <p className="text-md font-bold text-blue-950 dark:text-white">
        <PropaneIcon fontSize="small" className="mb-1 text-green-400"/>
        {"\t"}
        {data.mission.title}
      </p>
      <ul className="list-disc
       px-4 md:px-10 text-justify text-gray-500 md:text-left dark:text-white">
        {data.mission.list_of_mission.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
