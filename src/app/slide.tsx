"use Client";

import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

function Home(cardList: any) {
  const settings = {
    spaceBetween: 20,
    navigation: {},
    scrollbar: { draggable: true, el: null },
    slidesPerView: 3,
  };

  return (
    <Swiper {...settings}>
      {cardList.map((card: any) => (
        <SwiperSlide key={card.id}>{card}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Home;
