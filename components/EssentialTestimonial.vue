<template>
  <div
    class="brook-testimonial-area ptb--50 ptb-md--80 ptb-sm--60 bg_image--60"
    :style="{
      backgroundImage: `url('/img/bg/bg-image-60.jpg')`,
      backgroundColor: `hsl(0deg 0% 0% / 38%)`,
      backgroundBlendMode: `multiply`,
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="brook-section-title text-center mb--70">
            <h2 class="heading-1 text-white text-uppercase fw-500">
              TESTIMONIALS
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="testimonial-wrapper">
            <div class="testimonial-container pb--30">
              <div class="testimonial testimonial--creative">
                <div class="brook-element-carousel nav-content">
                  <swiper :options="swiperOption">
                    <div
                      class="swiper-slide testimonial testimonial_style--4"
                      v-for="testimonial in testimonials"
                      :key="testimonial.id"
                    >
                      <div class="content">
                        <p>{{ testimonial.text }}</p>
                        <div class="testimonial-info">
                          <div class="clint-info">
                            <h6>{{ testimonial.name }}</h6>
                            <span>{{ testimonial.position }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </swiper>
                  <!-- add pagination -->
                  <div class="swiper-pagination swiper-dots-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        speed: 10000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },

      testimonials: [
        {
          id: 1,
          name: "Chloe O'Shea",
          position: "Wedding",
          text: "We booked Jess for our October 2016 wedding at Highcliffe Castle in Dorset. Jess was highly professional throughout the booking process and we felt very reassured. On the day itself the music was faultless, absolutely beautiful. Our ceremony was recorded, meaning we have the joy of listening to it over and over again. The music was truly perfect and we would recommend Jess to anyone.",
        },
        {
          id: 2,
          name: "Nikki Burge",
          position: "Wedding",
          text: "We recently booked Jess to play during the ceremony and reception at our wedding and were absolutely delighted with her performance! Jess played beautifully to our guests and everyone commented on just how special it was to have a harpist, as well as how they enjoyed the range of classical and more modern pieces! We genuinely cannot thank Jess enough for making our day that bit more special and would recommend her to everyone!!! Jess is very competitively priced in comparison to other musicians and is so, so talented!!! We could listen to Jess play all day long! Thank you, Jess!",
        },
        {
          id: 3,
          name: "Paul & Denise Bently",
          position: "Wedding",
          text: "I'm so glad we made the decision to book Jess for our 30th anniversary wedding vow renewal ceremony. Her presence lifted the whole event to another level & Jess was a delight to deal with, managing to incorporate our chosen music ancient & modern into the proceedings. Our friends & family were overwhelmed. An amazing talented young lady whom we would recommend without hesitation.",
        },
        {
          id: 4,
          name: "Rehanna",
          position: "Wedding",
          text: "Jessica played on our wedding ceremony on the 20 September 2014.Highly recommend. Individual approach and high level of professionalism, and a huge talent. Her music made our wedding ceremony unforgettable.",
        },
      ],
    };
  },
};
</script>
