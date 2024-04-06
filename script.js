function homePageAnimation() {
    gsap.set(".slidesm", {
        scale: 5,
    })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: .5,
        },
    })

    tl
        .to(".vdodiv", {

            '--clip': "0%",
            ease: Power2,
        }, 'a')
        .to(".slidesm", {
            scale: 1,
            ease: Power2,
        }, 'a')
        .to(".lft", {
            x: "-5%",
            ease: Power4,
        }, 'b')
        .to(".rgt", {
            x: "5%",
            ease: Power4,
        }, 'b')
}

function realAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.9,
        },
        xPercent: -300,
    })
}

function paraAnimation() {
    var clutter = "";

    document.querySelector(".textpara")
        .textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp<span>`
            clutter += `<span>${e}</span>`
        })
    document.querySelector(".textpara").innerHTML = clutter

    gsap.set(".textpara span", { opacity: 0.5 })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 2,
        },
        opacity: 1,
        stagger: 3,
        ease: Power4,
    })
}

function loco () {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capAnimation () {
    gsap.to (".cap:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 2,
        },
        y: 0,
        ease: Power4
    })
}

document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: function(){
            document.body.setAttribute("theme",e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme",e.dataset.color);
        }
    })
})

paraAnimation();
homePageAnimation();
realAnimation();
loco();
capAnimation();