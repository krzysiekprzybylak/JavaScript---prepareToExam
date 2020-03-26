var minuta = 1;
var sekunda ="0"+3;
function odliczanie()
  {
    document.getElementById("koniecEgazminu").innerHTML = '';
    document.getElementById("zegar").innerHTML = "Czas pozostaly do konca "+minuta+":"+sekunda;
    sekunda = sekunda-1;

          if(sekunda>=0&&minuta>=0)
            {
              if(sekunda<10)
                  {sekunda = "0"+sekunda;}
            }

          if(minuta > 0 && sekunda <0)
              {
                minuta = minuta-1;
                sekunda = 59;
              }
              if(minuta <= 0 && sekunda <0)
              {
                document.getElementById("koniecEgazminu").innerHTML = 'Koniec czasu';
                if(true){
                  odliczanie();}
              }

        setTimeout("odliczanie()",1000);
  }
