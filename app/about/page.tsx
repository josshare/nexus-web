'use client'

import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import Lottie from "lottie-react";
import animationData from './airplane.json'; 

const AboutPage = () => {

  return (
  <div className="App">
    <header className="App-header">
      <title>React Lottie - Coffe Time</title>
      <Lottie animationData={animationData} />
      <a className="App-link" href="https://es.khanacademy.org/math/get-ready-for-geometry/x8a652ce72bd83eb2:get-ready-for-analytic-geometry/x8a652ce72bd83eb2:slope/v/introduction-to-slope" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <a className="App-link" href="https://es.khanacademy.org/math/geometry-home/analytic-geometry-topic/distance-between-a-point-and-a-line/v/distance-between-a-point-and-a-line" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  </div>
  );
};

export default AboutPage;