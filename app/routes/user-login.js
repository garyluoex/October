import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service('session'),

  model() {
    return Ember.Object.create({identification: '', password: ''});
  },
  actions: {
    login(model) {
      var _this = this;
      this.get('session').authenticate('authenticator:jwt', model).then(function() {
        _this.get('session').set('data.authenticated.user', model.identification);
        _this.transitionTo('user-homepage');
      });
    }
  }
});
