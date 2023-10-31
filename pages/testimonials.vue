<template>
  <div class="main-wrapper">
    <HeaderBlack @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />

    <Breadcrumb :items="items" title="Testimonials" />


    <div class="brook-testimonial-area ptb--80 ptb-md--40 ptb-sm--40 bg_color--5 poss_relative">
      <div class="container">
        <TestimonialWithoutCarousel />
      </div>
    </div>


    <FooterTwo />
  </div>
</template>

<script>
export default {
  components: {
    HeaderBlack: () => import('@/components/HeaderBlack'),
    OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
    Breadcrumb: () => import('@/components/Breadcrumb'),
    TestimonialTwo: () => import('@/components/sections/TestimonialTwo'),
    TestimonialWithoutCarousel: () => import('@/components/sections/TestimonialWithoutCarousel'),
    TestimonialThree: () => import('@/components/sections/TestimonialThree'),
    FooterTwo: () => import('@/components/FooterTwo'),
  },

  data() {
    return {
      navOpen: false,
      searchOpen: false,
      items: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'Testimonials',
          active: true,
        },
      ],
    };
  },

  mounted() {
    document.body.classList.add('template-color-1', 'template-font-1');
  },

  head() {
    return {
      title: 'Testimonials',
    };
  },
};
</script>
