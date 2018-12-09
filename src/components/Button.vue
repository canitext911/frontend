<template>
  <div :class="['cit-button', classList]"
       :tabindex="tabindex"
       @keydown.enter="handleClick"
       @click="handleClick">
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
    tabindex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    classList() {
      return {
        'cit-button--compact': this.isCompact,
        'cit-button--disabled': this.isDisabled,
      };
    },
  },
  methods: {
    handleClick() {
      if (!this.isDisabled) {
        this.$emit('click');
      }
    },
  },
};
</script>
<style lang="scss">
@import '~@scss/index.scss';

.cit-button {
  border-radius   : 2rem;
  cursor          : pointer;
  background      : $cit-blue;
  color           : #ffffff;
  padding         : 0 2rem;
  height          : 3rem;
  display         : flex;
  white-space     : nowrap;
  align-items     : center;
  justify-content : center;
  transition      : $cit-transition-default;
  outline         : none;

  &:hover,
  &:focus {
    background-color : $cit-dark-blue;
  }

  &--compact {
    padding    : 0 1rem;
    height     : 2rem;
    background : transparent !important;
    color      : $cit-blue;

    &:hover,
    &:focus {
      color : $cit-dark-blue;
    }
  }

  &--disabled {
    pointer-events   : none;
    color            : $cit-gray !important;
    background-color : $cit-dark-gray;
  }
}
</style>
