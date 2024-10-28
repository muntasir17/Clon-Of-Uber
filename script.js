let scrollRevealOption = {
    distance:"10px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".right-div-items img",{
    ...scrollRevealOption,
 origin:"bottom",
});
 ScrollReveal().reveal(".details-container",{
     ...scrollRevealOption,
 delay : 400,
});

ScrollReveal().reveal(".makeit",{
    ...scrollRevealOption,
 origin:"bottom",
});
ScrollReveal().reveal(".uber",{
    ...scrollRevealOption,
 origin:"top",
});
ScrollReveal().reveal(".boc3 img",{
    ...scrollRevealOption,
    delay : 400,
});
// ScrollReveal().reveal("..box2 img",{
//     ...scrollRevealOption,
// delay : 400,
// });
ScrollReveal().reveal(".box2 img",{
    ...scrollRevealOption,
 origin:"rigth",
});
ScrollReveal().reveal(".app1",{
    ...scrollRevealOption,
 origin:"rigth",
});
ScrollReveal().reveal(".app1 i",{
    ...scrollRevealOption,
delay : 400,
});
ScrollReveal().reveal(".main3 i",{
    ...scrollRevealOption,
delay : 600,
});
ScrollReveal().reveal(".fa-google-play",{
    ...scrollRevealOption,
delay : 400,
});
ScrollReveal().reveal(".main5",{
    ...scrollRevealOption,
delay : 400,
});

let bars = document.querySelector(".bars");
let menuItemS = document.querySelector(".menu-items");
bars.addEventListener("click", ()=>{
    menuItemS.classList.toggle("active")
})


















