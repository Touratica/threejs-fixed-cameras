class Mobile extends Element {

 	constructor(x, y, z) {
         super(x, y, z);
        this.baseMovement=0;
 		this.mobileMoving= 0;
        this.branchOneRotation = 0;
        this.branchTwoRotation=0;
        this.brancThreeRotation = 0;
       
	 }


     getBaseMovement(){
		return this.baseMovement;
	}

 	setBaseMovement(baseMovement) {
 		this.baseMovement = baseMovement;
     }
    
    getMobileMoving()
    {
        return this.mobileMoving;
    }
     setMobileMoving(move) {
        this.move = move;
    }
    getBranchOneRotation()
    {
        return this.branchOneRotation();
    }
    setBranchOneRotation(branchOneRotation)
    {
        this.branchOneRotation = branchOneRotation;
    }

    getBranchTwoRotation()
    {
        return this.branchTwoRotation();
    }
    setBranchTwoRotation(branchTwoRotation)
    {
        this.branchTwoRotation = branchTwoRotation;
    }

    getBranchThreeRotation()
    {
        return this.branchThreeRotation();
    }
    setBranchThreeRotation(branchThreeRotation)
    {
        this.branchThreeRotation = branchThreeRotation;
    }

    rotateBranchOne(angle) {
        branchOne.rotateOnWorldAxis(new THREE.Vector3(0,0,1),angle); //vector (0,0,1) roda em torno dos z, penso, com angulo de 0 graus.
        //this.translateX(velocity);
    }
    rotateBranchTwo(angle) {
        branchTwo.rotateOnWorldAxis(new THREE.Vector3(0,0,1),angle); //vector (0,0,1) roda em torno dos z, penso, com angulo de 0 graus.
    }
    rotateBranchThree(angle) {
        branchThree.rotateOnWorldAxis(new THREE.Vector3(0,0,1),angle); //vector (0,0,1) roda em torno dos z, penso, com angulo de 0 graus.
    }

    moveMobile(velocity) { /*pensar melhor nesta funcao*/
        this.translateZ(velocity);
    }


    create(obj, x, y, z) {
        obj.material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true
        });

        branchOne = new THREE.Group();
        branchTwo = new THREE.Group();
        branchThree = new THREE.Group();

        branchOne.material = obj.material;
        branchTwo.material = obj.material;
        branchThree.material = obj.material;

        //ramo 1
        /*Linhas de codigo sem comentario sao arames*/
        obj.addCylinderVertical(branchOne,0,0,0,0.1,5); 
        obj.addCylinderHorizontal(branchOne,0,0,-5,0.1,6);
        obj.addCylinderVertical(branchOne,0,-3,-5,2,1); //Cilindro 1
        obj.addCylinderVertical(branchOne,0,3,-6,0.1,2);
        obj.addCylinderHorizontal(branchOne,0,3,-7,0.1,8);
        obj.addParallelepipedVertical(branchOne,0,8,-7,2,2,2); //quadrado 2
        obj.addCylinderVertical(branchOne,0,-1,-8,0.1,2);
        obj.addCylinderHorizontal(branchOne,0,-3,-9,0.1,6);
        obj.addCylinderVertical(branchOne,0,-6,-9,5,0.1,1);
        obj.addCylinderVertical(branchOne,0,-6,-11,1,2); //cilindro 3
        obj.addCylinderVertical(branchOne,0,0,-10,0.1,2);
        obj.addCylinderHorizontal(branchOne,0,1,-11,0.1,6);
        obj.addCylinderVertical(branchOne,0,1,-11.5,0.1,1);
        obj.addCylinderVertical(branchOne,0,-2,-13.5,2,3); //cilindro 4
        obj.addCylinderVertical(branchOne,0,4,-11.5,0.1,1);
        obj.addCylinderHorizontal(branchOne,0,5,-12,0.1,4);
        obj.addCylinderVertical(branchOne,0,3,-12,1,1); //cilindro 5


        //ramo 2
        obj.addCylinderVertical(branchTwo,0,4,-12,0.1,2);
        obj.addCylinderHorizontal(branchTwo,0,3.5,-13,0.1,5);
        obj.addParallelepipedVertical(branchTwo,0,0.5,-13,1,1,1);//quadrado 6
        obj.addCylinderVertical(branchTwo,0,6,-14,0.1,2);
        obj.addCylinderHorizontal(branchTwo,0,6.5,-15,0.1,9);
        obj.addCylinderHorizontal(branchTwo,0,1.5,-15,1,1); //cilindro 7
        obj.addCylinderVertical(branchTwo,0,11,-16,0.1,2);
        obj.addCylinderHorizontal(branchTwo,0,9.5,-17,0.1,7);
        obj.addCylinderHorizontal(branchTwo,0,14,-17,3,2); //cilindro 8

        //ramo 3
        obj.addCylinderVertical(branchThree,0,6,-18,0.1,2);
        obj.addCylinderHorizontal(branchThree,0,6,-19,0.1,4);
        obj.addCylinderHorizontal(branchThree,0,3.5,-18,1,1); //cilindro 9
        obj.addParallelepipedVertical(branchThree,0,8.5,-18,1,1,1);//quadrado 10

        /*Adicionar translacoes e rotacoes? 
        ramo1.translateY();*/

        obj.add(branchOne);
        obj.add(branchTwo);
        obj.add(branchThree);
 		scene.add(obj);
        
        obj.position.x = x;
 		obj.position.y = y;
 		obj.position.z = z;


       

      
    }

    


}