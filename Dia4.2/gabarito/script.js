/* Descubra a idade mínima */
function findYoungerPerson(marinaAge, silviaAge, izaAge) {
  if (marinaAge < silviaAge && marinaAge < izaAge) {
    return `Marina é a mais jovem e possui ${marinaAge} anos de idade.`;
  } else if (silviaAge < marinaAge && silviaAge < izaAge) {
    return `Silvia é a mais jovem e possui ${silviaAge} anos de idade.`;
  } else {
    return `Iza é a mais jovem e possui ${izaAge} anos de idade.`;
  }
}


/* Taxa Metabólica Basal */
function basalMetabolicRate(age, sex, weight, heigh) {
  let bmr;

  if (sex === "M") {
    bmr = heigh * 6.25 + weight * 9.99 - age * 4.92 + 5;
  }

  if (sex === "F") {
    bmr = heigh * 6.25 + weight * 9.99 - age * 4.92 - 161;
  }

  return `A taxa metabólica basal é: ${bmr} Kcal.`;
}


/*  01 - Lanchonete da Trybe */
function optionsMenu(number) {
  switch (number) {
    case 1:
      return "1 - Trybe Lanche Feliz";
    case 2:
      return "2 - McTrybe";
    case 3:
      return "3 - TrybeWooper";
    case 4:
      return "4 - X-Trybe";
    case 5:
      return "5 - Triplo Trybe com JS";
    default:
      return "Não temos esta opção ainda :(";
  }
}

