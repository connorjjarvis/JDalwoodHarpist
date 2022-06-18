<template>
  <div class="main-wrapper">
    <HeaderBlack @togglenav="navOpen = !navOpen" />

    <OffCanvasMobileMenu :class="{ 'show-mobile-menu': navOpen }" @togglenav="navOpen = !navOpen" />

    <Breadcrumb :items="items" title="Repertoire" background="repertoire" />
    <div class="brook-list-wrapper pt--50 ptb-md--80 ptb-sm--60">
      <div class="container">
        <div class="row">


            <!-- Start Single List -->
              <div class="col-md-6" style="justify-content: centre" v-for="list in lists" :key="list.i">
                <div class="bk-list--2 move-up wow">
<div class="list-header">
                <h3>{{ list.title }}</h3>
                <div v-for="item in list.content" :key="item.i">
                  
                <div class="marker with-dot"></div>
                  {{ item }}
                </div>
              </div>
              </div>
            </div>
            <!-- End Single List -->

        </div>
      </div>
    </div>
    <!-- Start Divider Area -->

    <div class="brook-dividers-area bg_color--1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="dividers-inner">
              <div class="space"></div>
              <div class="basic-thine-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Divider Area -->
    <!-- Start Divider Area -->
    <div class="brook-dividers-area bg_color--1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="dividers-inner">
              <div class="space"></div>
              <h5 class="heading heading-h5">Soundcloud</h5>
<iframe width="100%" height="450" scrolling="no" margin-top:10px="" frameborder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F7528370&amp;color=5f00ff&amp;auto_play=false&amp;show_artwork=true"></iframe>
              <div class="space"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Divider Area -->

    <FooterTwo />
  </div>
</template>

<script>
export default {
  components: {
    HeaderBlack: () => import('@/components/HeaderBlack'),
    OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
    Breadcrumb: () => import('@/components/Breadcrumb'),
    FooterTwo: () => import('@/components/FooterTwo')    
  },

  data() {
    return {
      navOpen: false,
      items: [
        {
          text: 'Home',
          to: '/',
        },
        {
          text: 'Repertoire',
          active: true,
        },
      ],
      lists: [
        {
          title: 'Traditional Wedding',
          content: [
            'Bach - Air On The G String',
            'Bach - Jesu Joy of Mans Desiring',
            'Bach - Prelude in C',
            'Clarke - Trumpet Voluntary',
            'Frank - Panis Angelicus',
            'Handel - Arrival of the Queen of Sheba',
            'Handel - Water Music',
            'Pachelbel - Canon',
            'Purcell - Trumpet Tune',
            'Mendelssohn - Wedding March',
            'Wagner - Bridal Chorus'
          ]
        },
        {
          title: 'Folk /Traditional / Early Music',
          content: [
            'Croft - Sarabande & Ground',
            'Francisque - Pavane Et Bransles',
            'Handel - Passacaille',
            'Handel - Tema con Variazioni',
            'Olivia Buckley Dussek - Merch Megan',
            'John Thomas - Watching The Wheat',
            'Londonderry Air',
            'David Of The White Rock',
            'Swing Low Sweet Chariot',
            'Scarborough Fair',
            'Flow Gently Sweet Afton',
            'Au Clair De La Lune',
            'The Water Is Wide'
          ]
        },
        {
          title: 'Classical / Romantic',
          content: [
            'Arne - Sonata no VI in G Major',
            'Britten - Interlude from a Ceremony of Carols',
            'Clarke - Chaconne',
            'Debussy - First Arabesque',
            'Debussy - Valse Romantique',
            'Debussy - Clair De Lune',
            'Delibes - Flower Duet',
            'Dizi - Study no.21',
            'Elgar - Nimrod',
            'Glinka - Variations of a Theme of Mozart & Nocturne',
            'Godefroid - Etude de Concert',
            'Handel - Passacaglia',
            'Handel - Theme and Variations',
            'Hasselmans - La Source',
            'Henson-Conant - Nataliana',
            'Henson-Conant - The Nightingale',
            'Naderman - Sonatas from Sept Sonates Progressives',
            'Parry - Sonata in D Major',
            'Tournier - Au Matin',
            'Tournier - Quatre Preludes',
            'Watkins - Passacaglia',
            'Watkins - Petite Suite',
            'Zabel - La Source'
          ]
        },
        {
          title: 'Jazz / Modern Arrangements',
          content: [
            'Adele - Someone Like You',
            'Armstrong - Wonderful World',
            'The Beatles - Here Comes The Sun',
            'Beauty And The Beast - Tale As Old As Time',
            'Bruno Mars - Marry You',
            'Billy Joel - Shes Only A Woman',
            'Bruno Mars - Just The Way You Are',
            'Cavatina',
            'Charlene Soraia - Wherever You Will Go',
            'Chertok - Around The Clock Suite',
            'Christina Perri - A Thousand Years',
            'Coldplay - Clocks',
            'Coldplay - Everglow',
            'Coldplay - Yellow',
            'Damien Rice - The Blowers Daughter',
            'David Guetta - Without You',
            'Ed Sheeran - Castle On The Hill',
            'Ed Sheeran - Thinking Out Loud',
            'Ellie Goulding - How Long Will I Love You',
            'Ellie Goulding - Your Song',
            'Elvis Presley - Cant Help Falling In Love With You',
            'Enrique Iglesias - Hero',
            'Florence And The Machine - Never Let Me Go',
            'Frank Sinatra - Fly Me To The Moon',
            'Hallelujah',
            'Jason Mraz - Im Yours',
            'John Barry - Somewhere In Time',
            'John Legend - All Of Me',
            'Kanga - Misty (arrangement)',
            'Kanga - Moon River',
            'Kanga - My Favorite Things',
            'Keane - Somewhere Only We Know',
            'Les Mis - I Dreamed A Dream',
            'Nat King Cole - When I Fall In Love',
            'Owl City - Fireflies',
            'Passenger - Let Her Go',
            'Phantom Of The Opera - All I Ask Of You',
            'Sam Smith - Stay With Me',
            'Snow Patrol - Chasing Cars'
          ]
        },
        
      ],
    };
  },

  head() {
    return {
      title: 'Repertoire',
    };
  },
};
</script>
