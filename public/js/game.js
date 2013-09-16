var game = {

    "onload" : function () {
      
      me.sys.fps = 10;
      me.sys.useNativeAnimFrame = true;
        
        if (!me.video.init("screen", 640, 480, true, 'auto')) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
		
		if (document.location.hash === "#debug") {
			window.onReady(function () {
				me.plugin.register.defer(debugPanel, "debug");
			});
		}

//        me.audio.init("mp3");

        
        me.loader.onload = this.loaded.bind(this);
     
        me.loader.preload(game.resources);

        me.state.change(me.state.LOADING);
    },



    "loaded" : function () {
      
      me.state.set(me.state.MENU, new game.TitleScreen());
      me.state.set(me.state.PLAY, new game.PlayScreen());
		
		  me.entityPool.add("player", game.PlayerEntity);
		  me.entityPool.add("bodybuilder", game.BodybuilderEntity);
		  me.entityPool.add("doggie", game.DoggieEntity);

		  me.input.bindKey(me.input.KEY.LEFT,	"left");
		  me.input.bindKey(me.input.KEY.RIGHT, "right");
		  me.input.bindKey(me.input.KEY.SPACE, "jump", true);
		  me.input.bindKey(me.input.KEY.UP, "jump", true);

      me.state.change(me.state.PLAY);
    }
};
