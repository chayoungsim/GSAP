
// gsap.to(".textContainer", {
//   x(){
//      //console.log(this.targets()[0])
//     //return -(document.querySelector(".textContainer").offsetWidth - window.innerWidth); 
//     return -(this.targets()[0].offsetWidth - window.innerWidth);
//   },
//   scrollTrigger: {
//     trigger: ".demo-text",
//     start: "20% center",
//     end: "80% center",
//     markers: true,

//     // true,false, number
//     scrub: 1 //좀더 부드럽다
//   },
// });

// const tween = gsap.to('.textContainer', {
//   x(){   
//     return -(this.targets()[0].offsetWidth - window.innerWidth);
//   }
// });

// ScrollTrigger.create({
//   trigger: ".demo-text",
//   start: "20% center",
//   end: "80% center",
//   //markers: true,
//   scrub: 1, //좀더 부드럽다
//   animation: tween
// })

// const imageTween = gsap.from('.imageContainer', {
//   x(){   
//     return -(this.targets()[0].offsetWidth - window.innerWidth);
//   }
// });

// ScrollTrigger.create({
//   trigger: ".demo-image",
//   start: "20% center",
//   end: "80% center",
//   markers: true,
//   scrub: 1, //좀더 부드럽다
//   animation: imageTween
// })


gsap.utils.toArray('.section').forEach((section, index) => {
  const w = section.querySelector('.wrapper');
  if(w) {
    let [x, xEnd] = index % 2 ? ['0',(w.offsetWidth - window.innerWidth)*-1] : [(w.offsetWidth-window.innerWidth)*-1, 0];

     gsap.fromTo(w,{
      x
     },{
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        start: "20% center",
        end: "80% center",
        markers: true,
        scrub: 1
      }
     })
  }

});