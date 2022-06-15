<template>
  <nav class="page_nav">
    <ul class="mainmenu">
      <li class="lavel-1">
        <n-link to="/">
          <span>Home</span>
        </n-link>
      </li>

      <li class="lavel-1 with--drop slide--megamenu">
        <n-link to="/weddings">
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
                    <nuxt-link to="/orchestral"><span>Orchestral</span></nuxt-link>
                  </li>
                  <li>
<<<<<<< HEAD
                    <nuxt-link to="/pricing"
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
=======
                    <nuxt-link to="/pricing-plans"><span>Pricing list</span></nuxt-link>
>>>>>>> e65cbc50940d930c049d480250d6cca95a8c4495
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </ul>
      </li>

      <li class="lavel-1 with--drop slide--megamenu">
        <n-link to="contact">
          <span>About</span>
        </n-link>
        <ul class="mega__width--fullscreen">
          <div class="container">
            <div class="mega__list">
              <li class="mega--title">
                About me
                <ul>
                  <li>
                    <nuxt-link to="/repertoire"><span>Repertoire</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/history"><span>My history</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contact"><span>Contact</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/testimonials"><span>Testimonials</span></nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="mega--title">
                <ul>
                  <li>
                    <nuxt-link to="/audio"><span>My audio clips</span></nuxt-link>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </ul>
      </li>
      <li class="lavel-1 slide--megamenu">
        <n-link to="contact">
          <span>Contact</span>
        </n-link>
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
