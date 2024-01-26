import Navigation from "./components/header/Navigation";
import Hero from "./components/header/Hero";
import BeCountedBanner from "./components/banner/BeCountedBanner";
import SubmitBanner from "./components/banner/SubmitBanner";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <div className="max-centered">
        <BeCountedBanner />
        <main role="main">
          {/* Start: Implementation */}
          👉 Your code goes here 👈
          {/* End: Implementation */}
        </main>
      <SubmitBanner />
      <Footer />
      </div>
    </>
  );
}
