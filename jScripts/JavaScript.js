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

var wind = window.innerHeight;
var newwind= wind-70
document.documentElement.style.setProperty('--height-win', newwind + "px");

var widwed = newwind / 2
document.documentElement.style.setProperty('--width-win', widwed + "px");

var widscout = newwind / 1.41
document.documentElement.style.setProperty('--width-scout', widscout + "px");





// Open the Modal
function openModal() {
    document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);


// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
