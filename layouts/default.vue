<template>
  <div class="text-center">
      <h1>Jessica Dalwood - Harpist</h1>
      <p style="color: black;"> Professional Musician | Talented Artist |
      <a href="https://www.facebook.com/JessicaDalwoodHarpist/?fref=ts"><img src="~/assets/facebook.png"> Facebook</a> |
      <a href="http://twitter.com"><img src="~/assets/twitter.png"> Twitter </a></p>
      <Header />
      <b-container fluid="md" class="text-center">
        <div class="content">
          <Nuxt />
          <div id="author">
            <p>Website made by <a href="mailto:connor.jarvis+jdalwoodharpist@gmail.com">Connor Jarvis</a></p>
          </div>
        </div>
      </b-container>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

body {
  background-position: 50% 0%;
  background-color: #e8e1e8;
  background-repeat: no-repeat;
  width:100%;
  height:100%
}


.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.content {
  background-color: #e0d1e0;
}

h1 {
  color: #ffffff;
  text-shadow: 2px 2px 0px #1a3823, 5px 4px 0px rgba(0,0,0,0.15);
}

h2 {
  color: #ffffff;
  text-shadow: 2px 2px 0px #1a3823, 5px 4px 0px rgba(0,0,0,0.15);
  padding-top:25px;
  padding-bottom:25px;
}

h3 {
  color: #ffffff;
  text-shadow: 2px 2px 0px #1a3823, 5px 4px 0px rgba(0,0,0,0.15);
  padding-top:25px;
  padding-bottom:25px;
}

p {
  font-size: 1.2rem; 
}

#author p {
  font-size: 0.8rem; 
  padding-top:10px;
  padding-bottom:10px;
}
</style>
