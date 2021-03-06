import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    user: { embedded: 'always' },
    comments: { embedded: 'always' }
  }
});
