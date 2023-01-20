import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CommonService {
  constructor(private _snackBar: MatSnackBar, private _router: Router) {}

  public showSnackBarSuccess(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 5000,
      panelClass: ['green-snackbar'],
    });
  }
  public showSnackBarError(message: string) {
    this._snackBar.open(message, 'OK', {
      duration: 5000,
      panelClass: ['red-snackbar'],
    });
  }

  public goToHomePage() {
    this._router.navigate(['/access/home']);
  }

  public goToDisplayProducts() {
    this._router.navigate(['/access/products']);
  }

  public goToCreateProduct() {
    this._router.navigate(['/access/add']);
  }

  public goToUpdateProduct(pzn: string) {
    this._router.navigate([`/access/edit/${pzn}`]);
  }

  public gotToUpdateUserPage() {
    this._router.navigate([`/update-user`]);
  }

  public goToLoginPage() {
    this._router.navigate(['/login']);
  }

  public goToRegisterPage() {
    this._router.navigate(['/register']);
  }
}
