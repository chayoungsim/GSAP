// gsap.to('.stage > div',{
//   y:100,
//   stagger: {
//     each:0.5,
//     repeat: 1,
//     yoyo:true,
//     onComplete() {
//       gsap.to(this.targets()[0],{
//         rotation: 360
//       })
//     }
//   }
// })



const {chars, lines, words} = new SplitText('.word > div');

const tl = gsap.timeline();

tl.from(chars, {
  opacity:0,
  duration:2,
  stagger: {
    each:0.1,
    from:'random',
    ease:'power1',
    onComplete() {
      gsap.to(this.targets()[0], {
        delay:0.5,
        duration:0,
        color:'green'
      })    
    }
  }
})
.to(lines,{
  delay:1,
  y:30,
  opacity:0,
  stagger: {
    each:0.2,
    from:'end'
  }
})

//
const l = 8 * 13;
for(let i=0; i<l; i++) {
  let template =`<div class="box"></div>`

  document.querySelector('.demo').insertAdjacentHTML('beforeend', template)

}


const stage = document.querySelector('.demo');

stage.addEventListener('click',(e) => {
  if(e.target.matches('.box')){
    gsap.to(e.target,{
      backgroundColor:'red',
      attr:{
        'data-stop': 'stop'
      }
    })

    //e.target.setAttribute('id','stop');
  }
})


const tween = gsap.to('.box',{
  scale:0.3,

  stagger: {
    each:0.5,
    onStart(){
      //console.log('start')

      const target = this.targets()[0];
      if(target.dataset.stop === 'stop') {
        tween.pause(this.startTime());
      }

    }
  }
})