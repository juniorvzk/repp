Router.configure({
  layoutTemplate: 'ApplicationLayout',

  waitOn: function() {
    return [
  //     // Meteor.subscribe('posts'),
  //     // Meteor.subscribe('posts'),
      // Meteor.subscribe('userData'),
  //     // Meteor.subscribe('images'),
  //     // Meteor.subscribe('certificados'),
      Meteor.subscribe('clients'),
      Meteor.subscribe('products'),
      Meteor.subscribe('orders'),
  //     // Meteor.subscribe('fretes'),
  //     // Meteor.subscribe('transportadores'),
  //     // Meteor.subscribe('tributos'),
  //     // Meteor.subscribe('notas'),
    ];
  // //
  }
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/dashboard', function () {
  this.render('Dashboard');
  this.render('AppNav', {to: 'aside'});
});

Router.route('/login', function () {
  this.render('LoginModal');
});

Router.route('/clientes', function () {
  this.render('clientesTemplate');
});

Router.route('/produtos', function () {
  this.render('produtosTemplate');
});

Router.route('/pedidos', function () {
  this.render('pedidosTemplate');
});
