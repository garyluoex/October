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

  this.post('/create-user', (schema, request) => {
    console.log(request);

    var credential = JSON.parse(request.requestBody);

    schema.users.create({ id: credential.email, email: credential.email, password: credential.password });

    return schema.users.findBy({ email: credential.email });
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
    var result = {
      data: {
        type: 'users',
        id: id,
        attributes: schema.users.findBy({ email: id })
      }
    };
    return result;
  });

  this.patch('/users/:id', (schema, request) => {
    console.log(request);
    return {};
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
