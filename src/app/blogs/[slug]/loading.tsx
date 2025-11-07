"use client";
import { RotateRight } from "@mui/icons-material";
import ScrollToTop from "@/lib/scroll-to-top";
export default function Loading() {
  ScrollToTop();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-2">
      <RotateRight className="size-10 animate-spin text-gray-500" />
      <p className="text-gray-600 font-medium">Fetching blog...</p>
    </div>
  );
}