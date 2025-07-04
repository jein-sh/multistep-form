<script setup>
  import { reactive, ref, computed } from 'vue'
  import Button from './ui/Button.vue'
  import ProgressBar from './ProgressBar.vue'
  import Step from './Step.vue'
  import Finish from './Finish.vue'
  const iconMan = new URL('@/assets/img/svg/icon-man.svg', import.meta.url).href
  const iconMail = new URL('@/assets/img/svg/icon-mail.svg', import.meta.url).href
  const iconPhone = new URL('@/assets/img/svg/icon-phone.svg', import.meta.url).href
  const iconCompany = new URL('@/assets/img/svg/icon-company.svg', import.meta.url).href

  const contact = reactive({
    name: '',
    email: '',
    phone: '',
    company: ''
  })

  const services = reactive({
    development: false,
    design: false,
    marketing: false,
    other: false
  })

  const budget = ref('')

  const currentStep = ref(1)
  const totalSteps = 4

  const stepValidators = {
    1: () => Object.values(contact).every(field => field.trim() !== ''),
    2: () => Object.values(services).some(val => val),
    3: () => budget.value !== '',
    4: () => true
  }

  const isNextDisabled = computed(() => {
    const validate = stepValidators[currentStep.value]
    return !validate()
  })

  const nextStep = () => {
    if (currentStep.value < totalSteps) {
      currentStep.value++
    }
  }

  const prevStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--
    }
  }
</script>

<template>
  <div class="form">
      <div class="container">
          <div class="form__header">
              <div class="form__name">Multi Step Form - Step {{currentStep}}</div>
              <Button text="Preview Cloneable" mod="light" />
          </div>
      </div>
      <div class="form__wrap">
          <div class="container">
              <form action="">
                  <div class="form__title">Get a project quote</div>
                  <div class="form__subtitle">Please fill the form below to receive a quote for your project. <br> Feel free to add as much detail as needed.</div>
                  <div class="form__step">
                      <ProgressBar :totalSteps="totalSteps" :currentStep="currentStep" />
                      <Step
                        v-if="currentStep === 1"
                        title="Contact details"
                        text="Lorem ipsum dolor sit amet consectetur adipisc."
                        v-model="contact"
                        :fields="[
                          { type: 'input', name: 'name', label: 'Name', placeholder: 'John Carter', iconSrc: iconMan },
                          { type: 'input', name: 'email', label: 'Email', placeholder: 'Email address', iconSrc: iconMail },
                          { type: 'input', name: 'phone', label: 'Phone', placeholder: '(123) 456-7890', iconSrc: iconPhone },
                          { type: 'input', name: 'company', label: 'Company', placeholder: 'Company name', iconSrc: iconCompany },
                        ]"
                      />
                      <Step  v-if="currentStep === 2"
                        title="Our services"
                        text="Please select which service you are interested in."
                        v-model="services"
                        :fields="[
                          { type: 'toggle', name: 'development', label: 'Development', iconSrc: './img/icon1.svg' },
                          { type: 'toggle', name: 'design', label: 'Web Design', iconSrc: './img/icon2.svg' },
                          { type: 'toggle', name: 'marketing', label: 'Marketing', iconSrc: './img/icon3.svg' },
                          { type: 'toggle', name: 'other', label: 'Other', iconSrc: './img/icon4.svg' },
                        ]"
                      />
                      <Step  v-if="currentStep === 3"
                        title="What’s your project budget?"
                        text="Please select the project budget range you have in mind."
                        v-model="budget"
                        :fields="[
                          { type: 'radio', name: 'budget', value: '$5.000 - $10.000', label: '$5.000 - $10.000' },
                          { type: 'radio', name: 'budget', value: '$10.000 - $20.000', label: '$10.000 - $20.000' },
                          { type: 'radio', name: 'budget', value: '$20.000 - $50.000', label: '$20.000 - $50.000' },
                          { type: 'radio', name: 'budget', value: '$50.000 +', label: '$50.000 +' },
                        ]"
                      />
                      <Finish v-if="currentStep === 4" :contact="contact" :services="services" :budget="budget"/>
                  </div>
                  <div class="form__btns">
                    <Button 
                      text="Previous step" 
                      mod="bordered" 
                      @click="prevStep"
                      :class="{ hidden: currentStep === 1 }"
                    />
                    <Button 
                      text="Next step" 
                      @click="nextStep"
                      :class="{ hidden: currentStep === totalSteps }"
                      :disabled="isNextDisabled"/>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<style scoped>
  .form__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 3px 14px rgba(74, 58, 255, 0.03), 0px -2px 4px rgba(20, 20, 43, 0.02), 0px 12px 24px rgba(20, 20, 43, 0.04);
    border-radius: 18px;
    margin-bottom: 44px;
    padding: 30px 40px;
    gap: 20px;
  }

  .form__name {
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
  }

  .form__wrap {
    background: #F7F7FB;
    padding: 127px 0;
  }

  .form__wrap form {
    max-width: 700px;
    margin: 0 auto;
  }

  .form__title {
    font-weight: 700;
    font-size: 34px;
    line-height: 135%;
    text-align: center;
    margin-bottom: 12px;
  }

  .form__subtitle {
    font-size: 18px;
    line-height: 167%;
    text-align: center;
    color: #6F6C90;
    margin-bottom: 42px;
  }

  .form__step {
    background: #FFFFFF;
    border: 1px solid #EFF0F7;
    box-shadow: 0px 5px 16px rgba(8, 15, 52, 0.06);
    border-radius: 34px;
    margin-bottom: 32px;
    padding: 33px 50px;
    min-height: 606px;
  }

  .form__btns {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  @media(max-width: 539px) {
    .form__header {
      flex-direction: column;
      padding: 10px 20px;
      text-align: center;
    }

    .form__step {
      padding: 20px;
    }

    .form__btns {
      flex-direction: column;
    }
  }

</style>
