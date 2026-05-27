gsap.set('.bg > div',{
  xPercent:-10,
  opacity:0,
})




gsap.registerEffect({
  name:'textEffect',
  extendTimeline:true,
  defaults: {
    y:30,
    opacity:0
  },
  effect:(target,config) => {
      const {chars} = new SplitText(target, {type:"chars"});
      const index = target[0].dataset.index;
      const tl = gsap.timeline();
      tl.from(chars, {y:config.y, opacity:config.opacity,stagger:0.1})
        .to(`.bg >div:nth-child(${index})`,{xPercent:0, opacity:1},0)
        .to(chars, {delay:1, opacity:config.opacity,stagger:0.03})
        .to(`.bg >div:nth-child(${index})`,{xPercent:10, opacity:0},'<')
      
      return tl;  

  }
})

function textAnimation() {
  const animation = gsap.timeline();
  animation.textEffect('.ex1')
            .textEffect('.ex2')
            .textEffect('.ex3')
            .textEffect('.ex4')

  animation.eventCallback('onUpdate',() => {
    if(animation.progress() ===1) {
      animation.restart();
    }
  })          
}


textAnimation();