// Base classes

game.StaticEnemyEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
		this.parent(x, y , settings);
		this.type = me.game.ENEMY_OBJECT;
	},

	update : function () {			
    return false;
	}

});


game.WalkingEnemyEntity = me.ObjectEntity.extend({	

  	init:function (x, y, settings) {

  		this.parent(x, y , settings);

  		this.type = me.game.ENEMY_OBJECT;

  		this.setVelocity(1, 0);

  		this.startX = x;
      this.endX = x + settings.width - settings.spritewidth;    
      this.pos.x = this.endX;

      this.walkLeft = true;

  	},

  	update : function () {			

      if (this.walkLeft && this.pos.x <= this.startX) {
          this.walkLeft = false;
      } else if (!this.walkLeft && this.pos.x >= this.endX) {
          this.walkLeft = true;
      }
      this.flipX(this.walkLeft);
      this.vel.x += (this.walkLeft) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;

      this.updateMovement();

      if (this.vel.x !=0 || this.vel.y !=0) {
          this.parent();
          return true;
      }
      return false;

  	}

});


// Enemy classes

game.LiquidEntity = game.WalkingEnemyEntity.extend({	
	
	init:function (x, y, settings) {

	  settings.image = 'liquid';
	  settings.spritewidth = 64;	
	  settings.spriteheight = 32;
		this.parent(x, y , settings);
  
    this.renderable.addAnimation("walk", [0,1,2,3]);
    this.renderable.setCurrentAnimation("walk");
    
    this.health = -50;
    
//  this.audio = 'hurt'

	},
	
	update : function () {			

    this.updateMovement();
    this.parent();
    return true;

	}
	

});


game.SpikesEntity = game.StaticEnemyEntity.extend({	
	
	init:function (x, y, settings) {

		this.parent(x, y , settings);
 
    this.health = -100;
//  this.audio = 'hurt'


	},

});



game.ThugEntity = game.WalkingEnemyEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'thug';
	  settings.spritewidth = 64;	
	  settings.spriteheight = 64;	
		this.parent(x, y , settings);
		
		this.health = -200;
//  this.audio = 'hurt'
    
    this.renderable.addAnimation("walk", [0,1,2]);
    this.renderable.setCurrentAnimation("walk");
	}
})


game.BibleEntity = game.WalkingEnemyEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'bible';
	  settings.spritewidth = 32;	
	  settings.spriteheight = 64;	
		this.parent(x, y , settings);
		
		this.health = -200;
//  this.audio = 'hurt'
    
    this.renderable.addAnimation("walk", [0,1]);
    this.renderable.setCurrentAnimation("walk");
	}
})


game.BossEntity = game.WalkingEnemyEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'boss';
	  settings.spritewidth = 128;	
	  settings.spriteheight = 128;	
		this.parent(x, y , settings);
		
		this.health = -400;
//  this.audio = 'hurt'
    
    this.renderable.addAnimation("walk", [0,1,2,3]);
    this.renderable.setCurrentAnimation("walk");
	}
	
})