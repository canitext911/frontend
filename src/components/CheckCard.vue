<template>
  <Card :class="['cit-check-card', classList]">
    <div class="cit-check-card__check">
      <Icon :icon="icon"
            size="large"
            class="cit-check-card__icon"/>
    </div>
    <div class="cit-check-card__content">
      <div class="cit-check-card__title">
        <slot/>
      </div>
      <div class="cit-check-card__subtitle">
        <slot name="subtitle"/>
      </div>
    </div>
  </Card>
</template>
<script>
import Card from './Card';
import Icon from './Icon';

export default {
  name: 'CheckCard',
  components: { Icon, Card },
  props: {
    isChecked: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    classList() {
      return {
        'cit-check-card--checked': this.isChecked,
      };
    },
    icon() {
      return this.isChecked ? 'check' : 'close';
    },
  },
};
</script>
<style lang="scss">
@import '~@scss/index.scss';

.cit-check-card {
  padding     : 2rem;
  display     : flex;
  align-items : center;

  // icon can't transition when swapping icon, so remove transition altogether
  &__check,
  &__icon {
    transition : none;
  }

  &__check {
    height          : 3rem;
    width           : 3rem;
    border          : 2px solid $cit-red;
    border-radius   : 50%;
    color           : $cit-red;
    display         : flex;
    align-items     : center;
    justify-content : center;
  }

  &__content {
    padding         : .5rem 1rem;
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    min-height      : 5rem;
  }

  &__title {
    text-transform : uppercase;
  }

  &__subtitle {
    color      : $cit-dark-gray;
    font-size  : .8rem;
    margin-top : .25rem;
  }

  &--checked & {
    &__check {
      color        : $cit-blue;
      border-color : $cit-blue;
    }
  }
}
</style>
