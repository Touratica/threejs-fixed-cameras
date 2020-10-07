'use strict';
class Component extends THREE.Object3D {
    material;

    addCuboid(material, x, y, z, w, h, d) {
        let geometry = new THREE.BoxGeometry(w, h, d);
        let mesh = new THREE.Mesh(geometry, material);
        this.material = material;
        this.material.wireframe=true;
        this.add(mesh);
        mesh.position.set(x, y, z);
    }

    addCylinderVertical(material, x, y, z, base, height) {
        let geometry = new THREE.CylinderGeometry(base / 2, base / 2, height, 64, 1);
        let mesh= new THREE.Mesh(geometry, material);
        this.material = material;
        this.material.wireframe=true;
        this.add(mesh);
        mesh.rotateX(Math.PI / 2);
        mesh.position.set(x, y, z);
    }
    
    addCylinderHorizontal(material, x, y, z, base, height) {
        let geometry = new THREE.CylinderGeometry(base / 2, base / 2, height, 64, 1);
        let mesh= new THREE.Mesh(geometry, material);
        this.material = material;
        this.material.wireframe=true;
        this.add(mesh);
        mesh.position.set(x, y, z);
    }

    addComponent(comp, x, y, z) {
        this.add(comp);
        comp.position.set(x,y,z);
    }

    toggleWireframe() {
        // this.material.wireframe = !this.material.wireframe;
    }
}