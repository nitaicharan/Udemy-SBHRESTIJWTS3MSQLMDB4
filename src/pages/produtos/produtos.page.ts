import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoDTO } from 'src/models/produto.dto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage {
  items: ProdutoDTO[];

  constructor(private router: Router) {
    this.items = [
      {
        id: '1',
        nome: 'Mouse',
        preco: 80.99
      },
      {
        id: '2',
        nome: 'Teclado',
        preco: 100.00
      },
    ];
  }
}
