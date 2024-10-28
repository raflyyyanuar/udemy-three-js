import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()

const width = 400
const height = 200

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
camera.position.z = 1.5

const canvas = document.getElementById("canvas") as HTMLCanvasElement
const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true})
renderer.setSize(width, height)

new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial({ wireframe: true })

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

animate()