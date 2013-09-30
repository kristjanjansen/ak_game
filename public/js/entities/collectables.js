game.ScoreCardEntity = me.CollectableEntity.extend({
   
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

game.HealthCardEntity = me.CollectableEntity.extend({
   
    init: function(x, y, settings) {
  	  settings.image = 'card';
  	  settings.spritewidth = 32;	
  	  settings.spriteheight = 64;
  	  
      this.parent(x, y, settings);
      this.renderable.addAnimation("idle", [16,17]);
      this.renderable.setCurrentAnimation("idle");
      
      this.score = 100;
      this.health = 100;
      this.audio = 'pickup2';
    },
 
});