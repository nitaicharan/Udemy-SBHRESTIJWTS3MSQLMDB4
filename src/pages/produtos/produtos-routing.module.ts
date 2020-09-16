import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosPage } from './produtos.page';


const routes: Routes = [
  { path: ':categoriaId', component: ProdutosPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosPageRoutingModule { }
