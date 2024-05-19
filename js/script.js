function validacao(){
    let nome =document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_sobrenome");
    let data = document.getElementById("i_data");
    let celular = document.getElementById("i_celular");
    let telefone = document.getElementById("i_telefone");
    let email = document.getElementById("i_email");
    let endereco = document.getElementById("i_endereco");
    let bairro = document.getElementById("i_bairro");
    let rg = document.getElementById("i_rg");
    let cpf = document.getElementById("i_cpf");

    estilo_input(nome,"#f45656", "#808080");
    estilo_input(sobrenome,"#f45656", "#808080");
    estilo_input(data,"#f45656", "#808080");
    estilo_input(celular,"#f45656", "#808080");
    estilo_input(telefone,"#f45656", "#808080");
    estilo_input(email,"#f45656", "#808080");
    estilo_input(endereco,"#f45656", "#808080");
    estilo_input(bairro,"#f45656", "#808080");
    estilo_input(rg,"#f45656", "#808080");
    estilo_input(cpf,"#f45656", "#808080");
}

function estilo_input(input, cor_1, cor_2){

    var alert = document.getElementById("f_alert");

    if(!input.checkValidity()){
        alert.style.display = "block";
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        return input.style.border = `1px solid ${cor_2}`;
    }
}