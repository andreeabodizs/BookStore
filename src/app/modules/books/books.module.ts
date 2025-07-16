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
// import { UserGuard } from 'src/app/guards/login.guard';
import { MaterialModule } from '../material.module';
import { BooksCarouselComponent } from './components/books-carousel/books-carousel.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  declarations: [
    CreateProductComponent,
    DisplayProductsComponent,
    HomePageComponent,
    StockPageComponent,
    BooksCarouselComponent,
    BookListComponent,
    BookDetailComponent,
    ActionButtonsComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [ProductService, StockService, CommonService],
})
export class BooksModule {}
