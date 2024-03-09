<script setup lang="ts">

</script>

<template>
    <div class="tweetWrapper">
        <blockquote class="twitter-tweet" data-conversation="none" data-dnt="true" data-theme="dark">
        <p lang="en" dir="ltr">Nope, game will not come this month.. not ready yet</p>
        &mdash; Marek Rabas (@MarekRabas) <a href="https://twitter.com/MarekRabas/status/1766031258956488839?ref_src=twsrc%5Etfw">March 8, 2024</a>
    </blockquote>
    </div>
</template>

<style scoped lang="scss">
    .tweetWrapper {
        cursor: pointer;
        margin-top: 5rem;
        min-width: 30%;
    }

    @media (max-width: 768px) {
        .tweetWrapper {
            min-width: 20%;
            max-width: 80vw;
        }
    }
</style>