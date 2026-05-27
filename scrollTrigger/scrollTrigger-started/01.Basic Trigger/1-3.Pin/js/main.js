
const split = new SplitText('h3', {type: 'chars'});

const tl = gsap.timeline()
.from('.tiger',{scale:0,ease:'back(3)'})
.from(split.chars,{y:100,opacity:0,stagger:0.05,ease:'back(3)'})

ScrollTrigger.create({
  trigger: ".banner",
  start: "top center",  
  end: "+=1000",
  //markers: true,
  pin: true,
  animation: tl,
  scrub: 1,
  //pinSpacing: false,
});


ScrollTrigger.create({
  trigger: ".section03",
  start: "top",
  end: "+=2000",
  animation: gsap.to('.section03 h2',{rotation:360}),
  scrub: 1,
  markers: true,
  pin: true,
  //pinSpacing: false,
});





