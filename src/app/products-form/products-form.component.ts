import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Produto } from '../produtos/products';
import { ProdutoService } from '../produtos/produto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products-form',
  standalone: true,
  imports: [NgFor,FormsModule,MatFormFieldModule, MatInputModule, MatSelectModule, RouterLink],
  providers: [ProdutoService],
  templateUrl: './products-form.component.html',
  styleUrl: './products-form.component.css'
})
export class ProductsFormComponent {

  constructor(private service: ProdutoService){}

    produto: Produto = {
      nome: '',
      descricao : '',
      valor : '',
      disponivel: ''

    }

    cadastrarProduto() {
     this.service.criar(this.produto).subscribe()
    }

}