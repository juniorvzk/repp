
Template.LoginModal.helpers({
  create: function(){

  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.LoginModal.events({
  "click .close-login": function(event, template){
     Session.set("nav-toogle","");
  }
});
