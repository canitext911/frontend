<template>
  <Card class="cit-search-result-card">
    <div class="cit-search-result-card__header">{{ item.name }}</div>
    <div class="cit-search-result-card__body">
      <div class="cit-search-result-card__meta">
        {{ item.address }}
        <br>
        {{ item.city }}, {{ item.state }} {{ item.zip }}
        <br>
        {{ item.county }} County
      </div>
      <div class="cit-search-result-card__actions">
        <Icon v-if="hasEmail"
              icon="mail"
              size="large"
              title="Email Call Center Administrator"
              @click.native="handleEmail"
              class="cit-search-result-card__mail"/>
        <Icon icon="directions"
              size="large"
              title="Get Directions to Call Center"
              @click.native="handleDirection"
              class="cit-search-result-card__direction"/>
      </div>
    </div>
    <div class="cit-search-result-card__footer">
      <Icon icon="history"/>
      <span title="FCC Readiness Date">
        First available {{ item.ready_at | distanceInWordsToNow }} ago
      </span>
    </div>
  </Card>
</template>
<script>
import Card from '@/components/Card';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import Icon from '@/components/Icon';

export default {
  name: 'SearchResultCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    address() {
      return `${this.item.address} ${this.item.city}, ${this.item.state} ${this.item.zip}`;
    },
  },
  methods: {
    handleDirection() {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(this.address)}`);
    },
    hasEmail() {
      return !!this.item.admin_email;
    },
    handleEmail() {
      window.location = `mailto:${this.item.admin_email}?${new URLSearchParams({
        subject: `PSAP ${this.item.psap_id || 'Unknown'}`,
        body: this.item.admin_name ? `Hi ${this.item.admin_name},` : '',
      })}`;
    },
  },
  filters: {
    distanceInWordsToNow,
    upperFirst(str) {
      if (str.length === 0) {
        return str;
      }

      return `${str[0].toUpperCase()}${str.substring(1)}`;
    },
  },
  components: { Icon, Card },
};
</script>

<style lang="scss">
@import '~@scss/index.scss';

.cit-search-result-card {
  &__header {
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  &__body {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    border: 0 solid $cit-light-gray;
    border-width: 1px 0;
    padding: 1rem 0;
  }

  &__meta {
    flex: 1 1 auto;
    font-size: .9rem;
    line-height: 1.8;
  }

  &__actions {
    flex: 0 0 auto;
  }

  &__mail,
  &__direction {
    cursor: pointer;
    color: $cit-dark-gray;

    &:hover {
      color: $cit-blue;
    }
  }

  &__footer {
    font-size: .75rem;
    display: flex;
    align-items: center;
    color: $cit-dark-gray;
  }
}
</style>
