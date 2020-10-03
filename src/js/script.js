/*global THREE*/

var camera,FrontalCamera, TopCamera, LateralCamera;
var scene, renderer;

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
	eixo cor azul = eixo dos xx
	eixo cor vermelha = eixo dos yy 
	eixo cor verde = eixo dos zz , Bom afinal não sei se é bem assim.. vi em outros projetos, quando
	a camera está em (0,100,0) isto dá uma vista de cima em vez de lado como se fosse dos yy... 
	estou confusa mas o verde é pelo menos sempre o zz , por tanto maybe depois alterar os nomes
	das variaveis porque o Topcamera nao dá supostamente a vista de cima, mas sim o 3 é que da*/

	//createMobile(0,0,0); /*Acho melhor criar uma classe chamada Mobile, dps faz-se new Mobile*/
	

}

function animate() {
	'use strict';

	/*funcoes de animacao sobre o mobile*/

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
			/* Fazer algo tipo mobile.changeWireframe();*/	
	
			break;
			
		case 87: // W
		case 119: // w   /*Rodar v1 num sentido*/
			/*Ter algo do tipo mobile.rotate(v1,Right)*/
			break;
	
		case 81: // Q  /*rodar v1 noutro sentido*/
		case 113: //q
		/*mobile.rotate(v1,left)*/
				
		break;      
	
		case 65: // A
        case 97: //a
           	/* mobile.rotate(v2,right)*/
			break;
			
		case 68:  //D /* Procurar d minusculo*/
		/*mobile.rotate(v2,left)*/  /*Acho que ramo1 ramo 2 e ramo 3 devem ser partes do mobile separadas,
		depois podemos fazer ramo1.rotate(right), por exemplo.*/
		case 90:  //Z /* procurar z minusculo*/
		/*v3.rotate(right);*/
			break;

        case 83: // S
        case 115: //s
            /*v3.rotate(left)*/
			break;
			case 38: // Seta para cima
        	/*mobile.move()*/

            break;

        case 40: // Seta para baixo
            /*mobile.move()*/
            break;

        case 39: // Seta para o lado direito
            /*mobile.move()*/
            break;
        
        case 37: // Seta para o lado esquerdo
           /*mobile.move()*/
            break;

       
    }

}




