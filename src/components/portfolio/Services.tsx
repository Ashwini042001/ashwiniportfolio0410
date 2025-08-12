const Services = () => {
  const services = [
    {
      title: "Process Automation & Optimization",
      description: "Streamlining repetitive tasks and improving workflows.",
    },
    {
      title: "Data Analysis & Visualization",
      description: "Turning raw data into insights and clear visuals.",
    },
    {
      title: "Web Development",
      description: "Front-end and basic full-stack development services.",
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">Ways I can help your team or project.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="card-glass rounded-xl p-6 hover-scale">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
