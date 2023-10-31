<template>
  <nav class="page_nav">
    <ul class="mainmenu">
      <li class="lavel-1">
        <n-link to="/">
          <span>Home</span>
        </n-link>
      </li>
      <li class="lavel-1 slide--megamenu">
        <n-link to="/weddings">
          <span>Weddings</span>
        </n-link>
      </li>
       <li class="lavel-1 slide--megamenu">
        <n-link to="teaching">
          <span>Teaching</span>
        </n-link>
      </li>
      <li class="lavel-1 slide--megamenu">
        <n-link to="repertoire">
          <span>Repertoire</span>
        </n-link>
      </li>
      <li class="lavel-1 slide--megamenu">
        <n-link to="contact">
          <span>Contact</span>
        </n-link>
      </li>
      <li class="lavel-1 with--drop slide--megamenu">
        <n-link to="#">
          <span>More</span>
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
                    <nuxt-link to="/teaching"><span>Teaching</span></nuxt-link>
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
                  <li>
                    <nuxt-link to="/orchestral"><span>Orchestral</span></nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="mega--title">
                More about me
                <ul>
                  <li>
                    <nuxt-link to="/history"><span>Experiences</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contact"><span>Contact</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/testimonials"><span>Testimonials</span></nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/repertoire"><span>Repertoire</span></nuxt-link>
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
