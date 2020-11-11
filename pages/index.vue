<template>
<div>
  <b-row class="text-center">  
        <b-col>
            <h2>Professional Harpist</h2>
        </b-col>
    </b-row>
    <b-row class="text-center">
    <b-col sm="2" md="3">
      <img src="~assets/photo4.gif">
    </b-col>
    <b-col sm="8" md="8">
      <p>
Jessica Dalwood - Professional Harpist and Accomplished Teacher 
<br><br><br>
The harp is an elegant instrument with a beautiful tone that will add a magical touch to your wedding or special occasion. 
<br><br><br>
My name is Jessica I am a versatile harpist and musician and has a range of musical skills and abilities. She works with a varying range of musical styles, from classical to folk, modern and jazz.
<br><br><br>
Based in Somerset/South West England - This covers Somerset, Dorset, Bath &amp; Bristol. If you have any enquiries about my coverage see my contact details on the <a href="contact">contacts page!</a>
</p>
      <div id="musicContainer">
<div id="music">
<b>Beauty and the beast</b>
<br>
	<audio preload="metadata" controls>
	<source src="~/assets/music/BeautyandtheBeast.mp3" type="audio/mpeg">
		Your browser does not support the audio element.
	</audio>
</div>
<div id="music">
<b>Can't help falling in love with you</b>
<br>
<audio preload="metadata" controls>
  <source src="~/assets/music/CantHelpFallingInLoveWithYou.mp3" type="audio/mpeg">
		Your browser does not support the audio element.
</audio>
</div>
<div id="music">
<b>Fire Dance</b>
<br>
<audio preload="metadata" controls>
  <source src="~/assets/music/FireDance.mp3" type="audio/mpeg">
		Your browser does not support the audio element.
</audio>
</div>
<div id="music">
<b>Watching the Wheat</b>
<br>
<audio preload="metadata" controls>
  <source src="~/assets/music/WatchingTheWheat.mp3" type="audio/mpeg">
		Your browser does not support the audio element.
</audio>
</div>
</div>
    </b-col>
    <b-col>
    </b-col>
  </b-row>
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
#musicContainer {
    margin: 0 auto;
}

#music {
    display: inline-block;
    margin-right: 10px;
    text-align: center;
}
</style>
