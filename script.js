
const result = document.querySelector('.result')

const humanscore = document.querySelector('#human-score')

const machinescores = document.querySelector('#machine-scores')


let humanscoreNumber = 0
let machinescoresNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playmachine())
}

const playmachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choice[randomNumber]

}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + "Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')
    ) {

        humanscoreNumber++
        humanscore.innerHTML = humanscoreNumber

            result.innerHTML = "Você ganhou!"
    } else {

        machinescoresNumber++
        machinescores.innerHTML = machinescoresNumber

        result.innerHTML = "Você perdeu para a Alexa!"
    }

}