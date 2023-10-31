<template>
  <div
    class="service-area bg_color--5 ptb--70 ptb-md--80 ptb-sm--60"
    style="padding-bottom: 150px"
  >
    <div class="container">
      <div class="row align-content-center">
        <div class="col-lg-6 col-12">
          <div class="bk-title--default text-left">
            <h5 class="heading-13 theme-color text-uppercase fw-500">
              {{ essentialService.subHeading }}
            </h5>
            <div class="bkseparator--20"></div>
            <h3
              class="heading-40 fw-200"
              v-html="essentialService.heading"
            ></h3>
          </div>
        </div>
        <div class="col-lg-6 col-12 mt_md--10 mt_sm--10">
          <div class="bkseparator--30"></div>
          <div class="modern-service-content wow move-up">
            <p>{{ essentialService.serviceContent }}</p>
          </div>
        </div>
      </div>
      <div class="row mt--70 mt_md--20 mt_sm--10">
        <div
          class="col-xl-4 col-md-6 mt--45"
          v-for="service in essentialService.services"
          :key="service.id"
        >
          <n-link :to="service.link">
            <div
              class="single-svg-icon-box"
              :style="{ backgroundImage: `url(${service.bgImg})` }"
            ></div>

            <div class="box">
              <div class="content">
                <h5 class="link-styled heading heading-h5">
                  {{ service.heading }}
                </h5>
              </div>
            </div>
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      essentialService: {
        subHeading: "Events",
        heading: "Professional Harpist and Accomplished Teacher",
        serviceContent:
          "The harp is an elegant instrument with a beautiful tone that will add a magical touch to your wedding or special occasion. ",
        services: [
          {
            id: 1,
            heading: "Weddings",
            text: "Our Digital Marketing service includes: Drive traffic, build engagement and score meaningful conversions.",
            bgImg: "/img/service/service1.png",
            link: "/weddings",
          },
          {
            id: 2,
            heading: "Corporate Events",
            text: "Our enterprise-level websites have to be smarter than the place or platform they play on.",
            bgImg: "/img/service/service2.png",
            link: "/events",
          },
          {
            id: 3,
            heading: "Parties",
            text: "Our production team creates all kinds of purposeful videos for use on websites, social media and beyond.",
            bgImg: "/img/service/service3.png",
            link: "/parties",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.link-styled:hover {
  color: hotpink;
  text-decoration: underline;
}
</style>
