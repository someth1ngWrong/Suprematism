
let animationBox01 = anime({
  targets: '.box-01',
  backgroundColor: '#ffffff',
  left: 30,
  easing: 'easeInOutQuad',
  duration: 300,
  autoplay: false
})

// let animationBox02 = anime({
//   targets: '.box-02',
//   backgroundColor: '#000000',
//   easing: 'easeInOutQuad',
//   duration: 300,
//   autoplay: false,
// })



let htmlBox01 = document.getElementById('htmlBox01')
htmlBox01.onclick = animationBox01.play



// let animationBox02 = anime({
//   targets: '.box-02',
//   backgroundColor: '#000000',
//   easing: 'easeInOutQuad',
//   duration: 300,
//   autoplay: false,
// })

// let htmlBox02 = document.getElementById('htmlBox02')
// htmlBox02.onclick = animationBox02.play


// document.querySelector('.play-pause-demo .play')
