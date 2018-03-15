var svg = document.getElementById("board");
var stop = document.getElementById("stop");
var gas = document.getElementById("gas");
var dvd = document.getElementById("dvd");
var h = svg.getAttribute("height");
var w = svg.getAttribute("width");

//rand color
var values = '0123456789ABCDEF';
var rand_color = function() {
    var color = '#';
    for (var x = 0; x < 6; x++) {
	color += values[Math.floor(Math.random() * 16)];
    }
    return color;
}
