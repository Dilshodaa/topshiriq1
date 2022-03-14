var age = +prompt('Yoshingizni kiriting: ');
if (age <= 0) {
    document.write('yoshni to`g`ri kiriting')
} else if (age > 0 && age < 10) {
    document.write('Salom Kichkintoy')
} 
 else if (age > 10 && age < 18) {
   document.write('Salom mehmon')
} else if (age > 18 && age < 50){
    document.write('Salom amaki')
} else if (age > 50 && age < 100){
    document.write('Nafaqada')
} else if ( age > 50 && age <= 100) {
    document.write('Salom doda')
} else {
    document.write('Buncha yosh yasholmaydi')
}