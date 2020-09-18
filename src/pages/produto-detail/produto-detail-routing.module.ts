import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDetailPage } from './produto-detail.page';


const routes: Routes = [
  { path: '', component: ProdutoDetailPage },
  { path: ':produtoId', component: ProdutoDetailPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoDetailPageRoutingModule { }
