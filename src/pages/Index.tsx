import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Services from "@/components/portfolio/Services";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ashwini Surendra Deshpande",
          jobTitle: "Process Associate | Developer | Data Analyst",
          email: "mailto:ashwinideshpande2001@gmail.com",
          url: "https://lovable.dev/projects/ee6fb940-1caf-42cd-b85d-162e49295ed7",
          sameAs: [
            "https://www.linkedin.com/in/ashwini-deshpande04102001/",
            "https://github.com/Ashwini042001"
          ]
        })}} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
