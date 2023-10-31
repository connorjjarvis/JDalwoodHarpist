<template>
  <div class="hero-essential-area swiper-arrow-hover">
    <swiper :options="swiperOption">
      <div class="swiper-slide" v-for="slider in sliders" :key="slider.id">
        <div
          class="hero-essential-slide bg-cover"
          :style="{ backgroundImage: `url(${slider.bgImage})` }"
        >
          <div id="color-overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="hero-content hero-essential">
                  <h2 class="hero-title" v-html="slider.heading"></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 5000,
        autoplay: true,
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
      },
      sliders: [
        {
          id: 1,
          heading: "Jessica Dalwood Professional Harpist",
          bgImage: "/img/slider/essential-1.jpg",
        },
        {
          id: 2,
          heading: "Jessica Dalwood Weddings, Parties & More!",
          bgImage: "/img/slider/essential-2.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  opacity: 0.25;
}

.hero-essential-slide {
  height: 650px;
  display: flex;
  align-items: center;
  position: relative;
  // res
  @media #{$md-layout} {
    height: 600px;
  }
  @media #{$sm-layout} {
    height: 550px;
  }
  @media #{$small-mobile} {
    height: 450px;
  }
  .hero-content {
    max-width: 650px;
    .hero-title {
      justify-content: center;
      color: white;
      -webkit-text-stroke-width: 0.2px;
      -webkit-text-stroke-color: #000000;
      font-size: 52px;
      font-weight: 800;
      line-height: 60px;
      // res
      @media #{$sm-layout} {
        font-size: 40px;
      }
      @media #{$small-mobile} {
        font-size: 32px;
      }
    }
    h5 {
      color: #777;
      font-size: 20px;
      font-weight: 300;
      line-height: 1.2;
      margin-bottom: 40px;
      // res
      @media #{$sm-layout} {
        color: #444;
      }
      @media #{$small-mobile} {
        margin-top: 15px;
        line-height: 1.5;
      }
    }
  }
}
.hero-essential-area {
  .ht-swiper-button {
    color: $white;
    font-size: 30px;
    left: 70px;
    width: 68px;
    height: 68px;
    line-height: 68px;
    border-radius: 50%;
    text-align: center;
    background-color: $white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.01);
    &-next {
      right: 70px;
      left: auto;
    }
  }
}
</style>
