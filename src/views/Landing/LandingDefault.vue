<template>
  <div class="cit-landing-default">
    <div class="cit-landing-default__content">
      <h1 class="cit-landing-default__heading">
        Text 9-1-1
      </h1>
      <h2 class="cit-landing-default__subheading">
        Be prepared. Check to see if emergency texting is supported in your area.
      </h2>
      <Button class="cit-landing-default__button"
              @click="handleWizardRoute">Check Availability
      </Button>
    </div>
  </div>
</template>
<script>
import Button from '@/components/Button';
import RouteNames from '@/router/names';

export default {
  name: 'LandingDefault',
  methods: {
    handleWizardRoute() {
      this.$router.push({
        name: RouteNames.Landing.Wizard,
      });
    },
  },
  metaInfo: {
    meta: [
      { name: 'description', content: 'Find out if texting 911 is supported in your area.' },
    ],
  },
  components: { Button },
};
</script>
<style lang="scss">
@import '~@scss/index.scss';

@keyframes cit-landing-component--entrance {
  from {
    opacity   : 0;
    transform : translateY(.5rem);
  }
}

.cit-landing-default {
  height : 100%;

  &__content {
    display         : flex;
    align-items     : center;
    justify-content : center;
    flex-direction  : column;
    position        : relative;
    z-default       : 1;
    padding         : 1rem 0 4rem 0;
    min-height      : 100%;
    text-align      : center;
  }

  &__heading {
    margin         : 0;
    font-size      : 8rem;
    text-transform : uppercase;
    color          : $cit-dark-black;

    animation      : cit-landing-component--entrance .4s ease;
  }

  &__subheading {
    font-size   : 1rem;
    font-weight : normal;
    color       : $cit-dark-gray;
    margin-top  : 1rem;
    animation   : cit-landing-component--entrance .4s ease .1s backwards;
  }

  &__button {
    width      : 98%;
    margin-top : 3rem;
    animation  : cit-landing-component--entrance .4s ease;
  }

  @media all and (max-width : $cit-breakpoint-large) {
    &__heading {
      font-size : 6rem;
    }

    &__subheading {
      max-width : 20rem;
    }
  }

  @media all and (max-width : $cit-breakpoint-medium) {
    &__heading {
      font-size : 4rem;
    }
  }
}
</style>
