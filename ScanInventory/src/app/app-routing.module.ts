import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { ListComponent } from "./features/list/list.component";
import { AddComponent } from "./features/add/add.component";
import { DetailsComponent } from "./features/details/details.component";

// ДОДАЙТЕ СЛОВО export ТУТ
export const routes: Routes = [
  { path: "", redirectTo: "/items", pathMatch: "full" },
  { path: "items", component: ListComponent },
  { path: "add", component: AddComponent },
  { path: "product/:id", component: DetailsComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
