import { Component } from '@angular/core';
import {SmallCardComponent} from '../../components/small-card/small-card.component'

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.css'
})
export class ServicosComponent {

}
