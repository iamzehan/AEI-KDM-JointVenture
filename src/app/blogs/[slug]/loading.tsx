"use client";
import { DataUsage } from "@mui/icons-material";
import ScrollToTop from "@/lib/scroll-to-top";
export default function Loading() {
  ScrollToTop();
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-2">
      <DataUsage className="size-10 animate-spin text-gray-500" fontSize="large"/>
      <p className="text-gray-600 font-medium">Fetching blog...</p>
    </div>
  );
}