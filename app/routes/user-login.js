import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service('session'),

  model() {
    return Ember.Object.create({identification: '', password: ''});
  },
  actions: {
    login(model) {
      this.get('session').authenticate('authenticator:jwt', model);
    }
  }
});
