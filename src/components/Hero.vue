<script setup>
  import Subscribe from './Subscribe.vue'
</script>

<template>
    <div class="hero">
        <div class="container">
            <div class="hero__wrap">
                <div class="hero__subtitle">Cloneables FOR WEBFLOW</div>
                <h1 class="hero__title">Multi-step Form Webflow Cloneable Template</h1>
                <div class="hero__text">Want to receive a monthly email in your inbox with awesome free Webflow
                    cloneables, resources and more? Please submit your email below.</div>
                <Subscribe
                    text="It's <span class='color-blue'>100% free</span> and we will never send more than one email per month" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero__wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 0 100px;
}

.hero__wrap::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    transform: translate(-60%, 45%);
    z-index: -1;
    width: 787px;
    height: 787px;
    background-image: url(/img/blob.png);
    background-size: cover;
}

.hero__subtitle {
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #4A3AFF;
    margin-bottom: 12px;
}

.hero__title {
    font-weight: 700;
    font-size: 50px;
    line-height: 124%;
    margin: 0 0 12px;
    max-width: 680px;
}

.hero__text {
    font-size: 18px;
    line-height: 167%;
    color: #6F6C90;
    max-width: 680px;
    margin-bottom: 40px;
}

@media(max-width: 539px) {
    .hero__title {
        font-size: 32px;
    }
}
</style>