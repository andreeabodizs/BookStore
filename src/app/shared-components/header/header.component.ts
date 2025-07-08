import { ChangePasswordComponent } from './../../modules/authentication/components/change-password/change-password.component';
import { map, Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { DialogBoxConfirmationComponent } from '../dialog-box-confirmation/dialog-box-confirmation.component';
import { CommonService } from 'src/app/services/common.service';
import { UpdateUsernameComponent } from 'src/app/modules/authentication/components/update-username/update-username.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm: string = '';
  authenticatedUser$: Observable<string>;

  constructor(
    private _dialog: MatDialog,
    private _userService: UserService,
    private _commonService: CommonService
  ) {
    this.authenticatedUser$ = this._userService.authenticatedUser$.pipe(
      map((user) => user.username!)
    );
  }

  public goToHomePage() {
    this._commonService.goToHomePage();
  }
  public goToProducts() {
    this._commonService.goToDisplayProducts();
  }
  public openLogoutDialog() {
    const dialogRef = this._dialog.open(DialogBoxConfirmationComponent, {
      data: { message: 'Are you sure you want to log out?' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'yes') {
        this._userService.logoutUsingPOST();
      }
    });
  }

  public openUpdateUsernameDialog() {
    this._dialog.open(UpdateUsernameComponent);
  }

  public openChangePasswordDialog() {
    this._dialog.open(ChangePasswordComponent);
  }
}
