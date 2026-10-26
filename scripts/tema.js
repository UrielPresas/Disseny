const botoClar = document.getElementById("temaClar");
const botoFosc = document.getElementById("temaFosc");

botoClar.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
});

botoFosc.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
});