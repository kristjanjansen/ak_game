/**
 * Player Entity
 */
game.BodybuilderEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'bodybuilder';
	  settings.spritewidth = 32;	
		this.parent(x, y , settings);
	},

	update : function () {			
		this.parent();
		return true;
	}

});


game.DoggyEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'doggy';
	  settings.spritewidth = 32;	
		this.parent(x, y , settings);
	},

	update : function () {			
		this.parent();
		return true;
	}

});


/**
 * Player Entity
 */
game.PlayerEntity = me.ObjectEntity.extend(
{	
  
  /* -----

		constructor
		
	  ------			*/
	
	init:function (x, y, settings)
	{
		settings.image = 'emo';
	  settings.spritewidth = 32;	
		this.parent(x, y , settings);

		this.setVelocity(4, 16);
	 
//		this.updateColRect(8,48, -1,0);
		
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
		
	},

	update : function ()
	{
			
		if (me.input.isKeyPressed('left'))
		{
			this.flipX(true);
			this.vel.x -= this.accel.x * me.timer.tick;
		}
		else if (me.input.isKeyPressed('right'))
		{
			this.flipX(false);
			this.vel.x += this.accel.x * me.timer.tick;
		}
		else
		{
			this.vel.x = 0;
		}
		if (me.input.isKeyPressed('jump'))
		{	
			if (!this.jumping && !this.falling) 
			{
				this.vel.y = -this.maxVel.y * me.timer.tick;
				this.jumping = true;
			}
		}
		
		updated = this.updateMovement();
			 
		if (this.vel.x!=0 || this.vel.y!=0)
		{
			this.parent();
			return true;
		}
		
		return false;
	}

});
