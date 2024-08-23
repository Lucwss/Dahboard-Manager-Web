import { api } from "@/lib/axios";

export interface Order {
  orderId: string;
  createdAt: string;
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  customerName: string;
  total: number;
}

export interface Meta {
  pageIndex: number;
  perPage: number;
  totalCount: number;
}

export interface GetOrdersResponse {
  orders: Order[];
  meta: Meta;
}

export async function getOrders() {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex: 0,
    },
  });

  return response.data;
}
