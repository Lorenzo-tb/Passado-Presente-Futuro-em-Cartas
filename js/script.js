let botao = document.querySelector("#gerar");
let umht = document.querySelector("#primeiraCarta");
let doisht = document.querySelector("#segundaCarta");
let tresht = document.querySelector("#terceiraCarta");

let urlUm = "https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS,AC,2C,3C,4C,5C,6C,7C,8C,9C";
let cartas;
let asTres;
let cartaUm;
let cartaDois;
let cartaTres;
let carUmUrl;
let carDoisUrl;
let carTresUrl;

function gerador(){
       fetch(urlUm)
        .then(resp=>resp.json())
        .then(baralhoJson => {
            console.log(baralhoJson);
            cartas = baralhoJson;
            console.log(cartas.deck_id);
            let urlDois = "https://www.deckofcardsapi.com/api/deck/"+cartas.deck_id+"/draw/?count=3";

            fetch(urlDois)
            .then(response=>response.json())
            .then(tresCartas =>{
                console.log(tresCartas);
                asTres = tresCartas.cards;
                console.log(asTres);
            
                cartaUm = asTres[0].code;
                cartaDois = asTres[1].code;
                cartaTres = asTres[2].code;

                switch(cartaUm){
                    case "AS": 
                        carUmUrl = "../images/the-fool.jpg";
                        break;
                    case "2S": 
                        carUmUrl = "../images/the-magician.jpg";
                        break;
                    case "3S": 
                        carUmUrl = "../images/the-high.jpg";
                        break;
                    case "4S": 
                        carUmUrl = "../images/the-empress.jpg";
                        break;
                    case "5S": 
                        carUmUrl = "../images/the-emperor.jpg";
                        break;
                    case "6S": 
                        carUmUrl = "../images/the-hierophant.jpg";
                        break;
                    case "7S": 
                        carUmUrl = "../images/the-lovers.jpg";
                        break;
                    case "8S": 
                        carUmUrl = "../images/the-chariot.jpg";
                        break;
                    case "9S": 
                        carUmUrl = "../images/strength.jpg";
                        break;
                    case "0S": 
                        carUmUrl = "../images/the-hermit.jpg";
                        break;
                    case "JS": 
                        carUmUrl = "../images/wheel.jpg";
                        break;
                    case "QS": 
                        carUmUrl = "../images/justice.jpg";
                        break;
                    case "KS": 
                        carUmUrl = "../images/the-hanged.jpg";
                        break;
                    case "AC": 
                        carUmUrl = "../images/death.jpg";
                        break;
                    case "2C": 
                        carUmUrl = "../images/temperence.jpg";
                        break;
                    case "3C": 
                        carUmUrl = "../images/the-devil.jpg";
                        break;
                    case "4C": 
                        carUmUrl = "../images/the-tower.jpg";
                        break;
                    case "5C": 
                        carUmUrl = "../images/the-star.jpg";
                        break;
                    case "6C": 
                        carUmUrl = "../images/the-moon.jpg";
                        break;
                    case "7C": 
                        carUmUrl = "../images/the-sun.jpg";
                        break;
                    case "8C": 
                        carUmUrl = "../images/judment.jpg";
                        break;
                    case "9C": 
                        carUmUrl = "../images/the-world.jpg";
                        break;
                }

                switch(cartaDois){
                    case "AS": 
                        carDoisUrl = "../images/the-fool.jpg";
                        break;
                    case "2S": 
                        carDoisUrl = "../images/the-magician.jpg";
                        break;
                    case "3S": 
                        carDoisUrl = "../images/the-high.jpg";
                        break;
                    case "4S": 
                        carDoisUrl = "../images/the-empress.jpg";
                        break;
                    case "5S": 
                        carDoisUrl = "../images/the-emperor.jpg";
                        break;
                    case "6S": 
                        carDoisUrl = "../images/the-hierophant.jpg";
                        break;
                    case "7S": 
                        carDoisUrl = "../images/the-lovers.jpg";
                        break;
                    case "8S": 
                        carDoisUrl = "../images/the-chariot.jpg";
                        break;
                    case "9S": 
                        carDoisUrl = "../images/strength.jpg";
                        break;
                    case "0S": 
                        carDoisUrl = "../images/the-hermit.jpg";
                        break;
                    case "JS": 
                        carDoisUrl = "../images/wheel.jpg";
                        break;
                    case "QS": 
                        carDoisUrl = "../images/justice.jpg";
                        break;
                    case "KS": 
                        carDoisUrl = "../images/the-hanged.jpg";
                        break;
                    case "AC": 
                        carDoisUrl = "../images/death.jpg";
                        break;
                    case "2C": 
                        carDoisUrl = "../images/temperence.jpg";
                        break;
                    case "3C": 
                        carDoisUrl = "../images/the-devil.jpg";
                        break;
                    case "4C": 
                        carDoisUrl = "../images/the-tower.jpg";
                        break;
                    case "5C": 
                        carDoisUrl = "../images/the-star.jpg";
                        break;
                    case "6C": 
                        carDoisUrl = "../images/the-moon.jpg";
                        break;
                    case "7C": 
                        carDoisUrl = "../images/the-sun.jpg";
                        break;
                    case "8C": 
                        carDoisUrl = "../images/judment.jpg";
                        break;
                    case "9C": 
                        carDoisUrl = "../images/the-world.jpg";
                        break;
                }

                switch(cartaTres){
                    case "AS": 
                        carTresUrl = "../images/the-fool.jpg";
                        break;
                    case "2S": 
                        carTresUrl = "../images/the-magician.jpg";
                        break;
                    case "3S": 
                        carTresUrl = "../images/the-high.jpg";
                        break;
                    case "4S": 
                        carTresUrl = "../images/the-empress.jpg";
                        break;
                    case "5S": 
                        carTresUrl = "../images/the-emperor.jpg";
                        break;
                    case "6S": 
                        carTresUrl = "../images/the-hierophant.jpg";
                        break;
                    case "7S": 
                        carTresUrl = "../images/the-lovers.jpg";
                        break;
                    case "8S": 
                        carTresUrl = "../images/the-chariot.jpg";
                        break;
                    case "9S": 
                        carTresUrl = "../images/strength.jpg";
                        break;
                    case "0S": 
                        carTresUrl = "../images/the-hermit.jpg";
                        break;
                    case "JS": 
                        carTresUrl = "../images/wheel.jpg";
                        break;
                    case "QS": 
                        carTresUrl = "../images/justice.jpg";
                        break;
                    case "KS": 
                        carTresUrl = "../images/the-hanged.jpg";
                        break;
                    case "AC": 
                        carTresUrl = "../images/death.jpg";
                        break;
                    case "2C": 
                        carTresUrl = "../images/temperence.jpg";
                        break;
                    case "3C": 
                        carTresUrl = "../images/the-devil.jpg";
                        break;
                    case "4C": 
                        carTresUrl = "../images/the-tower.jpg";
                        break;
                    case "5C": 
                        carTresUrl = "../images/the-star.jpg";
                        break;
                    case "6C": 
                        carTresUrl = "../images/the-moon.jpg";
                        break;
                    case "7C": 
                        carTresUrl = "../images/the-sun.jpg";
                        break;
                    case "8C": 
                        carTresUrl = "../images/judment.jpg";
                        break;
                    case "9C": 
                        carTresUrl = "../images/the-world.jpg";
                        break;
                }

                console.log(cartaUm);
                console.log(cartaDois);
                console.log(cartaTres);
                console.log(carUmUrl);
                console.log(carDoisUrl);
                console.log(carTresUrl);
                umht.setAttribute("src", carUmUrl);
                doisht.setAttribute("src", carDoisUrl);
                tresht.setAttribute("src", carTresUrl);
            });
        }); 
    };

botao.addEventListener("click",(e) =>{
    gerador();
});
