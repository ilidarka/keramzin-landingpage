function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
};

var modal = document.getElementById("modalWindow");
var topBtn = document.getElementById("topPhoneButton");
var bottomBtn = document.getElementById("bottomPhoneButton");
var span = document.getElementsByClassName("closeButton")[0];

topBtn.onclick = function() {
    modal.style.display = "block";
};

bottomBtn.onclick = function() {
    modal.style.display = "block";
};

span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};