var filenya;
function submit() {
    filenya = document.getElementById("file").files;
    console.log(filenya);
    if (filenya.length < 1){
        Swal.fire(
            'Error',
            'File belum ada',
            'error'
        )
    }
    else {
        if (filenya[0].size > (3000*1000)){
            Swal.fire(
                'Error file size',
                'File tidak boleh lebih dari 5Mb',
                'error'
            )
        }
        else {

        }
    }
}

function handle() {
    filenya = document.getElementById("file").files;
    if (filenya.length < 1) {
        document.getElementsByClassName("upload")[0].innerHTML = "Pilih Gambar";
    }
    else {
        document.getElementsByClassName("upload")[0].innerHTML = ""+filenya[0].name;
    }
}

//footer
var footer = document.getElementsByClassName("footer")[0];
var progress = document.getElementsByClassName("progress");
var circle =  progress[0].getElementsByClassName("circle");
var label = progress[1].getElementsByClassName("label");
circle[0].style.border = "3px solid #5BAE67";
circle[0].style.color = "#5BAE67";
label[0].style.color = "#5BAE67";
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