var universe = document.getElementById('universe');
var ether = universe.getContext('2d');

var myGradient = ether.createLinearGradient(0,0,0,170);
myGradient.addColorStop(0,'black');
myGradient.addColorStop(0.5,'red');
myGradient.addColorStop(1,'white');

ether.fillRect(50, 50, 50, 50);

ether.beginPath();
ether.fillStyle = myGradient;
ether.fillRect(100, 100, 50, 50);

ether.beginPath();
ether.fillStyle = '#00ffff';
ether.arc(20,20,20,0, Math.PI*2);
ether.fill();

console.log(ether);