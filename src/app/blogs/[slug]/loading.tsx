"use client";
import Loader from "@/components/Loader";
import ScrollToTop from "@/lib/scroll-to-top";
export default function Loading() {
  ScrollToTop();
  return (
    <Loader/>
  );
}