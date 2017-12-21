import Component from '@ember/component';

export default Component.extend({
  tagName: 'button',
  classNames: ['image-drop-zone'],

  dragOver: function(event) {
    // this is needed to avoid the default behaviour from the browser
    event.preventDefault();
  },

  dragEnter: function(event) {
    event.preventDefault();
  },

  dragLeave: function(event) {
    event.preventDefault();
  },

  drop: function(event) {
    event.preventDefault();
    var _this = this;
    var reader = new FileReader();
    reader.readAsDataURL(event.dataTransfer.files[0]);
    reader.onload = function() {
      _this.sendAction('uploadAction', reader.result);
    };
  }
});
