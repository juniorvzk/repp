Template.AppNav.helpers({
  getEmail: function(){
    if (Meteor.user()) {
      return Meteor.user().emails[0].address;
    }

  }
});
