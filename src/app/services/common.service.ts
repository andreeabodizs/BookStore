import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CommonService {
  constructor(private _snackBar: MatSnackBar, private _router: Router) {}

  showSnackBarSuccess(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 5000,
      panelClass: ['green-snackbar'],
    });
  }
  showSnackBarError(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 5000,
      panelClass: ['red-snackbar'],
    });
  }

  goToHomePage() {
    this._router.navigate(['']);
  }

  goToBooks() {
    this._router.navigate(['/books']);
  }

  goToSpecificBook(bookId: string) {
    this._router.navigate([`/book/${bookId}`]);
  }

  goToCart() {
    this._router.navigate([`/cart`]);
  }

  goToLoginPage() {
    this._router.navigate(['/auth/login']);
  }

  goToRegisterPage() {
    this._router.navigate(['/auth/register']);
  }

  gotToCheckout() {
    this._router.navigate(['cart/checkout']);
  }
}
