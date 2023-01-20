import { Routes, RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { StockPageComponent } from './components/stock-page/stock-page.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { StockService } from 'src/app/services/stock.service';
import { CommonService } from 'src/app/services/common.service';
import { UserGuard } from 'src/app/guards/login.guard';

const routes: Routes = [
  { path: 'home', canActivate: [UserGuard], component: HomePageComponent },
  {
    path: 'products',
    canActivate: [UserGuard],
    component: DisplayProductsComponent,
  },
  { path: 'add', canActivate: [UserGuard], component: CreateProductComponent },
  {
    path: 'edit/:id',
    canActivate: [UserGuard],
    component: CreateProductComponent,
  },
];

@NgModule({
  declarations: [
    CreateProductComponent,
    DisplayProductsComponent,
    HomePageComponent,
    StockPageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatStepperModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [ProductService, StockService, CommonService],
  exports: [RouterModule],
})
export class ProductStockModule {}
