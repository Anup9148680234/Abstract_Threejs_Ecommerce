import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Product from './Product';


export function abstractRender(){
    const scene = new THREE.Scene()
    scene.name = "Abstract";
    const geometry = new THREE.IcosahedronGeometry(5, 0);
    const material =  new THREE.MeshPhongMaterial({
        color: 0x000000,  
        emissiveIntensity: 2, 
        shininess: 1 ,
        wireframe: true,
        transparent: false,
        wireframeLinewidth: 2.5,
    });
    const mesh = new THREE.Mesh(geometry, material);
    
    scene.add(mesh);
    
    const sizes = {
        width: 80,
        height: 80
    }
    
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 8;
    scene.add(camera)
    
    scene.add( new THREE.AmbientLight( 0xffffff , 3 ) );
    
    const canvas = document.querySelector('canvas.abstract')
   
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.render(scene, camera)
    renderer.setClearColor( 0x000000 , 0);
    
    const controls = new OrbitControls(camera,canvas);

    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

      
      const loop = () =>{
        controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(loop);
      };
      loop();

}

