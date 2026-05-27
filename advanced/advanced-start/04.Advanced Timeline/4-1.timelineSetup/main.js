
let tl = gsap.timeline({
  defaults: {
    duration: 0.3,
    scale:0,
    opacity:0
  }
})

tl.add('b0')
  .from('.b0',{})
  .addPause()

  .add('b1')
  .from('.b1',{y:100,rotation:-360})
  .addPause()

  .add('b2')
  .from('.b2',{y:-100,rotation:180,y:-360})
  .addPause()

  .add('b3')
  .from('.b3',{scale:2})


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotNav = document.querySelector('.dotNav');



next.addEventListener('click',()=> {
  tl.play()
});

prev.addEventListener('click',()=> {
  tl.reverse();
});


//객체가 가지고 있는 카값만 배열로 반환한다.
//Objec.keys(객체)

Object.keys(tl.labels).forEach((label,index) => {
  const template =`
    <div class="dot" data-label="${label}"></div>
  `
  dotNav.insertAdjacentHTML('beforeend',template)

  gsap.utils.toArray('.dot')[index].addEventListener('click', (e) => {

     const label = e.target.dataset.label
  

      tl.play(label)
      //gsap.to(tl,{time:index+1})
  
  })

})