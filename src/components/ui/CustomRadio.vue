<script setup>
const props = defineProps({
  modelValue: String,
  value: String,
  label: String,
  name: String
})
const emit = defineEmits(['update:modelValue'])

const onChange = () => {
  emit('update:modelValue', props.value)
}
</script>

<template>
  <div class="custom-radio">
    <label>
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        @change="onChange"
      />
      <span class="custom-radio__icon"></span>
      <span class="custom-radio__label">{{ label }}</span>
    </label>
  </div>
</template>

<style scored>
  .custom-radio label {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 114px;
    padding: 24px;
    background: #FFFFFF;
    border: 1px solid #EFF0F7;
    box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
    border-radius: 16px;
    cursor: pointer;
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
    cursor: pointer;
  }

  .custom-radio:has(input:checked) label {
    border-color: rgb(74, 58, 255);
    box-shadow: inset 0 0 0 1px #4A3AFF;
  }

  .custom-radio input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .custom-radio__label {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #170F49;
  }

  .custom-radio__icon {
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 1.2px solid #D9DBE9;
    box-shadow: inset 0px -3px 7px rgba(20, 20, 43, 0.08);
  }

  .custom-radio:has(input:checked) .custom-radio__icon {
    border-color: #4A3AFF;
    box-shadow: inset 0 0 0 7px #4A3AFF;
  }

  .custom-radio label:hover {
    box-shadow: 0px 8px 25px rgba(74,58,255, 0.2);
  }
</style>
