<script setup lang="ts"></script>

<template>
    <header>
        <a href="https://www.madfingergames.com" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/MFGlogo.webp" alt="MADFINGER Games website">
        </a>
        <a href="https://grayzonewarfare.com" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/GZWlogo.webp" alt="Gray Zone Warfare website">
        </a>
    </header>
</template>

<style scoped lang="scss">
    header {
        display: flex;
        justify-content: space-around;
        align-items: center;
        a {
            &:hover {
                img {
                    transform: scale(0.95);
                }
            }
            img {
                max-height: 4.5em;
                transition: transform 200ms ease-in-out;
            }
        }
    }
    @media(max-width: 768px) {
        header {
            a {
                img { max-height: 2.5em;}
            }
        }
    }
</style>