import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { Route } = Ember;
const { service } = Ember.inject;

export default Route.extend(ApplicationRouteMixin, {

  flashMessages: service(),

  actions: {

    /**
     * Invalidates current session
     */
    logout() {
      this.get('session').invalidate();
      this.get('flashMessages').success('Logged out.');
    }

  }

});
