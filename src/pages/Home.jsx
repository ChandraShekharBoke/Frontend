import HeroSlider from "../components/sliders/HeroSlider";
import ProductSlider from "../components/sliders/ProductSlider";
import Benefits from "./Benefits";
import Services from "./Service";
import Contact from "./Contact";

const Home = () => {
  return (
    <main>

      <section id="home">
        <HeroSlider />
      </section>

      <section id="products">
        <ProductSlider />
      </section>

      <section id="benefits">
        <Benefits />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </main>
  );
};

export default Home;