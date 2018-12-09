<template>
  <i :class="['cit-icon', classList]">{{ icon }}</i>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: 'tag_faces',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  computed: {
    classList() {
      return [
        `cit-icon--${this.size}`,
        'material-icons',
      ];
    },
  },
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

.cit-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font: normal 1rem 'Material Icons';
  width: 2rem;
  font-style: normal;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';
  vertical-align: middle;
  user-select: none;

  &--large {
    font-size: 1.5rem;
    width: 3rem;
  }
}
</style>
