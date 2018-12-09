<template>
  <h1 class="cit-header">
    <slot/>
  </h1>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

.cit-header {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 2rem 0;
  color: $cit-dark-black;
  text-transform: uppercase;
}
</style>
