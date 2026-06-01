import { memo } from "react";
import "./ProductSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { NavLink } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProductCard from "../ProductCard";
import products from "../../Data/productData";

const ProductSlider = () => {
  if (!products?.length) return null;

  return (
    <section className="product-section" aria-labelledby="products-heading">
      <div className="product-container">

        <header className="product-header">
          <span className="section-label">Our Portfolio</span>

          <h2 id="products-heading">
            Premium Fruit & Vegetable Powder Range
          </h2>

          <p>
            Manufactured with advanced processing technology to ensure
            purity, nutritional retention, and international export standards.
          </p>
        </header>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          loop
          speed={800}
          grabCursor
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 16 },
            576: { slidesPerView: 1.5, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            992: { slidesPerView: 3, spaceBetween: 28 },
            1200: { slidesPerView: 4, spaceBetween: 32 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="product-footer text-center">
          <NavLink to="/priceList" className="btn btn-outline-products">
            View Complete Product Range
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default memo(ProductSlider);