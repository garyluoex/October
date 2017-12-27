import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return Ember.Object.create({email: '', password: ''});
  },
  actions: {
    signup(model) {
      var store = this.get('store');

      var user = store.createRecord('user', { email: model.email, password: model.password });
      user.save();

      model.set('email', '');
      model.set('password', '');
      // user.save().then(function() {
      //   store.findRecord('user', model.email).then(function(loaded) {
      //     if (!loaded) {
      //       console.log('User record failed to store to server');
      //     } else {
      //       console.log('User stored: ' + loaded);
      //     }
      //   });
      // });
    }
  }
});
