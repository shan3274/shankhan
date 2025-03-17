import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials />
      <BlogPreview />
      <Footer />
    </div>
  );
}
