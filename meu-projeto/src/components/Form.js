import {useState} from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        alert(`Usuário ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input id="name" name="name" type="text" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input id="password" name="password" type="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )

}

export default Form