import { Routes, RouterModule } from '@angular/router';
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
import { MaterialModule } from '../material.module';
import { BooksCarouselComponent } from './components/books-carousel/books-carousel.component';

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
    BooksCarouselComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [ProductService, StockService, CommonService],
  exports: [RouterModule],
})
export class BooksModule {}
