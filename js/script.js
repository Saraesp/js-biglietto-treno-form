const button_prezzo = document.getElementById('calc_prezzo');
let nome_cognome;
let eta;
let chilometri;
let prezzo; 
let offerta;

button_prezzo.addEventListener('click', function(){
    nome_cognome = document.getElementById('nome_user').value;
    eta = document.getElementById('eta_user').value;
    chilometri = document.getElementById('input_km').value;

    prezzo;

    if(eta == 1){
        prezzo = (0.21 * chilometri * 0.8).toFixed(2);
    }else if (eta == 3){
        prezzo = (0.21 * chilometri * 0.6).toFixed(2);
    }else{
        prezzo = (0.21 * chilometri).toFixed(2);
    }

    document.getElementById('inserisci_nome').innerText = nome_cognome;
    document.getElementById('inserisci_prezzo').innerText = `${prezzo} €`;

    offerta;

    if(eta == 1){
       offerta = 'Sconto MINORENNI'
    }else if (eta == 3){
        offerta = 'Sconto OVER'
    }else{
        offerta = 'Sconto STANDARD'
    }

    document.getElementById('inserisci_offerta').innerText = `${offerta}`;

    let randNum = Math.floor(Math.random()*10);
    document.getElementById('inserisci_cabina').innerText = `${randNum}`;
});