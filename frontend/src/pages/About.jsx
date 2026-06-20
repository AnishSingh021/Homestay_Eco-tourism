import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-3xl font-bold">About</h1>

        <p className="mt-4">
          This project helps homestay owners analyze customer reviews using AI.
        </p>
      </div>

      <Footer />
    </>
  );
}

export default About;