<template>
    <div class="button"
         @click="$emit('click')">
        <slot/>
    </div>
</template>
<script>
    export default {
        name: 'Button'
    };
</script>
<style>
    .button {
        border-radius: 2rem;
        cursor: pointer;
        background: #1660be;
        color: #fff;
        padding: 0 2rem;
        height: 3rem;
        display: flex;
        white-space: nowrap;
        align-items: center;
        justify-content: center;
    }
</style>