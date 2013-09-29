game.PlayScreen = me.ScreenObject.extend({

	onResetEvent: function() {

    me.levelDirector.loadLevel("level1");
		
		me.game.addHUD(0, 0, 640, 36);
    me.game.HUD.addItem('score', new game.ScoreObject(10, 10));
    me.game.HUD.addItem('health', new game.HealthObject(560, 10));
    
    me.game.HUD.setItemValue('score', 0);
    me.game.HUD.setItemValue('health', 1000);
    
    me.game.sort();
      
    
//		me.audio.playTrack("level1");		
	},
	
	onDestroyEvent: function() {
	
	  me.game.disableHUD();
    
//	  me.audio.stopTrack();
	
	}
	
});
