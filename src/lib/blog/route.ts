"use server";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const jsonData = await fs.readFile(
      process.cwd() + "/src/data/blogs/data.json",
      "utf8"
    );
    const data = JSON.parse(jsonData);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return NextResponse.json(
      { error: "Failed to load data!" },
      { status: 500 }
    );
  }
}

export async function getAllBlogs() {
  try {
    const jsonData = await fs.readFile(
      process.cwd() + "/src/data/blogs/data.json",
      "utf8"
    );
    const data = JSON.parse(jsonData);
    return data;
  } catch (error) {
    return { error: `${error}:Failed to load data!`};
  }
}

interface Blog{
  id:number;
  title: string;
  content: string[];
  subsections: Blog[];
}

export async function getBlogById(slug:string) {
  try {
    const jsonData = await fs.readFile(
      process.cwd() + "/src/data/blogs/data.json",
      "utf8"
    );
    const data = JSON.parse(jsonData);

    const filteredData = data.subsections.find(
      (section:Blog) => section.id === Number(slug)
    );
    console.log(filteredData);
    return filteredData;
  } catch (error) {
    return { error: `${error}:Failed to load data!`};
  }
}
