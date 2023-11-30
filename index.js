window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("overlay").style.width = "12%";
        document.getElementById("name").style.display = "none";
        document.getElementById("name").style.transition = "2s";
        document.getElementById("nav").style.marginLeft = "60px";
        document.getElementById("profileimg").style.translate = "-25px";
        // document.getElementById("media-scrol").style.marginleft = "-10px";


    } else {
        document.getElementById("overlay").style.width = "20%";
        document.getElementById("name").style.display = "block";
        document.getElementById("nav").style.marginLeft = "110px";
        document.getElementById("profileimg").style.marginRight = "2px";
        document.getElementById("profileimg").style.translate = "10px";
        // document.getElementById("media-scrol").style.marginLeft = "200px";
    }
}

/* const progressElem = document.querySelector('#progress')
const html = document.querySelector('html')

function scrollHandler() {
    const screenHeight = window.innerHeight
    const scrollY = Math.round(window.scrollY)
    const maxScreenHeight = html.scrollHeight
    
    const howMuchScroll = screenHeight + scrollY
    const progress = (howMuchScroll / maxScreenHeight) * 100
    
    progressElem.value = progress
}

scrollHandler()

window.addEventListener('scroll', scrollHandler) */

document.addEventListener('DOMContentLoaded', (event) => {
    const progressElem = document.querySelector('#progress')
 
    function scrollHandler() {
        const scrollY = Math.round(window.scrollY)
        const maxScrollHeight = document.body.scrollHeight - window.innerHeight
 
        const progress = (scrollY / maxScrollHeight) * 100
 
        progressElem.value = progress
    }
 
    scrollHandler()
 
    window.addEventListener('scroll', scrollHandler)
 });
 