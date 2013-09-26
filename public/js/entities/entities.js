game.BodybuilderEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'bodybuilder';
	  settings.spritewidth = 32;	
	  settings.spriteheight = 64;	
		this.parent(x, y , settings);
		
		this.setVelocity(1, 0);
		
		this.startX = x;
    this.endX = x + settings.width - settings.spritewidth;    
    this.pos.x = this.endX;
    
    this.walkLeft = true;
    
    this.renderable.addAnimation("walk", [0,1]);
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


game.DoggieEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'doggie';
	  settings.spritewidth = 64;	
	  settings.spriteheight = 64;	
		this.parent(x, y , settings);
		
		this.setVelocity(1, 0);
		
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


game.BossEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'boss';
	  settings.spritewidth = 128;	
	  settings.spriteheight = 128;	
		this.parent(x, y , settings);
		
		this.setVelocity(1, 0);
		
		this.startX = x;
    this.endX = x + settings.width - settings.spritewidth;    
    this.pos.x = this.endX;
    
    this.walkLeft = true;
    
    this.renderable.addAnimation("walk", [0,1]);
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

		this.setVelocity(5, 18);
	 
//		this.updateColRect(8,48, -1,0);
		
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
		
		this.renderable.addAnimation("walk", [0,1]);
		this.renderable.addAnimation("duck", [8,9]);
		this.renderable.addAnimation("jump", [16]);
		this.renderable.addAnimation("jumpstay", [16]);
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
  			this.renderable.setCurrentAnimation("jump", "walk");
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

game.ScoreObject = me.HUD_Item.extend({
    init: function(x, y) {
        this.parent(x, y);
        this.font = new me.BitmapFont("font", 32);
    },
 
    draw: function(context, x, y) {
        this.font.draw(context, this.value, this.pos.x + x, this.pos.y + y);
    }
 
});