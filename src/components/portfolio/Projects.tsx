import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Urban Mobility Revenue Dashboard",
      description:
        "Interactive analytics on 50K+ NYC trip records. KPIs: trip volume, revenue trends, top zones, distance-duration metrics.",
      tools: ["Python", "Pandas", "SQLite", "Streamlit", "Seaborn", "Plotly"],
      link: "https://github.com/Ashwini042001", // Placeholder
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Selected work with measurable outcomes.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="card-glass rounded-xl p-6 group">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
              <ul className="flex flex-wrap gap-2 text-xs mb-4">
                {p.tools.map((t) => (
                  <li key={t} className="px-2 py-1 bg-secondary rounded-md">{t}</li>
                ))}
              </ul>
              <a href={p.link} target="_blank" rel="noreferrer">
                <Button variant="outline" className="hover-scale">
                  View Project <ExternalLink className="ml-2" />
                </Button>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
