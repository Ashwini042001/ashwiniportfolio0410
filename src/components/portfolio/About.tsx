const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          Adaptable electronics and communication engineering graduate (VTU, 2023) with strong foundations in
          programming, web development and data analytics. Passionate about building helpful products and automations.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="card-glass rounded-xl p-6">
            <h3 className="font-bold mb-3">Education</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><strong>B.E. ECE</strong>, VTU Belagavi, 2023 — 8.47 CGPA</li>
              <li><strong>Class 12</strong>, Vagdevi PU Science College, 2019 — 94.08%</li>
              <li><strong>Class 10</strong>, St Annes Convent High School, 2017 — 77.5%</li>
            </ul>
          </article>
          <article className="card-glass rounded-xl p-6">
            <h3 className="font-bold mb-3">Languages, Hobbies & Interests</h3>
            <p className="mb-2 text-sm md:text-base">Languages: English, Hindi, Kannada (Fluent)</p>
            <p className="text-sm md:text-base">Hobbies & Interests: Cooking, Sports</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
