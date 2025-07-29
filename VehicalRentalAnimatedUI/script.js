var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursorBlur")

document.addEventListener("mousemove",function (dets) 
{
    crsr.style.left = dets.x +10+ "px"
    crsr.style.top = dets.y - 4+"px"
    crsrBlur.style.left = dets.x-70+ "px"
    crsrBlur.style.top = dets.y -70+ "px"
})

gsap.to("#nav", 
    {
        backgroundColor: "#000",
        duration: 1 ,
        height: "90px",

        scrollTrigger: 
        {
            trigger : "#nav",
            scroller: "body",
            start: "top -10%",
            end: "top -11%",
            scrub: 2
        }
})

gsap.to("#main", 
    {
        backgroundColor: "#000",
        scrollTrigger: 
        {
            trigger: "#main",
            scroller: "body",
            start: "top 90%",
            end: "top -100%",
            scrub: 2,
        }
})

var NavH4 = document.querySelectorAll("#nav h4")
NavH4.forEach(function (elem) 
{
    elem.addEventListener("mouseenter",function()
    {
        crsr.style.scale = 8
        crsr.style.border ="0.2px solid white"
        crsr.style.backgroundColor = "transparent"
    })
})

NavH4.forEach(function (elem) 
{
    elem.addEventListener("mouseleave",function()
    {
        crsr.style.scale = 0
    })
})

gsap.from("#aboutus img,#about-us-in",
{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger: 
    {
        trigger: "#aboutus",
        scroller: "body",
        start: "top 70%",
        end: "top -100%",
        scrub: 2,
    }
})

gsap.from(".card",
{
    y:50,
    opacity:0,
    duration:3,
    scrollTrigger: 
    {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 80%",
        scrub: 2,
    }
})

gsap.from("#cln1",
{
    y:-200,
    x:-90,
   
    duration:1,

    scrollTrigger: 
    {
        trigger: "#cln1",
        scroller: "body",
        start: "top 100%",
        end: "top -100%",
        scrub: 2,
    }  
})

gsap.from("#cln2",
{
    y: 100,
    x:60,
   
    duration:1,

    scrollTrigger: 
    {
        trigger: "#cln2",
        scroller: "body",
        start: "top 100%",
        end: "top -100%",
        scrub: 2,
    }  
})

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});