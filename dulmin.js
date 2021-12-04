//Created by Dulmin

const scene = new THREE.Scene();			 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);			 
const renderer = new THREE.WebGLRenderer({antialias:true});			  
renderer.setSize(window.innerWidth, window.innerHeight);															 
document.body.appendChild(renderer.domElement);													 
const geometry = new THREE.BoxGeometry(50, 50, 50, 5, 5, 5);			 
const material = new THREE.MeshBasicMaterial({color: 0x0000FF, wireframe:true});			 
const cube = new THREE.Mesh(geometry, material);			 
controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 2.0
camera.position.z = 1200;
controls.maxDistance = 140;
scene.add(cube);				  
const animate = function(){
controls.update(); 
renderer.render(scene, camera)		  
requestAnimationFrame(animate);				 
cube.rotation.x += 0.02;		  
renderer.render(scene, camera);			 
};			 
animate();

//this is my created js code using THreejs

