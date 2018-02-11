$(document).ready(function () {
  var PC;
  var NPC;
  var passiveEnemy;
  var maul = {
    attack: 10,
    attackbase: 5,
    hp: 100,
    counterAttack: 100,
  }
  var kylo = {
    attack: 100,
    attackbase: 100,
    hp: 100,
    counterAttack: 100,
  }
  var jeff = {
    attack: 100,
    attackbase: 100,
    hp: 100,
    counterAttack: 100,
  }
  var jarjar = {
    attack: 100,
    attackbase: 100,
    hp: 100,
    counterAttack: 100,
  }
  $(document).ready(function () {

    $(".choosePC").on("click", function () {
      // Detach and reattach #myDiv2's paragraph
      PC =
        myPC = $('#myDiv2').detach();
      myPC.appendTo('#myDiv2');
    });

  $(".chooseNPC").on("click", function () {


      if (isPCSelected == false) {
        return false, console.log("PC not selected");
      }
    });



    function attack() {
      if (isPCSelected == false) {


        return false;
      }
      if (isNPCSelected == false) {


        return false;
      }
      NPC.hp = NPC.hp - PC.attack;
      PC.attack = PC.attack + PC.attackbase;
      if (NPC.hp <= 0) {
    //set id="NPC" tp id="dead"
    isNPCSelected = false;
  return;
      }
      PC.health = PC.health - NPC.counterAttack;
    }

  });
});