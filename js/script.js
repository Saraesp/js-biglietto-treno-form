const button_prezzo = document.getElementById('button');
prezzo.addEventListener('click', function(){
    let nome_cognome = document.getElementById('nome_user').value;
    let eta = document.getElementById('eta_user').value;
    let chilometri = document.getElementById('input_km').value;

    let prezzo = 0.21 * chilometri;

    if(eta == 'minorenne'){
        prezzo = 0.21 * chilometri * 0.8;
    }else if (eta == 'over'){
        prezzo = 0.21 * chilometri * 0.6;
    }else{
        prezzo = 0.21 * chilometri;
    }
});