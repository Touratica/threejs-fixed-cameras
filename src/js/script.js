/*global THREE*/

let renderer, scene, camera;

let distance = 10;

function addRod(obj, x, y, z, h, a) {
	'use strict';

	let geometry = new THREE.CylinderGeometry(1, 1, h);
	geometry.rotateZ(a * Math.PI / 180);
	let material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
	let mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	obj.add(mesh);

}

function createMobile(x, y, z) {
	'use strict';
	let mobile = new THREE.Object3D();

	addRod(mobile, x, y, z, 5, 0);
	addRod(mobile, x, y - 3.5, 0, 6, 90);

	scene.add(mobile);

}

function createCamera() {
	'use strict';
	camera = new THREE.OrthographicCamera(-8 * distance, 8 * distance,
		4.5 * distance,-4.5 * distance);
	scene.add(camera);
}

function createScene() {
	'use strict';
	scene = new THREE.Scene();

	scene.add(new THREE.AxesHelper(10));

	createMobile(0,0,0);
}

function animate() {
	'use strict';

	render();

	requestAnimationFrame(animate);
}

function render() {
	'use strict';
	renderer.render(scene, camera);
}

function __init__() {
	'use strict';

	renderer = new THREE.WebGLRenderer({antialias: true});

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	createScene();
	createCamera();
}