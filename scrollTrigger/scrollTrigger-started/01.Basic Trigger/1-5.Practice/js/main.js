
// const tween = gsap.fromTo(".wrapper.text", 
//   { x: '100%' }, 
//   { x(){ return -(this.targets()[0].scrollWidth - innerWidth) } })

// const tween = gsap.fromTo('.wrapper.text',
//   { x(){ return -(this.targets()[0].scrollWidth) } },
//   { x:0})

// ScrollTrigger.create({
//   trigger: ".demo-text",
//   animation: tween,
//   markers: true,
//   scrub: true,
// })

const showDemo = () => {

  gsap.to('.loader',{autoAlpha:0})
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0,0)

  gsap.utils.toArray('section').forEach((section, index) => {
    const w= section.querySelector('.wrapper');

    if(w) {
      const [x, xEnd] = index % 2 ? ['100%', -(w.scrollWidth - innerWidth)] : [-(w.scrollWidth), 0]
      // console.log(x, xEnd)
      gsap.fromTo(w, { x }, { 
        x: xEnd, 
        scrollTrigger: {
          trigger: section,
          scrub: 0.5,
        }
      })
    }
  })
}


const awsome = () => {
  const tl = gsap.timeline({
    defaults:{
      ease:'none'
    }
  })
  .from('.awsome .text',{x:innerWidth})
  .to('.awsome .text',{scale:50,xPercent:-200})
  .to('body',{backgroundColor:'black',duration:0.3},'-=0.5')

  ScrollTrigger.create({
    trigger:'.awsome',
    start:'top top',
    end:'+=3000',
    animation:tl,
    pin:true,
    scrub:1,
  })
}

const tryNow = () => {
  ScrollTrigger.create({
    trigger:'.try',
    start:'top top',
    end:'+=2000',
    animation: gsap.from('.try .text',{y:50, opacity:0}),
    pin:true,
    scrub:true,
  })
}




function init(){
  showDemo();
  awsome();
  tryNow();
}


//const img = document.querySelectorAll('img');  //유사배열
const img = gsap.utils.toArray('img'); //배열
//const img = Array.from(document.querySelectorAll('img')); //배열
//const img = Array.prototype.slice.call(document.querySelectorAll('img')); //배열
//const img = [...document.querySelectorAll('img')]; //배열

const loader = document.querySelector('.loader--text');

const updateProgress = (instance) => {
  //console.log(Math.round(instance.progressedCount *100 / img.length))
  loader.textContent = `${Math.round(instance.progressedCount *100 / img.length)}%`;
}


imagesLoaded(img)
.on('progress',updateProgress)
.on('always',init)
