import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products = [
    { id: 1, name: "Склянка", code: "101", description: "Офісна склянка", image: null }
  ];

  // Використовуємо BehaviorSubject для автоматичного оновлення UI
  private products$ = new BehaviorSubject<any[]>(this.products);

  getProducts(): Observable<any[]> {
    return this.products$.asObservable();
  }

  addProduct(product: any): Observable<any> {
    this.products.push(product);
    this.products$.next([...this.products]); // Повідомляємо всім підписникам про зміни
    return of(product);
  }
}
