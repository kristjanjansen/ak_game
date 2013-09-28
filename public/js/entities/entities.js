/*
game.SpikesEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
		this.parent(x, y , settings);
		this.type = me.game.ENEMY_OBJECT;
	},

	update : function () {			

    return false;

	}

});
*/


game.CardEntity = me.CollectableEntity.extend({
   
    init: function(x, y, settings) {
  	  settings.image = 'card';
  	  settings.spritewidth = 32;	
  	  settings.spriteheight = 64;
  	  
      this.parent(x, y, settings);
      this.renderable.addAnimation("walk", [0,1]);
      this.renderable.setCurrentAnimation("walk");
      
      this.bonus = 100;
    },
 
    onCollision: function() {
        me.audio.play("pickup2");        				
        this.collidable = false;
        me.game.remove(this);
      //  me.game.HUD.updateItemValue('score', 100);
        
    }
 
});

game.BibleEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'bible';
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
		this.type = me.game.ENEMY_OBJECT;
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

/*
game.ThugEntity = me.ObjectEntity.extend({	
	
	init:function (x, y, settings) {
	  settings.image = 'thug';
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
		this.type = me.game.ENEMY_OBJECT;
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
*/

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
    
    this.renderable.addAnimation("walk", [0,1,3,4]);
    this.renderable.setCurrentAnimation("walk");
		this.type = me.game.ENEMY_OBJECT;  
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
	  
	  settings.score = 0;
	  
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
		
		
		var res = me.game.collide(this);

     if (res) {
      
      if (res.obj.type == me.game.ENEMY_OBJECT) {
        //res.obj.renderable.flicker(45);
        this.renderable.flicker(30);
        console.log('hurt', res.obj.hurt)
      }
            
      if (res.obj.type == me.game.COLLECTABLE_OBJECT) {
         me.game.HUD.updateItemValue('score', res.obj.bonus);
      }
     
      
     
     }
     
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
        this.font = new me.BitmapFont("font", {x: 32, y: 32});
    },
 
    draw: function(context, x, y) {
        this.font.draw(context, this.value, this.pos.x + x, this.pos.y + y);
    }
 
});