import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import RouteNames from '@/router/names';

const LandingIndex = () => import('@/views/Landing/LandingIndex');
const LandingDefault = () => import('@/views/Landing/LandingDefault');
const LandingWizard = () => import('@/views/Landing/LandingWizard');
const SearchIndex = () => import('@/views/Search/SearchIndex');
const SearchResult = () => import('@/views/Search/SearchResult');
const FaqIndex = () => import('@/views/Faq/FaqIndex');
const SupportIndex = () => import('@/views/Support/SupportIndex');

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  linkActiveClass: 'cit-link--active',
  routes: [
    {
      path: '/',
      component: LandingIndex,
      children: [
        {
          path: '',
          name: RouteNames.Landing.Index,
          component: LandingDefault,
        },
        {
          path: 'wizard',
          name: RouteNames.Landing.Wizard,
          component: LandingWizard,
        },
      ],
    }, {
      path: '/search',
      name: RouteNames.Search.Index,
      component: SearchIndex,
      children: [
        {
          path: 'results/:search?',
          name: RouteNames.Search.Result,
          props: route => ({
            search: route.params.search,
          }),
          component: SearchResult,
        },
      ],
    }, {
      path: '/faq',
      name: RouteNames.Faq.Index,
      component: FaqIndex,
    }, {
      path: '/support',
      name: RouteNames.Support.Index,
      component: SupportIndex,
    },
    {
      path: '*',
      redirect: { name: RouteNames.Landing.Index },
    },
  ],
});

export default router;
