import Hero from "@/components/sections/Hero";
import WhoYouAre from "@/components/sections/WhoYouAre";
import Timeline from "@/components/sections/Timeline";
import Gallery from "@/components/sections/Gallery";
import Letter from "@/components/sections/Letter";
import FromMumAndMe from "@/components/sections/FromMumAndMe";
import ReasonsGrateful from "@/components/sections/ReasonsGrateful";
import Finale from "@/components/sections/Finale";

export default function Page() {
  return (
    <main className="bg-cream text-brown">
      <Hero />
      <WhoYouAre />
      <Timeline />
      <Gallery />
      <Letter />
      <FromMumAndMe />
      <ReasonsGrateful />
      <Finale />
    </main>
  );
}