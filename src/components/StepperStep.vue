<template>
  <div class="cit-stepper-step">
    <Subheader class="cit-stepper-step__title">
      {{ title }}
    </Subheader>

    <div class="cit-stepper-step__slot">
      <slot/>
    </div>

    <div class="cit-stepper-step__actions">
      <!--
           Note on tabindex:
           this is not ideal for accessibility but required
           currently to prevent jumping of the carousel
           with tabbing
       -->
      <Button
          isCompact
          :isDisabled="!hasPrev"
          :tabindex="-1"
          class="cit-stepper-step__prev"
          @click="$emit('prev')">
        {{ prevActionText }}
      </Button>
      <span class="cit-stepper-step__action-divider">
          /
        </span>
      <Button
          isCompact
          :isDisabled="!hasNext"
          :tabindex="-1"
          class="cit-stepper-step__next"
          @click="$emit('next')">
        {{ nextActionText }}
      </Button>
    </div>
  </div>
</template>
<script>
import Button from './Button';
import Subheader from './SubHeader';

export default {
  name: 'StepperStep',
  components: { Subheader, Button },
  props: {
    title: {
      type: String,
      default: 'Step',
    },
    hasPrev: {
      type: Boolean,
      default: false,
    },
    hasNext: {
      type: Boolean,
      default: false,
    },
    prevActionText: {
      type: String,
      default: 'Prev',
    },
    nextActionText: {
      type: String,
      default: 'Next',
    },
  },
};
</script>
<style lang="scss">
@import '~@scss/index.scss';

.cit-stepper-step {
  position : relative;
  flex     : 0 0 100%;
  padding  : 1rem 0;

  &__title {
    margin : -1rem 0;
  }

  &__slot {
    padding : 2rem 0 1rem 0;
  }

  &__actions {
    border-top      : 1px solid $cit-light-gray;
    padding         : 1rem 0;
    display         : flex;
    align-items     : center;
    justify-content : flex-end;
  }

  &__action-divider {
    color : $cit-gray;
  }
}
</style>
