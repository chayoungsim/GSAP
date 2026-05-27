// tween안에 연결

const tween = gsap.to('.tiger',{
  x:500,
  rotation:360,
  duration:3,
  // scrollTrigger: {
  //   trigger:'.tigerSection',
  //   start:'top center',
  //   end:'bottom center',
  //   scrub:1,
  //   markers:true 
  // }
})

// 생성자를 만들어서


ScrollTrigger.create({
  trigger:'.tigerSection',
  start:'top center',
  end:'bottom 25%',
  scrub:1,
  markers:true,
  animation:tween,
                //enter leave enterBack leaveBack 
  toggleActions:'restart none none reverse'
})

