const image = document.getElementById("get_better_image");
const path = "./assets/img/"

function verifyWidthScreen() {
    const widthScreen = window.innerWidth;
    if (widthScreen >= 768) {
        image.src = `${path}get_better_image.png`;
    } else {
       image.src = `${path}get_better_image_mobile.png`;
    }
}

verifyWidthScreen();

window.addEventListener('resize', verifyWidthScreen);