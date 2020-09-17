import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('../pages/categorias/categorias.module').then(m => m.CategoriasPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('../pages/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'log-out',
    loadChildren: () => import('../pages/log-out/log-out.module').then(m => m.LogOutPageModule)
  },
  {
    path: 'produtos',
    loadChildren: () => import('../pages/produtos/produtos.module').then(m => m.ProdutosPageModule)
  },
  {
    path: 'produto-detail',
    loadChildren: () => import('../pages/produto-detail/produto-detail.module').then( m => m.ProdutoDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
