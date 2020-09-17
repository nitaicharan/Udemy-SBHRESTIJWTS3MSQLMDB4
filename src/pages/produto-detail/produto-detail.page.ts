import { Component } from '@angular/core';
import { ProdutoDTO } from './../../models/produto.dto';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.page.html',
  styleUrls: ['./produto-detail.page.scss'],
})
export class ProdutoDetailPage {
  item: ProdutoDTO = {
    id: '1',
    nome: 'Mouse',
    preco: 80.59
  };
}
