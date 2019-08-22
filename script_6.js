function editArn(arn){
  let tmpArn = "";
  for (i = 0; i<arn.length; i++){
    tmpArn += arn[i];
    if( i!==0 &&  i!== arn.length-1){
      if ((i+1)%3 === 0){
        tmpArn += "-";
      }
    }
  }
  return tmpArn;
}
function acideAmine(codon){
  if(codon === "UCU" || codon === "UCC" || codon === "UCA" || codon === "UCG" || codon === "AGU" || codon === "AGC"){
    return "Sérine";
  }
  else if(codon === "CCU" || codon === "CCC" || codon === "CCA" || codon === "CCG"){
    return "Proline";
  }
  else if(codon === "UUA" ||codon === "UUG"){
    return "Leucine";
  }
  else if(codon === "UUU" || codon === "UUC"){
    return "Phénylalanine";
  }
  else if(codon === "CGU" || codon === "CGC" || codon === "CGA" || codon === "CGG" || codon === "AGA" || codon === "AGG"){
    return "Arginine";
  }
  else if(codon === "UAU" || codon === "UAC"){
    return "Tyrosine";
  }
  else{
    return 0;
  }
}

let arn = "CCGUCGUUGCGCUACAGC";
let arn1 = "CCUCGCCGGUACUUCUCG";
let codons = [];
let arrayOfAcideAmine = [];

arn1 = editArn(arn1);

codons = arn1.split("-");

for(let i=0;i<codons.length;i++){
  if (acideAmine(codons[i]) != 0){
    arrayOfAcideAmine.push(acideAmine(codons[i]));
  }
}
console.log("L'arn a transcrire en protéine : ")
console.log(arn1);
console.log("Voici les acides aminés correspondants : ")
console.log(arrayOfAcideAmine);
