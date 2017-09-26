var demo = {}, luna;
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var speed = 4;
demo.state0 = function() {};
demo.state0.prototype = {
  preload: function(){
    game.load.image('luna',' ../public/assets/sprites/luna.png');
  },
  create: function(){
    game.stage.backgroundColor = '#444444';
      addChangeStateEventListeners();
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

      luna = game.add.sprite(centerX, centerY, 'luna');
      luna.anchor.setTo(0.5, 0.5);

  },
  update: function(){
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      luna.x += speed;
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      luna.x -= speed;
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
      luna.y += speed;
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      luna.y -= speed;
    }
  }
};

function changeState(i, stateNum) {
  game.state.start('state' + stateNum);
}

function addKeyCallBack(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
  addKeyCallBack(Phaser.Keyboard.ZERO, changeState, 0);
  addKeyCallBack(Phaser.Keyboard.ONE, changeState, 1);
  addKeyCallBack(Phaser.Keyboard.TWO, changeState, 2);
  addKeyCallBack(Phaser.Keyboard.THREE, changeState, 3);
  addKeyCallBack(Phaser.Keyboard.FOUR, changeState, 4);
  addKeyCallBack(Phaser.Keyboard.FIVE, changeState, 5);
  addKeyCallBack(Phaser.Keyboard.SIX, changeState, 6);
  addKeyCallBack(Phaser.Keyboard.SEVEN, changeState, 7);
  addKeyCallBack(Phaser.Keyboard.EIGHT, changeState, 8);
  addKeyCallBack(Phaser.Keyboard.NINE, changeState, 9);
}

demo.state1 = function() {};
demo.state1.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#54d05d';
      addChangeStateEventListeners();
  },
  update: function(){}
};

demo.state2 = function() {};
demo.state2.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#0a7ddb';
      addChangeStateEventListeners();
  },
  update: function(){}
};

demo.state3 = function() {};
demo.state3.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#9a2e72';
      addChangeStateEventListeners();
  },
  update: function(){}
};

demo.state4 = function() {};
demo.state4.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#39997c';
      addChangeStateEventListeners();
  },
  update: function(){}
};

demo.state5 = function() {};
demo.state5.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#a34218';
      addChangeStateEventListeners();
  },
  update: function(){}
};

demo.state6 = function() {};
demo.state6.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#57745a';
      addChangeStateEventListeners();
  },
  update: function(){}
};

demo.state7 = function() {};
demo.state7.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#6b1616';
      addChangeStateEventListeners();
  },
  update: function(){}
};

demo.state8 = function() {};
demo.state8.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#5c5b71';
      
      addChangeStateEventListeners();
  },
  update: function(){}
};

demo.state9 = function() {};
demo.state9.prototype = {
  preload: function(){},
  create: function(){
    game.stage.backgroundColor = '#123e0c';
      
      addChangeStateEventListeners();
  },
  update: function(){}
};

var game = new Phaser.Game(1500, 1000, Phaser.AUTO);
game.state.add('state0', demo.state0);
game.state.add('state1', demo.state1);
game.state.add('state2', demo.state2);
game.state.add('state3', demo.state3);
game.state.add('state4', demo.state4);
game.state.add('state5', demo.state5);
game.state.add('state6', demo.state6);
game.state.add('state7', demo.state7);
game.state.add('state8', demo.state8);
game.state.add('state9', demo.state9);
game.state.add('state10', demo.state10);


game.state.start('state0');
