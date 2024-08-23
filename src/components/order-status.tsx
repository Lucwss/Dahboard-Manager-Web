type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'


interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

const orderStatusStyleMap: Record<string, string> = {
  'pending': 'h-2 w-2 rounded-full bg-slate-400',
  'canceled': 'h-2 w-2 rounded-full bg-rose-500',
  'delivered': 'h-2 w-2 rounded-full bg-emerald-500',
  'delivering': 'h-2 w-2 rounded-full bg-amber-500',
  'processing': 'h-2 w-2 rounded-full bg-amber-500',
}




export function OrderStatus({ status }: OrderStatusProps) {

  function renderOrderStatus(status: string) {
    const style = orderStatusStyleMap[status]
    return <span className={style}/>
  }


  return (
    <div className="flex items-center gap-2">
      {renderOrderStatus(status)}
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}