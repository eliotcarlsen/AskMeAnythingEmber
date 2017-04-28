import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer){
      if(confirm("Are you sure you'd like to remove this answer?")){
        this.sendAction('deleteAnswer', answer);
      }
    }
  }
});
