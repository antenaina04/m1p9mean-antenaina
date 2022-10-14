export class Order {
  _id?: string;
  created_at?: string;
  updated_at?: string;
  order_price?: number;
  order_status?: string;
  dishes_count?: string;
  id_restaurant?: string;
  id_user?: string;
  total_amount_to_pay?: number;

  constructor() {}
}
