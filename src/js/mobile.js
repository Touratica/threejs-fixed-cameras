class Mobile extends Element {

 	constructor(x, y, z) {
 		super(x, y, z);
 		this.mobileBaseMovement= 0;
        this.branchOneRotation = 0;
        this.branchTwoRotation=0;
        this.brancThreeRotation = 0;
       
	 }

	getMobileBaseMovement(){
		return this.mobileBaseMovement;
	}

 	setMobileBaseMovement(mobileBaseMovement) {
 		this.mobileBaseMovement = mobileBaseMovement;
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
        brancTwo = new THREE.Group();
        branchThree = new THREE.Group();

        branchOne.material = obj.material;
        brancTwo.material = obj.material;
        brancThree.material = obj.material;

        //ramo 1
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
        /* Ramo 1 concluido */

        /* Continuar ramo2 e ramo3*/


        /*Adicionar translacoes e rotacoes? */ 


       

      
    }

    


}