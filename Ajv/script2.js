let ap = document.getElementById('interruptor')
let ap2 = document.getElementById('interruptor2')
let bd = document.getElementById('bd')

    ap.addEventListener("click", apagar)
    ap2.addEventListener("click", acender)

    function apagar(){
        bd.style.background = "black";
    }

    function acender(){
        bd.style.background = "white";
    }