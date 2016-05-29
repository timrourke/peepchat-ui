import Ember from 'ember';

const { Route } = Ember;
const { service } = Ember.inject;

export default Route.extend({
  session: service(),

  /**
   * Redirect authenticated users to app.index
   */
  beforeModel() {
    if (this.get('session').get('isAuthenticated')) {
      this.transitionTo('app.index');
    }
  },

});
