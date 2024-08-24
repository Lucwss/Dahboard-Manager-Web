import { api } from "@/lib/axios";

export interface GetOrderDetailsParams {
  orderId: string;
}

export interface Product {
  name: string;
}

export interface Customer {
  name: string;
  email: string;
  phone: string | null;
}

export interface OrderItem {
  id: string;
  priceInCents: number;
  quantity: number;
  product: Product;
}

export interface GetOrderDetailsResponse {
  id: string;
  createdAt: string;
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  totalInCents: number;
  customer: Customer;
  orderItems: OrderItem[];
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`);

  return response.data;
}
