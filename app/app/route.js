import Ember from 'ember';
import config from 'peepchat/config/environment';
import fetch from 'ember-network/fetch';

const { Route } = Ember;
const { service } = Ember.inject;

export default Route.extend({
  session: service(),

  /**
   * Redirect unauthenticated users to auth.login
   */
  beforeModel() {
    if (!this.get('session').get('isAuthenticated')) {
      this.transitionTo('auth.login');
    }
  },

  /**
   * After successful login, we should have a valid token. Fetch
   * the current user from the server using the token and set it
   * as the `session.currentUser`.
   */
  afterModel() {
    let token = this.get('session.session.content.authenticated.access_token');
    return fetch(`${config.DS.host}/${config.DS.namespace}/user/current`, {
      type: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((raw) => {
      return raw.json().then((json) => {
        this.store.pushPayload(json);
        const currentUser = this.store.peekRecord('user', json.data.id);
        this.set('session.currentUser', currentUser);
      });
    });
  },

});
