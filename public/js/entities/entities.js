game.BodybuilderEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'bodybuilder';
	  settings.spritewidth = 32;	
		this.parent(x, y , settings);
		
		this.renderable.addAnimation("walk", [0,1]);
    this.renderable.setCurrentAnimation("walk");
		
	},

	update : function () {			
		this.parent();
		return true;
	}

});


game.DoggieEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'doggie';
	  settings.spritewidth = 32;	
		this.parent(x, y , settings);
		
		this.setVelocity(2, 0);
		
		this.startX = x;
    this.endX = x + settings.width - settings.spritewidth;    
    this.pos.x = this.endX;
    
    this.walkLeft = true;
    
    this.renderable.addAnimation("walk", [0,1,2]);
    this.renderable.setCurrentAnimation("walk");
		    
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


game.PlayerEntity = me.ObjectEntity.extend(
{	
  
	
	init:function (x, y, settings)
	{
		settings.image = 'emo';
	  settings.spritewidth = 32;	
	  settings.spriteheight = 32;	
		this.parent(x, y , settings);

		this.setVelocity(4, 16);
	 
//		this.updateColRect(8,48, -1,0);
		
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
		
		this.renderable.addAnimation("walk", [0,1]);
		this.renderable.addAnimation("duck", [8,9]);
    this.renderable.setCurrentAnimation("walk");
    
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
				me.audio.play("jump");        
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
