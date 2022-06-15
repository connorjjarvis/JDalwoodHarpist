<template>
  <div
    class="
      breadcrumb-area
      pt--300
      pt_lg--275
      pt_md--225
      pt_sm--185
      pb--80
      bg_image--8
      breadcrumb-title-bar breadcrumb-title-white
    "
    :style="{
      backgroundImage: `url('/img/bg/${background}.jpg')`,
      backgroundColor: `hsl(0deg 0% 0% / 38%)`,
      backgroundBlendMode: `multiply`,
    }"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-inner text-center">
            <h2 class="heading">{{ title }}</h2>
            <div class="breadcrumb-insite">
              <b-breadcrumb
                class="core-breadcrumb"
                :items="items"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "title", "background"],
};
</script>
