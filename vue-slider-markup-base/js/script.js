const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

// Partendo dal template fornito renderizzare lo slider con Vue

//Richiamo Vue inserendo come elemento l'id "app" nell'hatml.
//e come data le "slides" aggiunta sopra.
const app = new Vue({
    el: '#app',
    data: {
        slides,
        /*Indichiamo l'indice dell'array che punta all'elemento attivo.
        Lo inizializziamo con valore 0*/
        activeSlideIndex: 0
    },
    /*Nei methods vado ad inserire una funzione che mi diminuisce e aumenta il valore
    di activeSlideIndex a seconda se il click viene effettuato su prev o nex (vedi html). */
    methods: {
        prevSlide(){
            /*Se active.. ha un valore maggiore di zero allora posso sottrarre valore e quindi
            tornare indietro con le immagini*/
            if(this.activeSlideIndex > 0){
                this.activeSlideIndex--;
            }
        },
        nextSlide(){
             /*Se active.. ha un valore minore della lunghezza dell'array allora posso
            aumentare il valore e quindi
            andare avanti con le immagini*/
            if(this.activeSlideIndex < slides.length){
                this.activeSlideIndex++;
            }
        },
        checkIfActive(item){
            const index = this.slides.findIndex(
                (slide)=> slide.title === item.title
            )
            return index === this.activeSlideIndex? 'thumb active': 'thumb';
        }

    }

});