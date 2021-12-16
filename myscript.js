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
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let frecciaSopra = document.querySelector('.frecciaSopra');
let frecciaSotto = document.querySelector('.frecciaSotto');
let immagineSelezionata = 2;
let trasparenza = document.querySelectorAll('.trasparenza');
let immagineGrande = document.querySelector('.immagineGrande');
let locazione = document.querySelector('.location');
let descrizioneLocation = document.querySelector('.descrizioneLocation');

trasparenza[1].style.backgroundColor='rgba(0, 0, 0, 0.0)';
trasparenza[1].style.borderWidth='5px';
trasparenza[1].style.borderStyle='inset';
trasparenza[1].style.borderColor='#cccccc';
immagineGrande.style.backgroundImage='url("consegna/img/02.jpg")';
locazione.innerHTML=title[1];
descrizioneLocation.innerHTML=text[1];

frecciaSopra.addEventListener('click', function(){
    if (immagineSelezionata>0){
        immagineSelezionata = immagineSelezionata-1;
    }
    if (immagineSelezionata==0){
        immagineSelezionata = 5;
    }
    for(x=0;x<5;x++){
        trasparenza[x].style.backgroundColor='rgba(0, 0, 0, 0.6)';
        trasparenza[x].style.border='none';
    }
    for (x=1;x<=5;x++){
        if (immagineSelezionata==x){
            trasparenza[x-1].style.backgroundColor='rgba(0, 0, 0, 0.0)';
            trasparenza[x-1].style.borderWidth='5px';
            trasparenza[x-1].style.borderStyle='inset';
            trasparenza[x-1].style.borderColor='#cccccc';
            switch(x) {
                case 1:
                    immagineGrande.style.backgroundImage='url("consegna/img/01.jpg")';
                    break;

                case 2:
                    immagineGrande.style.backgroundImage='url("consegna/img/02.jpg")';
                    break;

                case 3:
                    immagineGrande.style.backgroundImage='url("consegna/img/03.jpg")';
                    break;

                case 4:
                    immagineGrande.style.backgroundImage='url("consegna/img/04.jpg")';
                    break;
            
                default: immagineGrande.style.backgroundImage='url("consegna/img/05.jpg")';
                    break;
            }
            locazione.innerHTML=title[x-1];
            descrizioneLocation.innerHTML=text[x-1];
        }
    }
});
frecciaSotto.addEventListener('click', function(){
    if (immagineSelezionata<6){
        immagineSelezionata = immagineSelezionata+1;
    }
    if (immagineSelezionata==6){
        immagineSelezionata = 1;
    }
    for(x=0;x<5;x++){
        trasparenza[x].style.backgroundColor='rgba(0, 0, 0, 0.6)';
        trasparenza[x].style.border='none';
    }
    for (x=1;x<=5;x++){
        if (immagineSelezionata==x){
            trasparenza[x-1].style.backgroundColor='rgba(0, 0, 0, 0.0)';
            trasparenza[x-1].style.borderWidth='5px';
            trasparenza[x-1].style.borderStyle='inset';
            trasparenza[x-1].style.borderColor='#cccccc';
            switch(x) {
                case 1:
                    immagineGrande.style.backgroundImage='url("consegna/img/01.jpg")';
                    break;

                case 2:
                    immagineGrande.style.backgroundImage='url("consegna/img/02.jpg")';
                    break;

                case 3:
                    immagineGrande.style.backgroundImage='url("consegna/img/03.jpg")';
                    break;

                case 4:
                    immagineGrande.style.backgroundImage='url("consegna/img/04.jpg")';
                    break;
            
                default: immagineGrande.style.backgroundImage='url("consegna/img/05.jpg")';
                    break;
            }
            locazione.innerHTML=title[x-1];
            descrizioneLocation.innerHTML=text[x-1];
        }
    }
});