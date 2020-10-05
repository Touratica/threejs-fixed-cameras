'use strict';
class Element extends THREE.Object3D {

    material;
    mesh;

    constructor(x, y, z) {
        super();
        this.create(this, x, y, z);
    }

    addParallelepipedVertical(obj, x, y, z, w, h, d) {
        var geometry = new THREE.CubeGeometry(w, h, d);
        geometry.rotateX(Math.PI/2); /*verificar estas contas...*/ 
        obj.mesh = new THREE.Mesh(geometry,obj.material); 
        obj.mesh.position.set(x, y, z);
        obj.add(obj.mesh);
    }

    addCylinderVertical(obj,x,y,z,base,height){
        var geometry = new THREE.CylinderGeometry( base, base, height, 64 ); /*Verificar estes parametros*/
        geometry.rotateX(Math.PI/2);
        obj.mesh = new THREE.Mesh(geometry,obj.material);
        obj.mesh.position.set(x,y,z);
        obj.add(obj.mesh);
    
    }
    
    addCylinderHorizontal(obj,x,y,z,base,height){
    
        var geometry = new THREE.CylinderGeometry( base, base, height, 64 );
        obj.mesh = new THREE.Mesh(geometry,obj.material); /*funciona msm assim ou sera que precisa de rot?*/
        obj.mesh.position.set(x,y,z);
        obj.add(obj.mesh);
    }

    changeWireframe() {
        this.material.wireframe = !this.material.wireframe;
    }

    create() {}
}