if(Meteor.isClient){
  Accounts.onLogin(function () {

    // Router.go('/dashboard');

  });
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
