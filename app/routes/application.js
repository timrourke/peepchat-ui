import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { Route } = Ember;

export default Route.extend(ApplicationRouteMixin, {

  actions: {

    /**
     * Invalidates current session
     */
    logout() {
      this.get('session').invalidate();
    }

  }

});
