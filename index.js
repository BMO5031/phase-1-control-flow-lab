function scuberGreetingForFeet(metres){
  // Write your code here!
  if (metres <=400) {
    return 'This one is on me!' ;

  }else if (metres >2000 && metres <= 2500) {
    return 'I will gladly take your thirty bucks.';

 }else if (metres >2500) {
  return 'No can do.'
}
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  switch (Tip) {
    case 'generous':
      return "Thank you so much." 
      
  break;
  case 'not as generous':
  return "Thank you."
    default:
      return "Bye."
      break;
  }
}
