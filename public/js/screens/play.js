game.PlayScreen = me.ScreenObject.extend({

	onResetEvent: function() {
  //	me.audio.disable()
		me.levelDirector.loadLevel("level1");
		
		me.game.addHUD(7, 7, 640, 32);
    me.game.HUD.addItem('score', new game.ScoreObject(0, 0));
    
    me.game.sort();
    
//		me.audio.playTrack("level1");		
	},
	
	onDestroyEvent: function() {
	
	  me.game.disableHUD();
    
//	  me.audio.stopTrack();
	
	}
	
});
