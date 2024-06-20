//Array de users e pass
const usuarios = [
    {
        login: 'joao',
        pass: 'joao'
    },
    {
        login: 'user',
        pass: 'user'
    },
    {
        login: 'admin',
        pass: 'admin'
    }
]


//Validar user e pass se estão de acordo com a array
function logar(){
    let usuario = document.getElementById('user').value;
    let senha = document.getElementById('password').value;
    validarLogin = false

    for(let i in usuarios){
        if(usuario == usuarios[i].login && senha == usuarios[i].pass){
            validarLogin = true
            break
        }
    }

    if(validarLogin == true){
        location.href = 'home.html';
    }

    const msgErroUser = document.getElementById('msgErroUser');
    const msgErroPass = document.getElementById('msgErroPass');

    //Mostrar mensagem de erro
    if(usuario == ''){
        msgErroUser.textContent = 'Insira um nome de Usuário!'
    } else {
        msgErroUser.textContent = ''
    }

    if(senha == ''){
        msgErroPass.textContent = 'Insira sua senha!'
    } else {
        msgErroPass.textContent = ''
    }

}

//Mostrar Senha
function verSenha(){
    let pegarSenha = document.getElementById('password')
    
    if(pegarSenha.type === 'password'){
        pegarSenha.setAttribute('type', 'text')
    } else [
        pegarSenha.setAttribute('type', 'password')
    ]
}
