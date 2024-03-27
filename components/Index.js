import Navbar from "./Navbar";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Products from "./ProductsList";
import { abstractRender } from "./Abstract"
import Product from "./Product";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

console.log("Index Reached")
Navbar();
Products();
abstractRender();
// Product();

const scene = new THREE.Scene()
scene.name = "God Rays";
console.log(scene);

const sizes = {
    width: 300,
    height: 300
}

const loader = new GLTFLoader();

loader.load( '/public/shiba.glb', function ( gltf ) {
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

scene.add( new THREE.DirectionalLight( 0xffffff , 1 ) );

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 2
scene.add(camera)

const canvas = document.querySelector('canvas.three')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setClearColor( 0x000000 , 0);
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


const controls = new OrbitControls(camera,canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 1;

window.addEventListener('resize', ()=>{
    location.replace(location.href);
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.updateProjectionMatrix();
    camera.aspect = sizes.width/ sizes.height;
    renderer.setSize(sizes.width, sizes.height);
  });
  
  const loop = () =>{
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
  };
  loop();
