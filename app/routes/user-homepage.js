import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service('session'),

  model() {
    return this.get('store').queryRecord('user', {email: this.get('session').get('data').authenticated.user});
  },

  actions: {
    uploadImage(imageUrl) {
      var store = this.get('store');
      var username = this.get('session').get('data').authenticated.user;

      store.queryRecord('user', { email: username }).then(function(user) {
        var photo = store.createRecord('photo', { url: imageUrl });
        photo.save().then(function() {
          user.get('photos').addObject(photo);
          user.save();

          console.log({"user": user.get('email'), "url": user.get('photos')});
        });
      });
    }
  }
});
