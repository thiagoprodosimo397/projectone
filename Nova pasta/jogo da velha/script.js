var jogador = "X";
 function jogar(celulas){
    if (celulas.innerHTML =="") {
        celulas.innerHTML = jogador;
         if(jogador == "X"){
            jogador = "o";
            celulas.style.backgroundColor = "red";
            celulas.stylecolor = "black"
         }  else {
            jogador = "X";
            celulas.style.backgroundColor = "blue";
            celulas.stylecolor = "white"
         }
    }
     reiniciar ();
    function reiniciar (){
        var celulas = document.querySelectorAll("td");
        for(var contador=0; contador <9; contador ++);
        celulas[contador].innerHTML = "";
        celulas[contador].stylo.backgreoundColor ="";
    }
 }
       sortear();
   function sortear(){
    var nomes = ['isabela', 'bruno', 'rafael', 'teago'];

    while(nome1 = nome2)

    alert("Jogador:" +nome1+"vs"+nome2);

    var nome1 = nomes[ Math.floor( Math.random()* nomes.length)];
    var nome2 = nomes[ Math.floor( Math.random()* nomes.length)];
    alert("Sorteio de número com random" + Math.random());
    alert("Encontrando posição da lista:" + Math.random() *nomes.length);
    alert("Encontrando posição da lista 2:" + Math.floor(Math.random()*nomes.length));
   }