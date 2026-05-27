
gsap.registerPlugin(GSDevTools, SplitText);

gsap.set('.stage',{autoAlpha:1})

const split = new SplitText('h1',{type:'chars'});


// const tl = gsap.timeline();

// tl.from(split.chars,{
//   y:-100,
//   opacity:0,
//   stagger:0.05
// })
// .to(split.chars,{
//   color:gsap.utils.wrap(['red','green','blue'])
// })

gsap.registerEffect({
  name:'textEffect',
  extendTimeline:true,
  defaults:{
    y:-100,
    colors:['red','green','blue']
  },
  effect:(target,config) => {
    const split = new SplitText(target,{type:'chars'});
    const tl = gsap.timeline();
    tl.from(split.chars,{
      y:config.y,
      opacity:0,
      stagger:0.05
    })
    .to(split.chars,{
      color:gsap.utils.wrap(config.colors)
    })

    return tl;
  }
})


//1.
// gsap.effects.textEffect('h1');
// gsap.effects.textEffect('h2',{y:100,colors:['white','green']});

//2. 순차재생
const animation = gsap.timeline();
animation.textEffect('h1')
         .textEffect('h2',{y:'random(-100,100)',colors:['white','green']});

//