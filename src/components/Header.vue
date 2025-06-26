<script setup>
  import Button from './ui/Button.vue'
  import logo from '@/assets/img/logo.svg'
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__wrap">
                <div class="logo header__logo">
                    <img :src="logo" alt="logo" />
                </div>
                <Button text="Clone now" />
            </div>
        </div>
    </header>
</template>

<style scored>
    .header__wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        padding: 32px 0;
    }

    .header__logo {
        width: 304px;
        height: 40px;
    }

    @media(max-width: 539px) {
        .header__wrap {
            flex-direction: column;
            padding: 20px 0;
        }

        .header__logo {
            width: 240px;
            height: 32px;
        }
    }
</style>