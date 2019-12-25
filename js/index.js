var lbtn = document.querySelector('.lbtn');
var rbtn = document.querySelector('.rbtn');
var big = document.querySelector('.big');
var bigwidth = big.offsetWidth;
big.addEventListener('mouseenter', function() {
	lbtn.style.display = 'block';
	rbtn.style.display = 'block';
})
big.addEventListener('mouseleave', function() {
	lbtn.style.display = 'none';
	rbtn.style.display = 'none';
})
var ul = big.querySelector('ul');
var ol = big.querySelector('.yuan');

for (let i = 0; i < ul.children.length; i++) {
	var li = document.createElement('li');
	ol.appendChild(li);
	li.setAttribute('index', i);
	li.addEventListener('click', function() {
		for (var i = 0; i < ol.children.length; i++) {
			ol.children[i].className = '';
		}
                   
		this.className = 'duxiu';
		var index = this.getAttribute('index');
		num = circle = index;
		console.log(bigwidth);
		animeate(ul, -index * bigwidth);
	})
}
ol.children[0].className = 'duxiu';
var first = ul.children[0].cloneNode(true);
ul.appendChild(first);

var num = 0;

var circle = 0;

rbtn.addEventListener('click', function() {
	auto();
})

lbtn.addEventListener('click', function() {
	for (var i = 0; i < ol.children.length; i++) {
		ol.children[i].className = '';
	}
	circle--;

	if (circle < 0) {
		circle = ol.children.length-1;
	}
console.log(num)
	if (num == 0) {
		num = ul.children.length -1;
		ul.style.left = -num *bigwidth + 'px';
	}
	num--;
	animeate(ul, -num * bigwidth);
	ol.children[circle].className = 'duxiu';
})
function auto(){
	for (var i = 0; i < ol.children.length; i++) {
		ol.children[i].className = '';
	}
	circle++;
	if (circle == ol.children.length) {
		circle = 0;
	}
	if (num == ul.children.length - 1) {
		ul.style.left = 0;
		num = 0;
	}
	num++;
	animeate(ul, -num * bigwidth);
	ol.children[circle].className = 'duxiu';
}
let tim = setInterval(auto,3000);
big.onmouseleave = function(){
	tim = setInterval(auto,3000);
}
big.onmouseenter = function(){
	clearInterval(tim); 
}