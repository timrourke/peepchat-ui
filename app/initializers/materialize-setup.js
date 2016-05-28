/*globals window:true*/
export function initialize(/* application */) {
  // Override default browser field validation behavior
  if (window && window.validate_field) {
    window.validate_field = function(){};
  }
}

export default {
  name: 'materialize-setup',
  initialize
};
