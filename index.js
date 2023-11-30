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