'use strict';
class Elemento extends THREE.Object3D {

    addParallelepipedVertical(material,x, y, z, w, h) {
        var geometry = new THREE.BoxGeometry(w, h, w);
        var mesh= new THREE.Mesh(geometry,material);
        this.add(mesh);
        mesh.rotateX(Math.PI/2);
        mesh.position.set(x, y, z);
    }

    addCylinderVertical(material,x,y,z,base,height){
        var geometry = new THREE.CylinderGeometry( base, base, height, 64 ); /*Verificar estes parametros*/
        var mesh= new THREE.Mesh(geometry,material);
        this.add(mesh);
        mesh.rotateX(Math.PI/2);
        mesh.position.set(x, y, z);
    
    }
    
    addCylinderHorizontal(material,x,y,z,base,height){
    
        var geometry = new THREE.CylinderGeometry( base, base, height, 64 ); /*Verificar estes parametros*/
        var mesh= new THREE.Mesh(geometry,material);
        this.add(mesh);
        mesh.rotateX(Math.PI/2);
        mesh.position.set(x, y, z);
    }

    addElemento(e,x,y,z){
        this.add(e);
        e.position.set(x,y,z);
    }

    changeWireframe() {
        this.material.wireframe = !this.material.wireframe;
    }

}