import React from 'react';
import { OperacionProps } from './OperacionProps'; // Importar la interfaz OperacionProps

const Operacion: React.FC<OperacionProps> = ({ matrizA, matrizB, cambiarResultado }) => {
  // Sumar matrices
  const sumarMatrices = () => {
    const resultado = matrizA.map((row, i) =>
      row.map((val, j) => val + matrizB[i][j])
    );
    cambiarResultado(resultado);
  };

  // Restar matrices
  const restarMatrices = () => {
    const resultado = matrizA.map((row, i) =>
      row.map((val, j) => val - matrizB[i][j])
    );
    cambiarResultado(resultado);
  };

  // Multiplicar matrices
  const multiplicarMatrices = () => {
    const resultado = matrizA.map((row, i) =>
      row.map((_, j) => row.reduce((acc, _, k) => acc + matrizA[i][k] * matrizB[k][j], 0))
    );
    cambiarResultado(resultado);
  };

  // Mostrar los botones de operación
  return (
    <div>
      <button onClick={sumarMatrices}>A + B</button>
      <button onClick={restarMatrices}>A - B</button>
      <button onClick={multiplicarMatrices}>A × B</button>
    </div>
  );
};

export default Operacion;