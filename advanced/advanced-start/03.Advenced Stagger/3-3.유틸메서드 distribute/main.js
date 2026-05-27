



let end = gsap.utils.distribute({
  base: 0,
  amount: 350,
  ease: 'power3.inOut',
  from: 'center'
})




gsap.to('.bar',{
  height: end,
  stagger:0.01

})

GSDevTools.create();


