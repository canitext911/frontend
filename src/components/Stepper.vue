<template>
  <div class="cit-stepper">
    <div class="cit-stepper__carousel"
         @transitionend="handleCarouselTransitionEnd"
         ref="Carousel"
         :style="carouselStyles">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Stepper',
  model: {
    prop: 'step',
    event: 'change',
  },
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    carouselStyles() {
      return {
        transform: `translateX(-${(this.step - 1) * 100}%)`,
      };
    },
  },
  methods: {
    handleCarouselTransitionEnd({ target }) {
      if (target === this.$refs.Carousel) {
        this.$emit('stepAnimationEnd');
      }
    },
  },
};
</script>
<style lang="scss">
@import '~@scss/index.scss';

.cit-stepper {
  position : relative;
  overflow : hidden;
  width    : 100%;

  &__carousel {
    display     : flex;
    align-items : center;
    will-change : transform;
    transition  : transform $cit-transition-medium;
  }
}
</style>
