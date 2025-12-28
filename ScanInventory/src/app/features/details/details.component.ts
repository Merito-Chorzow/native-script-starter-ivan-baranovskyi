import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
})
export class DetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private prodService: ProductService,
    private router: RouterExtensions
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.prodService.getProducts().subscribe((prods) => {
      this.product = prods.find((p) => p.id === id);
    });
  }

  onDelete() {
    // Логіка видалення (опціонально для DoD)
    alert("Товар списано!");
    this.router.back();
  }
}
