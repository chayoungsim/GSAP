//degree*(Math.PI/180)


const moon = document.querySelector('.moon');

function toRadians(degree) {
  return degree * (Math.PI / 180);
} 

function toDegree(radian) {
  return radian * (180 / Math.PI);
}

let degree = 45
let radius = 250
let stopAnimation;
let x;
let y;

const fps = 40;
const interval = 1000 / fps;
let lastTime = performance.now();

function planet() {

  const now = performance.now();
  const delta = now - lastTime;

  if(delta > interval) {
    lastTime = now - (delta % interval);  
    ++degree;
    x = Math.cos(toRadians(degree)) * radius;
    y = - Math.sin(toRadians(degree)) * radius;     
    gsap.to('.moon',{x , y})
  }

  stopAnimation =requestAnimationFrame(planet);
}

planet();

moon.addEventListener('mouseenter', () => {
  cancelAnimationFrame(stopAnimation);
})

// moon.addEventListener('mouseleave', () => {
//   planet();
// })

let toggle = false;

moon.addEventListener('click', () => {

  if(!toggle) {
     cancelAnimationFrame(stopAnimation);  
      const tl = gsap.timeline();
      tl.to('.line, .earth',{opacity: 0})
      tl.to('.moon',{x: -100, y: 100, scale: 20, duration: 2, ease: 'power2.inOut'})
      tl.to('.description> *',{x:0, opacity: 1, stagger: 0.2})
  } else {
      const tl = gsap.timeline();
      tl.to('.description> *',{x:100, opacity: 0})
      tl.to('.moon',{scale: 1,x, y})
      tl.to('.line, .earth',{opacity: 1,onComplete:planet})      
  } 
  toggle = !toggle;
})

