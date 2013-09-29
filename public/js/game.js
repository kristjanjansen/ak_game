var game = {

    "onload" : function () {
            
        if (!me.video.init("screen", 640, 480, true, 'auto')) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
		
		if (document.location.hash === "#debug") {
			window.onReady(function () {
				me.plugin.register.defer(debugPanel, "debug");
			});
		}

        me.audio.init("mp3");
        
        me.loader.onload = this.loaded.bind(this);
     
        me.loader.preload(game.resources);

        me.state.change(me.state.LOADING);
    },



    "loaded" : function () {
      
      me.state.set(me.state.MENU, new game.TitleScreen());
      me.state.set(me.state.PLAY, new game.PlayScreen());
		
      me.state.transition("fade", "rgb(0,0,0)", 400);
				
		  me.entityPool.add("player", game.PlayerEntity);
		  me.entityPool.add("bible", game.BibleEntity);
		  me.entityPool.add("thug", game.ThugEntity);
		  me.entityPool.add("boss", game.BossEntity);
		  me.entityPool.add("spikes", game.SpikesEntity);

		  me.entityPool.add("score", game.ScoreCardEntity);
		  me.entityPool.add("health", game.HealthCardEntity);

		  me.entityPool.add("nextlevel", game.NextlevelEntity);

		  me.input.bindKey(me.input.KEY.LEFT,	"left");
		  me.input.bindKey(me.input.KEY.RIGHT, "right");
		  me.input.bindKey(me.input.KEY.SPACE, "jump", true);
		  me.input.bindKey(me.input.KEY.UP, "jump", true);
     
      me.state.change(me.state.PLAY);
    
    }
};
