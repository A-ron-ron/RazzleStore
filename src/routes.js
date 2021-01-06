import Home from './components/home';
import About from './components/about';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  }
  // {
  //   path: '/:slug',
  //   component: Page,
  //   exact: true,
  // }
];

export default routes;