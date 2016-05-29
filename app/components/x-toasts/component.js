import Ember from 'ember';

const { Component, computed } = Ember;
const { service } = Ember.inject;

export default Component.extend({
  classNames: ['toasts'],
  flashMessages: service(),
  reverseFlashQueue: computed('flashMessages.arrangedQueue.[]', function() {
    return this.get('flashMessages.arrangedQueue').reverse();
  }),
});
