game.PlayScreen = me.ScreenObject.extend({

	onResetEvent: function() {
  //	me.audio.disable()
		me.levelDirector.loadLevel("level1");
	//	me.audio.playTrack("level1");		
	},
	
	onDestroyEvent: function() {
	  me.audio.stopTrack();
	}
	
});
