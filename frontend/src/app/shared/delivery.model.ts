export class Delivery {
  _id?: string;
  created_at?: string;
  updated_at?: string;
  delivery_deliverer?: string;
  delivery_client?: string;
  delivery_location?: string;
  delivery_date?: string;
  delivery_price?: number;
  delivery_count?: number;
  id_order?: string;

  constructor() {}
}
