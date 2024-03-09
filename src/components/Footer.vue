<script setup lang="ts"></script>

<template>
    <footer>
        <div class="infoText">
            Please note that this site is not officially affiliated with or endorsed by MADFINGER Games. All trademarks, game content, and related materials are the property of their respective owners. Any references to MADFINGER Games and their intellectual property are used here for fan purposes only. For official information about MADFINGER Games and Gray Zone Warfare, please visit their official website.
        </div>
    </footer>
</template>

<style scoped lang="scss">
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        .infoText {
            color: darken(white, 30%);
            max-width: 50%;
            font-size: .75em;
            text-align: justify;
        }
    }

    @media(max-width: 768px) {
        footer {
            .infoText {
                max-width: 100%;
            }
        }
    }
    @media(max-width: 1024px) {
        footer {
            .infoText {
                max-width: 75%;
            }
        }
    }
</style>