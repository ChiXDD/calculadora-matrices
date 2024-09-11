export interface MatrizProps {
    matriz: number[][];
    onMatrizChange: (nuevaMatriz: number[][]) => void;
    titulo: string;
}