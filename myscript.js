const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let frecciaGiù = document.querySelector('.frecciaGiù');
let frecciaSu = document.querySelector('.frecciaSu');
let immagineSelezionata = 2;
let trasparenzaImg1 = document.querySelector('.img1>.trasparenza');
let trasparenzaImg2 = document.querySelector('.img2>.trasparenza');
let trasparenzaImg3 = document.querySelector('.img3>.trasparenza');
let trasparenzaImg4 = document.querySelector('.img4>.trasparenza');
let trasparenzaImg5 = document.querySelector('.img5>.trasparenza');
let immagineGrande = document.querySelector('.immagineGrande');
let location = document.querySelector('.Location');
let descrizioneLocation = document.querySelector('.descrizioneLocation');

frecciaSu.addEventListener('click', function(){
    if (immagineSelezionata>1){
        immagineSelezionata = immagineSelezionata-1;
    }
    if (immagineSelezionata==1){
        immagineSelezionata = 5;
    }
});
frecciaGiù.addEventListener('click', function(){
    if (immagineSelezionata<5){
        immagineSelezionata = immagineSelezionata+1;
    }
    if (immagineSelezionata==5){
        immagineSelezionata = 1;
    }
});

if (immagineSelezionata==1){
    trasparenzaImg1.style.backgroundColor='rgba(0, 0, 0, 0.0)';
    trasparenzaImg1.style.borderWidth='5px';
    trasparenzaImg1.style.borderStyle='inset';
    trasparenzaImg1.style.borderColor='#cccccc';
    immagineGrande.style.backgroundImage='url("../consegna/img/01.jpg")';
    location.innerHTML=title[1];
    descrizioneLocation.innerHTML=text[1];
}
if (immagineSelezionata==2){
    trasparenzaImg2.style.backgroundColor='rgba(0, 0, 0, 0.0)';
    trasparenzaImg2.style.borderWidth='5px';
    trasparenzaImg2.style.borderStyle='inset';
    trasparenzaImg2.style.borderColor='#cccccc';
    immagineGrande.style.backgroundImage='url("../consegna/img/02.jpg")';
    location.innerHTML=title[2];
    descrizioneLocation.innerHTML=text[2];
}
if (immagineSelezionata==3){
    trasparenzaImg3.style.backgroundColor='rgba(0, 0, 0, 0.0)';
    trasparenzaImg3.style.borderWidth='5px';
    trasparenzaImg3.style.borderStyle='inset';
    trasparenzaImg3.style.borderColor='#cccccc';
    immagineGrande.style.backgroundImage='url("../consegna/img/03.jpg")';
    location.innerHTML=title[3];
    descrizioneLocation.innerHTML=text[3];
}
if (immagineSelezionata==4){
    trasparenzaImg4.style.backgroundColor='rgba(0, 0, 0, 0.0)';
    trasparenzaImg4.style.borderWidth='5px';
    trasparenzaImg4.style.borderStyle='inset';
    trasparenzaImg4.style.borderColor='#cccccc';
    immagineGrande.style.backgroundImage='url("../consegna/img/04.jpg")';
    location.innerHTML=title[4];
    descrizioneLocation.innerHTML=text[4];
}
if (immagineSelezionata==5){
    trasparenzaImg5.style.backgroundColor='rgba(0, 0, 0, 0.0)';
    trasparenzaImg5.style.borderWidth='5px';
    trasparenzaImg5.style.borderStyle='inset';
    trasparenzaImg5.style.borderColor='#cccccc';
    immagineGrande.style.backgroundImage='url("../consegna/img/05.jpg")';
    location.innerHTML=title[5];
    descrizioneLocation.innerHTML=text[5];
}