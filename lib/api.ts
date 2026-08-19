import axios from "axios";
import { Product } from "@/types/product";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
  try {
    const { data } = await axios.get<Product[]>(BASE_URL, { timeout: 8000 });
    return data;
  } catch (error) {
    console.error("getProducts error:", error);
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
    console.error("getProduct error:", error);
    return null;
  }
}

export async function addProduct(product: Partial<Product>) {
  try {
    const { data } = await axios.post(BASE_URL, product, { timeout: 8000 });
    return data;
  } catch (error) {
    console.error("addProduct error:", error);
    throw error;
  }
}