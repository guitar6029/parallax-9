<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import {throttle} from '@/utils/throttle'
import * as THREE from "three";
const divRef = ref<HTMLElement | null>(null);


function handleResize(){
  if (!divRef.value || !renderer || !camera) return
  const width = divRef.value.clientWidth || window.innerWidth
  const height = divRef.value.clientHeight || window.innerHeight

  renderer.setSize(width, height)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
}


const handleResiseThrottled = throttle(handleResize, 150)
let renderer: THREE.WebGLRenderer | null = null;
let camera: THREE.PerspectiveCamera | null = null;
let cube: THREE.Mesh | null = null;
let scene: THREE.Scene | null = null;
let frameId: number | null = null;

const clock = new THREE.Clock() 

function animate() {
  if (!renderer || !scene || !camera || !cube) return;

  const t = clock.getElapsedTime()

  // rotate
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  //breathe params
  const amplitude = 0.12 // grows/ shrinks
  const speed = 0.5 // how fast it breathes
  const scale = 1 + amplitude * Math.sin(t * speed)
  cube.scale.set(scale, scale, scale)

  //render
  renderer.render(scene, camera);

  // schedule frame
  frameId = requestAnimationFrame(animate);
}

onMounted(() => {
  if (!divRef.value) return;

  //add resize event
  window.addEventListener("resize", handleResiseThrottled)

  // init width and height
  const width = divRef.value.clientWidth || window.innerWidth;
  const height = divRef.value.clientHeight || window.innerHeight;

  //initialize the scene
  scene = new THREE.Scene();

  //lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambient)

  const dir = new THREE.DirectionalLight(0xffffff, 1)
  dir.position.set(4,6,2)
  scene.add(dir)

  //camera init
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;

  //renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0x050510);
  divRef.value?.appendChild(renderer.domElement);

  // texture 
  const textureLoader = new THREE.TextureLoader()
  //load the image
  const colorMap = textureLoader.load('/textures/metal_plate_02_diff_4k.jpg')

  //create a shape
  //const geometry = new THREE.BoxGeometry(1, 1, 1);
  const geometry = new THREE.IcosahedronGeometry(1, 0);
  //const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
  const material = new THREE.MeshStandardMaterial({
    map: colorMap,
    metalness: 0.8,
    roughness: 0.4
  })
  cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  //animate
  animate();
});

onBeforeUnmount(() => {
  //clean up for later
  if (frameId !== null) {
    cancelAnimationFrame(frameId);
  }

  //remove and cancel the resize event
  window.removeEventListener('resize', handleResiseThrottled)
  handleResiseThrottled.cancel()
});
</script>

<template>
  <section class="sect-container h-screen">
    <div ref="divRef"></div>
  </section>
</template>
