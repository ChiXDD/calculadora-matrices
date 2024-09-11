import React, { useState } from 'react';
import ComponenteMatriz from './Matriz'; // Importar el componente Matriz
import Operacion from './Operacion'; // Importar el componente Operacion

const MatrizApp: React.FC = () => {
  // Matriz inicial
  const matrizInicial = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  // Se determinan las matrices A y B como la matriz inicial
  const [matrizA, setMatrizA] = useState(matrizInicial);
  const [matrizB, setMatrizB] = useState(matrizInicial.map(row => [...row])); // Copia para evitar mutación
  const [resultado, setResultado] = useState<number[][] | null>(null);

  // Mostrar las matrices y el resultado
  const renderMatriz = () => (
    <>
      <h1>Calculadora de Matrices</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ComponenteMatriz titulo="Matriz A" matriz={matrizA} onMatrizChange={setMatrizA} />
        <ComponenteMatriz titulo="Matriz B" matriz={matrizB} onMatrizChange={setMatrizB} />
      </div>

      <Operacion matrizA={matrizA} matrizB={matrizB} cambiarResultado={setResultado} />

      {resultado && (
        <div>
          <h3>Resultado</h3>
          <div className='resultados'>
            <table>
              <tbody>
                {resultado.map((row, i) => (
                 <tr key={i}>
                   {row.map((val, j) => (
                      <td key={j}>{val}</td>
                    ))}
                 </tr>
               ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );

  return renderMatriz();
};

export default MatrizApp;