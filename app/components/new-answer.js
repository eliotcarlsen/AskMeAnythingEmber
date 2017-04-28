import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerForm: false,
  actions: {
    answerFormShow(){
      this.set('newAnswerForm', true);
    },
    saveAnswer(){
      var params = {
        response: this.get('response'),
        responder: this.get('responder')
      };
      this.set('newAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
