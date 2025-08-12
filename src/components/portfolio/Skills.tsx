import { Code, Database, LineChart, Bot } from "lucide-react";

const SkillCard = ({ title, items, Icon }: { title: string; items: string[]; Icon: any }) => (
  <div className="card-glass rounded-xl p-6 hover-scale">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="text-primary" />
      <h3 className="font-semibold">{title}</h3>
    </div>
    <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
      {items.map((i) => (
        <li key={i} className="px-2 py-1 rounded-md bg-secondary">{i}</li>
      ))}
    </ul>
  </div>
);

const Certifications = () => (
  <div className="grid md:grid-cols-3 gap-4 mt-6">
    {[
      {
        title: "Full Stack Development (Java, Python, SQL, Web) – KodNest",
      },
      { title: "Data Science Using Python – NPTEL" },
      { title: "MS Office Automation – Advanced Excel, Word, PowerPoint" },
    ].map((c) => (
      <div key={c.title} className="card-glass rounded-xl p-4 text-sm">
        <span className="inline-block px-2 py-1 rounded bg-accent">Certification</span>
        <p className="mt-2">{c.title}</p>
      </div>
    ))}
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technical strengths across programming, web and analytics tools.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard title="Programming" Icon={Code} items={["Java", "Python", "MySQL"]} />
          <SkillCard title="Web Development" Icon={Code} items={["HTML", "CSS", "JavaScript"]} />
          <SkillCard title="Tools" Icon={Database} items={["MS Office", "Advanced Excel", "Generative AI"]} />
        </div>
        <Certifications />
      </div>
    </section>
  );
};

export default Skills;
