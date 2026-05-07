const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const choseImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url('img/${choseImage}') no-repeat center / cover`;
