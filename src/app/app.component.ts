import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private renderer: any;
  private scene: any;
  private camera: any;
  private curveObject: any;
  private curve: Array<any>;
  private lines: Array<any>;
  private webgloutput: any;

  constructor() { }

  // TODO: animate the lines
  ngOnInit() {
    console.log('teste');
    this.renderSetup();
    this.cameraSetup();
    this.scene = new THREE.Scene();
    this.lineSetup();

    this.animate();
  }

  private renderSetup() {
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.setClearColor(0x000511);
    document.body.appendChild( this.renderer.domElement );
  }

  private cameraSetup() {
    this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 1000 );
    this.camera.position.z = 10;
  }

  private lineSetup() {
    this.curve = [];
    for (let index = 0; index < 3; index++) {
      // create curve mesh
      this.curve[index] = new THREE.CubicBezierCurve3(
        new THREE.Vector3( -10 - index, -5 - index, 0 ),
        new THREE.Vector3( -5, 0, 0 ),
        new THREE.Vector3( 0, -8 + index, 0 ),
        new THREE.Vector3( 10, 0, 0 )
      );
      const points = this.curve[index].getPoints( 100 );
      const lineGeometry = new THREE.BufferGeometry().setFromPoints( points );
      const material = new THREE.LineBasicMaterial( { color : 0x6b7687 } );
      this.curveObject = new THREE.Line( lineGeometry, material );
      this.scene.add( this.curveObject );
      
    }
    
    // // visualize spaced points
    // const sphereGeomtry = new THREE.SphereBufferGeometry( 0.1 );
    // const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    // const spacedPoints = curve.getPoints( 4 );

    // // Helper to see points in line
    // for ( let point of spacedPoints ) {
    //   const helper = new THREE.Mesh( sphereGeomtry, sphereMaterial );
    //   helper.position.copy( point );
    //   this.scene.add( helper );
    // }
  }

  private animate() {
    console.log('animate called');
    requestAnimationFrame(this.animate.bind(this));
    this.updateCurve();
    this.renderer.render( this.scene, this.camera );
  }


  private updateCurve() {
    let testPoint = 1 + 1;
  
    for (let i = 0, l = this.curve.length; i < l; i++) {
      let curveLine = this.curve[i];
      
      // Update x value of v0 vector
      curveLine.v0.x = testPoint;
      // Update vertices
      // curveLine.geometry.vertices = curveLine.getPoints( 50 );
      // // Let's three.js know that vertices are changed
      // curveLine.geometry.verticesNeedUpdate = true;
    }
  }

}
