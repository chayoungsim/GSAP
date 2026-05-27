const $ = e => document.querySelector(e)


const orange = $('.orange')
const blue = $('.blue') 
const pink = $('.pink')
const green = $('.among')
const quote = $('.quote')

gsap.set([green,quote],{y:120})

gsap.defaults({
  duration:0.5,
})

function tigerAnimation() {
  const tlOrange = gsap.timeline({})
  .to(orange,{y:-50})
  .to(orange,{rotation:360})
  .to(orange,{y:0})

  const tlBlue = gsap.timeline({})
  .to(blue,{scale:2}) 
  .to(blue,{rotation:360})
  .to(blue,{scale:1})

  const tlPink = gsap.timeline({})
  .to(pink,{scale:0.5})
  .to(pink,{rotation:360})
  .to(pink,{scale:1})
  
  return [tlOrange,tlBlue,tlPink]
}

// 배열 구조 분해 할당 
// 바로실행되지 않는다.
const [orangeA, blueA, pinkA] = tigerAnimation();


function quoteAnimation(message) {
  const tl=gsap.timeline({})
  .set(quote,{text:message})
  .to([green,quote],{y:0, stagger:0.2,repeat:1, yoyo:true, repeatDelay:0.5})  
  return tl
}



const master = gsap.timeline({})
.add(blueA)
.add(quoteAnimation('Blue tiger!'))
.add(orangeA)
.add(quoteAnimation('orange tiger!'))
.add(pinkA)
.add(quoteAnimation('Pink tiger!')) 