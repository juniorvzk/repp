if(Meteor.isClient){
  if (Meteor.loggingIn()) {
    if (Meteor.user()) {
      Router.go("/dashboard");
    }

  }

    // Router.go('/dashboard');

}




Template.MainNav.helpers({


});

Template.MainNav.events({
  "click .logout": function(event, template){
    Meteor.logout(function(){
        console.log("user Logged out!");
    });
  },
});
