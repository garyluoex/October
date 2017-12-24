import Route from '@ember/routing/route';

export default Route.extend({
  session: Ember.inject.service('session'),

  actions: {
    uploadImage(imageUrl) {
      var store = this.get('store');
      var email = this.get('session').get('data').authenticated.user;
      store.findRecord('user', email).then(function(user) {
        var photo = store.createRecord('photo', { id: imageUrl, url: imageUrl });
        photo.save();
        user.get('photos').addObject(photo);
        user.save();
        console.log({"user": user.get('email'), "url": user.get('photos')});
      });
    }
  }
});
