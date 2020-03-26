var cards = ["ciri.png","geralt.png","jaskier.png","jaskier.png","iorweth.png","triss.png",
"geralt.png","yen.png","ciri.png","triss.png","yen.png","iorweth.png"];
//console.log(cards); we can check is this realy array
var c0 = document.getElementById("c0");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var c5 = document.getElementById("c5");
var c6 = document.getElementById("c6");
var c7 = document.getElementById("c7");
var c8 = document.getElementById("c8");
var c9 = document.getElementById("c9");
var c10 = document.getElementById("c10");
var c11 = document.getElementById("c11");


c0.addEventListener("click",function(){revealCard(0);});
c1.addEventListener("click",function(){revealCard(1);});
c2.addEventListener("click",function(){revealCard(2);});
c3.addEventListener("click",function(){revealCard(3);});
c4.addEventListener("click",function(){revealCard(4);});
c5.addEventListener("click",function(){revealCard(5);});
c6.addEventListener("click",function(){revealCard(6);});
c7.addEventListener("click",function(){revealCard(7);});
c8.addEventListener("click",function(){revealCard(8);});
c9.addEventListener("click",function(){revealCard(9);});
c10.addEventListener("click",function(){revealCard(10);});
c11.addEventListener("click",function(){revealCard(11);});
//c0.addEventListener("click",function(){revealCard(1);});
//c0.addEventListener("click",function(){alert("lol");});
//using addEventListener allow us to use many function assigne to one event but not working
//in IE<9
var oneVisible = false;
var turnCounter = 0;
var visible_nr;//var will keep number of cliced card
var lock = false;
var pairsLeft = 6;

function revealCard(nr){
var opacityValue = $('#c'+nr).css('opacity');//catch if element is invisiable
//alert('Opacity:'+opacityValue);
if(opacityValue!=0 && lock ==false){//if
      lock = true;
      //alert(nr);
      var obraz ="url(img/"+cards[nr]+")";
      $('#c'+nr).css('background-image',obraz);
      $('#c'+nr).addClass('cardA');//this method addClass will add another class to element it will
      //exist both in one time and active one will be that which is last one
      $('#c'+nr).removeClass('card');//this method will remove class card from element and now
      // is no difference which class is last in css !!!!
      if(oneVisible ==false){
        //first card
            oneVisible=true;
            visible_nr=nr;
            lock = false;
      }
      else{
        //second card
        if(cards[visible_nr]==cards[nr]){
          //alert("cards match");
          setTimeout(function(){hideTwoCards(nr,visible_nr)},750);

          ;
        }
        else{
          //alert("cards different");
          setTimeout(function(){restoreTwoCards(nr,visible_nr)},1000);
        }
        turnCounter++;
        $('.score').html('Turn counter:'+turnCounter);
        oneVisible=false;
      }
    }
}



function hideTwoCards(nr1,nr2){
  $('#c'+nr1).css('opacity','0');
  $('#c'+nr2).css('opacity','0');
  pairsLeft--;
  if(pairsLeft==0){
    $('.board').html('<h1>You win !!! Done in: '+turnCounter+' turns</h1>');
  }
  lock = false;
}
function restoreTwoCards(nr1,nr2){
  $('#c'+nr1).css('background-image','url(img/karta.png)');
  $('#c'+nr1).addClass('card');//this method addClass will add another class to element it will
  //exist both in one time and active one will be that which is last one
  $('#c'+nr1).removeClass('cardA');//this method will remove class card from element and now

  $('#c'+nr2).css('background-image','url(img/karta.png)');
  $('#c'+nr2).addClass('card');//this method addClass will add another class to element it will
  //exist both in one time and active one will be that which is last one
  $('#c'+nr2).removeClass('cardA');//this method will remove class card from element and now
  lock = false;

}
//jesli pare razy klikne ten sam element to znika trzeba porownac nr i zapobiec temu
// losowanie karta
// reset planszy przyciskiem
