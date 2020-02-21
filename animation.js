
let animationAll = anime.timeline({
  duration: 1000,
  autoplay: false
})

animationAll
  .add ({
    // position: absolute,
    targets: '.box-01',
    left: -115,
    top: 300,
    rotate:'[-10,-90]',
  })
  .add ({
    targets: '.box-02',

  });




let htmlBox01 = document.getElementById('htmlBox01')
htmlBox01.onclick = animationAll.play



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
