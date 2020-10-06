/*global THREE*/

var camera,FrontalCamera, TopCamera, LateralCamera;
var scene, renderer;
var mobile, branchOne, branchTwo, branchThree;
var larguraArames=0.5;

//let distance = 5;

/*function addRod(obj, x, y, z, h, a) {
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

}*/

function create_G3(){
	var g1= new Component();
	var g2= new Component();
	var bcil6=, hcil6=;
	var bcub4=, hcub4=;
	var hest17=;
	var hest16=;
	var hv3=;
	var material = new THREE.MeshBasicMaterial({color: 0xFF0000});

	g1.addCylinderHorizontal(material,0,-(hest17/2)-bcil6/2,0,bcil6,hcil6);
	g1.addParallelepipedVertical(material,0,(hest17/2)+bcub4/2,0,bcub4,hcub4);
	g1.addCylinderHorizontal(material,0,0,0,larguraArames,hest17);

	g2.addCylinderVertical(material,0,0,-hv3/2,larguraArames,hv3);
	g2.addComponent(g1,0,0,-hv3);

	mobile.addComponentBranch3(g3,0,0,0);

	mobile.SetPositionBranch3(0,-hest16/2,0);

}
function create_G2_2();
function create_G2_1();
function create_G2();
function create_G1_4();
function create_G1_3();
function create_G1_2();
function create_G1_1();
function create_G1();

function createMobile(){
	create_G3();
	create_G2_2();
	create_G2_1();
	create_G2();
	create_G1_4();
	create_G1_3();
	create_G1_2();
	create_G1_1();
	create_G1();
}

function createCamera(x,y,z) {
	'use strict';
	/*camera = new THREE.OrthographicCamera(-8 * distance, 8 * distance,
		4.5 * distance,-4.5 * distance);
	scene.add(camera);*/
	var distance = 5;

   	camera = new THREE.OrthographicCamera( window.innerWidth / -distance, 
                                            window.innerWidth / distance, 
                                            window.innerHeight / distance, 
                                            window.innerHeight / -distance, 
                                            1, 
											1000);
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
	mobile= new Mobile();
	createMobile();
	scene.add(mobile);

}

function animate() {
	'use strict';

	/*funcoes de animacao sobre o mobile*/
	var speed= 2;
	// girar todo o mobile
	if(mobile.getBranchOneRotation() != 0) {
		if (mobile.branchOneRotation == 1)  //1 -> girar para um lado e 2-> girar para outro
			mobile.rotateBranch1z(0);
		else if(mobile.branchOneRotation == 2)
			mobile.rotateBranch1z(-0);
	}

	//girar branch2 
	if(mobile.getBranchTwoRotation() != 0) {
		if (mobile.branchTwoRotation == 1)  //1 -> girar para um lado e 2-> girar para outro
			mobile.rotateBranchTwo(0);
		else if(mobile.branchTwoRotation == 2)
			mobile.rotateBranchTwo(-0);
	}

	//girar branch3
	if(mobile.getBranchThreeRotation() != 0) {
		if (mobile.branchThreeRotation == 1)  //1 -> girar para um lado e 2-> girar para outro
			mobile.rotateBranchThree(0);
		else if(mobile.branchThreeRotation == 2)
			mobile.rotateBranchThree(-0);
			
	}

	//mover o mobile
	if (robot.getMove()  != 0) {
		if (robot.move == 1)
			robot.moveRobot(speed);
		else if(robot.move == 2)
			robot.moveRobot(-speed);
	}

	requestAnimationFrame(animate);
	render();
	
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
	FrontalCamera = createCamera(100,0,0);  //view from x
	TopCamera= createCamera(0,0,100); //view from z
	LateralCamera = createCamera(0,100,0); //view from y

	render();
	window.addEventListener("keydown",onKeyDown);
}

function onKeyDown(e) {   
    switch (e.keyCode) {

        case 49: //1
			camera= FrontalCamera;
            break;

        case 50: //2
			camera=TopCamera;
            break;

        case 51:  //3
			camera=LateralCamera;
            break;

        case 52: //4
			mobile.changeWireframe();
	
			break;
			
		case 87: // W
		case 119: // w   /*Rodar v1 num sentido*/

			mobile.rotateBranchOne(0); 
			break;
	
		case 81: // Q  /*rodar v1 noutro sentido*/
		case 113: //q
			mobile.rotateBranchOne(-0);
				
		break;      
	
		case 65: // A
        case 97: //a
           	mobile.rotateBranchTwo(0);
			break;
			
		case 68:  //D 
		case 100: //d
			mobile.rotateBranchTwo(-0);  
		
		case 90:  //Z 
		case 122: //z
			mobile.rotateBranchThree(0);
			break;

        case 83: // S
        case 115: //s
            mobile.rotateBranchThree(-0);
			break;

		case 38: // Seta para cima
			mobile.setMobileMoving(1);

        	break;

        case 40: // Seta para baixo
		   mobile.setMobileMoving(2);
            break;

        case 39: // Seta para o lado direito
			mobile.setBaseMovement(1);
            break;
        
        case 37: // Seta para o lado esquerdo
			mobile.setBaseMovement(1);
            break;

       
    }

}




