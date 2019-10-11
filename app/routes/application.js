import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log('model params: ', params);
    return false;
  },
  
  actions: {
    refreshRoute() {
      this.refresh();
    }
  }
});