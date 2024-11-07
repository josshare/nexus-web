'use client'

import dynamic from 'next/dynamic';
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animationData from '@/public/animations/airplane.json'; 

const AboutPage = () => {

  return (
  <div className="App">

    <header className="App-header">
      <Lottie animationData={animationData} />
    </header>
  </div>
  );
};

export default AboutPage;