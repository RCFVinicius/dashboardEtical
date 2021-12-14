if (window.location.pathname === '/index.html' || window.location.href.split('/')[8] == 'index.html'){
    function httpGet(endereco){
        var res = new XMLHttpRequest();
        res.open( "GET", endereco, false );
        res.send( null );
        return res.responseText;
    }
    
    function timer(maquina, tempo){
        let mqn = `#g${maquina}-4`;
        let timer = document.querySelector(mqn);
        timer.innerHTML = tempo
    }
    
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
            }}

    const requisicao = JSON.parse(httpGet('http://rcfvinicius.pythonanywhere.com/maquinas'));
    
    for(i=0; i<8; i++){
        let v = i+1;
        let mqn = 'mq'+v;
        statusF(requisicao[mqn].mq, requisicao[mqn].status);
        timer(requisicao[mqn].mq, requisicao[mqn].timer);
    } 


}//MAQUINAS INDIVIDUAIS
else{
    var m = 0;
    if(window.location.href.split('?')[1] == 'maquina1'){m=1}
    else if(window.location.href.split('?')[1] == 'maquina2'){m=2}
    else if(window.location.href.split('?')[1] == 'maquina3'){m=3}
    else if(window.location.href.split('?')[1] == 'maquina4'){m=4}
    else if(window.location.href.split('?')[1] == 'maquina5'){m=5}
    else if(window.location.href.split('?')[1] == 'maquina6'){m=6}
    else if(window.location.href.split('?')[1] == 'maquina7'){m=7}
    else if(window.location.href.split('?')[1] == 'maquina8'){m=8}
    document.getElementById('tituloMaquina').innerText = `Máquina ${m}`;

    function calcLargura(arr){
        let width = window.innerWidth;
        width = width * 0.52
        //console.log(width)
        let maior = 0
        let i=0
        let largura = [0,0,0,0];
        while(i < 4){
          if(arr[i] > maior){maior = arr[i];}
          i++
        }
        i=0
        while(i < 4){
            if(arr[i] == 0){largura[i] = 0}
            else{
                largura[i] = (arr[i] * width)/maior;
                /* if(largura[i] <= maior*0.2){
                    console.log(maior)
                    console.log(i)
                    console.log(largura)   
                    document.getElementsByClassName('divhist')[i].style.cssText = 'background-color:rgb(0,255,234);'
                    document.getElementsByClassName('divhist')[1].style.backGroundColor = 'red'
                } */
            }
          i++
        }
        document.getElementsByClassName('divhist')[0].style.cssText = `width:${largura[0]}px`
        document.getElementsByClassName('divhist')[1].style.cssText = `width:${largura[1]}px`
        document.getElementsByClassName('divhist')[2].style.cssText = `width:${largura[2]}px`
        document.getElementsByClassName('divhist')[3].style.cssText = `width:${largura[3]}px`  
    }
//window.addEventListener('resize', calcLargura([20,40,100,200]))
function httpPost(endereco){
    var res = new XMLHttpRequest();
    res.open("POST", endereco, true);
    res.setRequestHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({maquina: m}));
}

function httpGet(endereco){
    httpPost('http://rcfvinicius.pythonanywhere.com/solicitarmaquina')
    var res = new XMLHttpRequest();
    res.open( "GET", endereco, false );
    res.send( null );
    return res.responseText;
    
}
function setStatusIndividual(status, detalhamento, horario){
    document.getElementById('pStat').innerText = `Status: ${status}`;
    document.getElementById('pDet').innerText = `Detalhamento de parada: ${detalhamento}`;
    document.getElementById('pHor').innerText = `Horário da atualozação: ${horario}`;
}
function setLogs(logs){document.getElementById('logs').innerText = logs}

const requisicao = JSON.parse(httpGet('http://rcfvinicius.pythonanywhere.com/maquina'))

setStatusIndividual(requisicao.statusIndividual.status, requisicao.statusIndividual.detalhamento, requisicao.statusIndividual.horario);
setLogs(requisicao.logs);
calcLargura(requisicao.calcLargura.arr)
}