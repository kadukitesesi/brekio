const getBetter = document.getElementById("get_better_image");
const timeBreak = document.getElementById("img_time_break");
const path = "./assets/img/"

function verifyWidthScreen(image ,imageName, imageNameMobile) {
    const widthScreen = window.innerWidth;
    if (widthScreen >= 765) {
        image.src = `${path}${imageName}`;
    } else {
       image.src = `${path}${imageNameMobile}`;
    }
}

function updateImages() {
    verifyWidthScreen(timeBreak,'planning.png', 'mobile_planning.png');
    verifyWidthScreen(getBetter, 'get_better_image.png', 'get_better_image_mobile.png');   
}

updateImages();

window.addEventListener("resize", updateImages);