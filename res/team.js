const reviews = [
  {
    id: 1,
    name: "Isa Jaisyullah Hamid",
    nim: "202000140003",
    img:
      "res/isa.png",
    text:
      "saya adalah seseorang yang sangat biasa. sejak lahir saya lahir dengan cara yang biasa aja, bahkan nilai nilai di sekolah juga biasa aja, kehidupan saya juga biasa biasa aja, motor biasa, nafas biasa, makan biasa. yang ga biasa itu cuman satu. iya kamu. ehe",
  },
  {
    id: 2,
    name: "Syahrizal Muhammad Nurjaya",
    nim: "20200140030",
    img:
      "res/jaya.jpg",
    text:
      "Halo, saya adalah manusia biasa, Terlahir dari keluarga yang biasa-biasa saja. selalu mendapatkan nilai yang biasa-biasa saja. memiliki pengalaman dan kemampuan yang biasa-biasa saja. ini seharusnya teks lagi tapi saya tidak tau mau nulis apa jadi yah begitulah.",
  },
];
// select items
const img = document.getElementById("person-img");
const name = document.getElementById("name");
const nim = document.getElementById("nim");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  name.textContent = item.name;
  nim.textContent = item.nim;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  name.textContent = item.name;
  nim.textContent = item.nim;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
