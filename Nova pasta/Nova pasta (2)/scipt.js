var visitante = 2000; 
var nome = "Thiago de Carvalho Prodosimo";
 //se o visitante = 3 ganha o premio
if(visitante === 2000){
alert("Parabéns "+nome+", voce ganhou 29 mil reais!")}
else{
    alert("Perdeu haha!")
}
/*comentario*/
//obtém o componente do menu do celular(icone)
var celular = document.querySelector('.celular');
//obtem lista
var listaMenu = document.querySelector('.menu ul');
// evento de click no menu
celular.addEventListener('click', function(){
     listaMenu.classList.toggle('mostraMenu');
});