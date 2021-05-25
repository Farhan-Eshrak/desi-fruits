import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./ProductStyle.css";
import b1 from '../../../images/1.png'

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const ProductCarousel = () => {
    return (
        <>
            <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
                "clickable": true
            }} navigation={true} className="mySwiper">
                <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={b1} alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default ProductCarousel;