<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Hubballi&family=Roboto+Serif:ital,wght@0,200;0,300;0,600;0,700;0,900;1,300;1,500;1,700;1,900&display=swap');

html {
    min-height: 100%;
    position: relative;
    font-size: calc(16px + .3vw);
}

body {
    margin-bottom: calc(8rem + 15px)!important;
}

#app {
  font-family: 'Fredoka', sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}

.button-primary{
    background-color: rgb(209, 0, 80);
    color: white;
    border: none;
    font-weight: 500;
}
.button-primary:hover{
    background-color: rgb(189, 0, 116);
    color: white;
}
.button-primary:active{
    background-color: rgb(209, 0, 80);
    color: white;
}
.button-primary:focus{
    background-color: rgb(247, 35, 116);
    box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
    color: white;
}

.f-s {
    font-size: 10px;
}
h4 {
    font-size: calc(1rem + .3vw);
}
.content {
    margin-bottom: 20px;
}
.content li > div * {
    margin-left: 10px;
}
form img {
    margin-right: 10px;
}

.thanks {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
}

th {
    font-weight: 600;
}
</style>

