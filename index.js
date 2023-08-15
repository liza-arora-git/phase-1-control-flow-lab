function scuberGreetingForFeet(ride){
  let message
  if (ride <= 400){
    message = 'This one is on me!'
  } else if (ride > 400 && ride <2000){
    message = 'That will be twenty bucks.'
  } else if (ride > 2000 && ride < 2500){
    message = 'I will gladly take your thirty bucks.'
  } else if (ride > 2500){
    message = 'No can do.'
  }
  return message
}

function ternaryCheckCity(city){
  let response = city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  return response
}

function switchOnCharmFromTip(tip){
  let generous
  switch (tip) {
    case tip = 'generous':
      return "Thank you so much."
    case tip = 'not as generous':
      return "Thank you."
    default:
      return "Bye."
  }
}