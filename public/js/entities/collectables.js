game.CardEntity = me.CollectableEntity.extend({
   
    init: function(x, y, settings) {
  	  settings.image = 'card';
  	  settings.spritewidth = 32;	
  	  settings.spriteheight = 64;
  	  
      this.parent(x, y, settings);
      this.renderable.addAnimation("idle", [0,1]);
      this.renderable.setCurrentAnimation("idle");
      
      this.score = 100;
      this.audio = 'pickup2';
    },
 
});