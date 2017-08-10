import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import THREE from 'three.js';

@Component({
    selector: 'app-three-training-page',
    templateUrl: './three-training-page.component.html',
    styleUrls: ['./three-training-page.component.css']
})
export class ThreeTrainingPageComponent implements OnInit {

    @ViewChild('container') container: ElementRef;
    constructor() { }

    ngOnInit() {

        let scene, camera, renderer;
        // const element = this.container.nativeElement;
        let geometry, material, mesh;

        init(this.container.nativeElement);
        animate();

        function init(element: HTMLDivElement) {

            scene = new THREE.Scene();

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
            camera.position.z = 1000;

            geometry = new THREE.BoxGeometry(200, 200, 200);
            material = new THREE.MeshBasicMaterial({
                color: 0xff0000,
                wireframe: true
            });

            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);

            element.appendChild(renderer.domElement);

        }

        function animate() {

            requestAnimationFrame(animate);

            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.02;

            renderer.render(scene, camera);

        }
    }

}
