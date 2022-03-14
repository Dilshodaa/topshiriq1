var login = prompt('Loginingizni yozing:')

if (login == 'admin') {
    var parol = +prompt('Parolingizni yozing:')
    if(parol == 12345){
        document.write('Xush kelibsiz')
    } else{
        document.write('Parol xato')
    }
} else {
    document.write('Kirish man qilinadi')
}