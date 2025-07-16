export interface Book {
  bookId: string;
  title: string;
  author: string;
  price: number;
  cover: string;
  category: string;
  quantity: number;
  description: string;
  inStock: boolean;
  isFavorite: boolean;
  giftWrap?: boolean;
  promoImage?: string;
}
