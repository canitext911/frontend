<template>
  <div class="cit-card-group">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CardGroup',
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

.cit-card-group {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem -1rem;
}
</style>
