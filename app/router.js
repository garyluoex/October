import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('user-login');
  this.route('user-signup');
  this.route('user-homepage');
  this.route('index');
  this.route('homepage', {path:'/'});
});

export default Router;
