'use client'

import { title } from "@/components/primitives";
import dynamic from "next/dynamic";

const LottieAnimation = dynamic(() => import("lottie-react"), { ssr: false });

export default function CheckinPage() {
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-6">
      <h1 className={title()}>Coming soon!</h1>
      <div className="w-1/2 md:w-1/3 lg:w-1/4"> {/* Adjust size as needed */}
      </div>
    </div>
  );
}