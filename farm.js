

function checkUndBerechnen() {
    document.getElementById("ergebnis1").innerHTML ="";
    document.getElementById("ergebnis2").innerHTML ="";
    document.getElementById("ergebnis3").innerHTML ="";

    document.getElementById("k-error").innerHTML = "";
    document.getElementById("b-error").innerHTML = "";

    let koepfe = document.getElementById("koepfe").value;
    let beine = document.getElementById("beine").value;

    if (koepfeOk(koepfe) && beineOk(beine, koepfe)) {
        berechnen(beine, koepfe);
    } else {
        document.getElementById("ergebnis").innerHTML =
            "bitte Fehler beheben";
    }
}

function koepfeOk(koepfe) {
    koepfe += "";

    if (allInteger(koepfe)) {
        document.getElementById("koepfe").value = koepfe;
        return true;
    } else {
        document.getElementById("k-error").innerHTML = " fehlerhaft";
        return false;
    }
}

function beineOk(beine, koepfe) {
    if (allInteger(beine)) {
        document.getElementById("beine").value = beine;

        if (beine % 2 === 0) {
            let msg = "";

            if (beine < koepfe * 2) msg = "zuwenig";

            if (beine > koepfe * 4) msg = "zuviel";

            if (msg !== "") {
                document.getElementById("b-error").innerHTML =
                    " fehlerhaft (" + msg +
                    " mindestens " + koepfe * 2 +
                    " hoechstens " + koepfe * 4 + ")";
                return false;
            } else {
                document.getElementById("beine").value = beine;
                return true;
            }
        } else {
            document.getElementById("b-error").innerHTML =
                " fehlerhaft (ungerade Anzahl)";
            return false;
        }
    } else {
        document.getElementById("b-error").innerHTML = " fehlerhaft ";
        return false;
    }
}

function berechnen(beine, koepfe) {
    beine = +beine;
    koepfe = +koepfe;
    let huehner = koepfe;
    let schweine = 0;
    while ((huehner * 2 + schweine * 4 !== beine)) {
        huehner--;
        schweine++;
    }

    document.getElementById("ergebnis1").innerHTML =
        "auf der Farm gibt es ";

    if (huehner == 0)
        document.getElementById("ergebnis2").innerHTML =
        "kein Huhn und";
    else if (huehner == 1)
        document.getElementById("ergebnis2").innerHTML =
        "ein Huhn und";
    else
        document.getElementById("ergebnis2").innerHTML =
        huehner + " Hühner und ";

    if (schweine == 0)
        document.getElementById("ergebnis3").innerHTML =
        "kein Schwein";
    else if (schweine == 1)
        document.getElementById("ergebnis3").innerHTML =
        "ein Schwein";
    else
        document.getElementById("ergebnis3").innerHTML =
        schweine + " Schweine";
}