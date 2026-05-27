

const $ = node => document.querySelector(node);


const boxs = document.querySelectorAll('.box'); //유사배열

const boxArray = gsap.utils.toArray('.box'); //배열

boxArray.forEach((item) => {
  item.addEventListener('click',(e) => {
     gsap.to(e.currentTarget,{
      backgroundColor:'gray',
      width: '400px'
     })
  })
})

$('#reset').addEventListener('click', () => {
    gsap.set('.box',{clearProps:'all'})

})
