function volume_sphere() {
    // Retrieve the radius value entered by the user
    var radius = document.getElementById('radius').value;
	radius = parseFloat(radius);
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
	}
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume.toFixed(4);
}

