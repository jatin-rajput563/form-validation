import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LEFT_ARROW, RIGHT_ARROW } from "../utils/Icons";
import { SLIDER_DATA, } from "../utils/helper";

const WorldGame = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="bg-[url(../src/assets/images/png/bg-image.png)] relative py-10 sm:py-20 md:py-25 lg:py-36">
        <div className="xl:pl-[148px] max-w-[1440px] xl:flex mx-auto gap-[47px] max-xl:px-3">
          <div className="max-xl:pb-8 xl:w-5/12">
            <h2 className="ff-oswald text-4xl sm:text-5xl leading-[140%] pb-[17px] text-white xl:max-w-[401px]">
              Your world is the game board, and your mind is at stake.
            </h2>
            <p className="ff-open text-white leading-[135%] xl:max-w-[410px]">
              At the heart of Ingress is a desire to bring people together
              through exploration and teamwork.
            </p>
          </div>
          <div className="w-full flex max-xl:mx-auto xl:w-7/12">
            <div className="flex gap-[35px] items-center justify-center absolute bottom-[24.5%] right-95 z-10">
              <button ref={prevRef}>
                <LEFT_ARROW />
              </button>
              <button ref={nextRef}>
                <RIGHT_ARROW />
              </button>
            </div>
            <Swiper
              className="w-full"
              spaceBetween={25}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              modules={[Pagination, Navigation]}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
              }}
            >
              {SLIDER_DATA.map((item, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <img src={item.image} alt={`slide-${index}`} />
                  <p className="text-white pt-[27px] ff-oswald leading-[100%] text-xl paragraph">
                    {item.text}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorldGame;
