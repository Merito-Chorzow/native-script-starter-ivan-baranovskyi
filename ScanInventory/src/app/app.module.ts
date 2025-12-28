import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptModule,
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptCommonModule,
} from "@nativescript/angular";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListComponent } from "./features/list/list.component";
import { AddComponent } from "./features/add/add.component";
import { DetailsComponent } from "./features/details/details.component";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptCommonModule, // Додаємо цей модуль для підтримки ListView шаблонів
    CommonModule, // Для стандартних директив як ngIf
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, ListComponent, AddComponent, DetailsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
