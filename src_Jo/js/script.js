/*global THREE*/
let camera, FrontalCamera, TopCamera, LateralCamera;
let scene, renderer;
let clock = new THREE.Clock();
let mobile, branchOne, branchTwo, branchThree;
let wireThickness = .1;
let viewWidth = 75;
THREE.Object3D.DefaultUp.set(0, 0, 1);

let objMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000, wireframe: true});
let estMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00 ,wireframe: true});


function create_G3() {
	let comp1 = new Component();
	let comp2 = new Component();

	let hV3 = 2;
	let hEst17 = 4; 
	let bCil6 = 1, hCil6 = 1;
	let wCub4 = 1, hCub4 = 1, dCub4 = 1;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst17);
	comp1.addCylinderVertical(objMaterial, 0, - hEst17/2 - bCil6 / 2, 0, bCil6, hCil6);
	comp1.addCuboid(objMaterial, 0, hEst17/2 + wCub4 / 2, 0, wCub4, hCub4, dCub4);
	
	comp2.addCylinderVertical(estMaterial, 0, 0, hV3 / -2, wireThickness, hV3);
	comp2.addComponent(comp1, 0, 0, -hV3 - wireThickness / 2);

	mobile.setBranchThree(comp2);

	return mobile.branchThree();
}

function create_G2_2(){

	let comp1 = new Component();
	let comp2 = new Component();

	let group = create_G3();

	let hEst15 = 2;
	let hEst16 = 7;
	let bCil7 = 2, hCil7 = 3;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst16);
	comp1.addCylinderVertical(objMaterial, 0, hEst16/2 + bCil7 / 2, 0, bCil7, hCil7);
	comp1.addComponent(group, 0, -hEst16/2 - wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(estMaterial, 0, 0, hEst15 / -2, wireThickness, hEst15);
	comp2.addComponent(comp1, 0, (-3/14)*hEst16, -hEst15 - wireThickness / 2);

	return comp2;
}

function create_G2_1(){
	
	let comp1 = new Component();
	let comp2 = new Component();

	let group = create_G2_2(); 

	let bCil5 = 1, hCil5 = 1;
	let hEst14 = 9;
	let hEst13 = 2;


	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst14);
	comp1.addCylinderHorizontal(objMaterial, 0,- hEst14/2 - bCil5/ 2, 0, bCil5, hCil5);
	comp1.addComponent(group, 0, hEst14/2 + wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(estMaterial, 0, 0, hEst13 / -2, wireThickness, hEst13);
	comp2.addComponent(comp1, 0, (1/18)*hEst14, -hEst13 - wireThickness / 2);

	return comp2;
}

function create_G2() {
	let comp1 = new Component();
	let comp2 = new Component();

	let group = create_G2_1(); 

	let dCubo3 = 1, hCubo3= 1 , wCubo3=1;
	let hEst12=5;
	let hV2 = 2;


	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst12);
	comp1.addCuboid(objMaterial, 0,- hEst12/2 - dCubo3/ 2, 0, wCubo3, hCubo3,dCubo3);
	comp1.addComponent(group, 0, hEst12/2 + wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(estMaterial, 0, 0, hV2 / -2, wireThickness, hV2);
	comp2.addComponent(comp1, 0, (-1/10)*hEst12, -hV2 - wireThickness / 2);

	mobile.setBranchTwo(comp2);

	return mobile.branchTwo();
	
}

function create_G1_4(){
	
	let comp1 = new Component();
	let comp2 = new Component();

	let group = create_G2(); 

	let hCil4 = 1 , bCil4= 1;
	let hEst11=4;
	let hEst10 = 1;


	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst11);
	comp1.addCylinderHorizontal(objMaterial, 0,- hEst11/2 - bCil4/ 2, 0, bCil4, hCil4);
	comp1.addComponent(group, 0, hEst11/2 + wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(estMaterial, 0, 0, hEst10 / -2, wireThickness, hEst10);
	comp2.addComponent(comp1, 0, (1/4)*hEst11, -hEst10 - wireThickness / 2);

	return comp2;	
}

function create_G1_3(){
	
	let comp1 = new Component();
	let comp2 = new Component();

	let group = create_G1_4(); 

	let hCil3 = 1 , bCil3=1;
	let hEst8 = 6;
	let hEst7 = 2;
	let hEst9 = 1;


	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst8);
	comp1.addCylinderVertical(estMaterial,0,hEst8/-2 - wireThickness/2, -hEst9 / 2, wireThickness, hEst9);
	comp1.addCylinderVertical(objMaterial, 0, -hEst8/2 - wireThickness / 2, -hEst9 - hCil3/2,bCil3,hCil3);
	comp1.addComponent(group, 0, hEst8/2 + wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(estMaterial, 0, 0, hEst7 / -2, wireThickness, hEst7);
	comp2.addComponent(comp1, 0, (1/6)*hEst8, -hEst7 - wireThickness / 2);

	return comp2;
}

function create_G1_2(){
	
	let comp1 = new Component();
	let comp2 = new Component();

	let group = create_G1_3(); 

	let hEst5 = 6;
	let hEst6 = 1;
	let hEst4 = 2;
	let hcil2 = 2, bcil2 = 1;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst5);

	comp1.addCylinderVertical(objMaterial, 0, -hEst5 / 2 - wireThickness / 2, -hcil2 / 2 - hEst6, bcil2, hcil2); 
	comp1.addCylinderVertical(estMaterial, 0, -hEst5 / 2 - wireThickness / 2, -hEst6 / 2, wireThickness , hEst6); 
	comp1.addComponent(group, 0, hEst5 / 2 + wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(estMaterial, 0, 0, -hEst4/2, wireThickness, hEst4); 
	comp2.addComponent(comp1, 0, (-2/6)*hEst5, -hEst4 - wireThickness /2);

	return comp2;	
}

function create_G1_1()
{
	let comp1 = new Component();
	let comp2 = new Component();

	let group = create_G1_2(); 

	let wCub2 = 1, hCub2 = 1, dCub2 = 1;
	let hEst3 = 8;
	let hEst2 = 2.5;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst3);
	comp1.addCuboid(objMaterial, 0, hEst3 / 2 + wCub2 / 2,  0, wCub2, hCub2, dCub2); 
	comp1.addComponent(group, 0, -hEst3 / 2 - wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(estMaterial, 0, 0, hEst2 / -2, wireThickness, hEst2);
	comp2.addComponent(comp1, 0, 0, -hEst2 - wireThickness / 2); 

	return comp2;
}

function create_G1()
{
	let comp1 = new Component();
	let comp2 = new Component();

	let group = create_G1_1(); 
	
	

	let hCil1 = 2, bCil1 = 1;
	let hEst1 = 6;
	let hV1 = 5;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst1);
	comp1.addCylinderVertical(objMaterial, 0, -hEst1 / 2  - bCil1 / 2, 0, bCil1, hCil1);
	comp1.addComponent(group, 0, hEst1 / 2 + wireThickness / 2 , 0); 
	
	comp2.addCylinderVertical(estMaterial, 0, 0, hV1 / -2, wireThickness, hV1); 
	comp2.addComponent(comp1, 0, 0, -hV1 - wireThickness / 2);
	mobile.setBranchOne(comp2);

	return mobile.branchOne();
}

function createMobile() {
	create_G1();
}

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
/* 	so para clarificar :
	eixo cor vermelha = eixo dos xx
	eixo cor azul = eixo dos zz
	eixo cor verde = eixo dos yy
 */	mobile = new Mobile(0, 0, 10);
	createMobile();
	scene.add(mobile);	
}

function animate() {
	'use strict';

	// Mobile animation functions
	let speed = 5;
	let time = clock.getDelta();
	let angSpeed = 1;

	
	//rotate B1
	if (mobile.getRotationOne() === "rotateB1P") {
		mobile.rotateBranchOneZ(angSpeed*time);
	}

	if (mobile.getRotationOne() === "rotateB1N") {
		mobile.rotateBranchOneZ(-angSpeed*time);
	}

	//rotate B2
	if (mobile.getRotationTwo() === "rotateB2P") {
		mobile.rotateBranchTwoZ(angSpeed*time);
	}

	if (mobile.getRotationTwo() === "rotateB2N") {
		mobile.rotateBranchTwoZ(-angSpeed*time);
	}

	//rotate B3
	if (mobile.getRotationThree() === "rotateB3P") {
		mobile.rotateBranchThreeZ(angSpeed*time);
	}

	if (mobile.getRotationThree() === "rotateB3N") {
		mobile.rotateBranchThreeZ(-angSpeed*time);
	}
 
	//mover o mobile
		if (mobile.getMotionX() === "forward") {
			mobile.moveForward(time * speed);
		}
		if (mobile.getMotionX() === "backward") {
			mobile.moveBackward(time * speed);
		}
		if (mobile.getMotionY() === "right") {
			mobile.moveRight(time * speed);
		}
		if (mobile.getMotionY() === "left") {
			mobile.moveLeft(time * speed);
		}


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
			// mobile.toggleWireframe(); TODO: Use function?
			objMaterial.wireframe = !objMaterial.wireframe;
			estMaterial.wireframe = !objMaterial.wireframe;
			break;

		case "W":
		case "w":
			mobile.setRotation("rotateB1P");
			break;

		case "Q": 
		case "q":
			mobile.setRotation("rotateB1N");
			break;

		case "A":
		case "a":
			mobile.setRotation("rotateB2P");
			break;

		case "D":
		case "d":
			mobile.setRotation("rotateB2N");
			break;
		case "Z":
		case "z":
			mobile.setRotation("rotateB3P");
			break;

		case "C":
		case "c":
			mobile.setRotation("rotateB3N");
			break;

		case "ArrowUp":
			mobile.setMotionX("forward");
			break;

		case "ArrowDown":
			mobile.setMotionX("backward");
			break;

		case "ArrowRight":
			mobile.setMotionY("right");
			break;

		case "ArrowLeft":
			mobile.setMotionY("left");
			break;
	}
}
function onKeyUp(e) {
	switch (e.key) {
		case "ArrowUp":
		case "ArrowDown":
			mobile.setMotionX("stop");
			break;
		case "ArrowRight":
		case "ArrowLeft":
			mobile.setMotionY("stop");
			break;
		case "Q":
		case "q":
		case "W":
		case "w":
			mobile.setRotation("stopB1");
			break;
		case "A":
		case "a":
		case "D":
		case "d":
			mobile.setRotation("stopB2");
			break;
		case "Z":
		case "z":
		case "C":
		case "c":
			mobile.setRotation("stopB3");
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

	window.addEventListener("resize", onResize)
	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);
}