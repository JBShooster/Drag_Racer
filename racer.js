window.addEventListener("load", function(){
(function() {

var start1 = document.querySelectorAll('.stage1');
var start2 = document.querySelectorAll('.stage2');
var start3 = document.querySelectorAll('.stage3');
var start4 = document.querySelectorAll('.stage4');
var start5 = document.querySelectorAll('.stage5');
var myLights = [start1, start2, start3, start4];


console.log(myLights);

var lightsOn = setInterval(function(){
  for(var i=0; i<myLights.length; i++){
    var lite = myLights[i];
    for(var j=0; j<lite.length; j++){
    myLights[i][j].style.backgroundColor = "red";
    }
  for(var k =0; k<start5.length; k++){
    start5[k].style.backgroundColor = "lime";
    }
  Opponent.status = "on";
  }
}, 1000);


	Dragster          = function() {
    // grab the car element
    this.$el = document.getElementById('dragster');
    // set the starting position of the dragster
    this.$el.style.left = "0px";
    this.$el.style.top = "10px";
  },

  Opponent = function(){
    this.$el = document.getElementById('opponent');
    this.status = "off";
    this.$el.style.top = "60px";
    this.$el.style.left = "70px";
    this.move();
  },

  Opponent.prototype.move = function(){
    var bad = this;
    if (this.status === "on"){
      setInterval(function(){
        bad.opponent.advance()}, 1000);
    }
  },

  Game              = function() {
    // this class manages game state
    // initialize the player dragster
    this.tree = document.getElementById('christmasTree');
    this.dragster = new Dragster();
    this.state = "off";
    this.opponent = new Opponent();
    this.attachListeners();
  	},

    Game.prototype.start = function(){
      this.state = "on";
    },
    

  Dragster.prototype.advanceLeft = function() {
    // this should move the car across the screen 1px at a time
    this.$el.style.left = parseInt(this.$el.style.left, 10) - 10 + "px";
  },
  Dragster.prototype.advanceRight = function() {
    // this should move the car across the screen 1px at a time
    this.$el.style.left = parseInt(this.$el.style.left, 10) + 10 + "px";
  },
    
  Game.prototype.attachListeners = function() {
    // listen for user to press keys
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 39) {
        // if the user presses the right arrow key
        // advance the dragster
        this.dragster.advanceRight();
      }
    }.bind(this));
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 37) {
        // if the user presses the right arrow key
        // advance the dragster
        this.dragster.advanceLeft();
      }  
    }.bind(this));
  }

  	var g = new Game();

})();
});	









