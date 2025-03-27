const con = document.querySelector(".container");
const miniImg = document.getElementsByClassName("my-img");
let img = [
  "https://wallpaperaccess.com/full/37946.jpg",
  "https://wallpaperaccess.com/full/37963.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_2t/21646.jpg",
  "https://4kwallpapers.com/images/walls/thumbs_2t/21679.jpg",
];

let i = 0;
function next() {
  miniImg[i].classList.remove("active");
  i++;
  if (i == img.length) {
    i = 0;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = 'url("' + img[i] + '")';
}

function prev() {
  miniImg[i].classList.remove("active");
  i--;
  if (i < 0) {
    i = img.length - 1;
  }
  miniImg[i].classList.add("active");
  con.style.backgroundImage = `url("${img[i]}")`;
}
