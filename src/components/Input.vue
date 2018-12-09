<template>
  <div class="cit-text-input">
    <input class="cit-text-input__element"
           :placeholder="placeholder"
           :autofocus="isAutofocused"
           :required="isRequired"
           :name="name"
           :min="min"
           :max="max"
           :maxlength="maxlength"
           :aria-label="ariaLabel"
           :tabindex="tabindex"
           :value="value"
           :type="type"
           ref="Input"
           @input="handleInput">
    <div class="cit-text-input__typeahead"
         v-if="hasSuggestions">
      <div class="cit-text-input__typeahead-suggestion"
           v-for="(suggestion, index) in visibleSuggestions"
           :key="index">
        {{ suggestion }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    maxlength: {
      type: Number,
      default: null,
    },
    ariaLabel: {
      type: String,
      default: null,
    },
    tabindex: {
      type: Number,
      default: 0,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: null,
    },
    isAutofocused: {
      type: Boolean,
      default: false,
    },
    suggestions: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    hasSuggestions() {
      return this.suggestions.length > 0;
    },
    visibleSuggestions() {
      if (this.value === '' || !this.hasSuggestions) {
        return [];
      }

      return this.suggestions
        .filter(value => this.value.toLowerCase().indexOf(value.toLowerCase()) === 0);
    },
    hasVisibleSuggestions() {
      return this.visibleSuggestions.length > 0;
    },
  },
  methods: {
    handleInput({ target: { value } }) {
      this.$emit('input', value);
    },
    focus() {
      this.$refs.Input.focus();
    },
    blur() {
      this.$refs.Input.blur();
    },
    select() {
      this.$refs.Input.select();
    },
  },
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

.cit-text-input {
  position: relative;

  &__element {
    font: inherit;
    outline: none;
    border: 1px solid $cit-gray;
    border-radius: 2rem;
    width: 100%;
    height: 3rem;
    padding: 0 2rem;

    &:focus {
      border-color: $cit-blue;
    }
  }

}
</style>
