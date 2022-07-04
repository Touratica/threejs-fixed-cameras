import Component from "./Component";

export default class Mobile extends Component {
  constructor(x, y, z) {
    super();
    this.position.set(x, y, z);
    this.motionX = 0;
    this.motionY = 0;
    this.rotationB1 = 0;
    this.rotationB2 = 0;
    this.rotationB3 = 0;
  }

  //Branch1
  rotateBranchOneZ(a) {
    this.branch1.rotateZ(a);
  }

  branchOne() {
    return this.branch1;
  }

  setBranchOne(c) {
    this.branch1 = c;
    this.add(this.branch1);
  }

  //Branch2
  rotateBranchTwoZ(a) {
    this.branch2.rotateZ(a);
  }

  branchTwo() {
    return this.branch2;
  }

  setBranchTwo(c) {
    this.branch2 = c;
  }

  //Branch3
  rotateBranchThreeZ(a) {
    this.branch3.rotateZ(a);
  }

  branchThree() {
    return this.branch3;
  }

  setBranchThree(c) {
    this.branch3 = c;
  }

  //Motion
  setMotionX(direction) {
    switch (direction) {
      case "stop":
        this.motionX = 0;
        break;

      case "forward":
        this.motionX = 1;
        break;

      case "backward":
        this.motionX = -1;
        break;

      default:
        break;
    }
  }

  setMotionY(direction) {
    switch (direction) {
      case "stop":
        this.motionY = 0;
        break;

      case "right":
        this.motionY = 1;
        break;

      case "left":
        this.motionY = -1;
        break;

      default:
        break;
    }
  }

  getMotionX() {
    switch (this.motionX) {
      case 0:
        return "stop";

      case 1:
        return "forward";

      case -1:
        return "backward";

      default:
        break;
    }
  }

  getMotionY() {
    switch (this.motionY) {
      case 0:
        return "stop";

      case 1:
        return "right";

      case -1:
        return "left";

      default:
        break;
    }
  }

  moveLeft(distance) {
    this.translateY(-distance);
  }

  moveRight(distance) {
    this.translateY(distance);
  }

  moveForward(distance) {
    this.translateX(-distance);
  }

  moveBackward(distance) {
    this.translateX(distance);
  }

  //Rotation

  setRotation(rotation) {
    switch (rotation) {
      case "stopB1":
        this.rotationB1 = 0;
        break;

      case "stopB2":
        this.rotationB2 = 0;
        break;

      case "stopB3":
        this.rotationB3 = 0;
        break;

      case "rotateB1P":
        this.rotationB1 = 1;
        break;

      case "rotateB1N":
        this.rotationB1 = 2;
        break;

      case "rotateB2P":
        this.rotationB2 = 1;
        break;

      case "rotateB2N":
        this.rotationB2 = 2;
        break;

      case "rotateB3P":
        this.rotationB3 = 1;
        break;

      case "rotateB3N":
        this.rotationB3 = 2;
        break;

      default:
        break;
    }
  }

  getRotationOne() {
    switch (this.rotationB1) {
      case 0:
        return "stopB1";

      case 1:
        return "rotateB1P";

      case 2:
        return "rotateB1N";

      default:
        break;
    }
  }

  getRotationTwo() {
    switch (this.rotationB2) {
      case 0:
        return "stopB2";

      case 1:
        return "rotateB2P";

      case 2:
        return "rotateB2N";

      default:
        break;
    }
  }

  getRotationThree() {
    switch (this.rotationB3) {
      case 0:
        return "stopB3";

      case 1:
        return "rotateB3P";

      case 2:
        return "rotateB3N";

      default:
        break;
    }
  }
}
