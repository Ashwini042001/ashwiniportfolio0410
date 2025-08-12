import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-ashwini.jpg";

const Hero = () => {
  return (
    <section id="home" className="section-padding">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-enter">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Ashwini Surendra <span className="text-gradient">Deshpande</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            Process Associate | Developer | Data Analyst
          </p>
          <p className="text-muted-foreground mb-6 max-w-prose">
            Hardworking and adaptable professional eager to contribute to impactful projects.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects">
              <Button variant="hero" size="xl" className="rounded-full hover-scale">
                View My Work <ExternalLink className="ml-2" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" size="xl" className="rounded-full hover-scale">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
        <div className="relative md:justify-self-end w-full max-w-md md:max-w-lg place-self-center">
          <div className="rounded-2xl p-2 bg-gradient-hero">
            <div className="card-glass rounded-xl p-2">
              <img
                src={heroImage}
                alt="Professional headshot of Ashwini Surendra Deshpande"
                className="className="rounded-lg max-w-[300px] max-h-[400px] object-cover""
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
