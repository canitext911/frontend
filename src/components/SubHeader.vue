<template>
  <h2 class="cit-subheader">
    <slot/>
  </h2>
</template>

<script>
export default {
  name: 'Subheader',
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

.cit-subheader {
  font-size      : 1.75rem;
  font-weight    : bold;
  text-align     : center;
  padding        : 1rem 0;
  color          : $cit-black;
  text-transform : uppercase;
  user-select    : none;
}
</style>
