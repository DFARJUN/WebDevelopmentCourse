//window.onscroll = myFunction4;
function myFunction4() {
    var wind = window.innerHeight;
    var wind2 = window.innerWidth;
    var yoff = window.pageYOffset;
    var dordor = document.getElementById("mania").getBoundingClientRect().y;
    if ((wind / 2) < dordor && wind > dordor) {
        var fff = dordor - (wind / 2)
        if (fff < wind2-1200) {
 document.documentElement.style.setProperty('--mania-x', fff + "px");
        }
    }
}
