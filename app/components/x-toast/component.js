import Ember from 'ember';

const { 
  computed: { readOnly }, 
  run: { next, cancel },
  computed, getWithDefault, Component
} = Ember;

export default Component.extend({
  classNames: ['material-toast', 'toast'],
  classNameBindings: ['active', 'exiting', 'color'],
  active: false,
  color: computed('content.type', function() {
    switch(this.get('content.type')) {
      case 'danger':
        return 'red darken-2 white-text';
      case 'warning':
        return 'yellow lighten-1 black-text';
      default:
        return '';
    }
  }),
  exiting: readOnly('content.exiting'),

  /**
   * Destroy any lingering flash message. Useful for teardown.
   */
  _destroyFlashMessage() {
    const flash = getWithDefault(this, 'content', false);
    if (flash) {
      flash.destroyMessage();
    }
  },

  /**
   * After insert, apply 'active' class for next run loop
   */
  didInsertElement() {
    this._super(...arguments);

    this._applyActiveClass = next(() => {
      this.set('active', true);
    });
  },

  /**
   * Eliminate any memory leaks on teardown
   */
  willDestroyElement() {
    this._super();

    // Destroy current flash message on teardown
    this._destroyFlashMessage();

    // Kill '_applyActiveClass' on teardown
    if (this._applyActiveClass) {
      cancel(this._applyActiveClass);
    }
  },

});
