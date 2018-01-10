import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('homepage-collection', 'Integration | Component | homepage collection', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{homepage-collection}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#homepage-collection}}
      template block text
    {{/homepage-collection}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
