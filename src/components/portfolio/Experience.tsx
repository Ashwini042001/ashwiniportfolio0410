const Experience = () => {
  const items = [
    {
      role: "Process Associate",
      company: "Genpact India Pvt Ltd",
      period: "July 2023 – March 2025",
      points: [
        "Configured & optimized chatbot flows, reducing manual support.",
        "Collaborated with QA/support to enhance bot workflows.",
        "Used MySQL for data validation & performance reviews.",
        "Provided product feedback to improve customer experience.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Timeline of professional roles and contributions.</p>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-primary/30" />
          <div className="space-y-6">
            {items.map((item) => (
              <article key={item.role} className="relative card-glass rounded-xl p-6">
                <div className="absolute left-[-10px] top-6 w-5 h-5 rounded-full bg-primary" />
                <h3 className="font-semibold text-lg">{item.role} – {item.company}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
