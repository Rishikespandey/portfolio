
// ============================
// Typing Animation
// ============================

const text =
" Full Stack Developer ";

let i = 0;

function type(){

if(i < text.length){

document.querySelector(".typing").innerHTML += text.charAt(i);

i++;

setTimeout(type,50);

}

}

type();



// ============================
// Scroll Animation
// ============================

const sections =
document.querySelectorAll("section");


window.addEventListener("scroll",()=>{

sections.forEach(sec=>{

const top =
sec.getBoundingClientRect().top;

if(top < window.innerHeight-100){

sec.classList.add("active");

}

})

});



// First section visible

window.onload = function(){

document.querySelector("#home")
.classList.add("active");

}




// ============================
// 3D Background
// ============================

const scene =
new THREE.Scene();


const camera =
new THREE.PerspectiveCamera(

75,

window.innerWidth/window.innerHeight,

0.1,

1000

);



const renderer =
new THREE.WebGLRenderer({

alpha:true,

antialias:true

});


renderer.setSize(

window.innerWidth,

window.innerHeight

);



document.getElementById("bg3d")
.appendChild(renderer.domElement
    
);




camera.position.z = 5;




const geometry =
new THREE.TorusKnotGeometry(

1.2,

0.4,

100,

16

);



const material =
new THREE.MeshBasicMaterial({

color:0x00f5ff,

wireframe:true

});



const shape =
new THREE.Mesh(

geometry,

material

);



scene.add(shape);




function animate(){

requestAnimationFrame(animate);

shape.rotation.x += 0.003;

shape.rotation.y += 0.006;

renderer.render(scene,camera);

}



animate();




// Responsive 3D

window.addEventListener(

'resize',

()=>{

renderer.setSize(

window.innerWidth,

window.innerHeight

);


camera.aspect=

window.innerWidth/

window.innerHeight;


camera.updateProjectionMatrix();

}

);