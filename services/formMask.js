export const onlyNumbers = (e, l = 0) => {
    e = e.replace(/\D/gim, '');
    return e;
}

export const preco = (e) => {
    e = e.replace(/\D/gim, '');
    let tamanho = e.length;
    if(tamanho == 1){
        let decimal = '0'+e;
        let dezena = '0';
        let formated = (dezena != '000' ? parseInt(dezena) : '')+'.'+decimal;
        return formated;
    }else if(tamanho > 1 && tamanho <= 4){
        let decimal = e.substr(-2, 2);
        let dezena = e.substr(0, (tamanho - 2));
        if(tamanho == 2){
            dezena = '0';
        }
        if(dezena == '00'){
            dezena = '0';
        }

        let formated = (dezena != '000' ? parseInt(dezena) : '')+'.'+decimal;
        return formated;
    }else if(tamanho >= 5){
        let decimal = e.substr(-2, 2);
        let dezena = e.substr(0, (tamanho - 2));
        let formated = (dezena.substr(0, 3) == '000' ? '' : dezena)+'.'+decimal;
        return parseFloat(formated).toFixed(2);
    }
    return e;
}

export const decimal = (e) => {
    e = e.replace(/\D/gim, '');
    const length = e.length
    const dezena = '';

    if(length == 1){
        let decimal = '00';
        let dezena = '0';
        let formated = dezena+'.'+decimal+e;
        return formated;
    }else if(length > 1 && length <= 4){
        let decimal = e.substr(-3, 3);
        let dezena = e.substr(0, (length - 2));
        if(length == 2){
            dezena = '0';
            decimal = '0'+decimal;
        }
        if(length == 3){
            dezena = '0';
        }
        if(length == 4){
            dezena = e.substr(0, (length - 3));
        }
        let formated = dezena+'.'+decimal;

        return formated;
    }else if(length == 5){
        let decimal = e.substr(-3, 3);
        let dezena = e.substr(0, (length - 3));

        // let formated = dezena+'.'+decimal;
        let formated = (dezena.substr(0, 3) == '000' ? '0' : parseInt(dezena))+'.'+decimal;
        // console.log('dec '+decimal);
        // console.log('dez '+dezena);
        // console.log(formated);
        return formated;
    }   
    
}

export const horario = (e) => {
    if(e.length < 4){
        return e;
    }else if(e.length == 4 && e.substr(2,2) != '::'){
        return e.substr(0,2)+':'+e.substr(2,2)
    }else if(e.length == 4 && e.substr(2,2) == '::'){
        return e;
    }
}

export const phone = (e) => {
    e = e.replace(/\D/gim, '');
    let tamanho = e.length;
    let a = '('+e.substr(0,2)+')';
    let b = e.substr(2)
    return a+b;
    // if(tamanho <= 2){        
    //     let formated = '('+e+')'
    //     return formated;
    // }else if(tamanho > 2){
    //     // return '('+e.substr(-3, 2)+')';
    //     // return '('+e.substr(-3, 2)+')'+e.substr(2,15);
    //     return e;
    //     console.log(e);
    // }
    // return e;
}

// export const phone = (e) => {

//     let tel = e;
//     let s1 = tel.replace('-','');
//     // return s1.length;
//     if(s1.length == 13){
//         // console.log(s1.substr(0,8)+'-'+s1.substr(-4))
//         return s1.substr(0,8)+'-'+s1.substr(-5);
//     }else{
//         // console.log(s1.substr(0,9)+'-'+s1.substr(-4))
//         return s1.substr(0,9)+'-'+s1.substr(-5);
//     }
// }

// export default onlyNumbers;