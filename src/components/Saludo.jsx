import'./Saludo.css'
function Saludo(){
    const listadefruta = [
        "Mango", "Platano", "Fresa",
    ];
    return(
        <>
        <h1 className='SaludoComponente'>Soy un saludo de otro componente</h1>
        <h2>lidta de fruta</h2>
        <li>{listadefruta[Mango]}</li>
        <li>{listadefruta[Platano]}</li>
        <li>{listadefruta[Fresa]}</li>
        </>
    );
}

export default Saludo
{}