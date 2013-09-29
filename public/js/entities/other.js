game.NextlevelEntity = me.ObjectEntity.extend(
{	
  
	
	init:function (x, y, settings)
	{
	  settings.spritewidth = 32;	
	  settings.spriteheight = 32;
	  
		this.parent(x, y , settings);
    this.type = 'nextlevel'
	},

	update : function ()
	{
		return false;
	}

});
