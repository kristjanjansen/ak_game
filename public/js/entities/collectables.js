game.ScoreCardEntity = me.CollectableEntity.extend({
   
    init: function(x, y, settings) {
  	  settings.image = 'card';
  	  settings.spritewidth = 32;	
  	  settings.spriteheight = 64;
  	  
      this.parent(x, y, settings);
      this.renderable.addAnimation("idle", [0,1]);
      this.renderable.setCurrentAnimation("idle");
      
      this.score = 100;
      this.audio = 'pickup1';
    },
 
});


game.Score2CardEntity = me.CollectableEntity.extend({
   
    init: function(x, y, settings) {
  	  settings.image = 'card';
  	  settings.spritewidth = 32;	
  	  settings.spriteheight = 64;
  	  
      this.parent(x, y, settings);
      this.renderable.addAnimation("idle", [16,17]);
      this.renderable.setCurrentAnimation("idle");
      
      this.score = 150;
      this.audio = 'pickup2';
    },
 
});

game.Score3CardEntity = me.CollectableEntity.extend({
   
    init: function(x, y, settings) {
  	  settings.image = 'card';
  	  settings.spritewidth = 32;	
  	  settings.spriteheight = 64;
  	  
      this.parent(x, y, settings);
      this.renderable.addAnimation("idle", [32,33]);
      this.renderable.setCurrentAnimation("idle");
      
      this.score = 200;
      this.audio = 'pickup3';
    },
 
});

game.HealthCardEntity = me.CollectableEntity.extend({
   
    init: function(x, y, settings) {
  	  settings.image = 'healthpack';
  	  settings.spritewidth = 32;	
  	  settings.spriteheight = 32;
  	  
      this.parent(x, y, settings);
      this.renderable.addAnimation("idle", [0,1]);
      this.renderable.setCurrentAnimation("idle");
      
      this.score = 50;
      this.health = 200;
      this.audio = 'pickup2';
    },
 
});

game.MegapackEntity = me.CollectableEntity.extend({
   
    init: function(x, y, settings) {
  	  settings.image = 'megapack';
  	  settings.spritewidth = 64;	
  	  settings.spriteheight = 64;
  	  
      this.parent(x, y, settings);
      this.renderable.addAnimation("idle", [0,1]);
      this.renderable.setCurrentAnimation("idle");
      
      this.score = 200;
      this.health = 500;
      this.audio = 'pickup3';
    },
 
});