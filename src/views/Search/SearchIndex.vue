<template>
  <ContentWrapper class="cit-search-index">
    <div class="cit-search-index__form">
      <Input v-model="search"
             ref="SearchInput"
             @keydown.enter.native="handleSubmit"
             placeholder="Search by city, county, state abbreviation, or zip code..."
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
    };
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
          search: this.search,
        },
      });
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
    display: flex;
    align-items: center;
    margin: 2rem 0;

    &-input {
      flex: 1 1 auto;
    }

    &-button {
      flex: 0 0 auto;
      margin-left: 1rem;
    }

    @media all and (max-width: $cit-breakpoint-small) {
      flex-wrap: wrap;
      margin: 1rem 0;

      &-input,
      &-button {
        flex: 1 1 auto;
        margin: .5rem 0;
      }
    }
  }
}
</style>
