import Ember from 'ember';

export default Ember.Controller.extend({
  myQueryParam: false,
  
  queryParams: ["myQueryParam"],
  
  actions: {
    toggleQueryParam() {
      this.set('myQueryParam', true);
			console.log(this.get('myQueryParam'));
      console.log(this);
      this.send('refreshRoute');
    }
  }
});