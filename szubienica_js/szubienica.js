var haslo = "Bez pracy nie ma kolaczy";
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
}
String.prototype.ustawZnak = function(miejsce,znak){
  if (miejsce>this.length-1){
    return this.toString();
  }
  else{
    return this.substr(0,miejsce)+znak+this.substr(miejsce+1);
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
