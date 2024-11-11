'use client'

import dynamic from 'next/dynamic';
import animationData from '@/public/animations/map.json'; 
import FlightSearchForm from '@/components/FlightSearchForm';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-6 md:py-6">
      <div className="flex w-full gap-3 justify-center items-center">
        <div className="flex-1">
          <FlightSearchForm />
        </div>
        <div className="flex-1 flex justify-center">
          <Lottie animationData={animationData} style={{ width: '100%', height: '600px' }} />
        </div>
      </div>
    </div>
  );
}
