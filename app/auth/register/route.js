import Ember from 'ember';

const { Route } = Ember;
const { service } = Ember.inject;

export default Route.extend({
  flashMessages: service(),

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
        .then((newUser) => {
          let newUserEmail = newUser.get('email');
          this.transitionTo('auth.login');
          this.get('flashMessages')
            .success(`Thanks for registering, ${newUserEmail}. Please log in.`);
        }).catch((response) => {
          const { errors } = response;
          this.get('flashMessages').danger(errors.mapBy('detail').join(', '));
        });
    },
    
  }

});
