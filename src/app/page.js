import React from "react";
import Header from "@/components/header/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";
import ContactMe from "@/components/contactme/contactMe";

import { Source_Code_Pro } from "next/font/google"
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Nicolò Spampatti | Portfolio",
  description: "Welcome to my portfolio",
  image: "/favicon.ico",
};

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
