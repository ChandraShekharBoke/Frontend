import "./Contact.css";

const Contact = () => {
  const contactDetails = [
    {
      id: 1,
      title: "Registered Office",
      description: "Raipur, Chhattisgarh, India",
    },
    {
      id: 2,
      title: "Phone",
      description: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      id: 3,
      title: "Email",
      description: "info@krishnanaturals.com",
      link: "mailto:info@krishnanaturals.com",
    },
    {
      id: 4,
      title: "Business Hours",
      description: "Mon – Sat | 9:00 AM – 6:00 PM (IST)",
    },
  ];

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-container">

        <header className="contact-header">
          <span className="section-label">Get In Touch</span>

          <h2 id="contact-heading">
            Connect With Our Export & Sales Team
          </h2>

          <p>
            For product inquiries, bulk orders, partnerships, or export-related
            information, our team is ready to assist you.
          </p>
        </header>

        <div className="contact-grid">
          {contactDetails.map((item) => (
            <article key={item.id} className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                ✓
              </div>

              <h3>{item.title}</h3>

              {item.link ? (
                <a href={item.link}>{item.description}</a>
              ) : (
                <p>{item.description}</p>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;