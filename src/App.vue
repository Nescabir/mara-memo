<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import HeroContent from './components/HeroContent.vue';
import Credits from "./components/Credits.vue";

const lastDate = "2024-03-08T07:58:40.000Z";

</script>

<template>
  <div class="appInner">
    <Header />
    <HeroContent :last-date-iso="lastDate" />
    <Credits />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
  .appInner{
    padding: 2em;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
</style>
