import { CommonService } from '../../../../services/common.service';
import { ProductInterface } from '../../../../models/product.model';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  private _subscriptionList: Subscription[] = [];

  public numberOfProducts: number = 0;

  constructor(
    private _productService: ProductService,
    private _commonService: CommonService
  ) {}

  ngOnInit(): void {
    this._subscriptionList.push(
      this._productService.getAllProductsUsingGET().subscribe({
        next: (listOfProducts: ProductInterface[]) => {
          this.numberOfProducts = listOfProducts.length;
        },

        error: () =>
          this._commonService.showSnackBarError(
            'Action was not completed! Number of products cannot be displayed!'
          ),
      })
    );
  }

  ngOnDestroy(): void {
    this._subscriptionList.forEach((sub: Subscription) => sub.unsubscribe());
  }

  promoBooks = [
    { title: 'Promo 1', image: 'assets/reclama.webp' },
    { title: 'Promo 2', image: 'assets/promo2.jpg' },
  ];

  topBooks = [
    {
      title: 'Book A',
      image: 'assets/religie/Când toate ți se dau pe deasupra.jpg',
    },
    { title: 'Book B', image: 'assets/religie/Ecourile sufletului.jpg' },
    { title: 'Book B', image: 'assets/religie/În fiecare zi cu Isus.jpg' },
    { title: 'Book B', image: 'assets/religie/Ecourile sufletului.jpg' },
    { title: 'Book B', image: 'assets/religie/Ecourile sufletului.jpg' },
    { title: 'Book B', image: 'assets/religie/Ecourile sufletului.jpg' },
    { title: 'Book B', image: 'assets/religie/Ecourile sufletului.jpg' },
  ];
}
