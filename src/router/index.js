import Vue from 'vue';
import Router from 'vue-router';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import Search from '../components/search/Search';
// import SearchVideo from './components/search/SearchVideo';
import Posts from '../components/posts/Posts';
import Photos from '../components/photos/Photos';
import About from '../components/about/About';
import Users from '../components/users/Users';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/search'
    },  
    {
      path: '/search',
      name: 'search',
      components: {
        navigation: Navigation,
        default: Search,
        footer: Footer,
      },
    },
    {
      path: '/photos',
      name: 'photos',
      components: {
        navigation: Navigation,
        default: Photos,
        footer: Footer,
      }    
    },
    {
      path: '/about',
      name: 'about',
      components: {
        navigation: Navigation,
        default: About,
        footer: Footer,
      } 
    },
    {
      path: '/posts',
      name: 'posts',
      components: {
        navigation: Navigation,
        default: Posts,
        footer: Footer,
      }
    },
    {
      path: '/users',
      name: 'users',
      components: {
        navigation: Navigation,
        default: Users,
        footer: Footer,
      }
    }
  ],
});
