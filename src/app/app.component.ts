import { Component, } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ProductsFormComponent } from "./products-form/products-form.component";
import { ListProductsComponent } from "./list-products/list-products.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HttpClientModule ,CommonModule,FormsModule,RouterOutlet, HeaderComponent, ProductsFormComponent,ListProductsComponent, RouterLink, RouterLinkActive]
})
export class AppComponent {
  title = 'oak';
}
