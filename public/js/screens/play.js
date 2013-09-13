game.PlayScreen = me.ScreenObject.extend({

	onResetEvent: function() {	
		me.levelDirector.loadLevel("level1");
	},
	
	
	onDestroyEvent: function() {
	}
});
