class Calcolatrice {
    constructor(stringa) {
        this.testo = stringa;
    }

    piu(x, y) { return x + y; }
    meno(x, y) { return x - y; }
    per(x, y) { return x * y; }
    diviso(x, y) { return x / y; }

    convertiERisolvi() {
        let segnoCorrente = "+";
        let listaDati = [];

        this.testo.split(" ").forEach(elemento => {
            if (["+", "-", "*", "/"].includes(elemento)) {
                segnoCorrente = elemento;
            } else {
                listaDati.push({
                    n: Number(elemento),
                    s: segnoCorrente
                });
            }
        });

        let totale = 0;
        listaDati.forEach(oggetto => {
            if (oggetto.s === "+") {
                totale = this.piu(totale, oggetto.n);
            } else if (oggetto.s === "-") {
                totale = this.meno(totale, oggetto.n);
            } else if (oggetto.s === "*") {
                totale = this.per(totale, oggetto.n);
            } else if (oggetto.s === "/") {
                totale = this.diviso(totale, oggetto.n);
            }
        });

        console.log(this.testo + " = " + totale);
    }
}

let es1 = new Calcolatrice("6 - 2 * 5 + 8 / 4");
es1.convertiERisolvi();

let es2 = new Calcolatrice("11 * 3 + 5 - 5 / 11");
es2.convertiERisolvi();

let es3 = new Calcolatrice("29 + 2 - 7 / 3 / 2 + 1 * 2");
es3.convertiERisolvi();