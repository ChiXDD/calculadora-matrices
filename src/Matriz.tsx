import React, { useState } from 'react';
import { MatrizProps } from './MatrizProps';  // Importar la interfaz MatrizProps

const ComponenteMatriz: React.FC<MatrizProps> = ({ matriz, onMatrizChange, titulo }) => {
  const [tamaño, setTamaño] = useState(3); // Tamaño inicial de la matriz 3x3

  const actualizarTamaño = (i: number, j: number, value: number) => {
    const nuevaMatriz = matriz.map((row) => [...row]); // Crear una matriz
    nuevaMatriz[i][j] = value;
    onMatrizChange(nuevaMatriz);
  };

  // Aumentar el tamaño de la matriz
  const aumentarTamaño = () => {
    if (tamaño < 3) {
      const nuevoTamaño = tamaño + 1;
      setTamaño(nuevoTamaño);
      const nuevaMatriz = matriz.map(row => [...row, 0]); // Añadir columna a las filas
      nuevaMatriz.push(Array(nuevoTamaño).fill(0)); // Añadir fila nueva
      onMatrizChange(nuevaMatriz);
    }
  };

  // Disminuir el tamaño de la matriz
  const disminuirTamaño = () => {
    if (tamaño > 1) {
      const nuevoTamaño = tamaño - 1;
      setTamaño(nuevoTamaño);
      const nuevaMatriz = matriz.slice(0, nuevoTamaño).map(row => row.slice(0, nuevoTamaño)); 
      onMatrizChange(nuevaMatriz);
    }
  };

  // Mostrar la matriz
  return (
    <div>
      <h3>{titulo}</h3>
      <table>
        <tbody>
          {matriz.slice(0, tamaño).map((row, i) => (
            <tr key={i}>
              {row.slice(0, tamaño).map((value, j) => (
                <td key={j}>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => actualizarTamaño(i, j, Number(e.target.value))}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={aumentarTamaño}>+</button>
        <button onClick={disminuirTamaño}>-</button>
      </div>
    </div>
  );
};

export default ComponenteMatriz;