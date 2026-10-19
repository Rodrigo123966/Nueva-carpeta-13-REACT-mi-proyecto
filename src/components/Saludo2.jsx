import './Saludo2.css';

function Saludo() {
  const listadecolores = [
    "Rojo", "Azul", "Verde" 
    ];
  return (
    <>
      <h1 className="SaludoComponente">Soy un saludo de otro componente</h1>
      <h2>Lista de colores</h2>
      <li>{listadecolores[Rojo]}</li>
      <li>{listadecolores[Azul]}</li>
      <li>{listadecolores[Verde]}</li>
    </>
  );
}

export default Saludo;