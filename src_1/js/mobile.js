class Mobile extends Component {

    constructor(x, y, z) {
        super();
        this.position.set(x,y,z);
        this.branch1 = new Component();
        this.branch2 = new Component();
        this.branch3 = new Component();

        this.add(this.branch1);

    }



    //Branch1

    addCuboidVerticalBranch1(material, x, y, z, w, h) {
        this.branch1.addParallelepipedVertical(material,x, y, z, w, h);
    }

    addCylinderVerticalBranch1(material, x, y, z, base, height){
       this.branch1.addCylinderVertical(material,x,y,z,base,height);
    }
    
    addCylinderHorizontalBranch1(material, x, y, z, base, height){
        this.branch1.addCylinderHorizontal(material, x, y, z, base, height);
    }

    setPositionBranch1(x, y, z){
        this.branch1.position.set(x,y,z);
    }

    rotateBranch1Z(a) {
        this.branch1.rotateZ(a);
    }

    addComponentBranch1(e, x, y, z){
        this.branch1.addComponent(e,x,y,z);
    }

    branchOne(){
        return this.branch1;
    }

    //Branch2

    addParallelepipedVerticalBranch2(material,x, y, z, w, h) {
        this.branch2.addParallelepipedVertical(material,x, y, z, w, h);
    }

    addCylinderVerticalBranch2(material, x, y, z, base, height){
       this.branch2.addCylinderVertical(material, x, y, z, base, height);
    }
    
    addCylinderHorizontalBranch2(material, x, y, z, base, height){
        this.branch2.addCylinderHorizontal(material, x, y, z, base, height);
    }

    setPositionBranch2(x,y,z){
        this.branch2.position.set(x,y,z);
    }

    rotateBranch2Z(a){
        this.branch2.rotateZ(a);
    }

    addComponentBranch2(e,x,y,z){
        this.branch2.addComponent(e,x,y,z);
    }

    branchTwo(){
        return this.branch2;
    }

    //Branch3

    addParallelepipedVerticalBranch3(material,x, y, z, w, h) {
        this.branch3.addParallelepipedVertical(material,x, y, z, w, h);
    }

    addCylinderVerticalBranch3(material,x,y,z,base,height){
       this.branch3.addCylinderVertical(material,x,y,z,base,height);
    }
    
    addCylinderHorizontalBranch3(material, x, y, z, base, height) {
        this.branch3.addCylinderHorizontal(material, x, y, z, base, height);
    }


    setPositionBranch3(x,y,z){
        this.branch3.position.set(x,y,z);
    }

    rotateBranch3Z(a){
        this.branch3.rotateZ(a);
    }

    addComponentBranch3(e,x,y,z){
        this.branch3.addComponent(e,x,y,z);
    }

    branchThree(){
        return this.branch3;
    }
}