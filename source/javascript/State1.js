demo.state1 = function() {};
demo.state1.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#54d05d';
      addChangeStateEventListeners();
  },
  update: function(){}
};
