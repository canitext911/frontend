<template>
  <div class="cit-search-result">
    <template v-if="!hasLoadError">
      <SearchResultWizard
          v-if="!isBlankSearch && (!isLoading || hasResults)"
          :hasSearchResults="hasResults"/>
      <template v-if="hasResults">
        <SubHeader>
          Search Results
        </SubHeader>
        <p v-if="hasMoreResults">
          <small>
            Showing {{ visibleResults }}/{{ totalResults }}
            result{{ totalResults !== 1 ? 's' : '' }}
          </small>
        </p>
        <CardGroup>
          <SearchResultCard v-for="result in results"
                            :key="result.id"
                            :item="result"/>
        </CardGroup>
        <Button v-if="canLoadMore"
                isCompact
                class="cit-search-result__load-more"
                @click="handleLoadNext">
          Load More
        </Button>
      </template>
      <Loading v-if="isLoading"/>
      <p v-if="hasResults">
        <small>
          Information presented on this page is not guaranteed to be accurate. If in doubt,
          always confirm information with local authorities or your carrier.
          If you notice an issue, please
          <router-link :to="{ name: $options.RouteNames.Support.Index }"
                       target="_blank">
            report it.
          </router-link>
        </small>
      </p>
    </template>
    <template v-else>
      Something went wrong when fetching that request. Please
      <a @click="handleSearch">try again</a>.
    </template>
  </div>
</template>
<script>
import { ApiEndpoints, ApiEndpointTypes, get } from '@/lib/api';
import Loading from '@/components/Loading';
import SearchResultCard from '@/views/Search/partials/SearchResultCard';
import CardGroup from '@/components/CardGroup';
import RouteNames from '@/router/names';
import SubHeader from '@/components/SubHeader';
import SearchResultWizard from './partials/SearchResultWizard';
import Button from '../../components/Button';

export default {
  name: 'SearchResult',
  RouteNames,
  props: {
    search: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      abortController: null,
      isLoading: null,
      hasLoadError: null,
      results: [],
      currentPage: null,
      totalResults: null,
    };
  },
  computed: {
    hasMoreResults() {
      return this.totalResults === null || this.totalResults > this.visibleResults;
    },
    visibleResults() {
      return this.results.length;
    },
    hasResults() {
      return this.visibleResults > 0;
    },
    isBlankSearch() {
      return this.search === '';
    },
    canLoadMore() {
      return !this.isLoading && this.hasMoreResults;
    },
  },
  methods: {
    handleSearch() {
      if (this.isLoading) {
        this.abortController.abort();
      }

      this.abortController = new AbortController();
      this.isLoading = false;
      this.hasLoadError = false;
      this.currentPage = 0;
      this.$set(this, 'results', []);
      this.totalResults = null;
      return this.handleLoadNext();
    },
    async handleLoadNext() {
      if (this.canLoadMore) {
        let response = null;
        let isResponseAborted = false;
        this.isLoading = true;
        try {
          const {
            data,
            total,
            current_page: currentPage,
          } = await get(
            ApiEndpoints[ApiEndpointTypes.lookup.natural], {
              search: this.search,
              page: this.currentPage + 1,
            },
            this.abortController.signal,
          );
          if (data != null && total != null && currentPage != null) {
            response = { data, total, currentPage };
          }
        } catch (e) {
          if (e.name === 'AbortError') {
            isResponseAborted = true;
          }
        }

        if (!isResponseAborted) {
          if (response === null) {
            this.hasLoadError = true;
          } else {
            this.$set(this, 'results', this.results.concat(response.data));
            this.currentPage = response.currentPage;
            this.totalResults = response.total;
          }

          this.isLoading = false;
        }
      }
    },
  },
  watch: {
    search: {
      handler() {
        this.handleSearch();
      },
      immediate: true,
    },
  },
  components: { Button, SubHeader, SearchResultWizard, CardGroup, SearchResultCard, Loading },
  metaInfo: {
    title: 'Search Results',
  },
};
</script>

<style lang="scss">
.cit-search-result {
  &__load-more {
    margin : 2rem 0;
  }
}
</style>
