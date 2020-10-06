'use strict';
class Component extends THREE.Object3D {
    addCuboidVertical(material, x, y, z, w, h) {
        let geometry = new THREE.BoxGeometry(w, h, w);
        let mesh = new THREE.Mesh(geometry, material);
        this.add(mesh);
        mesh.rotateX(Math.PI / 2);
        mesh.position.set(x, y, z);
    }

    addCylinderVertical(material, x, y, z, base, height) {
        let geometry = new THREE.CylinderGeometry(base, base, height, 64, 1);
        let mesh= new THREE.Mesh(geometry, material);
        this.add(mesh);
        mesh.position.set(x, y, z);
    }
    
    addCylinderHorizontal(material, x, y, z, base, height) {
        let geometry = new THREE.CylinderGeometry(base, base, height, 64, 1);
        let mesh= new THREE.Mesh(geometry, material);
        this.add(mesh);
        mesh.rotateX(Math.PI / 2);
        mesh.position.set(x, y, z);
    }

    addComponent(comp, x, y, z) {
        this.add(comp);
        comp.position.set(x,y,z);
    }

    toggleWireframe() {
        this.material.wireframe = !this.material.wireframe;
    }
}