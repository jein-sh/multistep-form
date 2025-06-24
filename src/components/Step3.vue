<script setup>
    import { computed } from 'vue'
    import CustomRadio from './ui/CustomRadio.vue'

    const props = defineProps({
    budget: String
    })
    const emit = defineEmits(['update:budget'])

    // computed-связь с родительским v-model
    const localBudget = computed({
    get: () => props.budget,
    set: (val) => emit('update:budget', val)
    })
</script>

<template>
    <div class="form__step-title">What’s your project budget?</div>
    <div class="form__step-text">Please select the project budget range you have in mind.</div>
    <fieldset class="form__fieldset">
        <CustomRadio
            v-model="localBudget"
            name="budget"
            label="$5.000 - $10.000"
            :value="'$5.000 - $10.000'"
        />
        <CustomRadio
            v-model="localBudget"
            name="budget"
            label="$10.000 - $20.000"
            :value="'$10.000 - $20.000'"
        />
        <CustomRadio
            v-model="localBudget"
            name="budget"
            label="$20.000 - $50.000"
            :value="'$20.000 - $50.000'"
        />
        <CustomRadio
            v-model="localBudget"
            name="budget"
            label="$50.000 +"
            :value="'$50.000 +'"
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