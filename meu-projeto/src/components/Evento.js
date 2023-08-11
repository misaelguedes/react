import Button from "./Button"

function Evento() {

    function meuEvento() {
        alert(`Ativando Primeiro Evento!`)
    }

    function segundoEvento() {
        return (
            alert('Ativando Segundo Evento!')
        )
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )

}

export default Evento