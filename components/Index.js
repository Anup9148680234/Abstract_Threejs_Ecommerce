import Navbar from "./Navbar";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Products from "./ProductsList";
import { abstractRender } from "./Abstract"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as products_details from './products.json'

const prodDetials = products_details.default.products;
function Render3DProducts( modelPath , canvasElement , cameraPositionZ ) { 
  const scene = new THREE.Scene()
  scene.name = "Products";
  const sizes = { width: 300 , height: 300 }
  const loader = new GLTFLoader();

  loader.load( modelPath, function ( gltf ) {
    //gltf.scene.scale.set(3, 3, 3);  
      scene.add( gltf.scene );
  }, undefined, function ( error ) {
      console.error( error );
  } );

  scene.add( new THREE.AmbientLight( 0xffffff , 1 ) );

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
  camera.position.z = cameraPositionZ
  scene.add(camera)

  const canvas = document.querySelector(canvasElement)
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
}

console.log("Index Reached")
Navbar();
Products();
abstractRender();


for (let index = 0; index < prodDetials.length; index++) {
    const element = prodDetials[index];
    Render3DProducts(element.modelpath, element.canvas, element.cameraPositionZ)
}
