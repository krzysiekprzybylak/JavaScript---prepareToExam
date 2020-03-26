var hasla = ["jeden","dwa","trzy","cztery"];
var numer = Math.floor(Math.random()*4+1);
var haslo = hasla[numer];


//var haslo = "Bez pracy nie ma kolaczy";
var haslo = haslo.toUpperCase();//zmienia na wielkie litery
var dlugosc = haslo.length;
var haslo1 ="";
var ileSkuch=0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
for (i=0;i<dlugosc;i++){
  if (haslo.charAt(i)==" "){//napis trzeba przekonwertowac funkcja split
    //jesli chcemy aby byl traktowany jak tablica przegladarki moga to roznie interpretowac
    // teoretycznie haslo[i] w wiekszosci zadziala
    haslo1=haslo1+" ";
  }
  else{
    haslo1 = haslo1+"-";
  }

}

function wypisz_haslo(){
  document.getElementById("plansza").innerHTML = haslo1;
}
window.onload = start;//powinno sie wywolywac na starcie jedna funkcje
//a jesli chcemy dwie to w tej pierwszej wywolujemy druga w tym wypadku wypisz_haslo()
var litery = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function start()
{
  var tresc_diva="";

  for(i=0;i<26;i++){
    var element ="l"+i;
    tresc_diva =tresc_diva+'<div class ="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
  }
  document.getElementById("alfabet").innerHTML = tresc_diva;
  wypisz_haslo();//wywolujemy ja aby zadziala w window.onload
  wyborKategorii();
}
var kategoria = ["Film","Przyslowie","Liczba","Piosenkarz"];
function wyborKategorii(){
  var kategorieDiv="";
  for(i=0;i<4;i++){
  var element = "k"+i;
  kategorieDiv=kategorieDiv+'<div class ="kategoria" onclick="wybierzKategorie('+i+')" id="'+element+'">'+kategoria[i]+'</div>';
  }
  document.getElementById("kategoria").innerHTML = kategorieDiv;
}
String.prototype.ustawZnak = function(miejsce,znak){
  if (miejsce>this.length-1){
    return this.toString();
  }
  else{
    return this.substr(0,miejsce)+znak+this.substr(miejsce+1);
  }
}
function wybierzKategorie(nr){
  console.log("cos");
  switch (nr) {
    case 0:
    var hasla = ["Siedmiu wspanialych","Cztery wesela i pogrzeb","Ja Cie kocham a ty spisz","Ostatin Samuraj"];
    console.log(hasla);
    var numer = Math.floor(Math.random()*4+1);
    console.log(numer)
    var haslo = hasla[numer];

    console.log(haslo);
      break;
      case 1:
      var hasla = ["Gdzie kucharek szesc to nie ma co jesc","Baba z wozu konia lzej","Czym skorupka za mlodu nasiaknie","Gdyby kozka nie skakala to by nozki nie zlamala"];
      var numer = Math.floor(Math.random()*4+1);
      var haslo = hasla[numer];
        break;
        case 2:
        var hasla = ["Calkowite","Pierwsze","Ujemne","Malejace"];
        var numer = Math.floor(Math.random()*4+1);
        var haslo = hasla[numer];
          break;
          case 0:
          var hasla = ["Jacek Stachursky","Zbigniew Wodecki","Anita Lipnicka","John Lenon"];
          var numer = Math.floor(Math.random()*4+1);
          var haslo = hasla[numer];
            break;
          default:

  }
}

function sprawdz(nr){

  var trafiona = false;
  for (i=0;i<dlugosc;i++){
    if(haslo.charAt(i)==litery[nr]){
      haslo1=haslo1.ustawZnak(i,litery[nr]);
      trafiona = true;
    }
  }
  if (trafiona==true){

        yes.play();
        var element ="l"+ nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

      wypisz_haslo();
  }
  else{
    no.play();
    var element ="l"+ nr;
    document.getElementById(element).style.background = "#330000";
    document.getElementById(element).style.color = "#C00000";
    document.getElementById(element).style.border = "3px solid #C00000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick",";");
    ileSkuch++;
    var obraz = "img/s"+ileSkuch+".jpg";
    document.getElementById("szubienica").innerHTML ='<img src="'+obraz+'"alt=""/>' ;
  }
//wygrana
if(haslo==haslo1){
  document.getElementById("alfabet").innerHTML = "Tak jest podano prawidlowe haslo"
  +haslo+'<br><br> <span class="reset" onclick = "location.reload()">Jeszcze Raz ???</span>';
}
//przegrana
if(ileSkuch>=9){
  document.getElementById("alfabet").innerHTML = "PRZEGRANA Prawidlowe haslo: "
  +haslo+'<br><br> <span class="reset" onclick = "location.reload()">Jeszcze Raz ???</span>';
}
}
