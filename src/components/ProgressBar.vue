<script setup>
    import { computed } from 'vue'

    const props = defineProps({
        totalSteps: {
            type: Number,
            required: true,
        },
        currentStep: {
            type: Number,
            required: true,
        }
    })

    const steps = computed(() => {
        return Array.from({ length: props.totalSteps }, (_, i) => i + 1)
    })

</script>

<template>
  <div class="form__progress">
    <div
      v-for="step in steps"
      :key="step"
      :class="['form__progress-item', { current: step === currentStep }]"
    >
      <span>{{ step }}</span>
    </div>
  </div>
</template>

<style scored>
  .form__progress {
    display: flex;
    gap: 18px;
    align-items: center;
    padding: 0 30px 32px;
    border-bottom: 1px solid #D9DBE9;
    margin-bottom: 64px;
  }

  .form__progress-item {
    position: relative;
    display: flex;
    align-items: center;
    gap: 18px;
    flex: 1;
  }

  .form__progress-item:last-child {
    flex: 0;
  }

  .form__progress-item::after {
    content: "";
    display: block;
    width: calc(100% - 34px - 18px);
    height: 6px;
    background: #EFF0F7;
    border-radius: 40px;
  }

  .form__progress-item::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 52px;
    transform: translateY(-50%);
    display: block;
    width: calc(100% - 34px - 18px);
    height: 6px;
    background: #4A3AFF;
    border-radius: 40px;
    transition: width 0.3s ease;
  }

  .form__progress-item:last-child:after,
  .form__progress-item:last-child:before {
    display: none;
  }

  .form__progress-item span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 112%;
    background: #4A3AFF;
    color: #FFFFFF;
    transition: color 0.3s ease, background 0.3s ease;
  }

  .form__progress-item.current::before {
    width: calc((100% - 34px - 18px) / 2);
  }

  .form__progress-item.current ~ .form__progress-item span {
    background: #EFF0F7;
    color: #6F6C90;
  }


  .form__progress-item.current ~ .form__progress-item::before {
    width: 0;
  }
</style>