import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  classNames: ['card'],

  buttonClass: computed('buttonDisabled', function() {
    let classNames = ["btn-flat"];

    classNames.push((this.get('buttonDisabled')) ?
      'disabled' :
      'green white-text');

    return classNames.join(' ');
  }),
});