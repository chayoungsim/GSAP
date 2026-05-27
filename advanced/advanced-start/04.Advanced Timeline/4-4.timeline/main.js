const $ = e => document.querySelector(e)


const orange = $('.orange')
const blue = $('.blue') 
const pink = $('.pink')
const green = $('.among')
const quote = $('.quote')

gsap.set([green,quote],{y:120})

gsap.defaults({
  duration:1,
})

const tlOrange = gsap.timeline({})
.to(orange,{y:-50})
.to(orange,{rotation:360})
.to(orange,{y:0})
.set(quote,{text:'orange tiger!'})
.to([green,quote],{y:0, stagger:0.2,repeat:1, yoyo:true, repeatDelay:1})

const tlBlue = gsap.timeline({})
.to(blue,{scale:2}) 
.to(blue,{rotation:360})
.to(blue,{scale:1})
.set(quote,{text:'Blue tiger!'})
.to([green,quote],{y:0, stagger:0.2,repeat:1, yoyo:true, repeatDelay:1})

const tlPink = gsap.timeline({})
.to(pink,{scale:0.5})
.to(pink,{rotation:360})
.to(pink,{scale:1})
.set(quote,{text:'Pink tiger!'})
.to([green,quote],{y:0, stagger:0.2,repeat:1, yoyo:true, repeatDelay:1})






const master = gsap.timeline({})
.add(tlBlue)
.add(tlOrange)
.add(tlPink)

