import Route from '@ember/routing/route';

export default Route.extend({

  ajax: Ember.inject.service(),

  model() {
    return Ember.Object.create({email: '', password: ''});
  },
  actions: {
    signup(model) {
      this.get('ajax').request('/api/create-user', {
        type: "POST",
        contentType: 'application/json; charset=utf-8',
        data: {email: model.email, password: model.password}
      }).then(function(response) {
        console.log(response);
      })
    }
  }
});
