import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const jsonData = await fs.readFile(process.cwd() + '/src/data/blogs/data.json', "utf8");
    const data = JSON.parse(jsonData);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return NextResponse.json({ error: "Failed to load data!" }, { status: 500 });
  }
}