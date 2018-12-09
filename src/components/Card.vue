<template>
  <div class="cit-card">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss">
@import '@scss/index.scss';

.cit-card {
  padding: 1rem 1.5rem;
  margin: 1rem;
  background: $cit-white;
  border-radius: 6px;
  box-shadow: 0 2px 4px -4px rgba(0, 0, 0, .4),
  0 4px 10px rgba(0, 0, 0, .05);
  flex: 1 1 20rem;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, .15);
  }

  @media all and (max-width: $cit-breakpoint-small) {
    margin: .5rem;
  }
}
</style>
