<script setup>
    const props = defineProps({
        type: {
            type: String,
            default: 'button',
        },
        mod: {
            type: String,
            default: '', 
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            required: true,
        },
    })
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="['btn', mod ? `btn--${mod}` : '']"
  >
    {{ text }}
  </button>
</template>

<style scored>
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 10px 40px;
        background: #4A3AFF;
        box-shadow: 0px 3px 12px rgba(74, 58, 255, 0.18);
        border-radius: 56px;
        min-height: 60px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        cursor: pointer;
        transition: color 0.3s ease, background-color 0.3s ease;
    }

    .btn:hover {
        color:  #4A3AFF;
        background-color: #FFFFFF;
    }

    .btn--bordered {
        border: 1px solid #4A3AFF;
        border-radius: 66px;
        color: #4A3AFF;
        background-color: transparent;
        box-shadow: none;
    }

    .btn--bordered:hover {
        color:  #FFFFFF;
        background-color: #4A3AFF;
    }

    .btn--light {
        padding: 16px 28px;
        background: #F3F1FF;
        border-radius: 50px;
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        color: #4A3AFF;
        box-shadow: none;
    }

    .btn--light:hover {
        color:  #FFFFFF;
        background-color: #4A3AFF;
    }

    .btn:disabled {
        opacity: 0.6;
        pointer-events: none;
    }

    .btn.hidden {
        visibility: hidden;
    }
</style>