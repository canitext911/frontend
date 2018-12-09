<template>
  <div class="cit-stepper-step">
    <div class="cit-stepper-step__title">
      {{ title }}
    </div>

    <div class="cit-stepper-step__slot">
      <slot/>
    </div>

    <div class="cit-stepper-step__actions">
      <Button
          isCompact
          :class="['cit-stepper-step__prev', prevClassList]"
          @click="$emit('prev')">
        {{ prevActionText }}
      </Button>
      <span class="cit-stepper-step__action-divider">
          /
        </span>
      <Button
          isCompact
          :class="['cit-stepper-step__next', nextClassList]"
          @click="$emit('next')">
        {{ nextActionText }}
      </Button>
    </div>
  </div>
</template>
<script>
import Button from './Button';

export default {
  name: 'StepperStep',
  components: { Button },
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
  computed: {
    prevClassList() {
      return {
        'cit-stepper-step__prev--disabled': !this.hasPrev,
      };
    },
    nextClassList() {
      return {
        'cit-stepper-step__next--disabled': !this.hasNext,
      };
    },
  },
};
</script>
<style lang="scss">
@import '~@scss/index.scss';

.cit-stepper-step {
  position: relative;
  flex: 0 0 100%;
  padding: 1rem 0;

  &__title {
    font-size: 1.75rem;
    font-weight: bold;
    color: $cit-black;
    text-align: center;
    text-transform: uppercase;
    padding: 0 1rem;
  }

  &__slot {
    padding: 2rem 0 1rem 0;
  }

  &__actions {
    border-top: 1px solid $cit-light-gray;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  &__action-divider {
    color: $cit-gray;
  }

  &__prev--disabled,
  &__next--disabled {
    pointer-events: none;
    opacity: .5;
    color: $cit-dark-gray !important;
  }
}
</style>
