//D'abord, les tableaux et quelques var
var vert = ["un pot de confiture", "un cendrier","un pot de miel", "un flacon de parfum"];
var jaune = ["une bouteille d'eau", 'un pot de yaourt', 'un pot de crême fraîche', 'une bouteille de lait', "une bouteille d'huile", "une boite de petits pois",'un flacon de lessive', "une boite de sardines", "une bouteille de soda"];
var bleu  = ["une brique de lait", "une brique de jus d'orange", "un carton d'emballage de yaourts", "une enveloppe", "un paquet de biscuits"];
var marron = ["les restes du repas", 'un film plastique', 'une publicité','un coton-tige', 'un emballage de plastique fin'];
var randomItems = [];
var selItem = document.getElementById("trash_item").value;
var score = 0;
var item = step2();
var i = 0;


//ici on commence avec les fonctions
//choix de l'item
function step1 () {
    var t = Math.floor(Math.random() * 4);;
    switch (t) {
        case 0:
            t= vert;
            break;
        case 1:
            t = jaune;
            break;
        case 2:
            t = bleu;
            break;
        case 3:
            t = marron;
            break;
    }
    let b = Math.floor(Math.random() * t.length);
    console.log(t + '[' + b + ']');
    return t[b];
};

//Pop de l'item dans la div
function step2 (){
    var randItem = step1();
    document.getElementById('trash_item').innerHTML = randItem;
    selItem = document.getElementById("trash_item").innerHTML;
};

function attempts () {
    if (i === 10) {
        alert("Félicitations tu as eu " + score + "points !");
    }
};

// Check poubelle + generation newItem +
function checkTrash(id)
{
    if(id.indexOf(selItem)>-1)
    {
        alert('gagne');
        score++
    }
    else
    {
        alert('perdu');
    }
    document.getElementById("user_score").innerHTML = score;
    i++;
    step2();
    attempts();
};



//fin des fonctions, on lance les étapes.

document.getElementById("user_score").innerHTML = score;

step2();
document.getElementById('vert').onclick = function()
{
    checkTrash(vert);
    console.log(i);
    console.log (selItem);
};

document.getElementById('jaune').onclick = function()
{
    checkTrash(jaune);
    console.log(i);
    console.log (selItem);
};

document.getElementById('bleu').onclick = function()
{
    checkTrash(bleu);
    console.log(i);
    console.log (selItem);
};

document.getElementById('marron').onclick = function()
{
    checkTrash(marron);
    console.log(i);
    console.log (selItem);
};

