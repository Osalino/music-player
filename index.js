window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("overlay").style.width = "10%";
        document.getElementById("name").style.display = "none";
        document.getElementById("name").style.transition = "2s";
        document.getElementById("nav").style.marginLeft = "23px";
        document.getElementById("profileimg").style.translate = "-55px";
        // document.getElementById("media-scrol").style.marginleft = "-10px";


    } else {
        document.getElementById("overlay").style.width = "20%";
        document.getElementById("name").style.display = "block";
        document.getElementById("nav").style.marginLeft = "100px";
        document.getElementById("profileimg").style.marginRight = "2px";
        document.getElementById("profileimg").style.translate = "30px";
        // document.getElementById("media-scrol").style.marginLeft = "200px";
    }
}