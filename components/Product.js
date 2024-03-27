import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.136.0/examples/jsm/loaders/GLTFLoader.js";

export default function Product(){
    const scene = new THREE.Scene()
    scene.name = "Product Amazon";
    const sizes = {
        width: 1200,
        height: 800
    }

    const loader = new GLTFLoader();
    console.log(loader);

    loader.load( '/public/amazon_echo.glb', function ( gltf ) {
    
        scene.add( gltf.scene );

    }, undefined, function ( error ) {

        console.error( error );

    } );

    // scene.add( new THREE.AmbientLight( 0xffffff , 10 ) );
    // var pointLight = new THREE.PointLight( 0xffffff , 100 ,500 ,10 );
    // pointLight.position.set( 0, 0, 0 );
    scene.add( pointLight );

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 0
    scene.add(camera)

    const canvas = document.querySelector('canvas.three')
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    })
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
}
