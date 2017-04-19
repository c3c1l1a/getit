import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return ['wish1', 'wish2'];
	},
	actions: {
		saveWishes(){
			
		}
	}
});
