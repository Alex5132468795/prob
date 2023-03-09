let cards = document.querySelectorAll('.card');
cards.forEach(element => {
    let firstImg = element.querySelector('.first');
    let secondImg = element.querySelector('.second');
    element.addEventListener('mouseover', function(){
        firstImg.classList.toggle("fisrImgLeft");
        secondImg.classList.toggle("secondImgLeft");
    });
    element.addEventListener('mouseout', function(){
        firstImg.classList.toggle('fisrImgLeft');
        secondImg.classList.toggle('secondImgLeft');
    })
});