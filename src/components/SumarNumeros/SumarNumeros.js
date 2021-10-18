import imagen from '../../assets/imagen1.jpg'

function SumarNumeros() {
    const sumaRandom = () => {
        var num1 = Math.floor(Math.random() * 10) + 1;;
        var num2 = Math.floor(Math.random() * 10) + 1;;
        console.log(num1 + " + " + num2 + " = " + (num1+num2));
    }
    return(
        <div>
            <img src={imagen} style={{height:'100px'}} alt='Texto alternativo'/>
            <button onClick={ () => {sumaRandom()} }>Sumar dos numeros random</button>
        </div>
    );
}

export default SumarNumeros;