import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'navbar',
    loadChildren: () => import('./components/navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./components/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./components/ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'game-board',
    loadChildren: () => import('./components/game-board/game-board.module').then( m => m.GameBoardPageModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./components/player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'pokemon-selection',
    loadChildren: () => import('./components/pokemon-selection/pokemon-selection.module').then( m => m.PokemonSelectionPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}