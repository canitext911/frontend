<template>
  <CardGroup class="cit-search-result-wizard">
    <CheckCard v-if="hasCarrier"
               :isChecked="isCarrierValid">
      Carrier
      <template slot="subtitle">
        <template v-if="isCarrierValid">
          Looks good! Verizon, AT&amp;T, Sprint, and T-Mobile have indicated support.
        </template>
        <template v-else>
          Your carrier may not support texting 911. Contact them to be sure.
        </template>
      </template>
    </CheckCard>
    <CheckCard v-if="hasCarrierPlanStatus"
               :isChecked="isCarrierPlanStatusValid">
      Plan Status
      <template slot="subtitle">
        <template v-if="isCarrierPlanStatusValid">
          An active plan is just what you need. If you ever cancel service,
          you'll still be able to make calls.
        </template>
        <template v-else>
          You need an active phone plan to text 911. You can still make calls.
        </template>
      </template>
    </CheckCard>

    <CheckCard :isChecked="hasSearchResults">
      Call Center Support
      <template slot="subtitle">
        <template v-if="hasSearchResults">
          We found some call centers using your search criteria that support 911 texting.
          Make sure your county or zip code matches a listed result.
        </template>
        <template v-else>
          We couldn't find any call centers using your search criteria,
          but you could still be covered.
          <a @click="handleNewSearch">Search again</a> or contact your carrier.
        </template>
      </template>
    </CheckCard>
  </CardGroup>
</template>
<script>
import { Carrier, CarrierPlanStatus } from '@/lib/carrier';
import CheckCard from '@/components/CheckCard';
import CardGroup from '@/components/CardGroup';
import RouteNames from '@/router/names';

export default {
  name: 'SearchResultWizard',
  props: {
    hasSearchResults: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    carrier() {
      return this.$route.query.carrier || null;
    },
    hasCarrier() {
      return this.carrier !== null;
    },
    isCarrierValid() {
      return this.hasCarrier
        && Object.keys(Carrier).includes(this.carrier)
        && Carrier[this.carrier].isSupported === true;
    },
    carrierPlanStatus() {
      return this.$route.query.carrierPlanStatus || null;
    },
    hasCarrierPlanStatus() {
      return this.carrierPlanStatus !== null;
    },
    isCarrierPlanStatusValid() {
      return this.hasCarrierPlanStatus
        && Object.keys(CarrierPlanStatus).includes(this.carrierPlanStatus)
        && CarrierPlanStatus[this.carrierPlanStatus].isSupported === true;
    },
  },
  methods: {
    handleNewSearch() {
      this.$router.push({
        name: RouteNames.Search.Index,
        query: {
          ...this.$route.query,
        },
      });
    },
  },
  components: { CardGroup, CheckCard },
};
</script>
