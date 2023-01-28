gsap.set(".banner-container", {
  css: {
    position: "relative"
  }
})


gsap.set("#monitor", {
  css: {
    width: "30%",
    // height: "50%",
    position: "absolute",
    left: "30%",
    bottom: "7%",
  },
});

gsap.set("#laptop", {
  css: {
    // height: "30%",
    width: "25%",
    position: "absolute",
    left: "50%",
    bottom: "5%",
    rotation: 0,
  },
});

gsap.set("#mouse", {
  css: {
    // height: "5%",
    width: "4%",
    position: "absolute",
    left: "76%",
    bottom: "5%",
    rotation: 0,
  },
});

// gsap.set("#camera", {
//   css: {
//     // height: "15%",
//     width: "12%",
//     position: "absolute",
//     left: "12%",
//     bottom: "5%",
//     rotation: 0,
//   },
// });

gsap.set("#phone", {
  css: {
    // height: "21%",
    width: "5%",
    position: "absolute",
    left: "27%",
    bottom: "5%",
    // scale: 0.35,
    rotation: 0,
  },
});

gsap.set("#book", {
  css: {
    // height: "8%",
    width: "12%",
    position: "absolute",
    left: "12%",
    bottom: "5%",
    //  scale: 1.8,
    rotation: 0,
  },
});

gsap.set("#mug", {
  css:{
    // height: "15%",
    width: "8%",
   position: "absolute",
   left: "84%",
   bottom: "4%",
   rotation: 0
  }
});


//====ATTEMPT 1
// const camera = document.querySelector("#camera")
const phone = document.querySelector("#phone")
const monitor = document.querySelector("#monitor")
const laptop = document.querySelector("#laptop")
const mouse = document.querySelector("#mouse")
const book = document.querySelector("#book")
const mug = document.querySelector("#mug")
const bannerObjects = document.querySelector(".bannerObjects")

//====HELPER FUNCTIONS
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);
const randomDuration = random(3, 6)

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}
// function dirRandom (array){
//   return array[Math.floor(Math.random() * array.length)];
// }

// DIRECTION: Number
const arrayNum = [-1,1] 
const dirNum = arrayNum => arrayNum[Math.floor(Math.random() * arrayNum.length)]
const dirNums = [dirNum(arrayNum), dirNum(arrayNum), dirNum(arrayNum) ]

// BUTTON COMMAND
const levitateAll = () =>{
  levitate(monitor, ...dirNums, 50, 100, -50, -100)
  // levitate(camera, ...dirNums, 20 ,100,0,250)
  levitate(book, ...dirNums, 20 ,100,0,250)
  levitate(phone, ...dirNums, 10 ,55, 10,50)
  levitate(laptop, ...dirNums, 50, 200, -10, 150)
  levitate(phone, ...dirNums, 20 ,55, -10,150)
  levitate(mouse, ...dirNums, 20 ,50,-20,60)
  levitate(mug, ...dirNums, 20,200,-10,60)
  // levitate(book, ...dirNums, 20,150, -10 ,70)  
}

// LEVITATE: PUTTING ALL TOGETHER
function levitate(item, dir1, dir2, dir3, xmin, xmax, ymin, ymax){
  sway(item, dir1);
  movelat(item, dir2, xmin, xmax);
  movelong(item, dir3, ymin, ymax);
}

// MOVEMENT FUNCTIONS
function sway(item, direction){
  gsap.to(item, randomDuration(), {
    rotation : randomAngle(direction),
    ease: Sine.easeInOut,
    onComplete: sway,
    onCompleteParams: [item, direction * -1]
  })
}
function movelat(item, direction, min, max) {
    gsap.to(item, randomDuration(), {
    x: Math.floor(Math.random() * (min - max + 1) + min),
    ease: Sine.easeInOut,
    onComplete: movelat,
    onCompleteParams: [item, direction * -1, min, max]
  });
}
function movelong( item, direction, min, max){
  gsap.to(item, randomTime(), {
    y: Math.floor(Math.random() * (min - max + 1) + min),
    ease: Sine.easeInOut,
    onComplete: movelong,
    onCompleteParams: [item, direction * -1, min, max]
  });
}

// EVENT : ONCLICK
document.querySelector("#levitate").onclick = function(){
  levitateAll();
}


document.querySelector("#restore").onclick = function(){
  gsap.killTweensOf(laptop)
  gsap.killTweensOf(mouse)
  gsap.killTweensOf(monitor)
  gsap.killTweensOf(book)
  gsap.killTweensOf(mug)
  // gsap.killTweensOf(camera)
  gsap.killTweensOf(phone)

 
  

  gsap.to("#monitor", {
    css: {
      x: "0%",
      y: "0%",
      rotation: 0
    },
  });
  gsap.to("#laptop", {
    css: {
      x: "0%",
      y: "0%",
      rotation: 0
    },
  });
  // gsap.to("#camera", {
  //   css: {
  //     x: "0%",
  //     y: "0%",
  //     rotation: 0
  //   },
  // });

  gsap.to("#phone", {
    css: {
      x: "0%",
      y: "0%",
      rotation: 0
    },
  });

  gsap.to("#mouse", {
    css: {
      x: "0%",
      y: "0%",
      rotation: 0
    },
  });
  
  gsap.to("#book", {
    css: {
      x: "0%",
      y: "0%",
      rotation: 0
    },
  });

  gsap.to("#mug", {
    css: {
      x: "0%",
      y: "0%",
      rotation: 0
    },
  });
  
}


// Buttons
document.querySelector("#try").addEventListener("click", ()=>{
  const obj_try = document.querySelector("#try")
  const obj_lev = document.querySelector("#levitate")
  const obj_res = document.querySelector("#restore")


  obj_try.style.display = "none";
  obj_lev.style.display = "inline";
  obj_res.style.display = "inline"

})
