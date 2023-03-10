//slaider
let cards = document.querySelectorAll('.cardImg');
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
//slaider
//passwordForReg
let RegPas = document.querySelector('.RegPas');
let RegPasRet = document.querySelector('.RegPasRet');

RegPasRet.addEventListener('change', function(){
    if(RegPasRet.value == RegPas.value){
        RegPasRet.classList.add('valid');
        RegPasRet.classList.remove('noValid');
    }else{
        RegPasRet.classList.remove('valid');
        RegPasRet.classList.add('noValid');
    }
});
//passwordForReg
//Open and close form
let regist = document.getElementById('registration');
let avtoris = document.getElementById('avtoris');
let buttonReg = document.getElementById('buttonReg');
let buttonAvt = document.getElementById('buttonAvt');
let closArr = document.querySelectorAll('.closeForm')
closArr.forEach(element=>{
    element.addEventListener('click', function(){
        regist.close();
        avtoris.close();
    });
});
buttonAvt.addEventListener('click', function(){
    avtoris.showModal();
});
buttonReg.addEventListener('click', function(){
    regist.showModal();
});
//Open and close form
//Быстрая проверка
let regLog = document.getElementById('regLog');
regLog.addEventListener('change', ()=>{
    
});
fetch('')
    .then((response) => response.json())
    .then((data)=> data)
console.log(data);
console.log(response);
//Быстрая проверка