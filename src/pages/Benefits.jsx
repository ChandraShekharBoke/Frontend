import "./Benefits.css";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "100% Natural Raw Materials",
      description:
        "Sourced from carefully selected farms to ensure purity, traceability, and superior quality standards.",
    },
    {
      id: 2,
      title: "Nutrient Retention Technology",
      description:
        "Advanced processing methods preserve essential vitamins, minerals, and natural flavors.",
    },
    {
      id: 3,
      title: "No Artificial Additives",
      description:
        "Free from added sugar, synthetic colors, and harmful preservatives.",
    },
    {
      id: 4,
      title: "International Quality Standards",
      description:
        "Manufactured under strict quality control protocols suitable for global markets.",
    },
    {
      id: 5,
      title: "Export-Ready Production",
      description:
        "Reliable bulk manufacturing capacity for international food and beverage industries.",
    },
    {
      id: 6,
      title: "Versatile Applications",
      description:
        "Ideal for beverages, nutraceuticals, bakery, confectionery, and functional foods.",
    },
  ];

  return (
    <section className="benefits-section" aria-labelledby="benefits-heading">
      <div className="benefits-container">

        <header className="benefits-header">
          <span className="section-label">Why Choose Us</span>

          <h2 id="benefits-heading">
            Trusted Manufacturing Excellence
          </h2>

          <p>
            Delivering premium fruit and vegetable powders with
            uncompromised quality, safety, and global export standards.
          </p>
        </header>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article key={benefit.id} className="benefit-card">
              <div className="benefit-icon" aria-hidden="true">
                ✓
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;