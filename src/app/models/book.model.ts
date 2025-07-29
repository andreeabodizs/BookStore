export interface Book {
  bookId: string;
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  category: string;
  quantity: number;
  description: string;
  inStock: boolean;
  isNew: boolean;
  isBestseller: boolean;
  isFavorite: boolean;
  giftWrap?: boolean;
  promoImageUrl?: string;
}
