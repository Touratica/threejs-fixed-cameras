/*global THREE*/

var camera, FrontalCamera, TopCamera, LateralCamera;
var scene, renderer;
var mobile, branchOne, branchTwo, branchThree;
var wireThickness = 0.5;


function create_G3() {
	let comp1 = new Component();
	let comp2 = new Component();
	
	let objMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
	let estMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});

	let hV3 = 2;
	let hEst17 = 4; 
	let bCil6 = 1, hCil6 = 1
	let wCub4 = 1, hCub4 = 1, dCub4 = 1;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst17);
	comp1.addCylinderVertical(objMaterial, 0, -2 - bCil6 / 2, 0, bCil6, hCil6);
	comp1.addCuboid(objMaterial, 0, 2 + wCub4 / 2, 0, wCub4, hCub4, dCub4);
	
	comp2.addCylinderVertical(objMaterial, 0, 0, hV3 / -2, wireThickness, hV3);
	comp2.addComponent(comp1, 0, 0, -hV3 - wireThickness / 2);

	return comp2;
}

/* function create_G3() {
	var g1 = new Component();
	var g2 = new Component();
	var bcil6 = 1, hcil6 = 1;
	var bcub4 = 1, hcub4 = 1;
	var hest17 = 4;
	// var hest16 = 7; // TODO: Remove?
	var hv3 = 2;
	var material = new THREE.MeshBasicMaterial({color: 0xFF0000});

	g1.addCylinderHorizontal(material, 0, -(hest17 / 2) - bcil6 / 2, 0, bcil6, hcil6);
	g1.addCuboidVertical(material, 0, (hest17 / 2) + bcub4 / 2, 0, bcub4, hcub4);
	g1.addCylinderHorizontal(material, 0, 0, 0, wireThickness, hest17);

	g2.addCylinderVertical(material, 0, 0, -hv3 / 2, wireThickness, hv3);
	g2.addComponent(g1, 0, 0, -hv3);

	mobile.addComponentBranch3(g2, 0, 0, 0);

	return mobile.branchThree();
}
 */
function create_G2_2(){
	var g1 = new Component();
	var g2 = new Component();
	var group = create_G3();
	var bcil7 = 2, hcil7 = 3;
	// var hest14 = 9; // TODO: Remove?
	var hest15 = 2;
	var hest16 = 7;
	var material = new THREE.MeshBasicMaterial({color: 0xFF0000});

	g1.addCylinderHorizontal(material, 0, (hest16 / 2) + bcil7 / 2, 0, bcil7, hcil7);
	g1.addComponent(group, 0, -(hest16 / 2), 0);
	g1.addCylinderHorizontal(material, 0, 0, 0, wireThickness, hest16);
	g2.addCylinderVertical(material, 0, 0, -hest15 / 2, wireThickness, hest15);
	g2.addComponent(g1, 0, 0, -hest15);
}

function create_G2_1(){
	var g1 = new Component();
	var g2 = new Component();
	var group = create_G3();
	var bcil7 = 2, hcil7 = 3;
	var hest14 = 9;
	var hest15 = 2;
	var hest16 = 7;
	var material = new THREE.MeshBasicMaterial({color: 0xFF0000});
	


}


function create_G2() {
	var bcubo3 = 1, hcubo3= 1;
	var hest12=5;
	var hv2 = 2;
	var material = new THREE.MeshBasicMaterial({color: 0xFF0000});

}

function create_G1_4(){
	var hest10= 4;
	var hcil4= 2, bcil4 = 1 ;
	var material = new THREE.MeshBasicMaterial({color: 0xFF0000});

	
}

function create_G1_3(){
	var hest7 = 2 ;
	var hest
}

function create_G1_2();

function create_G1_1();

function create_G1();

function createMobile() {
	create_G1();
}

function createCamera(x, y, z) {
	'use strict';
	let viewWidth = 35;
	let viewHeight = 44;

	camera = new THREE.OrthographicCamera(viewWidth / -2, viewWidth / 2,
		viewHeight / 2, viewHeight / -2, 1, 1000);
	camera.position.x = x;
	camera.position.y = y;
	camera.position.z = z;
	camera.lookAt(scene.position);
	return camera;
}

function createScene() {
	'use strict';
	scene = new THREE.Scene();

	scene.add(new THREE.AxesHelper(20));
	/* so para clarificar :
	eixo cor vermelha = eixo dos xx
	eixo cor azul = eixo dos yy
	eixo cor verde = eixo dos zz

	Nota: vi em outros projetos, quando
	a camera está em (0,100,0) isto dá uma vista de cima em vez de lado como se fosse dos yy...
	 por tanto maybe depois alterar os nomes
	das variaveis porque o Topcamera nao dá supostamente a vista de cima, mas sim o 3 é que da*/

	//createMobile(0,0,0); /*Acho melhor criar uma classe chamada Mobile, dps faz-se new Mobile*/
	mobile = new Mobile();
	createMobile();
	scene.add(mobile);
}

function animate() {
	'use strict';

	// Mobile animation functions
	var speed = 2;
	// rotates whole mobile
	if (mobile.getBranchOneRotation() != 0) {
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

	}

	//mover o mobile
	if (robot.getMove() != 0) {
		if (robot.move == 1)
			robot.moveRobot(speed);
		else if (robot.move == 2)
			robot.moveRobot(-speed);
	}

	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

function onResize() {
	'use strict';

	renderer.setSize(window.innerWidth, window.innerHeight);
	if (window.innerHeight > 0 && window.innerWidth > 0) {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
	}
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
			mobile.rotateBranchOne(0);
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
	FrontalCamera = createCamera(100, 0, 0);    //view from x
	TopCamera = createCamera(0, 0, 100);        //view from z
	LateralCamera = createCamera(0, 100, 0);    //view from y

	window.addEventListener("resize", onResize)
	window.addEventListener("keydown", onKeyDown);
}