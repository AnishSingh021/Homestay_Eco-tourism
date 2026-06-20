import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="grid md:grid-cols-3 gap-4 p-8">
        <Card
          title="Sentiment Analysis"
          description="Classify reviews as Positive, Neutral, or Negative."
        />

        <Card
          title="Theme Detection"
          description="Detect Food, Location, Cleanliness and Host related feedback."
        />

        <Card
          title="AI Response Generator"
          description="Generate professional responses for customer reviews."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;