import Ember from 'ember';

const { Route } = Ember;
const { service } = Ember.inject;

export default Route.extend({
  flashMessages: service(),
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
      ).then(() => {
        this.get('flashMessages').success('Logged in!');
      }).catch((response) => {
        const { errors } = response;

        if (errors.mapBy('code').indexOf(401) >= 0) {
          this.get('flashMessages')
            .danger('Your username or password was incorrect. Please try again.');
        } else {
          this.get('flashMessages')
            .danget('Server Error');
        }
      });

      console.log('do login yay!');
    },
  }

});
