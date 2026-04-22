class Poligono {
  constructor(misura, numeroLati, fisso) {
    this.lato = misura;
    this.numeroLati = numeroLati;
    this.fisso = fisso;
  }

  Perimetro() {
    let risP = this.lato * this.numeroLati;
    console.log("Risultato Perimetro: " + risP + " cm");
    return risP;
  }

  Area() {
    let apotema = this.lato * this.fisso;
    let risA = (this.Perimetro() * apotema) / 2;
    console.log("Risultato Area: " + Math.round(risA) + " cm^2");
    return risA;
  }
}

class TriangoloEquilatero extends Poligono {
  constructor(l) { super(l, 3, 0.289); }
}

class Quadrato extends Poligono {
  constructor(l) { super(l, 4, 0.5); }
}

class Pentagono extends Poligono {
  constructor(l) { super(l, 5, 0.688); }
}

class Esagono extends Poligono {
  constructor(l) { super(l, 6, 0.866); }
}

class Ettagono extends Poligono {
  constructor(l) { super(l, 7, 1.038); }
}

class Ottagono extends Poligono {
  constructor(l) { super(l, 8, 1.207); }
}

let t = new TriangoloEquilatero(15);
t.Area();

let q = new Quadrato(10);
q.Area();

let p = new Pentagono(21);
p.Area();

let e = new Esagono(18);
e.Area();

let et = new Ettagono(9);
et.Area();

let o = new Ottagono(12);
o.Area();