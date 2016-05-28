import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({

  model() {
    return {};
  },

  setupController(controller, model) {
    controller.set('model', model);
  },

  actions: {
    doLogin() {
      console.log('do login yay!');
    },
  }

});
