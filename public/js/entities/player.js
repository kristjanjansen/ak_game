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

       if (res.obj.type == me.game.COLLECTABLE_OBJECT) {
            if (res.obj.score) { 
              me.game.HUD.updateItemValue('score', res.obj.score); 
            }  
            if (res.obj.health) { 
               me.game.HUD.updateItemValue('health', res.obj.health); 
            }
            if (res.obj.audio) { 
              me.audio.play(res.obj.audio);
            }     				
            res.obj.collidable = false;
            me.game.remove(res.obj);
        }
  
      if (res.obj.type == me.game.ENEMY_OBJECT) {
        if (!this.renderable.isFlickering()) {
          this.renderable.flicker(30);
          if (res.obj.health) { 
             me.game.HUD.updateItemValue('health', res.obj.health); 
          }
          if (res.obj.audio) { 
            me.audio.play(res.obj.audio);
          }
        }
      }
      
      if (res.obj.type == 'nextlevel') {
          me.levelDirector.nextLevel();
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
