<script setup>
    import CustomInput from './ui/CustomInput.vue'
    const iconMan = new URL('@/assets/img/svg/icon-man.svg', import.meta.url).href
    const iconMail = new URL('@/assets/img/svg/icon-mail.svg', import.meta.url).href
    const iconPhone = new URL('@/assets/img/svg/icon-phone.svg', import.meta.url).href
    const iconCompany = new URL('@/assets/img/svg/icon-company.svg', import.meta.url).href

    const props = defineProps({
        contact: Object
    })
</script>

<template>
    <div class="form__step-title">Contact details</div>
    <div class="form__step-text">Lorem ipsum dolor sit amet consectetur adipisc.</div>
    <fieldset class="form__fieldset">
        <CustomInput
            v-model="contact.name"
            label="Name"
            type="text"
            placeholder="John Carter"
            :iconSrc="iconMan"
        />
        <CustomInput
            v-model="contact.email"
            label="Email"
            type="email"
            placeholder="Email address"
            :iconSrc="iconMail"
        />
        <CustomInput
            v-model="contact.phone"
            label="Phone Number"
            type="tel"
            placeholder="(123) 456 - 7890"
            :iconSrc="iconPhone"
        />
        <CustomInput
            v-model="contact.company"
            label="Company"
            type="text"
            placeholder="Company name"
            :iconSrc="iconCompany"
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
