export interface Currency {
  id: number;

  name: string;

  email: string;

  description: string | null;

  created_at: Date;

  trade_at: Date;

  price: number;
}
