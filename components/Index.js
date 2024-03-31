import Navbar from "./Navbar";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Products from "./ProductsList";
import { abstractRender } from "./Abstract"

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


function Render3DProducts() { 
  console.log("Product Head");
  const scene = new THREE.Scene()
  scene.name = "Products";
  console.log(scene);

  const sizes = {
      width: 300 ,
      height: 300 ,
  }

  const loader = new GLTFLoader();

  loader.load( '/public/shiba.glb', function ( gltf ) {
      scene.add( gltf.scene );

  }, undefined, function ( error ) {

      console.error( error );

  } );

  scene.add( new THREE.DirectionalLight( 0xffffff , 1 ) );

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
  camera.position.z = 1.5
  scene.add(camera)

  const canvas = document.querySelector('canvas.prod1')
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
      // sizes.width = window.innerWidth;
      // sizes.height = window.innerHeight;
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

function Render3DProducts1() { 
  console.log("Product Head");
  const scene = new THREE.Scene()
  scene.name = "Products";
  console.log(scene);

  const sizes = {
      width: 300 ,
      height: 300,
  }

  const loader = new GLTFLoader();

  loader.load( '/public/ps5cont.glb', function ( gltf ) {
    gltf.scene.scale.set(3, 3, 3);  
    scene.add( gltf.scene );
     
  }, undefined, function ( error ) {

      console.error( error );

  } );

  scene.add( new THREE.AmbientLight( 0xffffff , 1 ) );

  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
  camera.position.z = 2
  scene.add(camera)

  const canvas = document.querySelector('canvas.prod2')
  const renderer = new THREE.WebGLRenderer({
      canvas: canvas
  })
  renderer.setClearColor( 0x000000 , 0);
  renderer.setSize(sizes.width, sizes.height)
  renderer
  renderer.render(scene, camera)


  const controls = new OrbitControls(camera,canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;

  window.addEventListener('resize', ()=>{
      location.replace(location.href);
      // sizes.width = window.innerWidth;
      // sizes.height = window.innerHeight;
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
// abstractRender();
Render3DProducts();
Render3DProducts1();



    var toggleMenu = document.getElementById("toggleMenu");
    var menu = document.getElementById("user-menu-button");
    toggleMenu.style.display = "none"
    console.log(toggleMenu);
    menu.addEventListener("click", function() {
        toggleMenu.style.display === "none" ? toggleMenu.style.display = "block" : toggleMenu.style.display = "none" ;
    });

    var ham = document.getElementById('hamburger');
    var mobile_menu = document.getElementById('mobile-menu');
    mobile_menu.style.display = "none" 
    ham.addEventListener("click", function() {
        mobile_menu.style.display === "none" ? mobile_menu.style.display = "block" : mobile_menu.style.display = "none" ;
    });