import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
anoAtual: number = new Date().getFullYear();
direitosReservados: string = `© ${this.anoAtual} Todos os direitos reservados.`;
}
