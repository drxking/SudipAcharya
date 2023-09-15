let fuc = ()=>{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
fuc()

let cursor = document.querySelector(".cursor")
document.addEventListener('mousemove',(dets)=>{
    gsap.to(cursor,{
        x:dets.clientX-7.5 + "px",
        y:dets.clientY-7.5 + "px"
    })
})
document.querySelector('nav h2').addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:4
    })
})
document.querySelector('nav h2').addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:1
    })
})









// Animation Part //
let tl = gsap.timeline()
var rule = CSSRulePlugin.getRule(".section_one_inner:before");
tl.from("html",{
    opacity:0,
    duration:0.25
})
tl.to('.imgs',{
    opacity:1,
    stagger:0.3
})
tl.to('.imgs',{
    opacity:0
})
tl.from('nav h2',{
    opacity:0
})
tl.to(rule,{
    duration:0.5,
    cssRule: {height:`20vw`}
})
tl.from('.section_one_inner h1',{
    x:`110%`,
    duration:0.75})
tl.from('.section-2 p,.section-2s p',{
    opacity:0
})
tl.from(cursor,{
    opacity:0
})
gsap.to('.section-2 p,.section-2s p',{
    x:`-100%`,
    repeat:-1,
    duration:7,
    ease:"none",
})
gsap.to('.section-2s p',{
    x:`100%`,
    repeat:-1,
    duration:7,
    ease:"none",
})
gsap.to('.section-3 h1',{
    color:`#F1734C`,
    duration:2,
    scrollTrigger:
    {   
        trigger:`.section-3 h1`,
        scroller:`#main`,
        start:`top 70%`,
        scrub:true
    }
})
gsap.to('.section-3 .under',{
    width:`100%`,
    duration:2,
    backgroundColor:`#F1734C`,
    scrollTrigger:
    {   
        trigger:`.section-3 .under`,
        scroller:`#main`,
        start:`top 95%`,
        scrub:true
    }
})