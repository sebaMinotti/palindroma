/*
sviluppo una funzione che comntrolla tramite ciclo se la parola inserita in funzione sia palindroma o meno

*/

function reverse(parola) {
    let parolaReverse =''
    for(let i = parola.length-1; i >= 0; i--){
        
        parolaReverse+= parola[i]
    }
    return parolaReverse
}

document.querySelector('#bottone').addEventListener('click',function(){
    
    let parola = document.querySelector('#controlloParola').value;
    parola = parola.toLowerCase()
    let parolaGirata = reverse(parola)
    console.log(parola);
    console.log(parolaGirata);
   
       if(parola ===parolaGirata){
        document.querySelector('#verifico').innerHTML=`ho verificato la parola che hai inserito e si la tua parola ${parola} è palindroma`
       } else {
        document.querySelector('#verifico').innerHTML=`ho verificato la parola che hai inserito e purtroppo la tua parola ${parola} non è palindroma`
       }

    document.querySelector('#controlloParola').value=""
    
})



