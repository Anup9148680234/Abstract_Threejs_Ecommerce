import Navbar from "./Navbar";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Products from "./ProductsList";
import { abstractRender } from "./Abstract";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as products_details from './products.json';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

const prodDetials = products_details.default.products;

function preventScroll(event) {
  event.preventDefault();
}

function Render3DProducts(modelPath, canvasElement, cameraPositionZ, cameraPositionY, scale) {
  const sizes = { width: 300, height: 300 };
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
  camera.position.set(0, 0, cameraPositionZ);

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector(canvasElement),
    antialias: true,
    alpha: true
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(window.devicePixelRatio);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;

  const loader = new GLTFLoader();
  loader.load(modelPath, (gltf) => {
    gltf.scene.scale.set(scale || 1, scale || 1, scale || 1);
    gltf.scene.translateY(cameraPositionY || 0);
    scene.add(gltf.scene);
  }, undefined, (error) => {
    console.error(error);
  });

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const hdriLoader = new RGBELoader();
  hdriLoader.load('public/ox_bridge_morning_1k.hdr', (texture) => {
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    scene.environment = envMap;
    texture.dispose();
    pmremGenerator.dispose();
  });

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Prevent default scroll behavior for the canvas element
  renderer.domElement.addEventListener('wheel', preventScroll, { passive: false });
  renderer.domElement.addEventListener('touchmove', preventScroll, { passive: false });
}

Navbar();
Products();
abstractRender();

window.addEventListener('DOMContentLoaded', () => {
  for (let index = 0; index < prodDetials.length; index++) {
    const element = prodDetials[index];
    Render3DProducts(
      element.modelpath,
      element.canvas,
      element.cameraPositionZ,
      element.cameraPositionY,
      element.scale
    );
  }
});
