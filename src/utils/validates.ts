const validates = {
    cpf: (cpf: any) => {
        cpf = cpf.replace(/[^\d]+/g,''); 
        if(cpf == '') return false; 
        
        var soma = 0;
        for(var i = 0; i < 9; i++) {
          soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        var resto = 11 - (soma % 11);
        var digito1 = resto > 9 ? 0 : resto;
        
        soma = 0;
        for(var i = 0; i < 10; i++) {
          soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        resto = 11 - (soma % 11);
        var digito2 = resto > 9 ? 0 : resto;
        
        return cpf.charAt(9) == digito1 && cpf.charAt(10) == digito2;
      },
      email: (email: string) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }
}

export default validates
