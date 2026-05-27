const $ = (node) => document.querySelector(node);


const tiger = $('#tiger');
const button = $('#button');
const time = $('#time');
const progress = $('#progressSlider');


const animation = gsap.to(tiger, { 
    x:100,
    duration:6,
    motionPath: {
      path:"#route",
      align:tiger
    },
    onUpdate: update,
    onComplete: () => {
      button.textContent = 'play';
      animation.restart();
    }
 })

//animation.paused(true);//getter true/false


function update() {
  time.textContent = animation.time().toFixed(2);
  progress.value = animation.progress().toFixed(2);
} 


progress.addEventListener('input',(e) => {
  const target = e.currentTarget;
  animation.progress(target.value).pause();
  time.textContent = animation.time().toFixed(2);
  button.textContent = "pause" 
})

function setButtonState(){
  button.textContent = animation.paused() ? "play" : "pause"
}

 button.addEventListener('click', ()=> {
    console.log("ddd")
    animation.paused(!animation.paused());      
    if(animation.progress() === 1) {
       animation.restart();
    }

    setButtonState();
 })


const home = $('#home');
const mountain = $('#mountain');
const company = $('#company');
const river = $('#river');

const svg = $('svg');


// 이벤트 위임 event delegation

// home.addEventListener('click', () => {
//   animation.pause();
//   gsap.to(animation,{progress:0,duration:3})
// })

// mountain.addEventListener('click', () => {
//   animation.pause();
//   gsap.to(animation,{progress:0.21,duration:3})
// })

// river.addEventListener('click', () => {
//   animation.pause();
//   gsap.to(animation,{progress:0.47,duration:3})
// })

// company.addEventListener('click', () => {
//   animation.pause();
//   gsap.to(animation,{progress:1,duration:3})
// })


svg.addEventListener('click',(e) => {
  console.log(e.currentTarget) // svg  이벤트 걸린대상
  console.log(e.target)  // 마우스를 처음 만난대상

  const target = e.target.closest('g');

  if(!target) return;

  const id = target.getAttribute('id');
  if(!id) return;

  if(id=== 'svg') return;

  let progress = 0;
  animation.pause();
  switch(id){
    case 'home': 
    progress = 0;
    break;

    case 'mountain': 
    progress = 0.21 ;
    break;

    case 'river': 
    progress = 0.47 ;
    break;

    case 'company': 
    progress = 1 ;
    break

  }

  gsap.to(animation,{progress,duration:3});
  setButtonState();

})





// 이벤트 버블링
// 인접한 대상 찾기 closest
// 속성 가져오기 getAttribute
// if
// switch case문

