import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MenuComponent} from './pages/menu/menu.component';
import {HomeComponent} from './pages/home/home.component';
import {ServicosComponent} from './pages/servicos/servicos.component'
import {ContatosComponent} from './pages/contatos/contatos.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent,HomeComponent,ServicosComponent,ContatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-site';
}
