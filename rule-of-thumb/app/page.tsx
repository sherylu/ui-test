import Navigation from "./components/header/Navigation";
import Hero from "./components/header/Hero";
import BeCountedBanner from "./components/banner/BeCountedBanner";
import SubmitBanner from "./components/banner/SubmitBanner";
import Footer from "./components/footer/Footer";
import Rulings from "./components/rulings/Rulings";
import { getAllRulings } from "@/lib/rulings";

export default async function Home() {
  const {rulings} = await getAllRulings()

  return (
    <>
      <Navigation />
      <Hero />
      <div className="max-centered">
        <BeCountedBanner />
        <main role="main">
          <Rulings rulings={rulings} />
        </main>
      <SubmitBanner />
      <Footer />
      </div>
    </>
  );
}
