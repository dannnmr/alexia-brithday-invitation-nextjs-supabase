import { Intro } from "@/components/Intro";
import { Hero } from "@/components/Hero";
import { Parents } from "@/components/Parents";
import { Location } from "@/components/Location";
import { Itinerary } from "@/components/Itinerary";
import { Memories } from "@/components/Memories";
import { DressCode } from "@/components/DressCode";
import { Gifts } from "@/components/Gifts";
import { RSVP } from "@/components/RSVP";
import { Music } from "@/components/Music";
import { Wishes } from "@/components/Wishes";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { Passes } from "@/components/Passes";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-black">
      <Intro />
      
      {/* 
        The content below Intro will be visible once the user interacts with the envelope 
        and the Intro component fades out.
      */}
      <div className="relative z-10">
        <Hero />
        <Parents />
        <Itinerary />
        {/* <Memories /> */}
        <DressCode />
        <Gifts />
        <Music />
        <Location />
        <RSVP />
        <Passes />
        {/* <Wishes /> */}
        <Gallery />
        <Footer />
      </div>
    </main>
  );
}
