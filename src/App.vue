<template>
  <div id="app">
    <SportsList/>
  </div>
</template>

<script>
import SportsList from "@/components/SportsList";

export default {
  name: 'App',
  components: {
    SportsList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');

#app {
  font-family: 'Titillium Web', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
