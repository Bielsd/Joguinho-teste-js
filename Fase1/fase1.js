let quebrada = false;
let lampada = document.querySelector("#Luz");

function mudaLampada (tipo){
    if(quebrada){
        return;
    }

    lampada.src = "imagens/" + tipo + ".jpg";
    lampada.style.opacity = 1;

    if(tipo === 'lampada-quebrada'){
        document.querySelector(".texto1").style.display = 'block';
        quebrada = true;
    }
      
}