class Mobile extends Elemento {

    constructor(x, y, z) {
        super();
        this.position.set(x,y,z);
        this.ramo1= new Elemento();
        this.ramo2= new Elemento();
        this.ramo3= new Elemento();

        this.add(this.ramo1);
        this.add(this.ramo2);
        this.add(this.ramo3);
    }



    //Ramo1

    addParallelepipedVerticalRamo1(material,x, y, z, w, h) {
        this.ramo1.addParallelepipedVertical(material,x, y, z, w, h);
    }

    addCylinderVerticalRamo1(material,x,y,z,base,height){
       this.ramo1.addCylinderVertical(material,x,y,z,base,height);
    }
    
    addCylinderHorizontalRamo1(x,y,z,base,height){
        this.ramo1.addCylinderHorizontal(x,y,z,base,height);
    }

    SetPositionRamo1(x,y,z){
        this.ramo1.position.set(x,y,z);
    }

    RotateRamo1Z(a){
        this.ramo1.rotateZ(a);
    }

    addElementoRamo1(e,x,y,z){
        this.ramo1.addElemento(e,x,y,z);
    }

    //Ramo2

    addParallelepipedVerticalRamo2(material,x, y, z, w, h) {
        this.ramo2.addParallelepipedVertical(material,x, y, z, w, h);
    }

    addCylinderVerticalRamo2(material,x,y,z,base,height){
       this.ramo2.addCylinderVertical(material,x,y,z,base,height);
    }
    
    addCylinderHorizontalRamo2(x,y,z,base,height){
        this.ramo2.addCylinderHorizontal(x,y,z,base,height);
    }

    SetPositionRamo2(x,y,z){
        this.ramo2.position.set(x,y,z);
    }

    RotateRamo2Z(a){
        this.ramo2.rotateZ(a);
    }

    addElementoRamo2(e,x,y,z){
        this.ramo2.addElemento(e,x,y,z);
    }

    //Ramo3

    addParallelepipedVerticalRamo3(material,x, y, z, w, h) {
        this.ramo3.addParallelepipedVertical(material,x, y, z, w, h);
    }

    addCylinderVerticalRamo3(material,x,y,z,base,height){
       this.ramo3.addCylinderVertical(material,x,y,z,base,height);
    }
    
    addCylinderHorizontalRamo3(x,y,z,base,height){
        this.ramo3.addCylinderHorizontal(x,y,z,base,height);
    }


    SetPositionRamo3(x,y,z){
        this.ramo3.position.set(x,y,z);
    }

    RotateRamo3Z(a){
        this.ramo3.rotateZ(a);
    }

    addElementoRamo2(e,x,y,z){
        this.ramo2.addElemento(e,x,y,z);
    }
}