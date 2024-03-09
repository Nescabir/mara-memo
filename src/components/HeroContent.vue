<script setup lang="ts">
import DayCounter from './DayCounter.vue';
import Memo from './Memo.vue'


const props = defineProps<{ lastDateIso: string }>();

</script>

<template>
    <section class="heroContent">
      <div class="title">
          Days since <a href="https://twitter.com/MarekRabas" target="_blank" rel="noopener noreferrer">Mara</a> posted a company memo:
      </div>
      <DayCounter :last-date-iso="props.lastDateIso" />
      <Memo />
    </section>
</template>

<style scoped lang="scss">
    .heroContent {
        min-height: 90vh;
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

    @media (max-width: 768px) {
        .heroContent {
            .title {
                font-size: 1.5rem;
            }
        }
    }
</style>