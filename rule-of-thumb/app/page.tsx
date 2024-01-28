import Navigation from "./components/header/Navigation";
import Hero from "./components/header/Hero";
import BeCountedBanner from "./components/banner/BeCountedBanner";
import SubmitBanner from "./components/banner/SubmitBanner";
import Footer from "./components/footer/Footer";
import Rulings from "./components/rulings/Rulings";
import { getAllRulings, voteRuling } from "@/lib/rulings";

export default async function Home() {
  const {rulings} = await getAllRulings()

  return (
    <>
      <Navigation />
      <Hero />
      <div className="max-centered">
        <BeCountedBanner />
        <main role="main">
          <Rulings rulings={rulings} voteRuling={voteRuling} />
        </main>
      <SubmitBanner />
      <Footer />
      </div>
    </>
  );
}
