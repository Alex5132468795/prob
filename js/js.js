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
regLog.addEventListener('change', async function(){
    await fetch('logReg.php?log='+regLog.value).then(response=>{
        return response.text();
    }).then(text=>{
        console.log(text);
        if(text == 1){
            console.log(regLog);
            regLog.classList.remove('valid');
            regLog.classList.add('noValid');
            regLog.title="Данный логин уже используется";
        }else{
            if(/[A-Za-z,-]/g.test(regLog.value)){
                console.log('Idiot');
                regLog.classList.add('valid');
                regLog.classList.remove('noValid');  
                regLog.title="Всё в порядке";
            }else{
                regLog.classList.remove('valid');
                regLog.classList.add('noValid');
                regLog.title="Некорректные символы";
            }
            if(regLog.value.length==0){
                regLog.classList.add('valid');
                regLog.classList.remove('noValid');
                regLog.title="Введите логин";
            }
        }
    });
    
});
//Быстрая проверка