let quebrada = false;
let lampada = document.querySelector("#Luz");
let nextFase = document.querySelector("#texto2");

function mudaLampada (tipo){
    if(quebrada){
        return;
    }

    lampada.src = "imagens/" + tipo + ".jpg";
    lampada.style.opacity = 1;

    if(tipo === 'lampada-quebrada'){
        document.querySelector("#texto1").style.display = 'block';
        quebrada = true;
        setTimeout(function (){
            nextFase.style.display = 'block';
            alert('parabéns');
            setTimeout(function(){
                location.href = "file:///C:/Users/rackadm052/Desktop/Joguinho-teste-js/Forca/forca.html";
            },1000);             
        },2000);
    }        
}