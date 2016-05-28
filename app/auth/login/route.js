import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

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
    doLogin() {
      console.log('do login yay!');
    },
  }

});
