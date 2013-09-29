game.ScoreObject = me.HUD_Item.extend({
    init: function(x, y) {
        this.parent(x, y);
        this.font = new me.BitmapFont("font", {x: 16, y: 16});
        
    },
 
    draw: function(context, x, y) {
        this.font.draw(context, this.value, this.pos.x + x, this.pos.y + y);
    }
 
});

game.HealthObject = me.HUD_Item.extend({
    init: function(x, y) {
        this.parent(x, y);
        this.font = new me.BitmapFont("font", {x: 16, y: 16});
    },
 
    draw: function(context, x, y) {
        if (this.value > 0) {
          this.font.draw(context, this.value, this.pos.x + x, this.pos.y + y);
        } else {
  
            // me.audio.play('death');
          
            me.state.change(me.state.PLAY);      
        }
    }
 
});