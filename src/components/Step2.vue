<script setup>
    import CustomToggle from './ui/CustomToggle.vue'

    const props = defineProps({
        services: Object
    })
</script>

<template>
    <div class="form__step-title">Our services</div>
    <div class="form__step-text">Please select which service you are interested in.</div>
    <fieldset class="form__fieldset">
        <CustomToggle
            v-model="services.development"
            type="checkbox"
            label="Development"
            iconSrc="./img/icon1.svg"
        />
        <CustomToggle
            v-model="services.design"
            type="checkbox"
            label="Web Design"
            iconSrc="./img/icon2.svg"
        />
        <CustomToggle
            v-model="services.marketing"
            type="checkbox"
            label="Marketing"
            iconSrc="./img/icon3.svg"
        />
        <CustomToggle
            v-model="services.other"
            type="checkbox"
            label="Other"
            iconSrc="./img/icon4.svg"
        />
    </fieldset>                  
</template>

<style scored>
  .form__step-title {
    font-weight: 700;
    font-size: 24px;
    line-height: 146%;
    color: #170F49;
    margin-bottom: 8px;
  }

  .form__step-text {
    font-size: 18px;
    line-height: 167%;
    color: #6F6C90;
    margin-bottom: 40px;
    text-wrap: balance;
  }

  .form__fieldset {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 44px 28px;
  }

    @media(max-width: 767px) {
    .form__fieldset {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  }
</style>