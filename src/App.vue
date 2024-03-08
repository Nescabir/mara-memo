<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import DayCounter from './components/DayCounter.vue'

const lastDate = "2024-03-08T07:58:40.000Z";

</script>

<template>
  <div class="appInner">
    <Header />
    <section>
      <div class="title">
          Days since <a href="https://twitter.com/MarekRabas" target="_blank" rel="noopener noreferrer">Mara</a> posted a company memo:
      </div>
      <DayCounter :last-date-iso="lastDate" />
    </section>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
  .appInner{
    padding: 2em;
    flex-grow: 1;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 10% 80% 10%;
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        font-size: 2rem;
        font-weight: 700;
        text-transform: uppercase;
        a {
          position: relative;
          color: #e1001a;
          text-decoration: none;
          &::after {
            content: '';
            position: absolute;
            bottom: 0.1em;
            left: 1px;
            right: 0;
            display: box;
            width: 101%;
            height: 1px;
            opacity: 0;
            transition: opacity 200ms ease;
            border-top: 1px dashed #e1001a;
          }
          &:hover {
            &::after {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .appInner {
      grid-template-rows: 10% 70% 10%;
      section {
        .title {
          font-size: 1.5rem;
        }
      }
    }
  }
</style>
