gsap.to('.stage > div',{
  y:100,
  stagger: {
    each:0.5,
    repeat: -1,
    yoyo:true
  }
})

const l = 8*13;

for(let i=0;i<l;i++) {
  let template = `<div class="box" data-index="${i}"></div>`

  document.querySelector('.stages')?.insertAdjacentHTML('beforeend',template)

}

gsap.to('.box', {
  duration:1,
  scale:0.2,
 
  ease:'power1.inOut',
  stagger: {
    each:0.1,
    grid:[8,13],
    axis:'x',
    from:'center',
    yoyo:true,
    repeat:-1,
  }
})