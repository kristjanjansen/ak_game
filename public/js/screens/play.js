game.PlayScreen = me.ScreenObject.extend({

	onResetEvent: function(level) {
        
    me.levelDirector.loadLevel(level);

		me.game.addHUD(0, 0, 640, 45);
    me.game.HUD.addItem('score', new game.ScoreObject(5, 5));
    me.game.HUD.addItem('health', new game.HealthObject(470, 5));
    
    me.game.HUD.setItemValue('score', 0);
    me.game.HUD.setItemValue('health', 1000);
    
    me.game.sort();
      
    
		me.audio.playTrack(level);	
		
//			console.log(me.levelDirector.getCurrentLevelId());
	},
	
	onDestroyEvent: function() {
	
	  me.game.disableHUD();
    
	  me.audio.stopTrack();
	
	}
	
});
