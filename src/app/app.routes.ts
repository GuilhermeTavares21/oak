import { Routes } from '@angular/router';
import { ProductsFormComponent } from "./products-form/products-form.component";
import { ListProductsComponent } from "./list-products/list-products.component";

export const routes: Routes = [
    { path: 'cadastroProduto', component: ProductsFormComponent },
    { path: 'listarProdutos', component: ListProductsComponent },
    { path: '', redirectTo: 'cadastroProduto', pathMatch: 'prefix'}
];
