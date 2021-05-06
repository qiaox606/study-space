function StickyNote(z, posTop, posLeft){
	
	this.zIndexCount = z + "px";
	this.posLeft = posLeft  + "px";
	this.posTop = posTop + "px";
	this.marginLeft = "0px";
	this.currentRotation = 0;

	this.state = false;

	this.div = document.createElement('div');

	this.addText("add anything you want!");

	this.draggable();

	this.div.className = "sticky_note";
	
	this.div.style.zIndex = this.zIndexCount;
	this.div.style.top = this.posTop;
	this.div.style.left = this.posLeft;
	this.div.style.marginLeft = this.marginLeft;
	
	var div = this.div;

	function init(){
		document.getElementById('app').appendChild(div);
	}

	init();
}

StickyNote.prototype.addText = function(text){
	if(!text) text = "";

	var message = document.createElement('div');
	message.innerText = text;
	message.contentEditable = true;
	this.div.appendChild(message)

}


StickyNote.prototype.draggable = function(){
	var selected = null, 
    x_pos = 0, y_pos = 0, 
    top = 0, left = 0; 

    var self = this;


	function _drag_init(elem) {
	    selected = elem; 
	    top = x_pos - selected.offsetLeft;
	    left = y_pos - selected.offsetTop;
	}

	function _move_elem(e) {
	    x_pos = document.all ? window.event.clientX : e.pageX;
	    y_pos = document.all ? window.event.clientY : e.pageY;

	    if (selected !== null) {
	        selected.style.left = (x_pos - top) + 'px';
	        selected.style.top = (y_pos - left) + 'px';

	        self.posTop = selected.style.top;
	        self.posLeft = selected.style.left;
	    }
	}

	function _destroy() {
	    selected = null;
	}

	this.div.addEventListener('mousedown', function(){
		_drag_init(this.div);
		return false;
	}.bind(this));

	document.onmousemove = _move_elem;
	document.onmouseup = _destroy;
}

StickyNote.prototype.animate = function(toggle){
	var rotate = this.currentRotation;
	var speed = 10;
	var howMuch = "";

	var positionTopStart = this.posTop;
	var positionLeftStart = this.posLeft;
	var marginLeftStart = "0px";

	var positionTopFinal = "80px";
	var positionLeftFinal = "50%";
	var marginLeftFinal = "-75px";


	
	

				

	}


	



var z = 1;
var tp = 10;
var left = 10;

var sticky = new StickyNote(z, tp, left);

document.getElementById('add').addEventListener('click', function(e){
	e.preventDefault();
	z++;
	tp+=10;
	left+=10;
	new StickyNote(z, tp, left);
})

const addBtn = document.querySelector("#addBtn");


    