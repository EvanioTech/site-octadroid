import { Routes } from '@angular/router';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatosComponent } from './pages/contatos/contatos.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  { path: 'servicos' , component: ServicosComponent},
  {path: 'contatos', component: ContatosComponent}
];
