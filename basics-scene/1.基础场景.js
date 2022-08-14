console.log(THREE);

const canvas = document.querySelector("canvas.webgl");
const sizes = {
  width: 800,
  height: 600,
};
//scene
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

mesh.position.x = 0.7;
mesh.position.y = -0.6;
mesh.position.z = 1;
console.log(mesh.position.length());
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;
/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.lookAt(new THREE.Vector3(0, -1, 0));

scene.add(camera);

const clock = new THREE.Clock();
const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  console.log("elapsedTime", elapsedTime);
  // Update objects
  mesh.position.x = Math.cos(elapsedTime);
  mesh.position.y = Math.sin(elapsedTime);

  // ...
};

tick();

//渲染器 Renderer
console.log(mesh.position.distanceTo(camera.position));
console.log(mesh.position.normalize());

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
