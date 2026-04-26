let daftarGombal = [
    "Kiw Kiw Adek Manis",
    "Kenapa 1 + 1 = 2 ?",
    "Karena Glediss Cantikkkkk",
    "Kalo ganteng ya Akuuuu",
    "Aku Gak Pande Ngerangkai Kata-Kata.",
    "Tapi setiap nengok princess satu ni, agak ngerasa tenang abg dek.",
    "Gledis bukan tipe yang Cari Perhatian.",
    "Tapi gatau kenapa, perhatian ku selalu tertuju ke Gledis Manis.",
    "Aku gatau besok cuaca mendung atau panas.",
    "Yang aku tahu, Gledis selalu menyala.",
    "Kicaww kicawww kicawww maniaaaa."
];

let index = 0;

function cekNama() {
    let nama = document.getElementById("nama").value.trim();

    if (nama === "Gledis" || nama === "gledis") {
        document.getElementById("gombalan").innerHTML =
            "Selamat datang Gledis 😎❤️<br><br>Lagi apa si Maniss ini?";
        document.getElementById("lanjutBtn").style.display = "inline-block";
        document.getElementById("bgMusic").play();

        // Musik mulai setelah klik
        document.getElementById("ytMusic").src =
            "https://www.youtube.com/embed/ABs7uaqojsY?autoplay=1&loop=1&playlist=ABs7uaqojsY";
    } else {
        document.getElementById("gombalan").innerHTML =
            "ini cuma boleh untuk Gledis 😌";
        document.getElementById("lanjutBtn").style.display = "none";
    }
}

function nextGombal() {
    if (index < daftarGombal.length) {
        typeEffect(daftarGombal[index]);
        index++;
    } else {
        document.getElementById("gombalan").innerHTML =
            "Udah ah capek abang dekkk ❤️";
        document.getElementById("lanjutBtn").style.display = "none";
    }
}

function typeEffect(text) {
    let i = 0;
    let speed = 40;
    document.getElementById("gombalan").innerHTML = "";

    function ketik() {
        if (i < text.length) {
            document.getElementById("gombalan").innerHTML += text.charAt(i);
            i++;
            setTimeout(ketik, speed);
        }
    }
    ketik();
}

/* Generate hati jatuh */
function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);