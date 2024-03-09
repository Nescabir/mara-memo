<script setup lang="ts"></script>

<template>
    <div class="creditsWrapper">
        <div class="inner">
            <h1 class="subtitle">Credits</h1>
            <ul class="creditList">
                <li class="creditItem">
                    <a href="https://twitter.com/soniclight0128" target="_blank" rel="noopener noreferrer">Sonic</a> for the original idea<br/>
                    <img src="../assets/images/sonic.webp" alt="Sonic begging for a credit">
                </li>
                <li class="creditItem">
                    <a href="https://twitter.com/LunaMoth171" target="_blank" rel="noopener noreferrer">LunaMoth</a> for the preview art
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .creditsWrapper {
        min-height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        .inner {
            min-width: 50%;
            max-width: 50%;
            .subtitle {
                font-size: 1.4rem;
                font-weight: 600;
                text-transform: uppercase;
            }
            .creditList {
                list-style-image: url("../assets/images/list-bullet.webp");
                .creditItem {
                    margin-bottom: .5em;
                    a {
                        font-weight: 500;
                        position: relative;
                        color: lighten(#e1001a, 10%);
                        text-decoration: none;
                        &::after {
                            content: '';
                            position: absolute;
                            bottom: 0.05em;
                            left: 1px;
                            right: 0;
                            display: box;
                            width: 101%;
                            height: 1px;
                            opacity: 0;
                            transition: opacity 200ms ease;
                            border-top: 1px dashed lighten(#e1001a, 10%);
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
    }

    @media(max-width: 768px) {
        .creditsWrapper {
            .inner {
                max-width: 100%;
            }
        }
    }
    @media(max-width: 1024px) {
        .creditsWrapper {
            .inner {
                max-width: 75%;
            }
        }
    }
</style>