let btn_id = document.getElementById('btn_idade')
let reset = document.getElementById('btn_reset')
let desc = document.getElementById('btn_desc')
let s = document.getElementById('btn_s')
let n = document.getElementById('btn_n')

let qtn_click = 0

btn_id.addEventListener('click', misterio)
reset.addEventListener('click', limpar)
desc.addEventListener('click', desvendei)

s.addEventListener('click', test)

function misterio(){
    updateDisplay(++qtn_click);
}

function limpar() {
    qtn_click = qtn_click - 1;
    updateDisplay(qtn_click);
}

function updateDisplay(qtn_click) {
    document.getElementById("clicks").innerHTML = qtn_click;
}

function desvendei(){
    if (qtn_click == 20){
            qtn_click = 0;
            document.getElementById("clicks").innerHTML = "<p>Foi uma bela tentativa, você chegou bem perto, mas seria muito fácil né?</p> <p>Uma dica:</p> <p>É a soma de dois números, um você já sabe, agora qual será o outro número? <p>(Ele é enorme)</p></p> <p>Boa sorte :3</p>"
}  else

    if (qtn_click == 29){
            qtn_click = 0;
            document.getElementById("clicks").innerHTML = "<p>Opa!</p> <p>Parece que você conseguiu desvendar o mistério -*</p> Deseja seguir para o próximo teste?"

            document.getElementById("btn_desc").style.display = "none";
            document.getElementById("btn_idade").style.display = "none";
            document.getElementById("btn_reset").style.display = "none";
            
            document.getElementById("btn_s").style.display = "inline-block";
            document.getElementById("btn_n").style.display = "inline-block";
    }else {
                qtn_click = 0;
                updateDisplay(qtn_click);
                document.getElementById("clicks").innerHTML = "<p>Koe, né essse não pae.</p> <p>Na humildade, não vai acertar não?</p>"
            
    } 

}


let url = 'index2.html'

function test(){
    window.open(url, '_blank')
}
