const form = document.getElementById('articles');
const valorA = document.getElementById('valor-A');
const valorB = document.getElementById('valor-B');
let formEValido = false; 

function validaValor(valorx,valory){
    var Valida = parseInt(valorx) < parseInt(valory);
    return Valida;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const messageError = document.querySelector('.error-messanger');
    messageError.style.display = 'none';
    valorA.style.outlineColor = 'black';
    valorA.style.border = 'none' ;
    valorA.style.color = 'black';

    const mensadeSuccesso = document.querySelector('.mensager-successo');
    mensadeSuccesso.style.display = 'none';

    formEValido = validaValor(valorA.value,valorB.value);
    if(formEValido){
        mensadeSuccesso.style.display = 'block';

        valorA.value = '';
        valorB.value = '';
    }else{
        messageError.style.display = 'block';
        valorA.style.outlineColor = 'red';
        valorA.style.border = '2px solid red' ;
        valorA.style.color = 'red';
    }
})

form.addEventListener('keyup', function(e){
    console.log(e.target.velue);

    const messageError = document.querySelector('.error-messanger');
    messageError.style.display = 'none';
    valorA.style.outlineColor = 'black';
    valorA.style.border = 'none' ;
    valorA.style.color = 'black';

    const mensadeSuccesso = document.querySelector('.mensager-successo');
    mensadeSuccesso.style.display = 'none';

    formEValido = validaValor(valorA.value,valorB.value);
    if(formEValido){
        mensadeSuccesso.style.display = 'none';
    }else{
        messageError.style.display = 'block';
        valorA.style.outlineColor = 'red';
        valorA.style.border = '2px solid red' ;
        valorA.style.color = 'red';
    }
})