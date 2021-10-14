var filenya = [,,,,,,];

function handle(id, no) {
    var file = document.getElementById(id).files;
    filenya[no] = file;
    if (file.length < 1) {
        document.getElementsByClassName("upload")[no].innerHTML = "Pilih Gambar";
    }
    else {
        document.getElementsByClassName("upload")[no].innerHTML = file[0].name;
    }
}

function submit() {
    var error = "";
    var isEmpty = false;
    for (var i = 0; i < filenya.length; i++) {
        if (filenya[i] === undefined) {
            isEmpty = true;
            if (error.length > 0) {
                error += "," + findError(i);
            }
            else {
                error += findError(i);
            }
        }
        else {
            if (filenya[i].length < 1) {
                isEmpty = true;
                if (error.length > 0) {
                    error += "," + findError(i);
                }
                else {
                    error += findError(i);
                }
            }
        }
    }
    if (isEmpty) {
        Swal.fire(
            'File not found',
            error + "Belum diupload",
            'error'
        )
    }
    else {
        //type your code for sending data to server
    }
}

function findError(no) {
    switch (no) {
        case 0:
            return "induksi";
            break;
        case 1:
            return "pcr";
            break;
        case 2:
            return "ktp";
            break;
        case 3:
            return "sim";
            break;
        case 4:
            return "ijazah";
            break;
        case 5:
            return "mcu";
            break;
        case 6:
            return "surat pernyataan";
            break;
    }
}

//footer
var footer = document.getElementsByClassName("footer")[0];
var progress = document.getElementsByClassName("progress");
var circle = progress[0].getElementsByClassName("circle");
var line = progress[0].getElementsByClassName("line");
var label = progress[1].getElementsByClassName("label");
circle[0].style.border = "3px solid #5BAE67";
circle[0].style.color = "white";
circle[0].style.backgroundColor = "#5BAE67";
line[0].style.background = "linear-gradient(180deg, #2F9E4D 0%, #56C866 53.12%, #B8DE9C 94.27%)";
label[0].style.color = "#5BAE67";

circle[1].style.border = "3px solid #5BAE67";
circle[1].style.color = "white";
circle[1].style.backgroundColor = "#5BAE67";
line[1].style.background = "linear-gradient(180deg, #2F9E4D 0%, #56C866 53.12%, #B8DE9C 94.27%)";
label[1].style.color = "#5BAE67";

circle[2].style.border = "3px solid #5BAE67";
circle[2].style.color = "white";
circle[2].style.backgroundColor = "#5BAE67";
line[2].style.background = "linear-gradient(180deg, #2F9E4D 0%, #56C866 53.12%, #B8DE9C 94.27%)";
label[2].style.color = "#5BAE67";

circle[3].style.border = "3px solid #5BAE67";
circle[3].style.color = "#5BAE67";
label[3].style.color = "#5BAE67";

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