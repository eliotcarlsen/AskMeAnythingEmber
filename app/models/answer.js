import DS from 'ember-data';

export default DS.Model.extend({
  response: DS.attr(),
  responder: DS.attr()
});
