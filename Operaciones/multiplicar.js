const  multiplicar = (numeroA, numeroB) => {
  if (numeroA === 0 || numeroB === 0){
    return 0
  }
  return numeroA * numeroB 
}

module.exports = multiplicar;