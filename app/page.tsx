"use client";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Cal from "@/components/cal";
import Divid from "@/components/divid";
import FlightSearchForm from "@/components/FlightSearchForm";


export default function Home() {
  return (
    <section className="flex flex-col items-start justify-start gap-4 py-6 md:py-6">
      <div className="inline-block max-w-xl text-center justify-center">
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React
          <div className="flex w-full flex-wrap md:flex-nowrap gap-3 justify-center items-center">
            <FlightSearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
