import axios from "axios";
import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
  try {
    const { data } = await axios.get<Product[]>(BASE_URL);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const { data } = await axios.get<Product>(`${BASE_URL}/${id}`, {
      timeout: 8000,
    });
    return data;
  } catch (error) {
    console.error("Failed to load product:", error);
    return null;
  }
}

export async function addProduct(product: Partial<Product>) {
  const { data } = await axios.post(BASE_URL, product);
  return data;
}