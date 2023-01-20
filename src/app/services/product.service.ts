import { ProductInterface } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  private readonly _baseUrl: string = 'http://localhost:8080';

  constructor(private _httpClient: HttpClient) {}

  public getAllProductsUsingGET(): Observable<ProductInterface[]> {
    return this._httpClient.get(`${this._baseUrl}/product`) as Observable<
      ProductInterface[]
    >;
  }

  public getProductByPznUsingGET(pzn: string): Observable<ProductInterface> {
    return this._httpClient.get(
      `${this._baseUrl}/product/${pzn}`
    ) as Observable<ProductInterface>;
  }

  public createProductUsingPOST(
    product: ProductInterface
  ): Observable<ProductInterface> {
    return this._httpClient.post(
      `${this._baseUrl}/product/create`,
      product
    ) as Observable<ProductInterface>;
  }

  public deleteProductUsingDELETE(pzn: string): Observable<ProductInterface> {
    return this._httpClient.delete(
      `${this._baseUrl}/product/delete/${pzn}`
    ) as Observable<ProductInterface>;
  }

  public updateProductUsingPUT(
    productObject: ProductInterface
  ): Observable<ProductInterface> {
    return this._httpClient.put(
      `${this._baseUrl}/product/update`,
      productObject
    ) as Observable<ProductInterface>;
  }
}
