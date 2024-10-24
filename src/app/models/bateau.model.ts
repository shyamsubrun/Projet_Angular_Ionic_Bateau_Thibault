
export interface base {
    nom: string;
}
export interface Bateau {
  nom: string;
  taille: string;
  Type: string;
  nbEmployer: number;
  typedePache: string;   
  specialite: string;
  lieuDePache: string;
  anciente: number;
  url: string;
}

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  city: string;
  signature_dish: string;
  rating: number;
  global_price: number;
  url: string;
}

export interface Recette {
  nom: string;
  ingredients: string[]; 
  instructions: string[]; 
  tempsDePreparation: string; 
  tempsDeCuisson: string; 
  nombreDePortions: number; 
  allergenes: string[]; 
  url: string;
}

export enum Type{
    Products = "products",
    Restaurants = "restaurants",
    Bateau = "bateaux",
    Recettes = "recettes"
}