let productImg = document.getElementById('productImg');
let changeBtn1 = document.getElementById('changeImg1');
let changeBtn2 = document.getElementById('changeImg2');
let changeBtn3 = document.getElementById('changeImg3');
let changeBtn4 = document.getElementById('changeImg4');
let changeBtn5 = document.getElementById('changeImg5');
let changeBtn6 = document.getElementById('changeImg6');


function changeImg(imgUrl) {
    productImg.src = imgUrl;
}

// changeBtn.addEventListener('click', changeImage);
changeBtn1.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/6680922/5.jpg?8015");
changeBtn2.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/74/6680922/4.jpg?8015");
changeBtn3.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/74/6680922/5.jpg?8015");
changeBtn4.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/74/6680922/7.jpg?8015");
changeBtn5.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/6680922/8.jpg?8015");
changeBtn6.onmouseover = () => changeImg("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/74/6680922/9.jpg?8015");