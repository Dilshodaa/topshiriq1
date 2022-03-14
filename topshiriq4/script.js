var month= +prompt('Son kiriting')
if (month >=1 && month<2){
    document.write('Siz qishdasiz')
} else if(month>=3 && month<=5){
document.write('Siz bahordasiz')
} else if(month>=6 && month<=8){
    document.write('Siz yozdasiz')
} else if(month>=9 && month<=11){
    document.write('Siz kuzdasiz')
} else if(month == 12){
    document.write('Siz qishdasiz')
} 
else {
    document.write('Bizda 12ta oy bor faqat')
}