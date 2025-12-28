import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
})
export class ListComponent implements OnInit {
  products: any[] = [];

  constructor(
    private prodService: ProductService,
    private router: RouterExtensions,
    private cd: ChangeDetectorRef // Додаємо цей сервіс
  ) {}

  ngOnInit(): void {
    this.prodService.getProducts().subscribe((items) => {
      console.log("Отримано товарів:", items.length);
      this.products = items;
      this.cd.detectChanges(); // Примусово оновлюємо екран
    });
  }

  onAddTap() {
    this.router.navigate(["/add"]);
  }
}
