function volume_sphere(event) {
    //Write your code here
  event.preventDefault();
	const radiusInput = document.getElementById('radius').value;
	const radius = parseFloat(radiusInput);
	if (isNaN(radius) || radius < 0){
		document.getElementById('volume').value = 'Nan';
	}
	const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	const roundedvolume = volume.toFixed(4);
	document.getElementById('value') = roundedvolume;
} 
window.onload = function()
	{
		document.getElementById('MyForm').onsubmit = volume_sphere;
	}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
