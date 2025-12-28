import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import {
  takePicture,
  requestPermissions,
  isAvailable,
} from "@nativescript/camera";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
})
export class AddComponent {
  name: string = "";
  code: string = "";
  imageAsset: any = null;

  constructor(
    private prodService: ProductService,
    private router: RouterExtensions
  ) {}

  async onTakePhoto() {
    const available = isAvailable();
    if (!available) {
      alert("Камера недоступна");
      return;
    }

    try {
      await requestPermissions();
      const image = await takePicture({
        width: 300,
        height: 300,
        keepAspectRatio: true,
        saveToGallery: false,
      });
      this.imageAsset = image;
    } catch (err) {
      console.error("Доступ до камери відхилено", err);
    }
  }

  onSave() {
    console.log("--- Спроба збереження ---");
    console.log("Назва:", this.name);
    console.log("Код:", this.code);

    if (
      !this.name ||
      this.name.trim() === "" ||
      !this.code ||
      this.code.trim() === ""
    ) {
      alert("Будь ласка, заповніть обов'язкові поля!");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: this.name.trim(),
      code: this.code.trim(),
      description: "Новий товар",
      image: this.imageAsset,
    };

    this.prodService.addProduct(newProduct).subscribe({
      next: () => {
        console.log("Товар успішно додано");
        this.router.back();
      },
      error: (err) => {
        console.error("Помилка сервісу:", err);
        alert("Помилка при збереженні: " + err.message);
      },
    });
  }
}
