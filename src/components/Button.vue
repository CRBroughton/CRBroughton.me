<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{ theme: 'primary' | 'secondary' | 'warning' }>()

</script>

<template>
    <button class="my-button button-small" :class="props.theme">
        <slot />
    </button>
</template>

<style scoped lang="scss">
.my-button {
    border: none;
    background: hsl(246, 84%, 58%);
    border: 1px solid hsl(246, 84%, 58%);
    box-shadow: 1px 1px 2px hsl(246, 80%, 70%);
    color: white;
    text-decoration: none;
    border-radius: 28px;
    position: relative;
    cursor: pointer;
    transition: all ease 0.1s;
    top: 0;
    width: 100%;

    &:hover {
        outline: 1px solid hsl(226, 75%, 70%);
        box-shadow: 1px 3px 4px hsl(246, 37%, 52%);
        top: -1px;
    }

    &:active {
        box-shadow: inset 1px 3px 1px #333;
        top: 1px;
        background: hsl(246, 84%, 62%);
        outline: 1px solid hsl(226, 82%, 69%);
    }

    &.secondary {
        background: hsl(120, 81%, 68%);
        border: 1px solid hsl(120, 86%, 65%);
        box-shadow: 1px 1px 2px hsl(120, 83%, 84%);
        color: black;

        &:hover {
            box-shadow: 2px 2px 2px hsl(120, 32%, 55%);
        }

        &:active {
            background: hsl(120, 85%, 70%);
            box-shadow: inset 1px 1px 3px #333;
        }
    }

    &.warning {
        background: hsl(6, 84%, 58%);
        border: 1px solid hsl(0, 72%, 58%);
        box-shadow: 1px 1px 2px hsl(0, 80%, 70%);

        &:active {
            background: hsl(0, 85%, 70%);
            box-shadow: inset 1px 3px 1px #333;
            top: 1px;
            outline: 1px solid hsl(226, 82%, 69%);
        }
    }

    &.button-small {
        font-size: 16px;
        padding: 10px 16px;
    }

    &.button-medium {
        font-size: 18px;
        padding: 11px 20px;
    }

    &.button-large {
        font-size: 21px;
        padding: 12px 24px;
    }
}
</style>