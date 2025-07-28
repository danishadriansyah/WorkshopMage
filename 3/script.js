console.log("Hello, World!");

let nama = "Yunadi";
nama = "Ade";
console.log(nama);

let umur = 25;
console.log(umur);

function greet() {
    console.log("Selamat Datang")
}

greet();

function perkenalan(nama, umur){
    console.log("perkenalan nama saya "+ nama + ", umur saya " + umur + " tahun, salam kenal");
}

perkenalan("sabdo", 35);

document.addEventListener("DOMContentLoaded", function() {
    let tombol = document.getElementById("tombolsaya"); 
    tombol.addEventListener("click", function() {
        alert("Tombol telah diklik!");
    })
});