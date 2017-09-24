var demo = {};
demo.state1 = function() {};
demo.state1.prototype = {
  preload: function(){},
  create: function(){},
  update: function(){}
};

var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.state.add('state1', demo.state1);
game.state.start('state1');
