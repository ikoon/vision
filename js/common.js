// 슬라이드
$('#slideView1').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: $('.slide-prev'),
    nextArrow: $('.slide-next'),
});


// card 더보기
$('.card-val-js').on("click", function () {
    $(this).toggleClass('card-more');
    $(this).find('picture').toggleClass('fade-in'); 
    $(this).find('.desc-normal').toggleClass('fade-out');
    $(this).find('.desc-hover').toggleClass('fade-in');       
})

$('.card-vis-js').on("click", function () { 
    $(this).find('.card-default').toggleClass('fade-out');
    $(this).find('.card-open').toggleClass('fade-in'); 
    $(this).find('.desc-hover').toggle();
    
})

$('#btnPromOpen').on("click", function () { 
    $(this).parent().parent().parent().find('.prom-hover').fadeIn()
})
$('#btnPromClose').on("click", function () { 
    $(this).parent().parent().parent().find('.prom-hover').fadeOut()
})

// const tl1 = gsap.timeline();
// const tl2 = gsap.timeline();

// // tl1.to(".vision-title", {y: -1500})
// // .to(".image-1", {
// //     scale: 1.5,
// //     opacity: 0.3, 
// // })
// tl1.to(".image-1", {
//     scale: 1.5,
//     opacity: 0.3, 
// }, "sameTime")
// // .to(".v-desc", {
// //     y: -2000,"sameTime"
// // }, "<sameTime>")
// // tl1.to(".v-title", {
// //     opacity: 1,
// //     y:-100,
// // }, "sametime")
// tl1.to(".v-desc", {y:-2000, opacity:1}, "<.5")




// 약속&비전 
// gsap.set('#section1',{height:'400vh'}) 
// ScrollTrigger.create({
//     markers: true,
//     animation: tl1,
//     trigger: "#section1", 
//     start: "top top", 
//     end: "+=400%", 
//     scrub: 0.1,
//     pin: true,
//     pinSpacing: false,
// })
// ScrollTrigger.create({
//     // markers: true,
//     trigger: "#section2", 
//     start: "center center-=200%", 
//     end: "+=100%", 
//     scrub: 0.1,
//     pin: true,
//     // pinSpacing: false,
// })




// value & way
// tl2.to(".image-intro", {
//     opacity: 0.3, 
// })
// tl2.from(".intro-title", {
//     opacity: 1,
//     y:100,
// }, "<.2")
// .to(".intro-title2", {y:-100, opacity:1}, "<.4")

// gsap.set('#value1',{height:'300vh'}) 
// ScrollTrigger.create({
//     markers: true,
//     animation: tl2,
//     trigger: "#value1", 
//     start: "top top", 
//     end: "+=300%", 
//     scrub: 0,
//     pin: true,
//     pinSpacing: false,
// })
// ScrollTrigger.create({
//     trigger: "#value2", 
//     start: "top top", 
//     end: "+=100%",
//     scrub: .25,
// })





// const timelineHeader = gsap.timeline({
//     scrollTrigger: {
//         id: "ZOOM", // Custom label to the marker
//         trigger: ".intro-section", // What element triggers the scroll
//         scrub: 0.5, // Add a small delay of scrolling and animation. `true` is direct
//         start: "top top", // Start at top of Trigger and at the top of the viewport
//         end: "+=100% 50px", // The element is 500px hight and end 50px from the top of the viewport
//         pin: true, // Pin the element true or false
//         pinSpacing: false 
//     }
// });

// timelineHeader.to(".vision-title", {
//     y: -1500,
// }, "sameTime")
// .to(".image-1", {
//     scale: 1.5,
//     opacity: 0.3, 
// }, "sameTime")

// gsap.utils.toArray(".panel").forEach((panel, i) => {
//     ScrollTrigger.create({
//       trigger: panel,
//       start: "bottom bottom", 
//     //   endTrigger: '.end-trigger',
//       pin: true, 
//       pinSpacing: false 
//     });
//   });

//   ScrollTrigger.create({
//     trigger: "#header-zoom",
//     start: "bottom bottom",
//     endTrigger: "#section2",
//     end: "bottom 50%+=100px",
//     onToggle: self => console.log("toggled, isActive:", self.isActive),
//     onUpdate: self => {
//       console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
//     }
//   });
  
  
//   ScrollTrigger.create({
//     snap: 1 / 4 // snap whole page to the closest section!
//   });

// gsap.registerPlugin(ScrollTrigger);

// var vision1 = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".ani-vision1",
//         pin: ".vis-img1",
//         scrub: 0.3,
//         start: "top top",
//         end: "top top"
//     }
// });
// vision1.to(".desc-1", {
//     opacity:0,
// }, "sameTime")
// .to(".desc-2", {
//     opacity:1
// }, "sameTime")



// gsap.to('.vis-img1', {
//     scrollTrigger: {
//       trigger: ".vis-img1",
//       scrub: true,
//       markers: true,
//       pin: true,
//       // pinType: "transform",
//       start: "top top",
//       end: "+=1000px",
//     }
//   });

//   gsap.to('.desc-1', {
//     opacity:0,
//     scrollTrigger: {
//       trigger: ".desc-1",
//       scrub: true,
//       start: "top top",
//       end: "+=1000 center",
//     }
//   });


