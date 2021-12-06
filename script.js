function timer(maquina, tempo){
    let mqn = `#g${maquina}-4`;
    let timer = document.querySelector(mqn);
    timer.innerHTML = tempo
}

timer(1, '59:59')

function statusF(maquina, status){
    let led1 = `#g${maquina}-1`
    let led2 = `#g${maquina}-2`
    let led3 = `#g${maquina}-3`
    
    switch(status){
        case 'f':
            document.querySelector(led1).style.cssText = 'background-color:rgba(0,255,0,1);'
            document.querySelector(led2).style.cssText = 'background-color:rgba(255,255,0,0.25);'
            document.querySelector(led3).style.cssText = 'background-color:rgba(255,0,0,0.25);'
        break;
        case 'a':
            document.querySelector(led1).style.cssText = 'background-color:rgba(0,255,0,0.25);'
            document.querySelector(led2).style.cssText = 'background-color:rgba(255,255,0,1);'
            document.querySelector(led3).style.cssText = 'background-color:rgba(255,0,0,0.25);'
            break;
        case 'p':
            document.querySelector(led1).style.cssText = 'background-color:rgba(0,255,0,0.25);'
            document.querySelector(led2).style.cssText = 'background-color:rgba(255,255,0,0.25);'
            document.querySelector(led3).style.cssText = 'background-color:rgba(255,0,0,1);'
            break;
        default:
            console.log("Escolha a maquina(num) e a funcao(f,a,p)")
            break;
        }

}

statusF(1, 'f')
document.querySelector('#espaco').style.cssText = 'background-color:rgba(255,0,0,0);'
console.log('r')
function render(pagina){
    console.log(pagina)
}