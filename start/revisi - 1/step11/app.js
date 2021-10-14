//footer
var footer = document.getElementsByClassName("footer")[0];
var progress = document.getElementsByClassName("progress");
var circle =  progress[0].getElementsByClassName("circle");
var label = progress[1].getElementsByClassName("label");
circle[0].style.border = "3px solid #5BAE67";
circle[0].style.color = "#5BAE67";
label[0].style.color = "#5BAE67";
posFooter();
function posFooter() {
    if (document.body.scrollHeight < window.innerHeight){
        footer.classList.remove("space");
        footer.classList.add("fixed");
    }
    else {
        footer.classList.remove("fixed");
        footer.classList.add("space");
    }
}
function resize() {
    posFooter();
}