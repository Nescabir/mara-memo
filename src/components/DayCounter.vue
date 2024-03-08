<script setup lang="ts">
import { DateTime } from "luxon";
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

const props = defineProps<{ lastDateIso: string }>()
let dayCount = ref(0);

const lastDate = DateTime.fromISO(props.lastDateIso, { zone: "Europe/Prague" }).toUTC();
const now = DateTime.local().toUTC();

dayCount.value = now.diff(lastDate, ['days', 'hours']).days;

useHead({
    title: `It has been ${dayCount.value} days since Mara posted a company memo`,
});
</script>

<template>
    <div class="dayCounter">
        {{ dayCount }}
    </div>
</template>

<style scoped lang="scss">
    .dayCounter {
        display: flex;
        justify-content: center;
        font-size: 15rem;
        line-height: 13rem;
        font-weight: 900;
    }
    @media(max-width: 768px) {
        .dayCounter {
        font-size: 10rem;
        line-height: 10rem;
        }
    }
</style>