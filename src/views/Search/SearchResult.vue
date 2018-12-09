<template>
  <div class="cit-search-result">
    <Loading v-if="isLoading"/>
    <template v-else-if="hasLoadError">
      Something went wrong when fetching that request. Please
      <a @click="handleSearch">try again</a>.
    </template>
    <template v-else>
      <SearchResultWizard
          v-if="!isBlankSearch"
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
        <p>
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
      isLoading: false,
      hasLoadError: false,
      results: [],
      totalResults: null,
    };
  },
  computed: {
    hasMoreResults() {
      return this.totalResults > this.visibleResults;
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
  },
  methods: {
    async handleSearch() {
      this.$set(this, 'results', []);

      let response = null;
      this.isLoading = true;
      try {
        const { data, total } = await get(`${ApiEndpoints[ApiEndpointTypes.lookup.natural]}${this.search}`);
        if (data != null && total != null) {
          response = { data, total };
        }
      } catch (e) {
        //
      }

      if (response === null) {
        this.hasLoadError = true;
      } else {
        this.$set(this, 'results', response.data);
        this.totalResults = response.total;
      }
      this.isLoading = false;
    },
  },
  watch: {
    search: {
      async handler() {
        this.handleSearch();
      },
      immediate: true,
    },
  },
  components: { SubHeader, SearchResultWizard, CardGroup, SearchResultCard, Loading },
  metaInfo: {
    title: 'Search Results',
  },
};
</script>
