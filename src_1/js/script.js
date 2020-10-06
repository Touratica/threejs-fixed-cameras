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
	let bCil6 = 1, hCil6 = 1;
	let wCub4 = 1, hCub4 = 1, dCub4 = 1;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst17);
	comp1.addCylinderVertical(objMaterial, 0, - hEst17/2 - bCil6 / 2, 0, bCil6, hCil6);
	comp1.addCuboid(objMaterial, 0, hEst17/2 + wCub4 / 2, 0, wCub4, hCub4, dCub4);
	
	comp2.addCylinderVertical(objMaterial, 0, 0, hV3 / -2, wireThickness, hV3);
	comp2.addComponent(comp1, 0, 0, -hV3 - wireThickness / 2);

	mobile.setBranchThree(comp2);

	return mobile.branchThree();
}

function create_G2_2(){

	let comp1 = new Component();
	let comp2 = new Component();

	var group = create_G3();
	
	let objMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
	let estMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});

	var hest15 = 2;
	var hEst16 = 7;
	var bCil7 = 2, hCil7 = 3;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst16);
	comp1.addCylinderVertical(objMaterial, 0, hEst16/2 + bCil7 / 2, 0, bCil7, hCil7);
	comp1.addComponent(group, 0, -hEst16/2 - wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(objMaterial, 0, 0, hest15 / -2, wireThickness, hest15);
	comp2.addComponent(comp1, 0, (-3/14)*hEst16, -hest15 - wireThickness / 2);

	return comp2;
}






function create_G2_1(){
	
	let comp1 = new Component();
	let comp2 = new Component();

	var group = create_G2_2(); 
	
	let objMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
	let estMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});

	var bCil5 = 1, hCil5 = 1;
	var hEst14 = 9;
	var hEst13 = 2;



	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst14);
	comp1.addCylinderHorizontal(objMaterial, 0,- hEst14/2 - bCil5/ 2, 0, bCil5, hCil5);
	comp1.addComponent(group, 0, hEst14/2 + wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(objMaterial, 0, 0, hEst13 / -2, wireThickness, hEst13);
	comp2.addComponent(comp1, 0, (1/18)*hEst14, -hEst13 - wireThickness / 2);

	return comp2;
	


}


function create_G2() {

	
	let comp1 = new Component();
	let comp2 = new Component();

	var group = create_G2_1(); 
	
	let objMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
	let estMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});

	var dCubo3 = 1, hCubo3= 1 , wCubo3=1;
	var hEst12=5;
	var hV2 = 2;


	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst12);
	comp1.addCuboid(objMaterial, 0,- hEst12/2 - dCubo3/ 2, 0, wCubo3, hCubo3,dCubo3);
	comp1.addComponent(group, 0, hEst12/2 + wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(objMaterial, 0, 0, hV2 / -2, wireThickness, hV2);
	comp2.addComponent(comp1, 0, (-1/10)*hEst12, -hV2 - wireThickness / 2);

	mobile.setBranchTwo(comp2);

	return mobile.branchTwo();
	
}

function create_G1_4(){
	
	let comp1 = new Component();
	let comp2 = new Component();

	var group = create_G2(); 
	
	let objMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
	let estMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});

	var hCil4 = 1 , bCil4= 1;
	var hEst11=4;
	var hEst10 = 1;


	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst11);
	comp1.addCylinderHorizontal(objMaterial, 0,- hEst11/2 - bCil4/ 2, 0, bCil4, hCil4);
	comp1.addComponent(group, 0, hEst11/2 + wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(objMaterial, 0, 0, hEst10 / -2, wireThickness, hEst10);
	comp2.addComponent(comp1, 0, (1/4)*hEst11, -hEst10 - wireThickness / 2);

	return comp2;	
}

function create_G1_3(){
	
	let comp1 = new Component();
	let comp2 = new Component();

	var group = create_G1_4(); 
	
	let objMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
	let estMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});

	var hCil3= 1 , bCil3=1;
	var hEst8=6;
	var hEst7 = 2;
	var hest9= 1;


	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst8);
	comp1.addCylinderVertical(estMaterial,0,hest8/-2 - wireThickness/2,-hest9/2,wireThickness,hest9);
	comp1.addCylinderVertical(objMaterial, 0,- hEst18/2 - b3/ 2, -hest9,bCil3,hCil3);
	comp1.addComponent(group, 0, hEst8/2 + wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(objMaterial, 0, 0, hEst7 / -2, wireThickness, hEst7);
	comp2.addComponent(comp1, 0, -hest8/2 + (1/6)*hEst8, -hEst7 - wireThickness / 2);

	return comp2;
}

function create_G1_2(){
	
	let comp1 = new Component();
	let comp2 = new Component();

	var group = create_G1_3(); 
	
	let objMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
	let estMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});

	var hEst5 = 6;
	var hEst6 = 1;
	var hEst7 = 2;
	var hEst4 = 2;
	var hcil2= 2 , bcil2= 1;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst5);
	comp1.addCylinderVertical(objMaterial, 0, - hEst5/2 - bCil2 / 2, - hEst6 -hcil2/2, bCil2, hCil2);
	comp1.addCylinderVertical(objMaterial, 0, -hEst5/2 - wireThickness / 2, 0, wireThickness , hEst6);
	comp1.addCylinderVertical(objMaterial, 0, hEst5/2 + wireThickness / 2, 0, wireThickness , hEst6);
	comp1.addComponent(group, 0, hEst5/2 + wireThickness / 2 , - hEst7 - wireThickness/2);
	
	comp2.addCylinderVertical(objMaterial, 0, 0, hEst4 / -2, wireThickness, hEst4);
	comp2.addComponent(comp1, 0, (-2/6)*hEst5, -hEst4 - wireThickness / 2);

	return comp2;	
}

function create_G1_1()
{
	let comp1 = new Component();
	let comp2 = new Component();

	var group = create_G1_4(); 
	
	let objMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
	let estMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});

	let wCub2 = 1, hCub2 = 1, dCub2 = 1;
	let hEst3= 8;
	let hEst2= 2;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst3);
	comp1.addCuboid(objMaterial, 0, hEst3/2 + wCub2 / 2, 0, wCub2, hCub2, dCub2);
	comp1.addComponent(group, 0, - hEst3/2 - wireThickness / 2 , 0);
	
	comp2.addCylinderVertical(objMaterial, 0, 0, hEst2 / -2, wireThickness, hEst2);
	comp2.addComponent(comp1, 0, 0, -hEst2 - wireThickness / 2);

	return comp2;
}

function create_G1()
{
	let comp1 = new Component();
	let comp2 = new Component();

	var group = create_G1_1(); 
	
	let objMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
	let estMaterial = new THREE.MeshBasicMaterial({color: 0xFFFF00});

	var hCil1= 2 , bCil1=1;
	var hEst1=6;
	var hV1 = 5;

	comp1.addCylinderHorizontal(estMaterial, 0, 0, 0, wireThickness, hEst1);
	comp1.addCylinderVertical(objMaterial, 0,- hEst1/2 - bCil1/ 2, 0,bCil1,hCil1);
	comp1.addComponent(group, 0, hEst1/2 + wireThickness / 2 , 0); 
	
	comp2.addCylinderVertical(objMaterial, 0, 0, hV1 / -2, wireThickness, hV1);
	comp2.addComponent(comp1, 0, 0, -hV1 - wireThickness / 2);//transl. hv1/2 está correta aqui ? 

	mobile.setBranchOne(comp2);

	return mobile.branchOne();
}

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
	eixo cor verde = eixo dos zz */
	mobile = new Mobile(0,0,0);
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
	FrontalCamera = createCamera(100, 0, 0);    //view from x
	TopCamera = createCamera(0, 0, 100);        //view from z
	LateralCamera = createCamera(0, 100, 0);    //view from y

	window.addEventListener("resize", onResize)
	window.addEventListener("keydown", onKeyDown);
}