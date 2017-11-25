import Component from '@ember/component';

export default Component.extend({
  dragOver: function(event){
    // this is needed to avoid the default behaviour from the browser
    event.preventDefault();
  },

  dragEnter: function(event){
    event.preventDefault();
  },

  dragLeave: function(event){
    event.preventDefault();
  },

  drop: function(event){
    event.preventDefault();
  },
  actions: {
    async uploadImage(model, file) {
      console.log(await file.readAsDataURL());
    }
  }
});
