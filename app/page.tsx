import { Hero } from "@/components/home/Hero";
import { Story } from "@/components/home/Story";
import { Chapters } from "@/components/home/Chapters";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <Story />
      <Chapters />
      <SelectedWork />
      <Process />
      <Testimonials />
    </>
  );
}
