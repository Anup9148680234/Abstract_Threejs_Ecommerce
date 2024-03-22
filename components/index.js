import Header from "./Navbar";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Products from "./ProductsList";

console.log("Index Reached")
Header();
Products();


// const scene = new THREE.Scene()
// scene.name = "God Rays";
// console.log(scene);
// const geometry = new THREE.SphereGeometry(5, 15);
// const wireframe = new THREE.WireframeGeometry( geometry );
// const material =  new THREE.MeshPhongMaterial({
//     color: 0x808080, 
//     emissive: 0x808080, 
//     emissiveIntensity: 1, 
//     shininess: 1 
// });

// const mesh = new THREE.Mesh(wireframe, material);

// mesh.material.depthTest = false;
// mesh.material.opacity = 0.5;
// mesh.material.transparent = true;

// scene.add(mesh);
// const sizes = {
//     width: 1200,
//     height: 800
// }

// scene.add( new THREE.AmbientLight( 0xffffff , 10 ) );
// var pointLight = new THREE.PointLight( 0xffffff , 100 ,500 ,10 );
// pointLight.position.set( 0, 0, 0 );
// scene.add( pointLight );

// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 25
// scene.add(camera)

// const canvas = document.querySelector('canvas.three')
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)


// const controls = new OrbitControls(camera,canvas);
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.enableZoom = false;
// controls.autoRotate = true;
// controls.autoRotateSpeed = 1;

// window.addEventListener('resize', ()=>{
//     location.replace(location.href);
//     sizes.width = window.innerWidth;
//     sizes.height = window.innerHeight;
//     camera.updateProjectionMatrix();
//     camera.aspect = sizes.width/ sizes.height;
//     renderer.setSize(sizes.width, sizes.height);
//   });
  
//   const loop = () =>{
//     controls.update();
//     renderer.render(scene, camera);
//     window.requestAnimationFrame(loop);
//   };
//   loop();

