<template>
  <div class="main-wrapper">
    <HeaderBlack @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />

    <Breadcrumb :items="items" title="Prices" background="wedding" />

    <div
      class="
        brook-pricing-table-area
        ptb--50
        ptb-md--40
        ptb-sm--40
        bg_color--5
      "
    >
      <div class="container">
        <div class="row align-items-center">
                    <div class="center">
        <table><tbody><tr><td><strong>WEDDINGS</strong></td><td></td></tr><tr><td> <br>Ceremony  </td><td> <br> £275 </td></tr><tr><td> <br>Ceremony and Drinks Reception <em>(Most Popular)</em></td><td> <br> £345 </td></tr><tr><td> <br>Ceremony and Wedding Breakfast <em>(Recommended)</em></td><td> <br>£390 </td></tr><tr><td> <br>Ceremony, Drinks Reception and Wedding Breakfast <em>(Recommended)</em></td><td> <br>£475 </td></tr><tr><td> <br> Drinks Reception </td><td> <br>£295 </td></tr><tr><td> <br>Wedding Breakfast  </td><td> <br>£325 </td></tr><tr><td> <br>Drinks Reception and Wedding Breakfast </td><td> <br>£415 </td></tr><tr><td></td><td></td></tr><tr><td><strong>OTHER EVENTS </strong></td><td></td></tr><tr><td>Background Music First Hour</td><td>£275</td></tr><tr><td> <br>Background Music Additional Hours (up to 4)</td><td>£60</td></tr><tr><td></td><td></td></tr><tr><td><strong>OTHER CHARGES</strong></td><td></td></tr><tr><td> Second Venue  </td><td> <br>£25 </td></tr><tr><td>  PA Hire (100+ guests)  <br></td><td> <br>£60 </td></tr><tr><td>Travel (after 1 hour)</td><td>POA</td></tr></tbody></table>
      </div></div></div>
    </div>

    <div
      class="brook-call-to-action bg_color--1 ptb--120 ptb-md--80 ptb-sm--60"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 col-12">
            <div class="call-content vertical-call-toaction text-center">
              <h3 class="heading heading-h3">Start working together?</h3>
              <div class="spacing"></div>
              <div class="call-btn text-center">
                <n-link
                  to="/contact"
                  class="
                    brook-btn
                    bk-btn-theme
                    text-theme
                    btn-sd-size btn-rounded
                  "
                  >Find out more</n-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterTwo />
  </div>
</template>

<script>
import data from "../data/pricing.json";
export default {
  components: {
    HeaderBlack: () => import("@/components/HeaderBlack"),
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    PricingItemStyleOne: () => import("../components/PricingItemStyleOne"),
    FooterTwo: () => import("@/components/FooterTwo"),
    Breadcrumb: () => import("@/components/Breadcrumb"),
  },

  data() {
    return {
      data,
      navOpen: false,
      items: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Prices",
          active: true,
        },
      ],
    };
  },

  mounted() {
    document.body.classList.add("template-color-1", "template-font-1");
  },

  head() {
    return {
      title: "Prices",
    };
  },
};
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>