<template>
  <ContentWrapper class="cit-search-index">
    <div class="cit-search-index__form">
      <Input v-model="search"
             ref="SearchInput"
             ariaLabel="Search by city, county, state abbreviation, or zip code"
             @keydown.enter.native="handleSubmit"
             :placeholder="inputPlaceholder"
             class="cit-search-index__form-input"/>
      <Button class="cit-search-index__form-button"
              @click="handleSubmit">
        Find Results
      </Button>
    </div>

    <router-view/>
  </ContentWrapper>
</template>

<script>
import RouteNames from '@/router/names';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ContentWrapper from '../../components/ContentWrapper';

export default {
  name: 'SearchIndex',
  data() {
    return {
      search: '',
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    inputPlaceholder() {
      return this.windowWidth > 600 ? 'Search by city, county, state abbreviation, or zip code...' : 'Search...';
    },
  },
  methods: {
    handleSubmit() {
      this.$refs.SearchInput.blur();
      this.$router.push({
        name: RouteNames.Search.Result,
        query: {
          ...this.$route.query,
        },
        params: {
          // vue-router optional params doesn't allow a blank parameter,
          // just none at all or one with a value
          ...(this.search !== '' ? { search: this.search } : {}),
        },
      });
    },
    resizeHandler() {
      this.windowWidth = window.innerWidth;
    },
  },
  watch: {
    '$route.params.search': {
      handler(value) {
        if (value == null) {
          if (this.$refs.SearchInput != null) {
            this.$refs.SearchInput.select();
          }
        } else {
          this.search = value;
        }
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.search === '') {
      this.$refs.SearchInput.focus();
    }

    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  metaInfo: {
    title: 'Search',
  },
  components: { ContentWrapper, Button, Input },
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

.cit-search-index {
  &__form {
    display     : flex;
    align-items : center;
    margin      : 2rem 0;

    &-input {
      flex : 1 1 auto;
    }

    &-button {
      flex        : 0 0 auto;
      margin-left : 1rem;
    }

    @media all and (max-width : $cit-breakpoint-medium) {
      flex-wrap : wrap;
      margin    : 1rem 0;

      &-input,
      &-button {
        flex   : 1 1 100%;
        margin : .5rem 0;
      }
    }
  }
}
</style>
