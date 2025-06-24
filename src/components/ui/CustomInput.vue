<template>
    <div class="custom-input">
        <span class="custom-input__label">{{ label }}</span>
        <label>
            <input
                :type="type"
                :placeholder="placeholder"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            />
            <span class="custom-input__icon" v-if="iconSrc">
                <inline-svg :src="iconSrc" />
            </span>
            <slot /> 
        </label>
    </div>
</template>

<script setup>
    defineProps({
        label: { type: String, required: true },
        placeholder: { type: String, default: '' },
        type: { type: String, default: 'text' },
        modelValue: { type: [String, Number], default: '' },
        iconSrc: { type: String, default: '' }
    })

    defineEmits(['update:modelValue'])
</script>

<style scored>
    .custom-input__label {
        display: block;
        font-weight: 500;
        font-size: 18px;
        line-height: 111%;
        color: #170F49;
        margin-bottom: 18px;
    }

    .custom-input label {
        position: relative;
        background: #FFFFFF;
        border: 1px solid #EFF0F7;
        box-shadow: 0px 8px 25px rgba(13, 10, 44, 0.06);
        border-radius: 60px;
        display: flex;
        align-items: center;
        padding: 16px 32px;
        transition: box-shadow 0.3s ease;
    }

    .custom-input input {
        border: none;
        background: transparent;
        font-size: 18px;
        line-height: 111%;
        color: #6F6C90;
        outline: none;
        width: 100%;
    }

    .custom-input__icon {
        color: #A0A3BD;
        transition: color 0.3s ease;
    }

    .custom-input label:hover,
    .custom-input label:has(input:focus) {
        box-shadow: 0px 8px 25px rgba(74,58,255, 0.2);
    }

    .custom-input label:hover .custom-input__icon {
        color: #4a3aff;
    }
</style>