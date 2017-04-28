import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionShow: false,
  actions: {
    edit(){
      this.set('editQuestionShow', true);
    },
    editQuestion(question){
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
      };
      this.set('editQuestionShow', false);
      this.sendAction('edit', question, params);
    }
  }
});
