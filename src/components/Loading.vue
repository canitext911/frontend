<template>
  <div class="cit-loading">
    <div class="cit-loading__spinner"></div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

@keyframes cit-loading__spinner--infinite {
  100% {
    transform: rotateZ(360deg);
  }
}

.cit-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  &__spinner {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    animation: cit-loading__spinner--infinite 1s linear infinite;
    border: .25rem solid transparent;
    border-top-color: $cit-blue;
    border-left-color: $cit-blue;
  }
}
</style>
