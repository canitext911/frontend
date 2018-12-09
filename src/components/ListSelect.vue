<template>
  <div class="cit-list-select">
    <div :class="['cit-list-select__item', {'cit-list-select__item--selected': isSelected(key)}]"
         v-for="(item, key) in items"
         tabindex="-1"
         @click="handleSelect(key)"
         :key="key">
      <slot :item="item"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListSelect',
  model: {
    prop: 'currentKey',
    event: 'select',
  },
  props: {
    currentKey: {
      type: [String, Number],
      default: null,
    },
    items: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isSelected(key) {
      return key === this.currentKey;
    },
    handleSelect(value) {
      this.$emit('select', value);
    },
  },
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

.cit-list-select {
  &__item {
    font-size     : 1rem;
    background    : $cit-white;
    border        : 1px solid $cit-light-gray;
    padding       : 1rem 2rem;
    border-radius : 4px;
    margin        : 1rem 0;
    cursor        : pointer;
    transition    : $cit-transition-default;
    user-select   : none;
    outline       : none;

    &:hover:not(&--selected),
    &:focus:not(&--selected) {
      background-color : $cit-lighter-gray;
    }

    &--selected {
      color            : $cit-white;
      border-color     : $cit-transparent;
      background-color : $cit-blue;
    }
  }
}
</style>
