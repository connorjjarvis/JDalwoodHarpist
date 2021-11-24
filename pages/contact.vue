<template>
  <div class="main-container">
    <HeaderBlack class="bg_color--14 border-bottom" @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />

    <ContactUsBreadcrumb />

    <ContactModern />

    <FooterTwo />
  </div>
</template>

<script>
export default {
  components: {
    HeaderBlack: () => import('@/components/HeaderBlack'),
    OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
    ContactUsBreadcrumb: () => import('@/components/ContactUsBreadcrumb'),
    ContactModern: () => import('@/components/sections/ContactModern'),
    FooterTwo: () => import('@/components/FooterTwo'),
  },

  data() {
    return {
      navOpen: false,
      searchOpen: false,
    };
  },

  head() {
    return {
      title: 'Contact Us',
    };
  },
};
</script>
