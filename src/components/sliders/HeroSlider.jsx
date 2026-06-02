import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

import banners1 from "../../assets/banners1.png";
import banners2 from "../../assets/banners2.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    image: banners1,
    label: "Leading Manufacturer & Exporter",
    title: "Premium Natural Fruit & Vegetable Powders",
    description:
      "High-quality spray dried and dehydrated powders manufactured for global food, beverage, and nutraceutical industries.",
    primaryBtn: { text: "Explore Products", link: "/products" },
    secondaryBtn: { text: "Contact Us", link: "/contact" },
  },
  {
    id: 2,
    image: banners2,
    label: "Global Supply Excellence",
    title: "Consistent Quality. International Standards.",
    description:
      "Trusted by global partners for purity, freshness, and export-grade manufacturing processes.",
    primaryBtn: { text: "Our Benefits", link: "/benefits" },
    secondaryBtn: { text: "Our Services", link: "/services" },
  },
];

const HeroSlider = () => {
  return (
    <section className="hero-slider" aria-label="Homepage hero banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        loop
        speed={900}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-container">
                <div className="hero-content">

                  <span className="hero-label">
                    {slide.label}
                  </span>

                  <h1 className="hero-title">
                    {slide.title}
                  </h1>

                  <p className="hero-description">
                    {slide.description}
                  </p>

                  <div className="hero-buttons">
                    <NavLink to={slide.primaryBtn.link} className="btn btn-primary-hero">
                      {slide.primaryBtn.text}
                    </NavLink>

                    <NavLink to={slide.secondaryBtn.link} className="btn btn-outline-hero">
                      {slide.secondaryBtn.text}
                    </NavLink>
                  </div>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;