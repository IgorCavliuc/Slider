const img = document.querySelector 
(".slider_image");

const imgArr = ["./img/me.jpg", "./img/cat.jpg", "./img/phone.jpg"];

let currentIndex = 0;

function slide(direction) {
    currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    }else if(currentIndex <0) {
        currentIndex = imgArr.length -1;
    } 

    img.src = imgArr[currentIndex]
}