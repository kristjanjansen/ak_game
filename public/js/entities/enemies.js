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



game.SpikesEntity = game.StaticEnemyEntity.extend({	
	
	init:function (x, y, settings) {

		this.parent(x, y , settings);
 
    this.hurt = 100;

	},

});



game.ThugEntity = game.WalkingEnemyEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'thug';
	  settings.spritewidth = 64;	
	  settings.spriteheight = 64;	
		this.parent(x, y , settings);
		
		this.hurt = 200;
    
    this.renderable.addAnimation("walk", [0,1,2]);
    this.renderable.setCurrentAnimation("walk");
	}
})