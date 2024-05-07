import Navbar from "./Navbar";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Products from "./ProductsList";
import { abstractRender } from "./Abstract"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as products_details from './products.json'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';


const prodDetials = products_details.default.products;

const sizes = { width: 300 , height: 300 };

const lights = new THREE.AmbientLight( 0xffffff , 1 );
function Render3DProducts( modelPath , canvasElement , cameraPositionZ , cameraPositionY, scale) { 
  const scene = new THREE.Scene()
  const loader = new GLTFLoader();
  loader.load( modelPath, function ( gltf ) {
    console.log(gltf.scene)
    gltf.scene.scale.set(scale?scale:1, scale?scale:1, scale?scale:1); 
    gltf.scene.translateY(cameraPositionY ? cameraPositionY :0);
    scene.add( gltf.scene );
  }, undefined, function ( error ) {
      console.error( error );
  } );

  scene.add(lights);
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
  camera.position.set(0, 0, cameraPositionZ);
  scene.add(camera)

  const canvas = document.querySelector(canvasElement)
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  })
  renderer.setClearColor( 0x000000 , 0);
  renderer.setSize(sizes.width, sizes.height)
  renderer.render(scene, camera)
  renderer.toneMapping = THREE.EquirectangularReflectionMapping;

  const pmremGenerator = new THREE.PMREMGenerator( renderer );

  const hdriLoader = new RGBELoader()
  hdriLoader.load( 'public/ox_bridge_morning_1k.hdr', function ( texture ) {
    const envMap = pmremGenerator.fromEquirectangular( texture ).texture;
    texture.dispose(); 
    scene.environment = envMap
  } );

  const controls = new OrbitControls(camera,canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
  
  const loop = () =>{
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
  };
  loop();
}

Navbar();
Products();
abstractRender();


for (let index = 0; index < prodDetials.length; index++) {
    const element = prodDetials[index];
    Render3DProducts(
      element.modelpath, 
      element.canvas, 
      element.cameraPositionZ, 
      element.cameraPositionY,
      element.scale)
}
