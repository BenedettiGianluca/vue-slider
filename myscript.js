let trasparenza = document.querySelectorAll('.trasparenza');
trasparenza[1].style.backgroundColor='rgba(0, 0, 0, 0.0)';
trasparenza[1].style.borderWidth='5px';
trasparenza[1].style.borderStyle='inset';
trasparenza[1].style.borderColor='#cccccc';

var V = new Vue({
    el: '#VueJS',
    data: {
        items: [
            'img/01.jpg',
            'img/02.jpg',
            'img/03.jpg',
            'img/04.jpg',
            'img/05.jpg'
        ],
        
        title: [
            'Svezia',
            'Svizzera',
            'Gran Bretagna',
            'Germania',
            'Paradise'
        ],
        
        text: [
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            'Lorem ipsum',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
        ],

        immagineSelezionata: 2,
        locazione: 'Svizzera',
        descrizioneLocation: 'Lorem ipsum'
    },
    methods: {
        evidenziaImmagine: function(){
            let trasparenza = document.querySelectorAll('.trasparenza');
            let immagineGrande = document.querySelector('.immagineGrande');
            for (x=0;x<5;x++){
                trasparenza[x].style.backgroundColor='rgba(0, 0, 0, 0.6)';
                trasparenza[x].style.border='none';
            }
            for (x=1;x<=5;x++){
                if (V.immagineSelezionata==x){
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
                    V.locazione=V.title[x-1];
                    V.descrizioneLocation=V.text[x-1];
                }
            }
        },

        clickFrecciaSopra: function(){
            V.immagineSelezionata = V.immagineSelezionata-1;
            if (V.immagineSelezionata<=0){
                V.immagineSelezionata = 5;
            }
            V.evidenziaImmagine();
        },

        clickFrecciaSotto: function(){
            V.immagineSelezionata = V.immagineSelezionata+1;
            if (V.immagineSelezionata>=6){
                V.immagineSelezionata = 1;
            }
            V.evidenziaImmagine();
        },

        clickImmagine: function(){
            V.immagineSelezionata = event.target.getAttribute('value');
            V.evidenziaImmagine();
            console.log(V.immagineSelezionata);
        },

        intervallo: setInterval(function(){
            V.immagineSelezionata = V.immagineSelezionata+1;
            if (V.immagineSelezionata>=6){
                V.immagineSelezionata = 1;
            }
            V.evidenziaImmagine();
        }, 3000),

        stopIntervallo: function(){
            clearInterval(intervallo);
        }
    }
});