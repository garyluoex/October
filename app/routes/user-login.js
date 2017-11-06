import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return Ember.Object.create({email: '', password: ''});
  },
  actions: {
    login(model) {
      console.log(model)
    }
  }
});
