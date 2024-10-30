const imageGallery = document.getElementById("image-gallery")
const images = document.querySelectorAll(".images")
const prevBtn = document.getElementById("prevButton");
const nextBtn = document.getElementById("nextButton");
const galleryBtn = document.getElementById("image-gallery-btns")

let imgIndex = 0;

showImage(imgIndex)

function showImage(index) {
      for (let i = 0; i < images.length; i++) {
          images[i].style.display = (i === index) ? "block" : "none";
      }
  }
  
  function prevImg() {
      imgIndex = (imgIndex <= 0) ? images.length - 1 : imgIndex - 1;
      showImage(imgIndex);
  }
  
  function nextImg() {
      imgIndex = (imgIndex >= images.length - 1) ? 0 : imgIndex + 1;
      showImage(imgIndex);
  }