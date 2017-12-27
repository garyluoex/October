import DS from 'ember-data';
import $ from 'jquery';

export default DS.JSONAPIAdapter.extend({

  namespace: 'api',

  queryRecord(store, type, query) {
    console.log(query);
    return $.getJSON("/api/users/"+query.email);
  }

});
