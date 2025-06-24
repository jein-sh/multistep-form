<script setup>
    import { ref } from 'vue'
    import Button from './ui/Button.vue'
    import CustomInput from './ui/CustomInput.vue'

    const props = defineProps({
        title: {
            type: String,
            default: '',
        },
        text: {
            type: String,
            default: '',
        }
    })
</script>

<template>
  <div class="subscribe">
    <div v-if="title" class="subscribe__title">{{ title }}</div>
    <form>
        <CustomInput
            type="text"
            placeholder="Enter your email"
            required
            iconSrc="/assets/img/svg/icon-man.svg"
        >
            <Button type="submit" text="Subscribe" />
        </CustomInput>
    </form>
    <div v-if="text" class="subscribe__text" v-html="text"></div>
  </div>
</template>

<style scoped>
    .subscribe__title {
        font-weight: 500;
        font-size: 16px;
        line-height: 18px;
        margin-bottom: 20px;
    }

    .subscribe label {
        min-height: 78px;
        padding-right: 185px;
        position: relative;
    }

    .subscribe .btn {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        min-height: 55px;
        padding: 16px 32px;
    }

    .subscribe__text {
        font-size: 16px;
        line-height: 144%;
        text-align: center;
        color: #6F6C90;
        margin-top: 25px;
    }

    @media(max-width: 539px) {
        .subscribe__title {
            text-align: center;
            text-wrap: balance;
        }

        .subscribe form {
            margin-bottom: 80px;
        }

        .subscribe .btn {
            width: 100%;
            right: auto;
            left: 50%;
            top: auto;
            bottom: -15px;
            transform: translate(-50%, 100%);
        }
    }
</style>