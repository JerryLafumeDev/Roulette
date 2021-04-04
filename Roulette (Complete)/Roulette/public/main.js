var style = document.createElement("style");
document.head.appendChild(style)
sheet = style.sheet

//OBJECT WITH PROPERTIES
let board = {
  0: "green",
  00: "green",
  1: "red",
  2: "black",
  3: "red",
  4: "black",
  5: "red",
  6: "black",
  7: "red",
  8: "black",
  9: "red",
  10: "black",
  11: "black",
  12: "red",
  13: "black",
  14: "red",
  15: "black",
  16: "red",
  17: "black",
  18: "red",
  19: "red",
  20: "black",
  21: "red",
  22: "black",
  23: "red",
  24: "black",
  25: "red",
  26: "black",
  27: "red",
  28: "black",
  29: "black",
  30: "red",
  31: "black",
  32: "red",
  33: "black",
  34: "red",
  35: "black",
  36: "red"
}

let rotation = {
  0: "translate(-50%,-50%) rotate(2156deg)",
  00: "translate(-50%,-50%) rotate(1976deg)",
  1: "translate(-50%,-50%) rotate(1985deg)",
  2: "translate(-50%,-50%) rotate(1805deg)",
  3: "translate(-50%,-50%) rotate(2024deg)",
  4: "translate(-50%,-50%) rotate(1843deg)",
  5: "translate(-50%,-50%) rotate(2062deg)",
  6: "translate(-50%,-50%) rotate(1880deg)",
  7: "translate(-50%,-50%) rotate(2098deg)",
  8: "translate(-50%,-50%) rotate(1920deg)",
  9: "translate(-50%,-50%) rotate(2137deg)",
  10: "translate(-50%,-50%) rotate(1957deg)",
  11: "translate(-50%,-50%) rotate(2108deg)",
  12: "translate(-50%,-50%) rotate(1928deg)",
  13: "translate(-50%,-50%) rotate(1995deg)",
  14: "translate(-50%,-50%) rotate(1814deg)",
  15: "translate(-50%,-50%) rotate(2033deg)",
  16: "translate(-50%,-50%) rotate(1852deg)",
  17: "translate(-50%,-50%) rotate(2071deg)",
  18: "translate(-50%,-50%) rotate(1890deg)",
  19: "translate(-50%,-50%) rotate(1910deg)",
  20: "translate(-50%,-50%) rotate(2090deg)",
  21: "translate(-50%,-50%) rotate(1871deg)",
  22: "translate(-50%,-50%) rotate(2053deg)",
  23: "translate(-50%,-50%) rotate(1833deg)",
  24: "translate(-50%,-50%) rotate(2014deg)",
  25: "translate(-50%,-50%) rotate(1947deg)",
  26: "translate(-50%,-50%) rotate(2128deg)",
  27: "translate(-50%,-50%) rotate(1966deg)",
  28: "translate(-50%,-50%) rotate(2146deg)",
  29: "translate(-50%,-50%) rotate(1938deg)",
  30: "translate(-50%,-50%) rotate(1918deg)",
  31: "translate(-50%,-50%) rotate(1900deg)",
  32: "translate(-50%,-50%) rotate(2080deg)",
  33: "translate(-50%,-50%) rotate(1862deg)",
  34: "translate(-50%,-50%) rotate(2043deg)",
  35: "translate(-50%,-50%) rotate(1824deg)",
  36: "translate(-50%,-50%) rotate(2005deg)"
}


// do the calculation later
let money = 10000
let submit = document.querySelector('.submit')
if (submit) {
  submit.addEventListener('click', () => {

    let result = Math.floor(Math.random() * 37)
    let bet = parseInt(document.querySelector('#moneyBet').value)
    let name = document.querySelector('#name').value
    let userInputColor = document.querySelector('#colorInput').value
    let casinoWon = 0
    let casinoLost = 0


    //if betting on color

    sheet.addRule('#wheel::before', `transition: all 4s ease !important`)
    sheet.addRule('#wheel::before', `transform: ${Object.values(rotation)[result]}`)

    if (userInputColor === Object.keys(board)[result]) {
      console.log(Object.values(board)[result], Object.keys(board)[result], userInputColor);

      //user wins the color
      resultStatus = 'you win'
      moneyStatus = money += bet * 2
      casinoLost = bet * -1


    } else if (userInputColor === Object.values(board)[result] || Object.values(board)[result] == "green") {
      console.log(Object.values(board)[result], Object.keys(board)[result], userInputColor);
      resultStatus = 'you win'
      moneyStatus = money += bet * 2
      casinoLost = bet * -1
    } else {
      console.log(Object.values(board)[result], Object.keys(board)[result], userInputColor);
      resultStatus = 'you lose'
      moneyStatus = money -= bet
      casinoWon = bet
    }
    console.log(casinoWon);
    console.log(casinoLost);

    fetch('casinoUpdate', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'casinoWon': casinoWon,
        'casinoLost': casinoLost,
        'timestamp': new Date
      })
    })

    setTimeout(_ => {

      document.querySelector('.results').innerText = resultStatus
      document.getElementById('money').innerText = moneyStatus
      setTimeout(_ => {
        sheet.addRule('#wheel::before', `transition: 0.01s !important`)
        sheet.addRule('#wheel::before', `transform: translate(-50%,50%) rotate(43deg)`)
      }, 5000)
    }, 5000)
  })
}


// document.querySelector('.submit').addEventListener('click', () => {
//
//   let result = Math.floor(Math.random() * 37)
//   let bet = parseInt(document.querySelector('#moneyBet').value)
//   let name = document.querySelector('#name').value
//   let userInputColor = document.querySelector('#colorInput').value
//   let casinoWon = 0
//   let casinoLost = 0
//
//
//   //if betting on color
//   setTimeout(_ => {
//     sheet.addRule('#wheel::before', `transition: all 4s ease !important`)
//     sheet.addRule('#wheel::before', `transform: ${Object.values(rotation)[result]}`)
//
//
//     if (userInputColor === Object.keys(board)[result]) {
//       console.log(Object.values(board)[result], Object.keys(board)[result], userInputColor);
//
//       //user wins the color
//       document.querySelector('.results').innerText = 'you win'
//       document.getElementById('money').innerText = money += parseInt(bet) * 2
//       casinoLost = bet * -1
//
//     } else if (userInputColor === Object.values(board)[result] || Object.values(board)[result] == "green") {
//       console.log(Object.values(board)[result], Object.keys(board)[result], userInputColor);
//       document.querySelector('.results').innerText = 'you win'
//       document.getElementById('money').innerText = money += parseInt(bet) * 2
//       casinoLost = bet * -1
//     } else {
//       console.log(Object.values(board)[result], Object.keys(board)[result], userInputColor);
//       document.querySelector('.results').innerText = 'you lose'
//       document.getElementById('money').innerText = money -= parseInt(bet)
//       casinoWon = bet
//     }
//   }, 1000)
//   sheet.addRule('#wheel::before', `transition: 0.01s !important`)
//   sheet.addRule('#wheel::before', `transform: rotate(43deg)`)
//
//   fetch('casinoUpdate', {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       'name': name,
//       'casinoWon': casinoWon,
//       'casinoLost': casinoLost,
//       'timestamp': new Date
//     })
//   })
// })
