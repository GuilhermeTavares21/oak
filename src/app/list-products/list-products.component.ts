import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../produtos/produto.service';
import { Produto } from '../produtos/products';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  providers: [ProdutoService],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

  listaProdutos: Produto[] = [];

  constructor(private service: ProdutoService){}

  ngOnInit(): void{
    this.service.listar().subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos
    })
  }
}
