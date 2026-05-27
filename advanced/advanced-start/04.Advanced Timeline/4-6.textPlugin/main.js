
// gsap.registerPlugin(TextPlugin);


// gsap.to('.big',{
//   duration:2,
//   text:{
//     value:"This is the new text",
//     delimiter:""
//   },
//   repeat:1,
//   yoyo:true,
//   repeatDelay:1

// })


gsap.to('.cursor',{
  opacity:0,
  repeat:-1,
  yoyo:true,
  duration:0.2,
  repeatDelay:0.3
})

const text = ['html','css','javascript','repeat','gsap']

function typing(arr) {
  const tl= gsap.timeline()
  .to('.big',{
    duration:arr[0] ==="javascript" ? 0.6 : 0.3,
    text:arr[0],
    repeat:1,
    yoyo:true,
    repeatDelay:1    
  })

  text.push(text.shift())



  // 지연된 호출
  // 3초뒤 함수를 다시 실행해주세요. // 재귀호출느낌
  gsap.delayedCall(3,typing,[arr])

}

typing(text)