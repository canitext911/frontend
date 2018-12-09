<template>
  <div class="cit-app">
    <ContentWrapper class="cit-app__header">
      <div class="cit-app__logo">
        <router-link :to="{ name: $options.RouteNames.Landing.Index }">
          CANiTEXT<strong>911</strong>
        </router-link>
      </div>
      <div class="cit-app__menu-open">
        <Icon icon="menu" size="large"
              @click.native="handleMenuOpen"/>
      </div>
      <div :class="['cit-app__menu', menuClassList]">
        <div class="cit-app__menu-close">
          <Icon icon="close" size="large"
                @click.native="handleMenuClose"/>
        </div>
        <router-link :to="{ name: $options.RouteNames.Search.Index }"
                     @click.native="handleMenuClose">
          Search
        </router-link>
        <router-link :to="{ name: $options.RouteNames.Faq.Index }"
                     @click.native="handleMenuClose">
          FAQ
        </router-link>
        <router-link :to="{ name: $options.RouteNames.Support.Index }"
                     @click.native="handleMenuClose">
          Contact
        </router-link>
      </div>
    </ContentWrapper>
    <div class="cit-app__view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import RouteNames from '@/router/names';
import ContentWrapper from '@/components/ContentWrapper';
import Icon from './components/Icon';

export default {
  name: 'App',
  RouteNames,
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  computed: {
    menuClassList() {
      return {
        'cit-app__menu--open': this.isMobileMenuOpen,
      };
    },
  },
  methods: {
    handleMenuOpen() {
      this.isMobileMenuOpen = true;
    },
    handleMenuClose() {
      this.isMobileMenuOpen = false;
    },
  },
  metaInfo: {
    title: 'United States',
    titleTemplate: 'Can I Text 911? - %s',
  },
  components: { Icon, ContentWrapper },
};
</script>

<style lang="scss">
@import '~@scss/app.scss';

.cit-app {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__header {
    flex: 0 0 auto;
    padding: 1rem 2rem;
    border-bottom: 1px solid $cit-light-gray;
    display: flex;
    align-items: center;
    margin-top: 1rem;

    @media all and (max-width: $cit-breakpoint-medium) {
      padding: 1.5rem .5rem 1.5rem 1rem !important;
      margin: 0;
    }
  }

  &__logo {
    flex: 1 1 auto;
    font-size: 1.25rem;
    font-weight: bold;

    a {
      color: $cit-dark-black;
    }

    strong {
      color: $cit-red;
    }
  }

  &__menu {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;

    a {
      margin: 0 1rem;
      color: $cit-black;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px dashed transparent;

      &.cit-link--active {
        border-bottom-color: $cit-black;
      }
    }

    @media all and (max-width: $cit-breakpoint-medium) {
      visibility: hidden;
      opacity: 0;
      position: fixed;
      z-index: 5;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      flex-direction: column;
      background: $cit-white;
      overflow: auto;
      pointer-events: none;

      a {
        margin: 2rem 0;
      }

      &--open {
        visibility: visible;
        opacity: 1;
        pointer-events: all;
      }
    }
  }

  &__menu-open,
  &__menu-close {
    display: none;

    @media all and (max-width: $cit-breakpoint-medium) {
      display: inline-block;
      cursor: pointer;
    }
  }

  &__menu-close {
    position: fixed;
    top: 1.5rem;
    right: .5rem;
  }

  &__view {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    min-width: 0;
    overflow: auto;
    padding: 1rem;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
