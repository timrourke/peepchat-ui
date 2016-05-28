import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-card', 'Integration | Component | x card', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{x-card}}`);

  assert.equal(this.$().text().trim(), '');

  this.render(hbs`
    {{#x-card
      title="Test Title"
    }}
      template block text
    {{/x-card}}
  `);

  assert.equal(this.$().text().trim().replace(/[\s\n]+/g, ''), 
    'TestTitletemplateblocktext');
});
