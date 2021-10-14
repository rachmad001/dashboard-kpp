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
        if (filenya[0].size > (5000*1000)){
            Swal.fire(
                'Error file size',
                'File tidak boleh lebih dari 5Mb',
                'error'
            )
        }
        else {
            var tanggal = document.getElementById("tanggal").value;
            var hasil = document.getElementById("hasil").value;
            console.log(hasil);
            if (tanggal == "" && hasil == "#") {
                Swal.fire(
                    'Error input',
                    'Tanggal dan hasil belum dipilih',
                    'error'
                )
            }
            else if(tanggal != "" && hasil == "#") {
                Swal.fire(
                    'Error input',
                    'hasil belum dipilih',
                    'error'
                )
            }
            else if(tanggal == "" && hasil != "#") {
                Swal.fire(
                    'Error input',
                    'Tanggal belum dipilih',
                    'error'
                )
            }
            else {
                //type your code for sending data to server
            }
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
var circle = progress[0].getElementsByClassName("circle");
var line = progress[0].getElementsByClassName("line");
var label = progress[1].getElementsByClassName("label");
circle[0].style.border = "3px solid #5BAE67";
circle[0].style.color = "white";
circle[0].style.backgroundColor = "#5BAE67";
line[0].style.background = "linear-gradient(180deg, #2F9E4D 0%, #56C866 53.12%, #B8DE9C 94.27%)";
label[0].style.color = "#5BAE67";
circle[1].style.border = "3px solid #5BAE67";
circle[1].style.color = "#5BAE67";
label[1].style.color = "#5BAE67";
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