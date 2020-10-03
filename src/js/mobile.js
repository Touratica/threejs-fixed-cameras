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


}