import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="font-extrabold text-lg text-gradient">Ashwini</a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a className="hover-scale text-muted-foreground hover:text-foreground story-link" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/ashwini-deshpande04102001/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="outline" size="icon" aria-label="LinkedIn">
              <Linkedin />
            </Button>
          </a>
          <a
            href="https://github.com/Ashwini042001"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="outline" size="icon" aria-label="GitHub">
              <Github />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="hero" size="sm" className="rounded-full">
              <Mail className="mr-1" /> Contact
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
