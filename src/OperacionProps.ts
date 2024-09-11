export interface OperacionProps {
    matrizA: number[][];
    matrizB: number[][];
    cambiarResultado: (resultado: number[][]) => void;
}