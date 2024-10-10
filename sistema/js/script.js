const imgBanner = ['assets/img/japa2.jpg',
    'assets/img/japa.jpg', 
    'assets/img/japa3.jpg'];


let fotoInicial = 0;



function slider(){

    const banner = document.getElementById('banner');
    banner.style.backgroundImage = `url('${imgBanner[fotoInicial]}')`;
    fotoInicial++;
    if(fotoInicial >= imgBanner.length){
        fotoInicial = 0;
    }
}

setInterval(slider, 2500);