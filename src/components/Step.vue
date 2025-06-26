<script setup>
import CustomInput from './ui/CustomInput.vue'
import CustomToggle from './ui/CustomToggle.vue'
import CustomRadio from './ui/CustomRadio.vue'
import { computed } from 'vue'

const props = defineProps({
  title: String,
  text: String,
  fields: Array,
  modelValue: [Object, String], 
})

const emit = defineEmits(['update:modelValue'])

const updateField = (fieldName, val) => {
  if (typeof props.modelValue === 'object' && props.modelValue !== null) {
    props.modelValue[fieldName] = val
  } else {
    emit('update:modelValue', val)
  }
}

const componentMap = {
  input: CustomInput,
  toggle: CustomToggle,
  radio: CustomRadio,
}
</script>

<template>
    <div class="form__step-title">{{ title }}</div>
    <div class="form__step-text">{{ text }}</div>
    <fieldset class="form__fieldset">
      <component
        v-for="field in fields"
        :key="field.name + field.value"
        :is="componentMap[field.type]"
        :label="field.label"
        :name="field.name"
        :placeholder="field.placeholder"
        :iconSrc="field.iconSrc"
        :value="field.value"
        :modelValue="props.modelValue[field.name]"
        @update:modelValue="val => updateField(field.name, val)"
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