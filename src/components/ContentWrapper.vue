<template>
  <div :class="['cit-content-wrapper', classList]">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ContentWrapper',
  props: {
    isCentered: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classList() {
      return {
        'cit-content-wrapper--centered': this.isCentered,
      };
    },
  },
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

.cit-content-wrapper {
  width     : 100%;
  max-width : 1024px;
  padding   : 1rem;

  &--centered {
    text-align : center;
  }

  @media all and (max-width : $cit-breakpoint-small) {
    padding : 1rem 0;
  }
}
</style>
