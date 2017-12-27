import JWT from "npm:jsonwebtoken";

export default function() {


  this.namespace = 'api';

  this.post('/tokens', (schema, request) => {
    var credential = JSON.parse(request.requestBody);

    var user = schema.users.findBy({ email: credential.email});

    if (user && user.password == credential.password) {
      return {
          token: JWT.sign({email: request}, 'secretkey')
      };
    } else {
      return {};
    }
  });

  this.post('/users', (schema, request) => {
    console.log(request.requestBody);

    var user = JSON.parse(request.requestBody);

    schema.users.create({ email: user.data.attributes.email, password: user.data.attributes.password });

    var loaded = schema.users.findBy({ email: user.data.attributes.email });

    var result = {
      data: {
        type: 'users',
        id: loaded.id,
        attributes: loaded
      }
    };
    return result;
  });

  // this.post('/users/:id/photos', (schema, request) => {
  //   var id = request.params.id;
  //   var user = schema.users.find(id);
  //   var photo = JSON.parse(request.requestBody);
  //
  //   user.createPhoto(photo.url);
  //   user.save();
  // });
  //
  this.get('/users/:id', (schema, request) => {
    var id = request.params.id;
    var loaded = schema.users.findBy({ email: id });
    var result = {
      data: {
        type: 'users',
        id: loaded.id,
        attributes: loaded
      }
    };
    return result;
  });

  this.patch('/users/:id', (schema, request) => {
    console.log(request);
    var user = JSON.parse(request.requestBody);
    var loaded = schema.users.find(user.data.id);
    Object.keys(user.data.attributes).forEach(function(attribute) {
      loaded.update(attribute, user.data.attributes[attribute]);
    });

    var photoIds = [];
    for (var i in user.data.relationships.photos.data) {
      if (user.data.relationships.photos.data.hasOwnProperty(i)) {
        photoIds.push(user.data.relationships.photos.data[i].id);
      }
    }

    loaded.photoIds = photoIds;

    loaded.save();
    return schema.users.find(user.data.id);
  });

  this.post('/photos', (schema, request) => {
    var photo = JSON.parse(request.requestBody);

    schema.photos.create({ url: photo.data.attributes.url });

    var loaded = schema.photos.findBy({ url: photo.data.attributes.url })

    var result = {
      data: {
        type: 'photos',
        id: loaded.id,
        attributes: loaded
      }
    };

    return result;
  });

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
