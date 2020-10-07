/*global THREE*/
var camera, FrontalCamera, TopCamera, LateralCamera;
var scene, renderer;
var mobile, branchOne, branchTwo, branchThree;
var wireThickness = 0.1;
let viewWidth = 75;

function createCamera(x, y, z) {
	'use strict';
	let viewHeight = viewWidth * innerHeight / innerWidth;

	camera = new THREE.OrthographicCamera(viewWidth / -2, viewWidth / 2,
		viewHeight / 2, viewHeight / -2, 0, 1000);
	camera.position.x = x;
	camera.position.y = y;
	camera.position.z = z;
	camera.lookAt(scene.position);
	onResize();
	return camera;
}

function createScene() {
	'use strict';
	scene = new THREE.Scene();

	scene.add(new THREE.AxesHelper(20));
	/* so para clarificar :
	eixo cor vermelha = eixo dos xx
	eixo cor azul = eixo dos yy
	eixo cor verde = eixo dos zz */
	mobile = new Mobile(10,10,10);
	createMobile();
	scene.add(mobile);
}

function animate() {
	'use strict';

	// Mobile animation functions
	var speed = 2;
	// rotates whole mobile
/*	if (mobile.getBranchOneRotation() != 0) {
		if (mobile.branchOneRotation == 1)  //1 -> girar para um lado e 2-> girar para outro
			mobile.rotateBranch1z(0);
		else if (mobile.branchOneRotation == 2)
			mobile.rotateBranch1z(-0);
	}

	//girar branch2
	if (mobile.getBranchTwoRotation() != 0) {
		if (mobile.branchTwoRotation == 1)  //1 -> girar para um lado e 2-> girar para outro
			mobile.rotateBranchTwo(0);
		else if (mobile.branchTwoRotation == 2)
			mobile.rotateBranchTwo(-0);
	}

	//girar branch3
	if (mobile.getBranchThreeRotation() != 0) {
		if (mobile.branchThreeRotation == 1)  //1 -> girar para um lado e 2-> girar para outro
			mobile.rotateBranchThree(0);
		else if (mobile.branchThreeRotation == 2)
			mobile.rotateBranchThree(-0);

	}*/

	//mover o mobile
	
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

function onResize() {
	'use strict';

	renderer.setSize(window.innerWidth, window.innerHeight);
	if (window.innerHeight > 0 && window.innerWidth > 0) {
		let viewHeight = viewWidth * innerHeight / innerWidth;
		camera.top = viewHeight / 2;
		camera.bottom = viewHeight / -2;
		
/* 		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
 */	}
}

function onKeyDown(e) {
	switch (e.key) {
		case "1":
			camera = FrontalCamera;
			break;

		case "2":
			camera = TopCamera;
			break;

		case "3":
			camera = LateralCamera;
			break;

		case "4":
			mobile.toggleWireframe();
			break;

		case "W":
		case "w":   /*Rodar v1 num sentido*/
			//mobile.rotateBranchOne(0);
			break;

		case "Q":   /*rodar v1 noutro sentido*/
		case "q":
			mobile.rotateBranch1Z(-0);
			break;

		case "A":
		case "a":
			mobile.rotateBranch2Z(0);
			break;

		case "D":
		case "d":
			mobile.rotateBranch2Z(-0);

		case "Z":
		case "z":
			mobile.rotateBranch3Z(0);
			break;

		case "S":
		case "s":
			mobile.rotateBranch3Z(-0);
			break;

		case "ArrowUp":
			mobile.setMobileMoving(1);
			break;

		case "ArrowDown":
			mobile.setMobileMoving(2);
			break;

		case "ArrowRight":
			mobile.setBaseMovement(1);
			break;

		case "ArrowLeft":
			mobile.setBaseMovement(1);
			break;
	}
}

function __init__() {
	'use strict';

	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setClearColor("#FFFFFF");
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	createScene();
	TopCamera = createCamera(0, 0, 100);        //view from z
	LateralCamera = createCamera(0, 100, 0);    //view from y
	FrontalCamera = createCamera(100, 0, 0);    //view from x

	let comp1 = new Component();

	material = new THREE.MeshBasicMaterial({color: 0xFF0000});

	comp1.addCuboid(material)

	window.addEventListener("resize", onResize)
	window.addEventListener("keydown", onKeyDown);
}