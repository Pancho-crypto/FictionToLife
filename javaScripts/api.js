const apiBoton = document.getElementById('apiBoton');

const images = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/132/200/300",
    "https://picsum.photos/id/15/200/300",
    "https://picsum.photos/id/777/200/300"
];

let index = 0;

function changeImage() {
    index = (index + 1) % images.length;
    document.getElementById("image").src = images[index];
    
}   
apiBoton.addEventListener('click', changeImage);