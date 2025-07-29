import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  cartItems: Book[] = [
    {
      bookId: '1',
      title: 'Când toate ți se dau pe deasupra',
      author: 'George Orwell',
      price: 29.99,
      coverUrl: 'assets/religie/Când toate ți se dau pe deasupra.jpg',
      category: 'Ficțiune',
      quantity: 10,
      description: 'Un roman distopic clasic despre supravegherea totalitară.',
      inStock: true,
      isFavorite: false,
      isBestseller: true,
      isNew: true,
    },
    {
      bookId: '2',
      title: 'Când toate ți se dau pe deasupra',
      author: 'Jane Austen',
      price: 24.99,
      coverUrl: 'assets/religie/Când toate ți se dau pe deasupra.jpg',
      category: 'Romantism',
      quantity: 5,
      description: 'O poveste clasică despre dragoste și societate.',
      inStock: true,
      isFavorite: true,
      isBestseller: true,
      isNew: true,
    },
  ];

  constructor(private commonService: CommonService) {}

  nextStep() {
    this.commonService.gotToCheckout();
  }

  onRemove(itemId: string) {
    this.cartItems = this.cartItems.filter((item) => item.bookId !== itemId);
  }

  onQuantityChange(event: { id: string; quantity: number }) {
    const item = this.cartItems.find((i) => i.bookId === event.id);
    if (item) {
      item.quantity = event.quantity;
    }
  }

  get totalProductsPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
