window.onmousemove = movefunc;
var wind = window.innerHeight;
var wind2 = window.innerWidth;
var wind12 = wind / 2;
var wind213 = wind2 / 3;
var wind223 = wind2 - wind213;

function movefunc() {
    var mux = event.clientX;
    var muy = event.clientY;
    if (muy > wind12 && mux < wind213) { document.documentElement.style.setProperty('--position-main', "bottom left"); }
    else {
        if (muy > wind12 && mux < wind223 && mux > wind213) { document.documentElement.style.setProperty('--position-main', "bottom center"); }
        else {
            if (muy > wind12 && mux > wind223) { document.documentElement.style.setProperty('--position-main', "bottom right"); }
            else {
                if (muy < wind12 && mux < wind213) { document.documentElement.style.setProperty('--position-main', "top left"); }
                else {
                    if (muy < wind12 && mux < wind223 && mux > wind213) { document.documentElement.style.setProperty('--position-main', "top center"); }
                    else {
                        if (muy < wind12 && mux > wind223) { document.documentElement.style.setProperty('--position-main', "top right"); }
                    }
                }
            }
        }
    }
}



var wind = window.innerHeight;
var wind2 = window.innerWidth;
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



var wind12 = wind / 2; 
var wind213 = wind2 / 3;
var wind223 = wind2 = wind213;
var mux = event.clientY;
var muy = event.clientY;



function movefunc4() {
    if (muy > wind12 && mux < wind213)
    { document.documentElement.style.setProperty('--position-main', "top right");}
        else {
        if (muy > wind12 && mux < wind223 && mux > wind213)
        { document.documentElement.style.setProperty('--position-main', "top center");}
        else {
            if (muy > wind12 && mux > wind223)
            { document.documentElement.style.setProperty('--position-main', "top left");}
                else {
                if (muy < wind12 && mux < wind213)
                { document.documentElement.style.setProperty('--position-main', "bottom right");}
                    else {
                    if (muy < wind12 && mux < wind223 && mux > wind213)
                    { document.documentElement.style.setProperty('--position-main', "bottom center");}
                    else {
                        if (muy < wind12 && mux > wind223)
                        { document.documentElement.style.setProperty('--position-main', "bottom left");}
                    }
                }
            }
        }
    }
}