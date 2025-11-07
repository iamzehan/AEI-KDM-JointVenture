import { promises as fs } from "fs";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, {params}:{params:Promise<{slug:string}>}) {
  const { slug }= await params;
  try {
    const jsonData = await fs.readFile(
      process.cwd() + "/src/data/blogs/data.json",
      "utf8"
    );
    const data = JSON.parse(jsonData);

    const filteredData = data.subsections.find(section=> section.id === Number(slug));

    if (!filteredData) {
      return NextResponse.json(
        { error: "Subsection not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(filteredData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}
