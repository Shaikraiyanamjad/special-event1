import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FeaturedVideos } from "@/components/site/FeaturedVideos";
import { LiveWebcasts } from "@/components/site/LiveWebcasts";
import { Interviews } from "@/components/site/Interviews";
import { Events } from "@/components/site/Events";
import { Sponsorship } from "@/components/site/Sponsorship";
import { GlobalMap } from "@/components/site/GlobalMap";
import { Membership } from "@/components/site/Membership";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <Hero />
      <FeaturedVideos />
      <LiveWebcasts />
      <Interviews />
      <Events />
      <Sponsorship />
      <GlobalMap />
      <Membership />
      <Footer />
    </main>
  );
}
