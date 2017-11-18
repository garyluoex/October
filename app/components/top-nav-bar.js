import Component from '@ember/component';

export default Component.extend({
  actions: {
    logout() {
      console.log(this.get('session').get('data').authenticated);
      this.get('session').invalidate();
      this.get('router').transitionTo('index');
    }
  }
});
