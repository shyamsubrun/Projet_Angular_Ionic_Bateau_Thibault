import { Routes } from '@angular/router';
import { CartComponent } from './Page/cart/cart.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./Page/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'parametre',
    loadComponent: () => import('./Page/parametre/parametre.page').then( m => m.ParametrePage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./Page/contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'profil',
    loadComponent: () => import('./Page/profil/profil.page').then( m => m.ProfilPage)
  },
  {
    path: 'list-all',
    loadComponent: () => import('./Page/list-all/list-all.page').then( m => m.ListAllPage)
  },
  {
    path: 'list-bateaux',
    loadComponent: () => import('./Page/list-all/list-all.page').then( m => m.ListAllPage)
  },
  {
    path: 'produit',
    loadComponent: () => import('./Page/produit/produit.component').then(m => m.ProduitComponent)
  },
  { path: 'cart',
    component: CartComponent },

];

