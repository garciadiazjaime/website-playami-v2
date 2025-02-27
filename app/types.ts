import type { Metadata } from "next";

export interface Categories {
  food: boolean;
  drinks: boolean;
  cafe: boolean;
}
export interface Place {
  name: string;
  slug: string;
  lat: number;
  lng: number;
  maps: string;
  instagram: string;
  categories: Categories;
  images: {
    cover: string;
  };
  website: string;
  description: {
    default: string;
    wine?: string;
  };
  phone: string;
  email: string;
}

export interface Section {
  [key: string]: Metadata;
}
