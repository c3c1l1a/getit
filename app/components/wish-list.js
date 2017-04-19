import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addWish(){
			let wish = this.get('wish');
			this.get('wishes').pushObject(wish); 
		},
		saveWishes(){
			this.sendAction('action', this.get('wish'));
		}
	}
});
