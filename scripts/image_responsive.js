const getBetter = document.getElementById("get_better_image");
const timeBreak = document.getElementById("img_time_break");
const path = "./assets/img/";

function verifyWidthScreen(sub ,image, imageName, imageNameMobile) {
    if (!image) return;
    const widthScreen = window.innerWidth;
    if (widthScreen >= 765) { 
        image.src = `${path}${sub}/${imageName}`; 
    } else { 
        image.src = `${path}${sub}/${imageNameMobile}`; 
    }
}

function updateImages() {
    verifyWidthScreen("time_break",timeBreak, 'planning.png', 'mobile_planning.png');
    verifyWidthScreen("get_better",getBetter, 'get_better_image.png', 'get_better_image_mobile.png');   
}

updateImages();
window.addEventListener("resize", updateImages);
