var time = new Date();
countDown = time.setHours(time.getHours() + 2);
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDown - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementsByClassName("timer")[0].innerHTML = hours + ":" + minutes + ":" + seconds;
    if (distance < 0) {
        clearInterval(x);

    }
}, 1000);


var posisi;
var jawaban = [];
var pertanyaan = document.getElementsByClassName("pertanyaan");
var nomor = document.getElementsByClassName("no");


//footer
var footer = document.getElementsByClassName("footer")[0];

posFooter();
function posFooter() {
    if (document.body.scrollHeight < window.innerHeight) {
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

function start() {
    posisi = 0;
    jawaban[0] = "-";
    for (var i = 1; i < pertanyaan.length; i++){
        pertanyaan[i].style.display = "none";
        jawaban[i] = "-";
    }
}

function todst(dst) {
    pertanyaan[posisi].style.display = "none";
    pertanyaan[dst].style.display = "block";
    posisi = dst;
}

function choice(no, value) {
    nomor[no].style.backgroundColor = "#B8E498";
    jawaban[no] = value;
    console.log(jawaban);
}