
import axios from "axios";
import { Product } from "@/types/product";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://fakestoreapi.com/products";

// Get all products
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(BASE_URL, {
      timeout: 8000,
    });

    return response.data;
  } catch (error) {
    console.error("getProducts error:", error);
    return [];
  }
}

// Get one product
export async function getProduct(
  id: string
): Promise<Product | null> {
  try {
    const response = await axios.get<Product>(
      `${BASE_URL}/${id}`,
      {
        timeout: 8000,
      }
    );

    return response.data;
  } catch (error) {
    console.error("getProduct error:", error);
    return null;
  }
}

// Add a product
export async function addProduct(
  product: Partial<Product>
): Promise<Product> {
  try {
    const response = await axios.post<Product>(
      BASE_URL,
      product,
      {
        timeout: 8000,
      }
    );

    return response.data;
  } catch (error) {
    console.error("addProduct error:", error);
    throw error;
  }
}
