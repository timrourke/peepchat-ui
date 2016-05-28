import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model() {
    return this.store.createRecord('user');
  },

  setupController(controller, model) {
    controller.set('newUser', model);
  },

  actions: {

    /**
     * @param user newUser  The new user to register
     *
     * Register a new user and transition to login page
     */
    doRegister(newUser) {
      console.log('do register yay!', newUser);
      newUser.save()
        .then(() => {
          this.transitionTo('auth.login');
        });
    },
    
  }

});
