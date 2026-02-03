function about(event) {
    event.preventDefault();
    document.getElementById("interface").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("promotions").style.display = "none";
    document.getElementById("reviews").style.display = "none";
    document.getElementById("contact").style.display = "none";
   
}

function menu(event) {
    event.preventDefault();
    document.getElementById("interface").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("promotions").style.display = "none";
    document.getElementById("reviews").style.display = "none";
    document.getElementById("contact").style.display = "none";
    
}

function promotions(event) {
    event.preventDefault();
    document.getElementById("interface").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("promotions").style.display = "block";
    document.getElementById("reviews").style.display = "none";
    document.getElementById("contact").style.display = "none";

}

function reviews(event) {
    event.preventDefault();
    document.getElementById("interface").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("promotions").style.display = "none";
    document.getElementById("reviews").style.display = "block";
    document.getElementById("contact").style.display = "none";
    
}
function contact(event) {
    event.preventDefault();
    document.getElementById("interface").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("promotions").style.display = "none";
    document.getElementById("reviews").style.display = "none";
    document.getElementById("contact").style.display = "block";
 
}
