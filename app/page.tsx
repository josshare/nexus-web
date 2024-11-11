"use client";
import { useEffect, useState } from 'react';
import FlightSearchForm from "@/components/FlightSearchForm";
import animationData from '@/public/animations/map.json'; 
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-6 md:py-6">
      <div className="flex w-full gap-3 justify-center items-center">
        <div className="flex-1">
          <FlightSearchForm />
        </div>
        <div className="flex-1 flex justify-center">
          {isClient && <Lottie animationData={animationData} style={{ width: '100%', height: '600px' }} />}
        </div>
      </div>
    </div>
  );
}
