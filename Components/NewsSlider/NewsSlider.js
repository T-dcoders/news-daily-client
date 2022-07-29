import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../styles/ImgSlider.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import EachSlide from "./EachSlide";

const NewsSlider = () => {
  const [entertainment, setEntertainment] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setEntertainment(data));
  }, []);
  return (
    <>
      <section className="max-w-7xl mx-auto hidden md:hidden lg:block">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {entertainment.map((item) => (
            <SwiperSlide key={item._id}>
              <EachSlide item={item}></EachSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="hidden md:block lg:hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {entertainment.map((item) => (
            <SwiperSlide key={item._id}>
              <EachSlide item={item}></EachSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="block md:hidden lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {entertainment.map((item) => (
            <SwiperSlide key={item._id}>
              <EachSlide item={item}></EachSlide>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default NewsSlider;
