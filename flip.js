console.log("Calculate the Relative Frequency Probability of a Failr Coin");

var heads_count = document.querySelector('.heads-count');
var tails_count = document.querySelector('.tails-count');
var heads_probability = document.querySelector('.heads-probability');
var tails_probability = document.querySelector('.tails-probability');
var coin = document.querySelector('.coin');
var flipper = 1;

function flipCoin() {
    var flipcount = document.querySelector('.flipcount').value;
    resetValue();
    coin.classList.add('flip');
    setTimeout(function() {
        coinFlip(flipcount);
        coin.classList.remove('flip');
    }, 2000);
    coin.classList.remove('tails');
    coin.classList.remove('heads');
}

function coinFlip(flipcount) {
    let headCount = 0;
    let tailCount = 0;
    for (let i = 0; i < flipcount; i++) {
        const randomNum = Math.random();
        if (randomNum < 0.5) {
            headCount++;
        } else {
            tailCount++;
        }
    }
    let headProbabilityActual = headCount / flipcount;
    let tailProbabilityActual = tailCount / flipcount;
    if (headProbabilityActual < tailProbabilityActual) {
        coin.classList.add('tails');
    };
    console.log("#"+ flipper + " - Flip");
    console.log("Heads Count: " + headCount);
    console.log("Tails Count: " + tailCount);
    console.log("Heads Probability: " + headProbabilityActual);
    console.log("Tails Probability: " + tailProbabilityActual);
    console.log("----------------------------------------------");
    setValue(headCount, tailCount, headProbabilityActual, tailProbabilityActual);
    flipper++;
}

function resetValue(){
    heads_count.value = 0
    tails_count.value = 0
    heads_probability.value = 0
    tails_probability.value = 0
}

function setValue(headsC, tailsC, headsP, tailsP){
    heads_count.value = headsC
    tails_count.value = tailsC
    heads_probability.value = headsP
    tails_probability.value = tailsP
}