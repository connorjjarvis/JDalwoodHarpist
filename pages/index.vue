<template>
  <div class="main-container">
    <HeaderBlack
      class="bg_color--14 border-bottom"
      @togglenav="navOpen = !navOpen"
    />

    <OffCanvasMobileMenu
      :class="{ 'show-mobile-menu': navOpen }"
      @togglenav="navOpen = !navOpen"
    />

    <HeroEssential />

    <div class="brook-call-to-action bg_color--24 ptb--40">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-6">
            <div
              class="
                call-content
                essential-cta-content
                text-center text-sm-left
              "
            >
              <h3 class="text-black wow move-up">
                Let’s create something extraordinary together.
              </h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="
                call-btn
                text-center text-md-right
                mt_mobile--20
                wow
                move-up
              "
            >
              <n-link
                to="/contact"
                class="
                  brook-btn
                  text-theme
                  btn-sd-size
                  essential-btn
                "
                >Contact me now</n-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <EssentialIconBox />

    <EssentialService />

    <EssentialTestimonial />

    <FooterTwo />
  </div>
</template>

<script>
export default {
  components: {
    HeaderBlack: () => import("@/components/HeaderBlack"),
    OffCanvasMobileMenu: () => import("@/components/OffCanvasMobileMenu"),
    HeroEssential: () => import("@/components/HeroEssential"),
    EssentialIconBox: () => import("@/components/EssentialIconBox"),
    EssentialService: () => import("@/components/EssentialService"),
    EssentialTestimonial: () => import("@/components/EssentialTestimonial"),
    FooterTwo: () => import("@/components/FooterTwo"),
  },

  data() {
    return {
      navOpen: false,
    };
  },

  mounted() {
    document.body.classList.add(
      "template-color-15",
      "template-font-7",
      "CerebriSans-font"
    );
  },

  head() {
    return {
      title: "Home",
    };
  },
};
</script>
