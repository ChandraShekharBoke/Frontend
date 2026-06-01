import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.jpeg";
import "./Service.css";

const Services = () => {
  const services = [
    {
      title: "Global Logistics & Timely Delivery",
      description:
        "Efficient supply chain management ensuring secure and on-time international shipments.",
      image: service1,
    },
    {
      title: "Bulk Production & Inventory Control",
      description:
        "Advanced manufacturing capacity with real-time inventory management for export-scale orders.",
      image: service2,
    },
    {
      title: "Export Documentation & Compliance",
      description:
        "Comprehensive documentation and regulatory compliance support for global markets.",
      image: service3,
    },
    {
      title: "Dedicated Client Support",
      description:
        "Professional assistance and long-term partnership support for international buyers.",
      image: service4,
    },
  ];

  return (
    <>
      <section className="services-section">
        <div className="container-fluid services-container">

          <div className="services-header text-center">
            <span className="section-label">Our Capabilities</span>
            <h2 className="section-title">Comprehensive Manufacturing & Export Services</h2>
            <p className="section-description">
              Delivering reliable production, quality assurance, and global logistics
              solutions tailored for international food and nutraceutical industries.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="card service-card h-100">
                  <div className="service-image-wrapper">
                    <img
                      src={service.image}
                      className="card-img-top"
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>

                  <div className="card-body">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Services;