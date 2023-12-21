import { Component } from '@angular/core';
import {SmallCardComponent} from '../../components/small-card/small-card.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
