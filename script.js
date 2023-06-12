let button = document.getElementById("button");
let fechar = document.getElementById("close")

button.addEventListener("click", function(){
    document.getElementById("menu").style.left=0;
});

fechar.addEventListener("click", function(){
    document.getElementById("menu").style.left="100%";
});
