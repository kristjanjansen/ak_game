game.PlayScreen = me.ScreenObject.extend({

	onResetEvent: function() {	
		me.levelDirector.loadLevel("area01");
	},
	
	
	onDestroyEvent: function() {
	}
});
