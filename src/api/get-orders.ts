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

export interface GetOrdersQuery {
  pageIndex?: number | null;
}

export interface GetOrdersResponse {
  orders: Order[];
  meta: Meta;
}

export async function getOrders({ pageIndex = 0 }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>("/orders", {
    params: {
      pageIndex: pageIndex,
    },
  });

  return response.data;
}
