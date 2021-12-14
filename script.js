a1 = document.getElementById('a1');
a2 = document.getElementById('a2');
a3 = document.getElementById('a3');
b1 = document.getElementById('b1');
b2 = document.getElementById('b2');
b3 = document.getElementById('b3');
c1 = document.getElementById('c1');
c2 = document.getElementById('c2');
c3 = document.getElementById('c3');

let joueurActuel = "X";

function gagnant(joueur) {
    alert(joueur + " gagne");
    a1.innerText = "";
    a2.innerText = "";
    a3.innerText = "";
    b1.innerText = "";
    b2.innerText = "";
    b3.innerText = "";
    c1.innerText = "";
    c2.innerText = "";
    c3.innerText = "";
    joueurActuel = "X";
}

function testGagne(joueur) {
    if (a1.innerText === joueur && a2.innerText === joueur && a3.innerText === joueur) {
        gagnant(joueur);
    }
    if (b1.innerText === joueur && b2.innerText === joueur && b3.innerText === joueur) {
        gagnant(joueur);
    }
    if (c1.innerText === joueur && c2.innerText === joueur && c3.innerText === joueur) {
        gagnant(joueur);
    }
    if (a1.innerText === joueur && b1.innerText === joueur && c1.innerText === joueur) {
        gagnant(joueur);
    }
    if (a2.innerText === joueur && b2.innerText === joueur && c2.innerText === joueur) {
        gagnant(joueur);
    }
    if (a3.innerText === joueur && b3.innerText === joueur && c3.innerText === joueur) {
        gagnant(joueur);
    }
    if (a1.innerText === joueur && b2.innerText === joueur && c3.innerText === joueur) {
        gagnant(joueur);
    }
    if (a3.innerText === joueur && b2.innerText === joueur && c1.innerText === joueur) {
        gagnant(joueur);
    }
}

function clickCase() {
    if (this.innerText === "") {
        this.innerText = joueurActuel;
    }
    if (joueurActuel === "X") {
        joueurActuel = "O";
        testGagne("X");
    } else {
        joueurActuel = "X";
        testGagne("O");
    }
}

a1.addEventListener("click", clickCase);
b1.addEventListener("click", clickCase);
c1.addEventListener("click", clickCase);
a2.addEventListener("click", clickCase);
b2.addEventListener("click", clickCase);
c2.addEventListener("click", clickCase);
a3.addEventListener("click", clickCase);
b3.addEventListener("click", clickCase);
c3.addEventListener("click", clickCase);
