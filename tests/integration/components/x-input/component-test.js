import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-input', 'Integration | Component | x input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-input}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{x-input
      type="text"
      value="template input text"
    }}
  `);

  assert.equal(this.$('input').val().trim(), 'template input text');
});
