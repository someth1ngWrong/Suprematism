let controller = new ScrollMagic.Controller()

let animationAll = anime.timeline({
  duration: 200,
  autoplay: false,
  delay: anime.stagger(0)
})

animationAll
  .add ({
    targets: '.box-03',
    left: 478,
    top: 416,
  },200)
  .add ({
    targets: '.box-04',
    left: 1185,
    top: 463,
    rotate:[165,0],
  },200)
  .add ({
    targets: '.box-05',
    left: 846,
    top: 357,
  },200)
  .add ({
    targets: '.box-01',
    left: -152,
    top: 339,
    rotate:[-10,-90],
  },200)
  .add ({
    targets: '.box-02',
    left: 1105,
    top: 168,

  },200)
  .add ({
    targets: '.box-15',
    left: 351,
    top: 162,
    rotate:[-15,0],
  },200)
  .add ({
    targets: '.box-06',
    left: 304,
    top: 180,
    rotate:[166,90],
  },200)
  .add ({
    targets: '.box-12',
    left: 464,
    top: 253,
    rotate:[79,90],
  },200)
  .add ({
    targets: '.box-16',
    left: 877,
    top: 452,
    rotate:[64,0],
  },200)
  .add ({
    targets: '.box-09',
    left: 505,
    top: 198,
    rotate:[-32,90],
  },200)
  .add ({
    targets: '.box-10',
    left: 944,
    top: 335,
    rotate:[-32,90],
  },200)
  .add ({
    targets: '.box-11',
    left: 533,
    top: 510,
    rotate:[-32,90],
  },200)
  .add ({
    targets: '.box-14',
    left: 443,
    top: 404,
    rotate: 90,
  },200)
  .add ({
    targets: '.box-07',
    left: 704,
    top: 493,
  },200)
  .add ({
    targets: '.box-13',
    left: 694,
    top: 123,
  },200)
  .add ({
    targets: '.box-19',
    left: 1190,
    top: 509,
    rotate:[-15,90],
  },200)
  .add ({
    targets: '.box-20',
    left: 1266,
    top: 565,
    rotate:[-15,90],
  },200)
  .add ({
    targets: '.box-18',
    left: 1114,
    top: 595,
    rotate:[-15,90],
  },200)
  .add ({
    targets: '.box-08',
    left: 747,
    top: 391,
  },200)
  .add ({
    targets: '.box-17',
    left: 976,
    top: 438,
  },200)
  .add ({
    targets: '.box-21',
    left: 746,
    top: 378,
    rotate:[-38,90],
  },200);



//   new ScrollMagic.Scene({
//   targetElement: ['box-01', 'box-02'],
//   triggerHook: 'onEnter'
// },200)
//
// .addTo(controller)
// .on('enter', function(){
//   animationAll.play()
// })



let htmlBox01 = document.getElementById('htmlBox01')
htmlBox01.onclick = animationAll.play


let animationAllTwo = anime.timeline({
  duration: 500,
  autoplay: false,
  delay: anime.stagger(0)
})

animationAllTwo
  .add ({
    targets: '.box-01',
    left: -202,
    top: 323,
  })
  .add ({
    targets: '.box-15',
    left: 246,
    top: 172,
  })
  .add ({
    targets: '.box-16',
    left: 271,
    top: 486,
  })
  .add ({
    targets: '.box-03',
    left: 296,
    top: 498,
  })
  .add ({
    targets: '.box-04',
    left: 320,
    top: 497,
  })
  .add ({
    targets: '.box-13',
    left: 344,
    top: 647,
  })
  .add ({
    targets: '.box-14',
    left: 314,
    top: 535,
  })
  .add ({
    targets: '.box-21',
    left: 379,
    top: 567,
  })
  .add ({
    targets: '.box-06',
    left: 452,
    top: 601,
  })
  .add ({
    targets: '.box-19',
    left: 528,
    top: 650,
  })
  .add ({
    targets: '.box-12',
    left: 585,
    top: 677,
  })
  .add ({
    targets: '.box-20',
    left: 633,
    top: 698,
  })
  .add ({
    targets: '.box-07',
    left: 707,
    top: 600,
  })
  .add ({
    targets: '.box-17',
    left: 878,
    top: 683,
  })
  .add ({
    targets: '.box-18',
    left: 966,
    top: 727,
  })
  .add ({
    targets: '.box-08',
    left: 1011,
    top: 726,
  })
  .add ({
    targets: '.box-05',
    left: 1056,
    top: 733,
  })
  .add ({
    targets: '.box-02',
    left: 1152,
    top: 589,
  })
  .add ({
    targets: '.box-09',
    left: 1277,
    top: 689,
  })
  .add ({
    targets: '.box-11',
    left: 1303,
    top: 689,
  })
  .add ({
    targets: '.box-10',
    left: 1329,
    top: 689,
  });



  let htmlBox02 = document.getElementById('htmlBox02')
  htmlBox02.onclick = animationAllTwo.play



  let animationAllJapan = anime.timeline({
    duration: 200,
    autoplay: false,
    delay: anime.stagger(0)
  })

  animationAllJapan
    .add ({
      targets: '.box-13',
      width: 308,
      height:308,
      left: 566,
      top: 246,
      zIndex: {
        value: [1, 6],
        round: true
      },

    })
    .add ({
      targets: '.box-02',
      left: 0,
      top: 0,
      width: 1440,
      height: 800,
      borderRadius: ['100%','0%'],
      zIndex: {
        value: [2, 5],
        round: true
      },
    });

    // let warp = document.querySelector('.warp')
    // new ScrollMagic.Scene({
    //   targetElement: warp,
    //   triggerHook: 'onEnter',
    //   duration: warp.getBoundingClientRect().height
    // })
    // .addTo(controller)
    // .setPin('.box-02','box-13')
    // .on('progress', e => {
    //   animationAllJapan.seek(animationAllJapan.duration * e.progress)
    // })


    let htmlBox03 = document.getElementById('htmlBox03')
    htmlBox03.onclick = animationAllJapan.play



// -----------------------------------------------------------


// let animationAllJapanOne = anime({
//   targets: '.box-13',
//   width: 308,
//   height:308,
//   left: 566,
//   top: 246,
//   zIndex: {
//     value: [1, 6],
//     round: true
//   },
//   autoplay: false,
//   duration: 500,
// })
//
//
//   let warp = document.querySelector('#warp')
//   new ScrollMagic.Scene({
//     targetElement: warp,
//     triggerHook: 'onEnter',
//     duration: warp.getBoundingClientRect().height
//   })
//   .addTo(controller)
//   .setPin('.box-02')
//   .on('progress', e => {
//     animationAllJapanOne.seek(animationAllJapanOne.duration * e.progress)
//   })
//
//   let animationAllJapanTwo = anime({
//     targets: '.box-02',
//     left: 0,
//     top: 0,
//     width: 1440,
//     height: 800,
//     borderRadius: ['100%','0%'],
//     zIndex: {
//       value: [2, 5],
//       round: true
//     },
//     autoplay: false,
//     duration: 500,
//   })
//   new ScrollMagic.Scene({
//     targetElement: warp,
//     triggerHook: 'onEnter',
//     duration: warp.getBoundingClientRect().height
//   })
//   .addTo(controller)
//   .setPin('.box-13')
//   .on('progress', e => {
//     animationAllJapanTwo.seek(animationAllJapanTwo.duration * e.progress)
//   })
