class Mobile extends Component {

    branch1;
    branch2;
    branch3;

    constructor(x, y, z) {
        super();
        this.position.set(x,y,z);
    }

    //Branch1

    setPositionBranch1(x, y, z){
        this.branch1.position.set(x,y,z);
    }

    rotateBranch1Z(a) {
        this.branch1.rotateZ(a);
    }

    branchOne(){
        return this.branch1;
    }

    setBranchOne(c){
        this.branch1=c;
        this.add(this.branch1);
    }
    

    //Branch2

    setPositionBranch2(x,y,z){
        this.branch2.position.set(x,y,z);
    }

    rotateBranch2Z(a){
        this.branch2.rotateZ(a);
    }


    branchTwo(){
        return this.branch2;
    }

    setBranchTwo(c){
        this.branch2=c;
    }

    //Branch3

    setPositionBranch3(x,y,z){
        this.branch3.position.set(x,y,z);
    }

    rotateBranch3Z(a){
        this.branch3.rotateZ(a);
    }

    branchThree(){
        return this.branch3;
    }

    setBranchThree(c){
        this.branch3=c;
    }

    moveLeft(speed) {
        this.position.x -= speed;
    }

    moveRight(speed) {
        this.position.x += speed;
    }

    moveForward(speed) {
        this.position.z -= speed;
    }

    moveBackwards(speed) {
        this.position.z += 
    }
}