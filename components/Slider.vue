<template>
    <swiper :navigation="true" :autoplay="true" :modules="modules" class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>
  