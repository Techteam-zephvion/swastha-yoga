import { Hero } from "@/components/sections/Hero";
import { StatsRow } from "@/components/sections/StatsRow";
import { Intro } from "@/components/sections/Intro";
import { PageTeasers } from "@/components/sections/PageTeasers";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsRow />
      <Intro />
      <PageTeasers />
    </>
  );
}
