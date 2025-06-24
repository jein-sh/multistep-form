<script setup>
const props = defineProps({
  modelValue: Boolean,
  label: String,
  iconSrc: String,
  name: String,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (e) => {
  emit('update:modelValue', e.target.checked)
}
</script>

<template>
  <div class="custom-toggle">
    <label>
      <input
        type="checkbox"
        :name="name"
        :checked="modelValue"
        @change="updateValue"
      />
      <span class="custom-toggle__icon">
        <img v-if="iconSrc" :src="iconSrc" alt="" />
      </span>
      <span class="custom-toggle__label">{{ label }}</span>
    </label>
  </div>
</template>

<style scored>
  .custom-toggle label {
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

  .custom-toggle:has(input:checked) label {
    border-color: rgb(74, 58, 255);
    box-shadow: inset 0 0 0 1px #4A3AFF;
  }

  .custom-toggle input {
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

  .custom-toggle__label {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #170F49;
  }

  .custom-toggle__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background: rgb(74, 58, 255, 0.15);
  }

  .custom-toggle label:hover {
    box-shadow: 0px 8px 25px rgba(74,58,255, 0.2);
  }
</style>
