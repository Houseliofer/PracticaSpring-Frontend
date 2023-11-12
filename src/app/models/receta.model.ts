// receta.model.ts

export interface Receta {
    recetaId: string;
    titulo: string; 
    ingredientes: string[];
    tiempo: number;
    nivelDificultad: string;
    imagen: string;
    video: string;
  }