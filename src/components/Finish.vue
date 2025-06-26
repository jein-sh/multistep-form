<script setup>
  import finishImg from '@/assets/img/finish.svg'
  const props = defineProps({
      contact: Object,
      services: Object,
      budget: String
  })

  const handleSubmit = () => {
      const formData = {
          contact: props.contact,
          services: props.services,
          budget: props.budget
      }

      localStorage.setItem('quoteRequest', JSON.stringify(formData))
      console.log('Данные сохранены в localStorage:', formData)
  }
</script>

<template>
  <div class="form__finish">
    <div class="form__img">
      <img :src="finishImg" alt="#" />
    </div>
    <div class="form__step-title">Submit your quote request?</div>
    <div class="form__step-text">
      Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.
    </div>
    <button class="btn" type="button" @click="handleSubmit">
      Submit
    </button>
  </div>
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

  .form__finish {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

    @media(max-width: 767px) {
    .form__fieldset {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  }
</style>