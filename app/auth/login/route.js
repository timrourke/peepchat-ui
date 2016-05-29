import Ember from 'ember';

const { Route } = Ember;
const { service } = Ember.inject;

export default Route.extend({
  session: service(),

  model() {
    return {
      email: '',
      password: '',
    };
  },

  setupController(controller, model) {
    controller.set('loginCredentials', model);
  },

  actions: {

    /**
     * Authenticate a user
     */
    doLogin() {
      const user = this.get('currentModel');
      this.get('session').authenticate(
        'authenticator:peepchat', user.email, user.password
      );

      console.log('do login yay!');
    },
  }

});
