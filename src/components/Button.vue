<template>
  <div :class="['cit-button', classList]"
       :disabled="isDisabled"
       @click="$emit('click')">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isCompact: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return {
        'cit-button--compact': this.isCompact,
      };
    },
  },
};
</script>
<style lang="scss">
@import '~@scss/index.scss';

.cit-button {
  border-radius: 2rem;
  cursor: pointer;
  background: $cit-blue;
  color: #fff;
  padding: 0 2rem;
  height: 3rem;
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  transition: $cit-transition-default;

  &--compact {
    padding: 0 1rem;
    height: 2rem;
    background: transparent !important;
    color: $cit-blue;

    &:hover {
      color: $cit-dark-blue;
    }
  }

  &:hover {
    background-color: $cit-dark-blue;
  }
}
</style>
