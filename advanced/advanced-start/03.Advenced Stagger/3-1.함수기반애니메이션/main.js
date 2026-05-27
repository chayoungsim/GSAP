

function rotateFn(i,t,arr) {
   if(t.classList.contains('orange')) {
     return 360;
   } else {
     return -360;
   }
}

gsap.to('.box',{
  rotation:rotateFn,
  repeat:-1,
  duration:2,
  ease:'none',
})