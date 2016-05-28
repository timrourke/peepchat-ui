import Ember from 'ember';

const { Component, computed, run } = Ember;

export default Component.extend({
	classNames: ['input-field'],
	errors: null,
	label: '',
	type: 'text',
	value: null,

	/**
	 * @property errors.[] 
	 *
	 * Return a string of comma-separated errors
	 */
	_errorMessages: computed('errors.[]', function() {
		return (this.get('errors') || []).join(', ');
	}),

	actions: {

		/**
		 * Focus on input when label is clicked
		 */
		clickLabel() {
			run(() => {
				this.$('input.x-input__input').focus();
			});
		},
		
	}
});
