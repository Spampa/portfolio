import React from "react";
import Header from "@/components/header/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import ContactMe from "@/components/contactme/contactMe";

import Link from "next/link";

import { Source_Code_Pro } from "next/font/google"
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={sourceCodePro.className}>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  );
}
