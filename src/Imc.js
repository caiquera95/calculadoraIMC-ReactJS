import React, {useState} from 'react';
import './style.css';

export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = () => {
    try {
     
        setResultado (eval(peso/(altura*altura)).toFixed(2));
    }
    catch(err){
        setResultado("Calculo inválido")
    }
}

  function handleClean(){
    setPeso('');
    setAltura('');
    setResultado('');
  }


  return(

    <div className='container'>
      <label>Peso:</label>
      <input type="text" placeholder="80" value={peso} onChange={(e) => {setPeso(e.target.value)}}/>

      <label>Altura:</label>
      <input type="text" placeholder="1.80" value={altura} onChange={(e) => {setAltura(e.target.value)}}/>
        <div className="btns">
          <button className="btnCalc" onClick={calcular} >Calcular </button>
          <button className="btnClean" onClick={handleClean} >Limpar </button>
        </div>
      
      <h2>Seu IMC: {resultado} </h2>

     

      <table className="table">
        <thead>
          <tr>
            <th>
              Classificação
            </th>
            <th>
              IMC
            </th>
            <th>
              Grau Obesidade
            </th>
          </tr>
        </thead>

        <tbody >
          <tr id="magreza">
            <td >MAGREZA</td>
            <td>MENOR QUE 18,5</td>
            <td className="grau">0</td>
          </tr>

          <tr>
            <td >NORMAL</td>
            <td >ENTRE 18,5 E 24,9</td>
            <td className="grau">0</td>
          </tr>

          <tr>
            <td>SOBREPESO</td>
            <td>ENTRE 25,0 E 29,9</td>
            <td className="grau">I</td>
          </tr>

          <tr>
            <td>OBESIDADE</td>
            <td>ENTRE 30,0 E 39,9</td>
            <td className="grau">II</td>
          </tr>

          <tr>
            <td>OBESIDADE GRAVE</td>
            <td>MAIOR QUE 40,0</td>
            <td className="grau">III</td>
          </tr>
        </tbody>
      </table>
     
    </div>
  )
}
