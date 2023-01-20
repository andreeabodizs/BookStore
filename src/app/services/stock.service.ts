import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockInterface } from '../models/stock.model';

@Injectable()
export class StockService {
  private readonly _baseUrl: string = 'http://localhost:8080';
  constructor(private _httpClient: HttpClient) {}

  public getStockByPznUsingGET(pzn: string): Observable<StockInterface> {
    return this._httpClient.get(
      `${this._baseUrl}/stock/${pzn}`
    ) as Observable<StockInterface>;
  }

  public createStockUsingPOST(
    pzn: string,
    stockObject: StockInterface
  ): Observable<StockInterface> {
    return this._httpClient.post(
      `${this._baseUrl}/stock/create/${pzn}`,
      stockObject
    ) as Observable<StockInterface>;
  }

  public updateStockUsingPUT(
    pzn: string,
    stockObject: StockInterface
  ): Observable<StockInterface> {
    return this._httpClient.put(
      `${this._baseUrl}/stock/update/${pzn}`,
      stockObject
    ) as Observable<StockInterface>;
  }
}
