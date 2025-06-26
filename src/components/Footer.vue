<script setup>
  import Subscribe from './Subscribe.vue'
  import Button from './ui/Button.vue'
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__top">
                <div class="footer__card card card--blue">
                    <div class="card__info">
                        <div class="card__logo">
                            <img src="/img/logo1.svg" alt="logo" />
                        </div>
                        <div class="card__title">Take a look at our amazing premium Webflow Templates</div>
                        <div class="card__text">Also than having free Webflow cloneables, we create cutting-edge premium Webflow templates too.</div>
                        <a class="card__link" href="https://brixtemplates.com/?utm_source=Figma&utm_medium=Figma+Community&utm_campaign=Figma+Cloneable">Browse templates</a>
                    </div>
                    <div class="card__img">
                        <img src="/img/footer1.png" alt="#" />
                    </div>
                </div>
                <div class="footer__card card">
                    <div class="card__info">
                        <div class="card__logo">
                            <img src="/img/logo2.svg" alt="logo" />
                        </div>
                        <div class="card__title">Looking to design & develop an amazing  Webflow website?</div>
                        <div class="card__text">If you want to get a hand from the amazing team behind BRIX Templates, get in touch with BRIX Agency today.</div>
                        <a class="card__link" href="https://brixagency.com/figma">Get a quote</a>
                    </div>
                    <div class="card__img">
                        <img src="/img/footer2.png" alt="#" />
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__right">
                    <div class="logo footer__logo">
                        <img src="/img/logo.svg" alt="logo" />
                    </div>
                    <div class="footer__copyright">Copyright © BRIX Templates | All Rights Reserved</div>
                </div>
                <Subscribe title="Subscribe to receive free Webflow cloneables every month."/>
            </div>
        </div>
    </footer>
</template>

<style scored>
    .card {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #EFF0F7;
        box-shadow: 0px 7px 24px rgba(20, 20, 43, 0.05);
        border-radius: 40px;
        overflow: hidden;
    }

    .card--blue {
        background: linear-gradient(90deg, #4A3AFF 0%, #6D3AFF 100%);
    }

    .card__info {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 80px 60px 20px;
    }

    .card__logo {
        height: 40px;
        margin-bottom: 20px;
    }

    .card__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 35px;
        color: #170F49;
        margin-bottom: 12px;
    }

    .card--blue .card__title {
        color: #FFFFFF;
    }

    .card__text {
        font-size: 18px;
        line-height: 30px;
        color: #6F6C90;
        margin-bottom: 20px;
        flex: 1;
    }

    .card--blue .card__text {
        color: rgba(255,255,255,0.8);
    }

    .card__link {
        background: #FF2D46;
        box-shadow: 0px 3px 12px rgba(255, 45, 70, 0.18);
        border-radius: 56px;
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        display: flex;
        align-items: center;
        padding: 10px 40px;
        width: fit-content;
        min-height: 60px;
        text-align: center;
        text-decoration-line: underline;
        text-underline-offset: 3px;
        color: #FFFFFF;
        transition: color 0.3s ease, background-color 0.3s ease;
    }

    .card__link:hover {
        background-color: #FFFFFF;
        color:#FF2D46;
    }

    .card--blue .card__link {
        background-color: #FFFFFF;
        box-shadow: 0px 3px 12px rgba(20, 20, 43, 0.1);
        border-radius: 56px;
        color: #4A3AFF;
    }

    .card--blue .card__link:hover {
        color: #FFFFFF;
        background-color: #4A3AFF;
    }

    .card__img {
        width: 100%;
        aspect-ratio: 606 /460;
    }

    .card__img  img { 
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media(max-width: 539px) {
        .card__info {
            padding: 40px 20px 20px;
        }
    }

    .footer__top {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        padding: 175px 0 94px;
    }

    .footer__top::after {
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        transform: translate(40%, 15%);
        z-index: -1;
        width: 787px;
        height: 787px;
        background-image: url(/img/blob.png);
        background-size: cover;
    }

    .footer__bottom {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr  507px;
        gap: 40px;
        padding-bottom: 55px;
    }

    .footer__logo {
        width: 263px;
        height: 35px;
        margin-bottom: 17px;
    }

    .footer__copyright {
        font-size: 18px;
        line-height: 30px;
        color: #6F6C90;
    }

    @media(max-width: 1023px) {
        .footer__top {
            grid-template-columns: 1fr;
            padding-top: 70px;
        }

        .footer__bottom {
            grid-template-columns: 1fr;
        }

        .footer__right {
            order: 2;
        }
    }
</style>