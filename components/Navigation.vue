<template>
  <nav class="page_nav">
    <ul class="mainmenu">
      <li class="lavel-1">
        <n-link to="/">
          <span>Home</span>
        </n-link>
      </li>

      <li class="lavel-1 with--drop slide--megamenu">
        <n-link to="/about-us-01">
          <span>Services</span>
        </n-link>
        <ul class="mega__width--fullscreen">
          <div class="container">
            <div class="mega__list">
              <li class="mega--title">
                Services
                <ul>
                  <li>
                    <nuxt-link to="/weddings"><span>Weddings</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/events"><span>Events</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/parties"><span>Parties</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/funerals"><span>Funerals</span></nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="mega--title">
                <ul>
                  <li>
                    <nuxt-link to="/teaching"><span>Teaching</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/orchestral"
                      ><span>Orchestral</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/pricing-plans"
                      ><span>Pricing list</span></nuxt-link
                    >
                  </li>
                </ul>
              </li>
              <li class="mega--title">
                About me
                <ul>
                  <li>
                    <nuxt-link to="/repertoire"
                      ><span>Repertoire</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/history"><span>My history</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contact"><span>Contact</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/testimonials"
                      ><span>Testimonials</span></nuxt-link
                    >
                  </li>
                </ul>
              </li>
              <li class="mega--title">
                <ul>
                  <li>
                    <nuxt-link to="/audio"
                      ><span>My audio clips</span></nuxt-link
                    >
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </ul>
      </li>

      <li class="lavel-1 with--drop slide--megamenu">
        <n-link to="">
          <span>Elements</span>
        </n-link>
        <ul class="mega__width--fullscreen">
          <div class="container">
            <div class="mega__list">
              <li class="mega--title">
                ELEMENT GROUP 01
                <ul>
                  <li>
                    <nuxt-link to="/element/team"><span>Team</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/element/testimonial"
                      ><span>Testimonial</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/element/pricing-box"
                      ><span>Pricing Box</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/element/dividers"
                      ><span>Dividers</span></nuxt-link
                    >
                  </li>
                </ul>
              </li>
              <li class="mega--title">
                ELEMENT GROUP 02
                <ul>
                  <li>
                    <nuxt-link to="/element/brand-logo"
                      ><span>Brand Logo Carousel</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/element/flexible-image-slider"
                      ><span>Flexible Image Slider</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/element/carousel-slider"
                      ><span>Carousel Slider</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/element/call-to-action-banner"
                      ><span>Call To Action Banner</span></nuxt-link
                    >
                  </li>
                </ul>
              </li>
              <li class="mega--title">
                ELEMENT GROUP 03
                <ul>
                  <li>
                    <nuxt-link to="/element/tab"><span>Tab</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/element/gradation"
                      ><span>Gradation</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/element/message-box"
                      ><span>message-box</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/element/instagram"
                      ><span>Instagram</span></nuxt-link
                    >
                  </li>
                </ul>
              </li>
              <li class="mega--title">
                ELEMENT GROUP 04
                <ul>
                  <li>
                    <nuxt-link to="/element/icon-boxes"
                      ><span>icon-boxes</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/element/lists"
                      ><span>Lists</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/element/accordion"
                      ><span>Accordion</span></nuxt-link
                    >
                  </li>
                  <li>
                    <nuxt-link to="/element/contact-subscribe"
                      ><span>Contact & subscribe forms</span></nuxt-link
                    >
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.mega__list {
  display: flex;
  li {
    flex-basis: 25%;
  }
}
</style>
